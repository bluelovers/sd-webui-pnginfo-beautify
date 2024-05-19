/// <reference lib="dom" preserve="true" />
interface GradioAppHTMLElement extends Omit<Element, keyof HTMLElement>, HTMLElement, Partial<Pick<Document, 'getElementById'>>
{
}

declare function gradioApp(): ShadowRoot | GradioAppHTMLElement;

/**
 * Get the currently selected top-level UI tab button (e.g. the button that says "Extras").
 */
declare function get_uiCurrentTab(): HTMLElement;

/**
 * Get the first currently visible top-level UI tab content (e.g. the div hosting the "txt2img" UI).
 */
declare function get_uiCurrentTabContent(): HTMLElement;

declare var uiUpdateCallbacks: Function[];
declare var uiAfterUpdateCallbacks: Function[];
declare var uiLoadedCallbacks: Function[];
declare var uiTabChangeCallbacks: Function[];
declare var optionsChangedCallbacks: Function[];
declare var uiAfterUpdateTimeout: ReturnType<typeof setTimeout>;
declare var uiCurrentTab: HTMLElement;

/**
 * Register callback to be called at each UI update.
 * The callback receives an array of MutationRecords as an argument.
 */
declare function onUiUpdate(callback: Function): void;

/**
 * Register callback to be called soon after UI updates.
 * The callback receives no arguments.
 *
 * This is preferred over `onUiUpdate` if you don't need
 * access to the MutationRecords, as your function will
 * not be called quite as often.
 */
declare function onAfterUiUpdate(callback: Function): void;

/**
 * Register callback to be called when the UI is loaded.
 * The callback receives no arguments.
 */
declare function onUiLoaded(callback: Function): void;

/**
 * Register callback to be called when the UI tab is changed.
 * The callback receives no arguments.
 */
declare function onUiTabChange(callback: Function): void;

/**
 * Register callback to be called when the options are changed.
 * The callback receives no arguments.
 * @param callback
 */
declare function onOptionsChanged(callback: Function): void;

declare function executeCallbacks(queue: Function[], arg?: any): void;

/**
 * Schedule the execution of the callbacks registered with onAfterUiUpdate.
 * The callbacks are executed after a short while, unless another call to this function
 * is made before that time. IOW, the callbacks are executed only once, even
 * when there are multiple mutations observed.
 */
declare function scheduleAfterUiUpdateCallbacks(): void;

declare var executedOnLoaded: boolean;

/**
 * checks that a UI element is not in another hidden element or tab content
 */
declare function uiElementIsVisible(el: GradioAppHTMLElement | Document): boolean;

declare function uiElementInSight(el: Element): boolean;
