/// <reference lib="dom" preserve="true"/>

interface GradioAppHTMLElement extends Omit<Element, keyof HTMLElement>, HTMLElement, Partial<Pick<Document, 'getElementById'>>
{

}

function gradioApp(): ShadowRoot | GradioAppHTMLElement {
    const elems = document.getElementsByTagName('gradio-app');
    const elem = elems.length == 0 ? document : (elems[0] as GradioAppHTMLElement);

    if (elem !== document) {
        elem.getElementById = function(id) {
            return document.getElementById(id);
        };
    }
    // @ts-ignore
    return elem.shadowRoot ? elem.shadowRoot : elem;
}

/**
 * Get the currently selected top-level UI tab button (e.g. the button that says "Extras").
 */
function get_uiCurrentTab() {
    return gradioApp().querySelector<HTMLElement>('#tabs > .tab-nav > button.selected');
}

/**
 * Get the first currently visible top-level UI tab content (e.g. the div hosting the "txt2img" UI).
 */
function get_uiCurrentTabContent() {
    return gradioApp().querySelector<HTMLElement>('#tabs > .tabitem[id^=tab_]:not([style*="display: none"])');
}

var uiUpdateCallbacks: Function[] = [];
var uiAfterUpdateCallbacks: Function[] = [];
var uiLoadedCallbacks: Function[] = [];
var uiTabChangeCallbacks: Function[] = [];
var optionsChangedCallbacks: Function[] = [];
var uiAfterUpdateTimeout: ReturnType<typeof setTimeout> = null;
var uiCurrentTab: HTMLElement = null;

/**
 * Register callback to be called at each UI update.
 * The callback receives an array of MutationRecords as an argument.
 */
function onUiUpdate(callback: Function) {
    uiUpdateCallbacks.push(callback);
}

/**
 * Register callback to be called soon after UI updates.
 * The callback receives no arguments.
 *
 * This is preferred over `onUiUpdate` if you don't need
 * access to the MutationRecords, as your function will
 * not be called quite as often.
 */
function onAfterUiUpdate(callback: Function) {
    uiAfterUpdateCallbacks.push(callback);
}

/**
 * Register callback to be called when the UI is loaded.
 * The callback receives no arguments.
 */
function onUiLoaded(callback: Function) {
    uiLoadedCallbacks.push(callback);
}

/**
 * Register callback to be called when the UI tab is changed.
 * The callback receives no arguments.
 */
function onUiTabChange(callback: Function) {
    uiTabChangeCallbacks.push(callback);
}

/**
 * Register callback to be called when the options are changed.
 * The callback receives no arguments.
 * @param callback
 */
function onOptionsChanged(callback: Function) {
    optionsChangedCallbacks.push(callback);
}

function executeCallbacks(queue: Function[], arg?: any) {
    for (const callback of queue) {
        try {
            callback(arg);
        } catch (e) {
            console.error("error running callback", callback, ":", e);
        }
    }
}

/**
 * Schedule the execution of the callbacks registered with onAfterUiUpdate.
 * The callbacks are executed after a short while, unless another call to this function
 * is made before that time. IOW, the callbacks are executed only once, even
 * when there are multiple mutations observed.
 */
function scheduleAfterUiUpdateCallbacks() {
    clearTimeout(uiAfterUpdateTimeout);
    uiAfterUpdateTimeout = setTimeout(function() {
        executeCallbacks(uiAfterUpdateCallbacks);
    }, 200);
}

var executedOnLoaded = false;

document.addEventListener("DOMContentLoaded", function() {
    var mutationObserver = new MutationObserver(function(m) {
        if (!executedOnLoaded && gradioApp().querySelector('#txt2img_prompt')) {
            executedOnLoaded = true;
            executeCallbacks(uiLoadedCallbacks);
        }

        executeCallbacks(uiUpdateCallbacks, m);
        scheduleAfterUiUpdateCallbacks();
        const newTab = get_uiCurrentTab();
        if (newTab && (newTab !== uiCurrentTab)) {
            uiCurrentTab = newTab;
            executeCallbacks(uiTabChangeCallbacks);
        }
    });
    mutationObserver.observe(gradioApp(), {childList: true, subtree: true});
});

/**
 * Add keyboard shortcuts:
 * Ctrl+Enter to start/restart a generation
 * Alt/Option+Enter to skip a generation
 * Esc to interrupt a generation
 */
document.addEventListener('keydown', function(e) {
    const isEnter = e.key === 'Enter' || e.keyCode === 13;
    const isCtrlKey = e.metaKey || e.ctrlKey;
    const isAltKey = e.altKey;
    const isEsc = e.key === 'Escape';

    const generateButton = get_uiCurrentTabContent().querySelector<HTMLButtonElement>('button[id$=_generate]');
    const interruptButton = get_uiCurrentTabContent().querySelector<HTMLButtonElement>('button[id$=_interrupt]');
    const skipButton = get_uiCurrentTabContent().querySelector<HTMLButtonElement>('button[id$=_skip]');

    if (isCtrlKey && isEnter) {
        if (interruptButton.style.display === 'block') {
            interruptButton.click();
            const callback = (mutationList) => {
                for (const mutation of mutationList) {
                    if (mutation.type === 'attributes' && mutation.attributeName === 'style') {
                        if (interruptButton.style.display === 'none') {
                            generateButton.click();
                            observer.disconnect();
                        }
                    }
                }
            };
            const observer = new MutationObserver(callback);
            observer.observe(interruptButton, {attributes: true});
        } else {
            generateButton.click();
        }
        e.preventDefault();
    }

    if (isAltKey && isEnter) {
        skipButton.click();
        e.preventDefault();
    }

    if (isEsc) {
        const globalPopup = document.querySelector('.global-popup');
        const lightboxModal = document.querySelector('#lightboxModal');
        // @ts-ignore
        if (!globalPopup || globalPopup.style.display === 'none') {
            if (document.activeElement === lightboxModal) return;
            if (interruptButton.style.display === 'block') {
                interruptButton.click();
                e.preventDefault();
            }
        }
    }
});

/**
 * checks that a UI element is not in another hidden element or tab content
 */
function uiElementIsVisible(el: GradioAppHTMLElement | Document) {
    if (el === document) {
        return true;
    }

    // @ts-ignore
    const computedStyle = getComputedStyle(el);
    const isVisible = computedStyle.display !== 'none';

    if (!isVisible) return false;
    // @ts-ignore
    return uiElementIsVisible(el.parentNode);
}

function uiElementInSight(el: Element) {
    const clRect = el.getBoundingClientRect();
    const windowHeight = window.innerHeight;
    const isOnScreen = clRect.bottom > 0 && clRect.top < windowHeight;

    return isOnScreen;
}
