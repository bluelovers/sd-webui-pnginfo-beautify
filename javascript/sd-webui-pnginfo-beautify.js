(() => {
  var __defProp = Object.defineProperty;
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __esm = (fn, res) => function() {
    return fn && (res = (0, fn[__getOwnPropNames(fn)[0]])(fn = 0)), res;
  };
  var __export = (target, all2) => {
    for (var name in all2)
      __defProp(target, name, { get: all2[name], enumerable: !0 });
  };

  // node_modules/shiki/dist/langs/javascript.mjs
  var javascript_exports = {};
  __export(javascript_exports, {
    default: () => javascript
  });
  var lang2, javascript, init_javascript = __esm({
    "node_modules/shiki/dist/langs/javascript.mjs"() {
      lang2 = Object.freeze({ displayName: "JavaScript", name: "javascript", patterns: [{ include: "#directives" }, { include: "#statements" }, { include: "#shebang" }], repository: { "access-modifier": { match: "(?<![_$0-9A-Za-z])(?:(?<=\\.\\.\\.)|(?<!\\.))(abstract|declare|override|public|protected|private|readonly|static)(?![_$0-9A-Za-z])(?:(?=\\.\\.\\.)|(?!\\.))", name: "storage.modifier.js" }, "after-operator-block-as-object-literal": { begin: "(?<!\\+\\+|--)(?<=[:=(,\\[?+!>]|^await|[^\\._$0-9A-Za-z]await|^return|[^\\._$0-9A-Za-z]return|^yield|[^\\._$0-9A-Za-z]yield|^throw|[^\\._$0-9A-Za-z]throw|^in|[^\\._$0-9A-Za-z]in|^of|[^\\._$0-9A-Za-z]of|^typeof|[^\\._$0-9A-Za-z]typeof|&&|\\|\\||\\*)\\s*(\\{)", beginCaptures: { 1: { name: "punctuation.definition.block.js" } }, end: "\\}", endCaptures: { 0: { name: "punctuation.definition.block.js" } }, name: "meta.objectliteral.js", patterns: [{ include: "#object-member" }] }, "array-binding-pattern": { begin: "(?:(\\.\\.\\.)\\s*)?(\\[)", beginCaptures: { 1: { name: "keyword.operator.rest.js" }, 2: { name: "punctuation.definition.binding-pattern.array.js" } }, end: "\\]", endCaptures: { 0: { name: "punctuation.definition.binding-pattern.array.js" } }, patterns: [{ include: "#binding-element" }, { include: "#punctuation-comma" }] }, "array-binding-pattern-const": { begin: "(?:(\\.\\.\\.)\\s*)?(\\[)", beginCaptures: { 1: { name: "keyword.operator.rest.js" }, 2: { name: "punctuation.definition.binding-pattern.array.js" } }, end: "\\]", endCaptures: { 0: { name: "punctuation.definition.binding-pattern.array.js" } }, patterns: [{ include: "#binding-element-const" }, { include: "#punctuation-comma" }] }, "array-literal": { begin: "\\s*(\\[)", beginCaptures: { 1: { name: "meta.brace.square.js" } }, end: "\\]", endCaptures: { 0: { name: "meta.brace.square.js" } }, name: "meta.array.literal.js", patterns: [{ include: "#expression" }, { include: "#punctuation-comma" }] }, "arrow-function": { patterns: [{ captures: { 1: { name: "storage.modifier.async.js" }, 2: { name: "variable.parameter.js" } }, match: "(?:(?<![_$0-9A-Za-z])(?:(?<=\\.\\.\\.)|(?<!\\.))(\\basync)\\s+)?([_$A-Za-z][_$0-9A-Za-z]*)\\s*(?==>)", name: "meta.arrow.js" }, { begin: "(?:(?<![_$0-9A-Za-z])(?:(?<=\\.\\.\\.)|(?<!\\.))(\\basync))?((?<![})!\\]])\\s*(?=((<\\s*(((const\\s+)?[_$A-Za-z])|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\]))([^=<>]|=[^<]|\\<\\s*(((const\\s+)?[_$A-Za-z])|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\]))([^=<>]|=[^<]|\\<\\s*(((const\\s+)?[_$A-Za-z])|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\]))([^=<>]|=[^<])*\\>)*\\>)*>\\s*)?[(]\\s*(\\/\\*([^\\*]|(\\*[^\\/]))*\\*\\/\\s*)*(([)]\\s*:)|((\\.\\.\\.\\s*)?[_$A-Za-z][_$0-9A-Za-z]*\\s*:)))|([<]\\s*[_$A-Za-z][_$0-9A-Za-z]*\\s+extends\\s*[^=>])|((<\\s*(((const\\s+)?[_$A-Za-z])|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\]))([^=<>]|=[^<]|\\<\\s*(((const\\s+)?[_$A-Za-z])|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\]))([^=<>]|=[^<]|\\<\\s*(((const\\s+)?[_$A-Za-z])|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\]))([^=<>]|=[^<])*\\>)*\\>)*>\\s*)?\\(\\s*(\\/\\*([^\\*]|(\\*[^\\/]))*\\*\\/\\s*)*(([_$A-Za-z]|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\])|(\\.\\.\\.\\s*[_$A-Za-z]))([^()\\'\\\"\\`]|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\'([^\\'\\\\]|\\\\.)*\\')|(\\\"([^\\\"\\\\]|\\\\.)*\\\")|(\\`([^\\`\\\\]|\\\\.)*\\`))*)?\\)(\\s*:\\s*([^<>\\(\\)\\{\\}]|\\<([^<>]|\\<([^<>]|\\<[^<>]+\\>)+\\>)+\\>|\\([^\\(\\)]+\\)|\\{[^\\{\\}]+\\})+)?\\s*=>)))", beginCaptures: { 1: { name: "storage.modifier.async.js" } }, end: "(?==>|\\{|(^\\s*(export|function|class|interface|let|var|(?:\\busing(?=\\s+(?!in\\b|of\\b(?!\\s*(?:of\\b|=)))[_$A-Za-z])\\b)|(?:\\bawait\\s+(?:\\busing(?=\\s+(?!in\\b|of\\b(?!\\s*(?:of\\b|=)))[_$A-Za-z])\\b)\\b)|const|import|enum|namespace|module|type|abstract|declare)\\s+))", name: "meta.arrow.js", patterns: [{ include: "#comment" }, { include: "#type-parameters" }, { include: "#function-parameters" }, { include: "#arrow-return-type" }, { include: "#possibly-arrow-return-type" }] }, { begin: "=>", beginCaptures: { 0: { name: "storage.type.function.arrow.js" } }, end: "((?<=\\}|\\S)(?<!=>)|((?!\\{)(?=\\S)))(?!\\/[\\/\\*])", name: "meta.arrow.js", patterns: [{ include: "#single-line-comment-consuming-line-ending" }, { include: "#decl-block" }, { include: "#expression" }] }] }, "arrow-return-type": { begin: "(?<=\\))\\s*(:)", beginCaptures: { 1: { name: "keyword.operator.type.annotation.js" } }, end: "(?==>|\\{|(^\\s*(export|function|class|interface|let|var|(?:\\busing(?=\\s+(?!in\\b|of\\b(?!\\s*(?:of\\b|=)))[_$A-Za-z])\\b)|(?:\\bawait\\s+(?:\\busing(?=\\s+(?!in\\b|of\\b(?!\\s*(?:of\\b|=)))[_$A-Za-z])\\b)\\b)|const|import|enum|namespace|module|type|abstract|declare)\\s+))", name: "meta.return.type.arrow.js", patterns: [{ include: "#arrow-return-type-body" }] }, "arrow-return-type-body": { patterns: [{ begin: "(?<=[:])(?=\\s*\\{)", end: "(?<=\\})", patterns: [{ include: "#type-object" }] }, { include: "#type-predicate-operator" }, { include: "#type" }] }, "async-modifier": { match: "(?<![_$0-9A-Za-z])(?:(?<=\\.\\.\\.)|(?<!\\.))(async)(?![_$0-9A-Za-z])(?:(?=\\.\\.\\.)|(?!\\.))", name: "storage.modifier.async.js" }, "binding-element": { patterns: [{ include: "#comment" }, { include: "#string" }, { include: "#numeric-literal" }, { include: "#regex" }, { include: "#object-binding-pattern" }, { include: "#array-binding-pattern" }, { include: "#destructuring-variable-rest" }, { include: "#variable-initializer" }] }, "binding-element-const": { patterns: [{ include: "#comment" }, { include: "#string" }, { include: "#numeric-literal" }, { include: "#regex" }, { include: "#object-binding-pattern-const" }, { include: "#array-binding-pattern-const" }, { include: "#destructuring-variable-rest-const" }, { include: "#variable-initializer" }] }, "boolean-literal": { patterns: [{ match: "(?<![_$0-9A-Za-z])(?:(?<=\\.\\.\\.)|(?<!\\.))true(?![_$0-9A-Za-z])(?:(?=\\.\\.\\.)|(?!\\.))", name: "constant.language.boolean.true.js" }, { match: "(?<![_$0-9A-Za-z])(?:(?<=\\.\\.\\.)|(?<!\\.))false(?![_$0-9A-Za-z])(?:(?=\\.\\.\\.)|(?!\\.))", name: "constant.language.boolean.false.js" }] }, brackets: { patterns: [{ begin: "{", end: "}|(?=\\*/)", patterns: [{ include: "#brackets" }] }, { begin: "\\[", end: "\\]|(?=\\*/)", patterns: [{ include: "#brackets" }] }] }, cast: { patterns: [{ include: "#jsx" }] }, "class-declaration": { begin: "(?<![_$0-9A-Za-z])(?:(?<=\\.\\.\\.)|(?<!\\.))(?:(\\bexport)\\s+)?(?:(\\bdeclare)\\s+)?\\b(?:(abstract)\\s+)?\\b(class)\\b(?=\\s+|/[/*])", beginCaptures: { 1: { name: "keyword.control.export.js" }, 2: { name: "storage.modifier.js" }, 3: { name: "storage.modifier.js" }, 4: { name: "storage.type.class.js" } }, end: "(?<=\\})", name: "meta.class.js", patterns: [{ include: "#class-declaration-or-expression-patterns" }] }, "class-declaration-or-expression-patterns": { patterns: [{ include: "#comment" }, { include: "#class-or-interface-heritage" }, { captures: { 0: { name: "entity.name.type.class.js" } }, match: "[_$A-Za-z][_$0-9A-Za-z]*" }, { include: "#type-parameters" }, { include: "#class-or-interface-body" }] }, "class-expression": { begin: "(?<![_$0-9A-Za-z])(?:(?<=\\.\\.\\.)|(?<!\\.))(?:(abstract)\\s+)?(class)\\b(?=\\s+|[<{]|\\/[\\/*])", beginCaptures: { 1: { name: "storage.modifier.js" }, 2: { name: "storage.type.class.js" } }, end: "(?<=\\})", name: "meta.class.js", patterns: [{ include: "#class-declaration-or-expression-patterns" }] }, "class-or-interface-body": { begin: "\\{", beginCaptures: { 0: { name: "punctuation.definition.block.js" } }, end: "\\}", endCaptures: { 0: { name: "punctuation.definition.block.js" } }, patterns: [{ include: "#comment" }, { include: "#decorator" }, { begin: "(?<=:)\\s*", end: "(?=\\s|[;),}\\]:\\-\\+]|;|^\\s*$|(?:^\\s*(?:abstract|async|(?:\\bawait\\s+(?:\\busing(?=\\s+(?!in\\b|of\\b(?!\\s*(?:of\\b|=)))[_$A-Za-z])\\b)\\b)|break|case|catch|class|const|continue|declare|do|else|enum|export|finally|function|for|goto|if|import|interface|let|module|namespace|switch|return|throw|try|type|(?:\\busing(?=\\s+(?!in\\b|of\\b(?!\\s*(?:of\\b|=)))[_$A-Za-z])\\b)|var|while)\\b))", patterns: [{ include: "#expression" }] }, { include: "#method-declaration" }, { include: "#indexer-declaration" }, { include: "#field-declaration" }, { include: "#string" }, { include: "#type-annotation" }, { include: "#variable-initializer" }, { include: "#access-modifier" }, { include: "#property-accessor" }, { include: "#async-modifier" }, { include: "#after-operator-block-as-object-literal" }, { include: "#decl-block" }, { include: "#expression" }, { include: "#punctuation-comma" }, { include: "#punctuation-semicolon" }] }, "class-or-interface-heritage": { begin: "(?<![_$0-9A-Za-z])(?:(?<=\\.\\.\\.)|(?<!\\.))(?:\\b(extends|implements)\\b)(?![_$0-9A-Za-z])(?:(?=\\.\\.\\.)|(?!\\.))", beginCaptures: { 1: { name: "storage.modifier.js" } }, end: "(?=\\{)", patterns: [{ include: "#comment" }, { include: "#class-or-interface-heritage" }, { include: "#type-parameters" }, { include: "#expressionWithoutIdentifiers" }, { captures: { 1: { name: "entity.name.type.module.js" }, 2: { name: "punctuation.accessor.js" }, 3: { name: "punctuation.accessor.optional.js" } }, match: "([_$A-Za-z][_$0-9A-Za-z]*)\\s*(?:(\\.)|(\\?\\.(?!\\s*[\\d])))(?=\\s*[_$A-Za-z][_$0-9A-Za-z]*(\\s*\\??\\.\\s*[_$A-Za-z][_$0-9A-Za-z]*)*\\s*)" }, { captures: { 1: { name: "entity.other.inherited-class.js" } }, match: "([_$A-Za-z][_$0-9A-Za-z]*)" }, { include: "#expressionPunctuations" }] }, comment: { patterns: [{ begin: "/\\*\\*(?!/)", beginCaptures: { 0: { name: "punctuation.definition.comment.js" } }, end: "\\*/", endCaptures: { 0: { name: "punctuation.definition.comment.js" } }, name: "comment.block.documentation.js", patterns: [{ include: "#docblock" }] }, { begin: "(/\\*)(?:\\s*((@)internal)(?=\\s|(\\*/)))?", beginCaptures: { 1: { name: "punctuation.definition.comment.js" }, 2: { name: "storage.type.internaldeclaration.js" }, 3: { name: "punctuation.decorator.internaldeclaration.js" } }, end: "\\*/", endCaptures: { 0: { name: "punctuation.definition.comment.js" } }, name: "comment.block.js" }, { begin: "(^[ \\t]+)?((//)(?:\\s*((@)internal)(?=\\s|$))?)", beginCaptures: { 1: { name: "punctuation.whitespace.comment.leading.js" }, 2: { name: "comment.line.double-slash.js" }, 3: { name: "punctuation.definition.comment.js" }, 4: { name: "storage.type.internaldeclaration.js" }, 5: { name: "punctuation.decorator.internaldeclaration.js" } }, contentName: "comment.line.double-slash.js", end: "(?=$)" }] }, "control-statement": { patterns: [{ include: "#switch-statement" }, { include: "#for-loop" }, { match: "(?<![_$0-9A-Za-z])(?:(?<=\\.\\.\\.)|(?<!\\.))(catch|finally|throw|try)(?![_$0-9A-Za-z])(?:(?=\\.\\.\\.)|(?!\\.))", name: "keyword.control.trycatch.js" }, { captures: { 1: { name: "keyword.control.loop.js" }, 2: { name: "entity.name.label.js" } }, match: "(?<![_$0-9A-Za-z])(?:(?<=\\.\\.\\.)|(?<!\\.))(break|continue|goto)\\s+([_$A-Za-z][_$0-9A-Za-z]*)(?![_$0-9A-Za-z])(?:(?=\\.\\.\\.)|(?!\\.))" }, { match: "(?<![_$0-9A-Za-z])(?:(?<=\\.\\.\\.)|(?<!\\.))(break|continue|do|goto|while)(?![_$0-9A-Za-z])(?:(?=\\.\\.\\.)|(?!\\.))", name: "keyword.control.loop.js" }, { begin: "(?<![_$0-9A-Za-z])(?:(?<=\\.\\.\\.)|(?<!\\.))(return)(?![_$0-9A-Za-z])(?:(?=\\.\\.\\.)|(?!\\.))", beginCaptures: { 0: { name: "keyword.control.flow.js" } }, end: "(?=[;}]|$|;|^\\s*$|(?:^\\s*(?:abstract|async|(?:\\bawait\\s+(?:\\busing(?=\\s+(?!in\\b|of\\b(?!\\s*(?:of\\b|=)))[_$A-Za-z])\\b)\\b)|break|case|catch|class|const|continue|declare|do|else|enum|export|finally|function|for|goto|if|import|interface|let|module|namespace|switch|return|throw|try|type|(?:\\busing(?=\\s+(?!in\\b|of\\b(?!\\s*(?:of\\b|=)))[_$A-Za-z])\\b)|var|while)\\b))", patterns: [{ include: "#expression" }] }, { match: "(?<![_$0-9A-Za-z])(?:(?<=\\.\\.\\.)|(?<!\\.))(case|default|switch)(?![_$0-9A-Za-z])(?:(?=\\.\\.\\.)|(?!\\.))", name: "keyword.control.switch.js" }, { include: "#if-statement" }, { match: "(?<![_$0-9A-Za-z])(?:(?<=\\.\\.\\.)|(?<!\\.))(else|if)(?![_$0-9A-Za-z])(?:(?=\\.\\.\\.)|(?!\\.))", name: "keyword.control.conditional.js" }, { match: "(?<![_$0-9A-Za-z])(?:(?<=\\.\\.\\.)|(?<!\\.))(with)(?![_$0-9A-Za-z])(?:(?=\\.\\.\\.)|(?!\\.))", name: "keyword.control.with.js" }, { match: "(?<![_$0-9A-Za-z])(?:(?<=\\.\\.\\.)|(?<!\\.))(package)(?![_$0-9A-Za-z])(?:(?=\\.\\.\\.)|(?!\\.))", name: "keyword.control.js" }, { match: "(?<![_$0-9A-Za-z])(?:(?<=\\.\\.\\.)|(?<!\\.))(debugger)(?![_$0-9A-Za-z])(?:(?=\\.\\.\\.)|(?!\\.))", name: "keyword.other.debugger.js" }] }, "decl-block": { begin: "\\{", beginCaptures: { 0: { name: "punctuation.definition.block.js" } }, end: "\\}", endCaptures: { 0: { name: "punctuation.definition.block.js" } }, name: "meta.block.js", patterns: [{ include: "#statements" }] }, declaration: { patterns: [{ include: "#decorator" }, { include: "#var-expr" }, { include: "#function-declaration" }, { include: "#class-declaration" }, { include: "#interface-declaration" }, { include: "#enum-declaration" }, { include: "#namespace-declaration" }, { include: "#type-alias-declaration" }, { include: "#import-equals-declaration" }, { include: "#import-declaration" }, { include: "#export-declaration" }, { match: "(?<![_$0-9A-Za-z])(?:(?<=\\.\\.\\.)|(?<!\\.))(declare|export)(?![_$0-9A-Za-z])(?:(?=\\.\\.\\.)|(?!\\.))", name: "storage.modifier.js" }] }, decorator: { begin: "(?<![_$0-9A-Za-z])(?:(?<=\\.\\.\\.)|(?<!\\.))\\@", beginCaptures: { 0: { name: "punctuation.decorator.js" } }, end: "(?=\\s)", name: "meta.decorator.js", patterns: [{ include: "#expression" }] }, "destructuring-const": { patterns: [{ begin: "(?<!=|:|^of|[^\\._$0-9A-Za-z]of|^in|[^\\._$0-9A-Za-z]in)\\s*(?=\\{)", end: "(?=$|^|[;,=}]|((?<![_$0-9A-Za-z])(?:(?<=\\.\\.\\.)|(?<!\\.))(of|in)\\s+))", name: "meta.object-binding-pattern-variable.js", patterns: [{ include: "#object-binding-pattern-const" }, { include: "#type-annotation" }, { include: "#comment" }] }, { begin: "(?<!=|:|^of|[^\\._$0-9A-Za-z]of|^in|[^\\._$0-9A-Za-z]in)\\s*(?=\\[)", end: "(?=$|^|[;,=}]|((?<![_$0-9A-Za-z])(?:(?<=\\.\\.\\.)|(?<!\\.))(of|in)\\s+))", name: "meta.array-binding-pattern-variable.js", patterns: [{ include: "#array-binding-pattern-const" }, { include: "#type-annotation" }, { include: "#comment" }] }] }, "destructuring-parameter": { patterns: [{ begin: "(?<!=|:)\\s*(?:(\\.\\.\\.)\\s*)?(\\{)", beginCaptures: { 1: { name: "keyword.operator.rest.js" }, 2: { name: "punctuation.definition.binding-pattern.object.js" } }, end: "\\}", endCaptures: { 0: { name: "punctuation.definition.binding-pattern.object.js" } }, name: "meta.parameter.object-binding-pattern.js", patterns: [{ include: "#parameter-object-binding-element" }] }, { begin: "(?<!=|:)\\s*(?:(\\.\\.\\.)\\s*)?(\\[)", beginCaptures: { 1: { name: "keyword.operator.rest.js" }, 2: { name: "punctuation.definition.binding-pattern.array.js" } }, end: "\\]", endCaptures: { 0: { name: "punctuation.definition.binding-pattern.array.js" } }, name: "meta.paramter.array-binding-pattern.js", patterns: [{ include: "#parameter-binding-element" }, { include: "#punctuation-comma" }] }] }, "destructuring-parameter-rest": { captures: { 1: { name: "keyword.operator.rest.js" }, 2: { name: "variable.parameter.js" } }, match: "(?:(\\.\\.\\.)\\s*)?([_$A-Za-z][_$0-9A-Za-z]*)" }, "destructuring-variable": { patterns: [{ begin: "(?<!=|:|^of|[^\\._$0-9A-Za-z]of|^in|[^\\._$0-9A-Za-z]in)\\s*(?=\\{)", end: "(?=$|^|[;,=}]|((?<![_$0-9A-Za-z])(?:(?<=\\.\\.\\.)|(?<!\\.))(of|in)\\s+))", name: "meta.object-binding-pattern-variable.js", patterns: [{ include: "#object-binding-pattern" }, { include: "#type-annotation" }, { include: "#comment" }] }, { begin: "(?<!=|:|^of|[^\\._$0-9A-Za-z]of|^in|[^\\._$0-9A-Za-z]in)\\s*(?=\\[)", end: "(?=$|^|[;,=}]|((?<![_$0-9A-Za-z])(?:(?<=\\.\\.\\.)|(?<!\\.))(of|in)\\s+))", name: "meta.array-binding-pattern-variable.js", patterns: [{ include: "#array-binding-pattern" }, { include: "#type-annotation" }, { include: "#comment" }] }] }, "destructuring-variable-rest": { captures: { 1: { name: "keyword.operator.rest.js" }, 2: { name: "meta.definition.variable.js variable.other.readwrite.js" } }, match: "(?:(\\.\\.\\.)\\s*)?([_$A-Za-z][_$0-9A-Za-z]*)" }, "destructuring-variable-rest-const": { captures: { 1: { name: "keyword.operator.rest.js" }, 2: { name: "meta.definition.variable.js variable.other.constant.js" } }, match: "(?:(\\.\\.\\.)\\s*)?([_$A-Za-z][_$0-9A-Za-z]*)" }, directives: { begin: "^(///)\\s*(?=<(reference|amd-dependency|amd-module)(\\s+(path|types|no-default-lib|lib|name|resolution-mode)\\s*=\\s*((\\'([^\\'\\\\]|\\\\.)*\\')|(\\\"([^\\\"\\\\]|\\\\.)*\\\")|(\\`([^\\`\\\\]|\\\\.)*\\`)))+\\s*/>\\s*$)", beginCaptures: { 1: { name: "punctuation.definition.comment.js" } }, end: "(?=$)", name: "comment.line.triple-slash.directive.js", patterns: [{ begin: "(<)(reference|amd-dependency|amd-module)", beginCaptures: { 1: { name: "punctuation.definition.tag.directive.js" }, 2: { name: "entity.name.tag.directive.js" } }, end: "/>", endCaptures: { 0: { name: "punctuation.definition.tag.directive.js" } }, name: "meta.tag.js", patterns: [{ match: "path|types|no-default-lib|lib|name|resolution-mode", name: "entity.other.attribute-name.directive.js" }, { match: "=", name: "keyword.operator.assignment.js" }, { include: "#string" }] }] }, docblock: { patterns: [{ captures: { 1: { name: "storage.type.class.jsdoc" }, 2: { name: "punctuation.definition.block.tag.jsdoc" }, 3: { name: "constant.language.access-type.jsdoc" } }, match: "((@)(?:access|api))\\s+(private|protected|public)\\b" }, { captures: { 1: { name: "storage.type.class.jsdoc" }, 2: { name: "punctuation.definition.block.tag.jsdoc" }, 3: { name: "entity.name.type.instance.jsdoc" }, 4: { name: "punctuation.definition.bracket.angle.begin.jsdoc" }, 5: { name: "constant.other.email.link.underline.jsdoc" }, 6: { name: "punctuation.definition.bracket.angle.end.jsdoc" } }, match: "((@)author)\\s+([^@\\s<>*/](?:[^@<>*/]|\\*[^/])*)(?:\\s*(<)([^>\\s]+)(>))?" }, { captures: { 1: { name: "storage.type.class.jsdoc" }, 2: { name: "punctuation.definition.block.tag.jsdoc" }, 3: { name: "entity.name.type.instance.jsdoc" }, 4: { name: "keyword.operator.control.jsdoc" }, 5: { name: "entity.name.type.instance.jsdoc" } }, match: "((@)borrows)\\s+((?:[^@\\s*/]|\\*[^/])+)\\s+(as)\\s+((?:[^@\\s*/]|\\*[^/])+)" }, { begin: "((@)example)\\s+", beginCaptures: { 1: { name: "storage.type.class.jsdoc" }, 2: { name: "punctuation.definition.block.tag.jsdoc" } }, end: "(?=@|\\*/)", name: "meta.example.jsdoc", patterns: [{ match: "^\\s\\*\\s+" }, { begin: "\\G(<)caption(>)", beginCaptures: { 0: { name: "entity.name.tag.inline.jsdoc" }, 1: { name: "punctuation.definition.bracket.angle.begin.jsdoc" }, 2: { name: "punctuation.definition.bracket.angle.end.jsdoc" } }, contentName: "constant.other.description.jsdoc", end: "(</)caption(>)|(?=\\*/)", endCaptures: { 0: { name: "entity.name.tag.inline.jsdoc" }, 1: { name: "punctuation.definition.bracket.angle.begin.jsdoc" }, 2: { name: "punctuation.definition.bracket.angle.end.jsdoc" } } }, { captures: { 0: { name: "source.embedded.js" } }, match: "[^\\s@*](?:[^*]|\\*[^/])*" }] }, { captures: { 1: { name: "storage.type.class.jsdoc" }, 2: { name: "punctuation.definition.block.tag.jsdoc" }, 3: { name: "constant.language.symbol-type.jsdoc" } }, match: "((@)kind)\\s+(class|constant|event|external|file|function|member|mixin|module|namespace|typedef)\\b" }, { captures: { 1: { name: "storage.type.class.jsdoc" }, 2: { name: "punctuation.definition.block.tag.jsdoc" }, 3: { name: "variable.other.link.underline.jsdoc" }, 4: { name: "entity.name.type.instance.jsdoc" } }, match: "((@)see)\\s+(?:((?=https?://)(?:[^\\s*]|\\*[^/])+)|((?!https?://|(?:\\[[^\\[\\]]*\\])?{@(?:link|linkcode|linkplain|tutorial)\\b)(?:[^@\\s*/]|\\*[^/])+))" }, { captures: { 1: { name: "storage.type.class.jsdoc" }, 2: { name: "punctuation.definition.block.tag.jsdoc" }, 3: { name: "variable.other.jsdoc" } }, match: "((@)template)\\s+([A-Za-z_$][\\w$.\\[\\]]*(?:\\s*,\\s*[A-Za-z_$][\\w$.\\[\\]]*)*)" }, { begin: "((@)template)\\s+(?={)", beginCaptures: { 1: { name: "storage.type.class.jsdoc" }, 2: { name: "punctuation.definition.block.tag.jsdoc" } }, end: "(?=\\s|\\*/|[^{}\\[\\]A-Za-z_$])", patterns: [{ include: "#jsdoctype" }, { match: "([A-Za-z_$][\\w$.\\[\\]]*)", name: "variable.other.jsdoc" }] }, { captures: { 1: { name: "storage.type.class.jsdoc" }, 2: { name: "punctuation.definition.block.tag.jsdoc" }, 3: { name: "variable.other.jsdoc" } }, match: "((@)(?:arg|argument|const|constant|member|namespace|param|var))\\s+([A-Za-z_$][\\w$.\\[\\]]*)" }, { begin: "((@)typedef)\\s+(?={)", beginCaptures: { 1: { name: "storage.type.class.jsdoc" }, 2: { name: "punctuation.definition.block.tag.jsdoc" } }, end: "(?=\\s|\\*/|[^{}\\[\\]A-Za-z_$])", patterns: [{ include: "#jsdoctype" }, { match: "(?:[^@\\s*/]|\\*[^/])+", name: "entity.name.type.instance.jsdoc" }] }, { begin: "((@)(?:arg|argument|const|constant|member|namespace|param|prop|property|var))\\s+(?={)", beginCaptures: { 1: { name: "storage.type.class.jsdoc" }, 2: { name: "punctuation.definition.block.tag.jsdoc" } }, end: "(?=\\s|\\*/|[^{}\\[\\]A-Za-z_$])", patterns: [{ include: "#jsdoctype" }, { match: "([A-Za-z_$][\\w$.\\[\\]]*)", name: "variable.other.jsdoc" }, { captures: { 1: { name: "punctuation.definition.optional-value.begin.bracket.square.jsdoc" }, 2: { name: "keyword.operator.assignment.jsdoc" }, 3: { name: "source.embedded.js" }, 4: { name: "punctuation.definition.optional-value.end.bracket.square.jsdoc" }, 5: { name: "invalid.illegal.syntax.jsdoc" } }, match: `(\\[)\\s*[\\w$]+(?:(?:\\[\\])?\\.[\\w$]+)*(?:\\s*(=)\\s*((?>"(?:(?:\\*(?!/))|(?:\\\\(?!"))|[^*\\\\])*?"|'(?:(?:\\*(?!/))|(?:\\\\(?!'))|[^*\\\\])*?'|\\[(?:(?:\\*(?!/))|[^*])*?\\]|(?:(?:\\*(?!/))|\\s(?!\\s*\\])|\\[.*?(?:\\]|(?=\\*/))|[^*\\s\\[\\]])*)*))?\\s*(?:(\\])((?:[^*\\s]|\\*[^\\s/])+)?|(?=\\*/))`, name: "variable.other.jsdoc" }] }, { begin: "((@)(?:define|enum|exception|export|extends|lends|implements|modifies|namespace|private|protected|returns?|satisfies|suppress|this|throws|type|yields?))\\s+(?={)", beginCaptures: { 1: { name: "storage.type.class.jsdoc" }, 2: { name: "punctuation.definition.block.tag.jsdoc" } }, end: "(?=\\s|\\*/|[^{}\\[\\]A-Za-z_$])", patterns: [{ include: "#jsdoctype" }] }, { captures: { 1: { name: "storage.type.class.jsdoc" }, 2: { name: "punctuation.definition.block.tag.jsdoc" }, 3: { name: "entity.name.type.instance.jsdoc" } }, match: "((@)(?:alias|augments|callback|constructs|emits|event|fires|exports?|extends|external|function|func|host|lends|listens|interface|memberof!?|method|module|mixes|mixin|name|requires|see|this|typedef|uses))\\s+((?:[^{}@\\s*]|\\*[^/])+)" }, { begin: `((@)(?:default(?:value)?|license|version))\\s+(([''"]))`, beginCaptures: { 1: { name: "storage.type.class.jsdoc" }, 2: { name: "punctuation.definition.block.tag.jsdoc" }, 3: { name: "variable.other.jsdoc" }, 4: { name: "punctuation.definition.string.begin.jsdoc" } }, contentName: "variable.other.jsdoc", end: "(\\3)|(?=$|\\*/)", endCaptures: { 0: { name: "variable.other.jsdoc" }, 1: { name: "punctuation.definition.string.end.jsdoc" } } }, { captures: { 1: { name: "storage.type.class.jsdoc" }, 2: { name: "punctuation.definition.block.tag.jsdoc" }, 3: { name: "variable.other.jsdoc" } }, match: "((@)(?:default(?:value)?|license|tutorial|variation|version))\\s+([^\\s*]+)" }, { captures: { 1: { name: "punctuation.definition.block.tag.jsdoc" } }, match: "(@)(?:abstract|access|alias|api|arg|argument|async|attribute|augments|author|beta|borrows|bubbles|callback|chainable|class|classdesc|code|config|const|constant|constructor|constructs|copyright|default|defaultvalue|define|deprecated|desc|description|dict|emits|enum|event|example|exception|exports?|extends|extension(?:_?for)?|external|externs|file|fileoverview|final|fires|for|func|function|generator|global|hideconstructor|host|ignore|implements|implicitCast|inherit[Dd]oc|inner|instance|interface|internal|kind|lends|license|listens|main|member|memberof!?|method|mixes|mixins?|modifies|module|name|namespace|noalias|nocollapse|nocompile|nosideeffects|override|overview|package|param|polymer(?:Behavior)?|preserve|private|prop|property|protected|public|read[Oo]nly|record|require[ds]|returns?|see|since|static|struct|submodule|summary|suppress|template|this|throws|todo|tutorial|type|typedef|unrestricted|uses|var|variation|version|virtual|writeOnce|yields?)\\b", name: "storage.type.class.jsdoc" }, { include: "#inline-tags" }, { captures: { 1: { name: "storage.type.class.jsdoc" }, 2: { name: "punctuation.definition.block.tag.jsdoc" } }, match: "((@)(?:[_$A-Za-z][_$0-9A-Za-z]*))(?=\\s+)" }] }, "enum-declaration": { begin: "(?<![_$0-9A-Za-z])(?:(?<=\\.\\.\\.)|(?<!\\.))(?:(\\bexport)\\s+)?(?:(\\bdeclare)\\s+)?(?:\\b(const)\\s+)?\\b(enum)\\s+([_$A-Za-z][_$0-9A-Za-z]*)", beginCaptures: { 1: { name: "keyword.control.export.js" }, 2: { name: "storage.modifier.js" }, 3: { name: "storage.modifier.js" }, 4: { name: "storage.type.enum.js" }, 5: { name: "entity.name.type.enum.js" } }, end: "(?<=\\})", name: "meta.enum.declaration.js", patterns: [{ include: "#comment" }, { begin: "\\{", beginCaptures: { 0: { name: "punctuation.definition.block.js" } }, end: "\\}", endCaptures: { 0: { name: "punctuation.definition.block.js" } }, patterns: [{ include: "#comment" }, { begin: "([_$A-Za-z][_$0-9A-Za-z]*)", beginCaptures: { 0: { name: "variable.other.enummember.js" } }, end: "(?=,|\\}|$)", patterns: [{ include: "#comment" }, { include: "#variable-initializer" }] }, { begin: "(?=((\\'([^\\'\\\\]|\\\\.)*\\')|(\\\"([^\\\"\\\\]|\\\\.)*\\\")|(\\`([^\\`\\\\]|\\\\.)*\\`)|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])+\\])))", end: "(?=,|\\}|$)", patterns: [{ include: "#string" }, { include: "#array-literal" }, { include: "#comment" }, { include: "#variable-initializer" }] }, { include: "#punctuation-comma" }] }] }, "export-declaration": { patterns: [{ captures: { 1: { name: "keyword.control.export.js" }, 2: { name: "keyword.control.as.js" }, 3: { name: "storage.type.namespace.js" }, 4: { name: "entity.name.type.module.js" } }, match: "(?<![_$0-9A-Za-z])(?:(?<=\\.\\.\\.)|(?<!\\.))(export)\\s+(as)\\s+(namespace)\\s+([_$A-Za-z][_$0-9A-Za-z]*)" }, { begin: "(?<![_$0-9A-Za-z])(?:(?<=\\.\\.\\.)|(?<!\\.))(export)(?:\\s+(type))?(?:(?:\\s*(=))|(?:\\s+(default)(?=\\s+)))", beginCaptures: { 1: { name: "keyword.control.export.js" }, 2: { name: "keyword.control.type.js" }, 3: { name: "keyword.operator.assignment.js" }, 4: { name: "keyword.control.default.js" } }, end: "(?=$|;|^\\s*$|(?:^\\s*(?:abstract|async|(?:\\bawait\\s+(?:\\busing(?=\\s+(?!in\\b|of\\b(?!\\s*(?:of\\b|=)))[_$A-Za-z])\\b)\\b)|break|case|catch|class|const|continue|declare|do|else|enum|export|finally|function|for|goto|if|import|interface|let|module|namespace|switch|return|throw|try|type|(?:\\busing(?=\\s+(?!in\\b|of\\b(?!\\s*(?:of\\b|=)))[_$A-Za-z])\\b)|var|while)\\b))", name: "meta.export.default.js", patterns: [{ include: "#interface-declaration" }, { include: "#expression" }] }, { begin: "(?<![_$0-9A-Za-z])(?:(?<=\\.\\.\\.)|(?<!\\.))(export)(?:\\s+(type))?\\b(?!(\\$)|(\\s*:))((?=\\s*[\\{*])|((?=\\s*[_$A-Za-z][_$0-9A-Za-z]*(\\s|,))(?!\\s*(?:abstract|async|(?:\\bawait\\s+(?:\\busing(?=\\s+(?!in\\b|of\\b(?!\\s*(?:of\\b|=)))[_$A-Za-z])\\b)\\b)|break|case|catch|class|const|continue|declare|do|else|enum|export|finally|function|for|goto|if|import|interface|let|module|namespace|switch|return|throw|try|type|(?:\\busing(?=\\s+(?!in\\b|of\\b(?!\\s*(?:of\\b|=)))[_$A-Za-z])\\b)|var|while)\\b)))", beginCaptures: { 1: { name: "keyword.control.export.js" }, 2: { name: "keyword.control.type.js" } }, end: "(?=$|;|^\\s*$|(?:^\\s*(?:abstract|async|(?:\\bawait\\s+(?:\\busing(?=\\s+(?!in\\b|of\\b(?!\\s*(?:of\\b|=)))[_$A-Za-z])\\b)\\b)|break|case|catch|class|const|continue|declare|do|else|enum|export|finally|function|for|goto|if|import|interface|let|module|namespace|switch|return|throw|try|type|(?:\\busing(?=\\s+(?!in\\b|of\\b(?!\\s*(?:of\\b|=)))[_$A-Za-z])\\b)|var|while)\\b))", name: "meta.export.js", patterns: [{ include: "#import-export-declaration" }] }] }, expression: { patterns: [{ include: "#expressionWithoutIdentifiers" }, { include: "#identifiers" }, { include: "#expressionPunctuations" }] }, "expression-inside-possibly-arrow-parens": { patterns: [{ include: "#expressionWithoutIdentifiers" }, { include: "#comment" }, { include: "#string" }, { include: "#decorator" }, { include: "#destructuring-parameter" }, { captures: { 1: { name: "storage.modifier.js" } }, match: "(?<![_$0-9A-Za-z])(?:(?<=\\.\\.\\.)|(?<!\\.))(override|public|protected|private|readonly)\\s+(?=(override|public|protected|private|readonly)\\s+)" }, { captures: { 1: { name: "storage.modifier.js" }, 2: { name: "keyword.operator.rest.js" }, 3: { name: "entity.name.function.js variable.language.this.js" }, 4: { name: "entity.name.function.js" }, 5: { name: "keyword.operator.optional.js" } }, match: "(?:(?<![_$0-9A-Za-z])(?:(?<=\\.\\.\\.)|(?<!\\.))(override|public|private|protected|readonly)\\s+)?(?:(\\.\\.\\.)\\s*)?(?<!=|:)(?<![_$0-9A-Za-z])(?:(?<=\\.\\.\\.)|(?<!\\.))(?:(this)|([_$A-Za-z][_$0-9A-Za-z]*))(?![_$0-9A-Za-z])(?:(?=\\.\\.\\.)|(?!\\.))\\s*(\\??)(?=\\s*(=\\s*(((async\\s+)?((function\\s*[(<*])|(function\\s+)|([_$A-Za-z][_$0-9A-Za-z]*\\s*=>)))|((async\\s*)?(((<\\s*$)|([\\(]\\s*((([\\{\\[]\\s*)?$)|((\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})\\s*((:\\s*\\{?$)|((\\s*([^<>\\(\\)\\{\\}]|\\<([^<>]|\\<([^<>]|\\<[^<>]+\\>)+\\>)+\\>|\\([^\\(\\)]+\\)|\\{[^\\{\\}]+\\})+\\s*)?=\\s*)))|((\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\])\\s*((:\\s*\\[?$)|((\\s*([^<>\\(\\)\\{\\}]|\\<([^<>]|\\<([^<>]|\\<[^<>]+\\>)+\\>)+\\>|\\([^\\(\\)]+\\)|\\{[^\\{\\}]+\\})+\\s*)?=\\s*))))))|((<\\s*(((const\\s+)?[_$A-Za-z])|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\]))([^=<>]|=[^<]|\\<\\s*(((const\\s+)?[_$A-Za-z])|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\]))([^=<>]|=[^<]|\\<\\s*(((const\\s+)?[_$A-Za-z])|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\]))([^=<>]|=[^<])*\\>)*\\>)*>\\s*)?[(]\\s*(\\/\\*([^\\*]|(\\*[^\\/]))*\\*\\/\\s*)*(([)]\\s*:)|((\\.\\.\\.\\s*)?[_$A-Za-z][_$0-9A-Za-z]*\\s*:)))|([<]\\s*[_$A-Za-z][_$0-9A-Za-z]*\\s+extends\\s*[^=>])|((<\\s*(((const\\s+)?[_$A-Za-z])|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\]))([^=<>]|=[^<]|\\<\\s*(((const\\s+)?[_$A-Za-z])|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\]))([^=<>]|=[^<]|\\<\\s*(((const\\s+)?[_$A-Za-z])|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\]))([^=<>]|=[^<])*\\>)*\\>)*>\\s*)?\\(\\s*(\\/\\*([^\\*]|(\\*[^\\/]))*\\*\\/\\s*)*(([_$A-Za-z]|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\])|(\\.\\.\\.\\s*[_$A-Za-z]))([^()\\'\\\"\\`]|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\'([^\\'\\\\]|\\\\.)*\\')|(\\\"([^\\\"\\\\]|\\\\.)*\\\")|(\\`([^\\`\\\\]|\\\\.)*\\`))*)?\\)(\\s*:\\s*([^<>\\(\\)\\{\\}]|\\<([^<>]|\\<([^<>]|\\<[^<>]+\\>)+\\>)+\\>|\\([^\\(\\)]+\\)|\\{[^\\{\\}]+\\})+)?\\s*=>)))))|(:\\s*((<)|([(]\\s*(([)])|(\\.\\.\\.)|([_$0-9A-Za-z]+\\s*(([:,?=])|([)]\\s*=>)))))))|(:\\s*(?<![_$0-9A-Za-z])(?:(?<=\\.\\.\\.)|(?<!\\.))Function(?![_$0-9A-Za-z])(?:(?=\\.\\.\\.)|(?!\\.)))|(:\\s*((<\\s*$)|([\\(]\\s*((([\\{\\[]\\s*)?$)|((\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})\\s*((:\\s*\\{?$)|((\\s*([^<>\\(\\)\\{\\}]|\\<([^<>]|\\<([^<>]|\\<[^<>]+\\>)+\\>)+\\>|\\([^\\(\\)]+\\)|\\{[^\\{\\}]+\\})+\\s*)?=\\s*)))|((\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\])\\s*((:\\s*\\[?$)|((\\s*([^<>\\(\\)\\{\\}]|\\<([^<>]|\\<([^<>]|\\<[^<>]+\\>)+\\>)+\\>|\\([^\\(\\)]+\\)|\\{[^\\{\\}]+\\})+\\s*)?=\\s*)))))))|(:\\s*(=>|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(<[^<>]*>)|[^<>(),=])+=\\s*(((async\\s+)?((function\\s*[(<*])|(function\\s+)|([_$A-Za-z][_$0-9A-Za-z]*\\s*=>)))|((async\\s*)?(((<\\s*$)|([\\(]\\s*((([\\{\\[]\\s*)?$)|((\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})\\s*((:\\s*\\{?$)|((\\s*([^<>\\(\\)\\{\\}]|\\<([^<>]|\\<([^<>]|\\<[^<>]+\\>)+\\>)+\\>|\\([^\\(\\)]+\\)|\\{[^\\{\\}]+\\})+\\s*)?=\\s*)))|((\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\])\\s*((:\\s*\\[?$)|((\\s*([^<>\\(\\)\\{\\}]|\\<([^<>]|\\<([^<>]|\\<[^<>]+\\>)+\\>)+\\>|\\([^\\(\\)]+\\)|\\{[^\\{\\}]+\\})+\\s*)?=\\s*))))))|((<\\s*(((const\\s+)?[_$A-Za-z])|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\]))([^=<>]|=[^<]|\\<\\s*(((const\\s+)?[_$A-Za-z])|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\]))([^=<>]|=[^<]|\\<\\s*(((const\\s+)?[_$A-Za-z])|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\]))([^=<>]|=[^<])*\\>)*\\>)*>\\s*)?[(]\\s*(\\/\\*([^\\*]|(\\*[^\\/]))*\\*\\/\\s*)*(([)]\\s*:)|((\\.\\.\\.\\s*)?[_$A-Za-z][_$0-9A-Za-z]*\\s*:)))|([<]\\s*[_$A-Za-z][_$0-9A-Za-z]*\\s+extends\\s*[^=>])|((<\\s*(((const\\s+)?[_$A-Za-z])|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\]))([^=<>]|=[^<]|\\<\\s*(((const\\s+)?[_$A-Za-z])|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\]))([^=<>]|=[^<]|\\<\\s*(((const\\s+)?[_$A-Za-z])|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\]))([^=<>]|=[^<])*\\>)*\\>)*>\\s*)?\\(\\s*(\\/\\*([^\\*]|(\\*[^\\/]))*\\*\\/\\s*)*(([_$A-Za-z]|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\])|(\\.\\.\\.\\s*[_$A-Za-z]))([^()\\'\\\"\\`]|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\'([^\\'\\\\]|\\\\.)*\\')|(\\\"([^\\\"\\\\]|\\\\.)*\\\")|(\\`([^\\`\\\\]|\\\\.)*\\`))*)?\\)(\\s*:\\s*([^<>\\(\\)\\{\\}]|\\<([^<>]|\\<([^<>]|\\<[^<>]+\\>)+\\>)+\\>|\\([^\\(\\)]+\\)|\\{[^\\{\\}]+\\})+)?\\s*=>))))))" }, { captures: { 1: { name: "storage.modifier.js" }, 2: { name: "keyword.operator.rest.js" }, 3: { name: "variable.parameter.js variable.language.this.js" }, 4: { name: "variable.parameter.js" }, 5: { name: "keyword.operator.optional.js" } }, match: "(?:(?<![_$0-9A-Za-z])(?:(?<=\\.\\.\\.)|(?<!\\.))(override|public|private|protected|readonly)\\s+)?(?:(\\.\\.\\.)\\s*)?(?<!=|:)(?<![_$0-9A-Za-z])(?:(?<=\\.\\.\\.)|(?<!\\.))(?:(this)|([_$A-Za-z][_$0-9A-Za-z]*))(?![_$0-9A-Za-z])(?:(?=\\.\\.\\.)|(?!\\.))\\s*(\\??)(?=\\s*[:,]|$)" }, { include: "#type-annotation" }, { include: "#variable-initializer" }, { match: ",", name: "punctuation.separator.parameter.js" }, { include: "#identifiers" }, { include: "#expressionPunctuations" }] }, "expression-operators": { patterns: [{ match: "(?<![_$0-9A-Za-z])(?:(?<=\\.\\.\\.)|(?<!\\.))(await)(?![_$0-9A-Za-z])(?:(?=\\.\\.\\.)|(?!\\.))", name: "keyword.control.flow.js" }, { begin: "(?<![_$0-9A-Za-z])(?:(?<=\\.\\.\\.)|(?<!\\.))(yield)(?![_$0-9A-Za-z])(?:(?=\\.\\.\\.)|(?!\\.))(?=\\s*\\/\\*([^\\*]|(\\*[^\\/]))*\\*\\/\\s*\\*)", beginCaptures: { 1: { name: "keyword.control.flow.js" } }, end: "\\*", endCaptures: { 0: { name: "keyword.generator.asterisk.js" } }, patterns: [{ include: "#comment" }] }, { captures: { 1: { name: "keyword.control.flow.js" }, 2: { name: "keyword.generator.asterisk.js" } }, match: "(?<![_$0-9A-Za-z])(?:(?<=\\.\\.\\.)|(?<!\\.))(yield)(?![_$0-9A-Za-z])(?:(?=\\.\\.\\.)|(?!\\.))(?:\\s*(\\*))?" }, { match: "(?<![_$0-9A-Za-z])(?:(?<=\\.\\.\\.)|(?<!\\.))delete(?![_$0-9A-Za-z])(?:(?=\\.\\.\\.)|(?!\\.))", name: "keyword.operator.expression.delete.js" }, { match: "(?<![_$0-9A-Za-z])(?:(?<=\\.\\.\\.)|(?<!\\.))in(?![_$0-9A-Za-z])(?:(?=\\.\\.\\.)|(?!\\.))(?!\\()", name: "keyword.operator.expression.in.js" }, { match: "(?<![_$0-9A-Za-z])(?:(?<=\\.\\.\\.)|(?<!\\.))of(?![_$0-9A-Za-z])(?:(?=\\.\\.\\.)|(?!\\.))(?!\\()", name: "keyword.operator.expression.of.js" }, { match: "(?<![_$0-9A-Za-z])(?:(?<=\\.\\.\\.)|(?<!\\.))instanceof(?![_$0-9A-Za-z])(?:(?=\\.\\.\\.)|(?!\\.))", name: "keyword.operator.expression.instanceof.js" }, { match: "(?<![_$0-9A-Za-z])(?:(?<=\\.\\.\\.)|(?<!\\.))new(?![_$0-9A-Za-z])(?:(?=\\.\\.\\.)|(?!\\.))", name: "keyword.operator.new.js" }, { include: "#typeof-operator" }, { match: "(?<![_$0-9A-Za-z])(?:(?<=\\.\\.\\.)|(?<!\\.))void(?![_$0-9A-Za-z])(?:(?=\\.\\.\\.)|(?!\\.))", name: "keyword.operator.expression.void.js" }, { captures: { 1: { name: "keyword.control.as.js" }, 2: { name: "storage.modifier.js" } }, match: "(?<![_$0-9A-Za-z])(?:(?<=\\.\\.\\.)|(?<!\\.))(as)\\s+(const)(?=\\s*($|[;,:})\\]]))" }, { begin: "(?<![_$0-9A-Za-z])(?:(?<=\\.\\.\\.)|(?<!\\.))(?:(as)|(satisfies))\\s+", beginCaptures: { 1: { name: "keyword.control.as.js" }, 2: { name: "keyword.control.satisfies.js" } }, end: "(?=^|[;),}\\]:?\\-\\+\\>]|\\|\\||\\&\\&|\\!\\=\\=|$|((?<![_$0-9A-Za-z])(?:(?<=\\.\\.\\.)|(?<!\\.))(as|satisfies)\\s+)|(\\s+\\<))", patterns: [{ include: "#type" }] }, { match: "\\.\\.\\.", name: "keyword.operator.spread.js" }, { match: "\\*=|(?<!\\()/=|%=|\\+=|\\-=", name: "keyword.operator.assignment.compound.js" }, { match: "\\&=|\\^=|<<=|>>=|>>>=|\\|=", name: "keyword.operator.assignment.compound.bitwise.js" }, { match: "<<|>>>|>>", name: "keyword.operator.bitwise.shift.js" }, { match: "===|!==|==|!=", name: "keyword.operator.comparison.js" }, { match: "<=|>=|<>|<|>", name: "keyword.operator.relational.js" }, { captures: { 1: { name: "keyword.operator.logical.js" }, 2: { name: "keyword.operator.assignment.compound.js" }, 3: { name: "keyword.operator.arithmetic.js" } }, match: "(?<=[_$0-9A-Za-z])(\\!)\\s*(?:(/=)|(?:(/)(?![/*])))" }, { match: "\\!|&&|\\|\\||\\?\\?", name: "keyword.operator.logical.js" }, { match: "\\&|~|\\^|\\|", name: "keyword.operator.bitwise.js" }, { match: "\\=", name: "keyword.operator.assignment.js" }, { match: "--", name: "keyword.operator.decrement.js" }, { match: "\\+\\+", name: "keyword.operator.increment.js" }, { match: "%|\\*|/|-|\\+", name: "keyword.operator.arithmetic.js" }, { begin: "(?<=[_$0-9A-Za-z)\\]])\\s*(?=(\\/\\*([^\\*]|(\\*[^\\/]))*\\*\\/\\s*)+(?:(/=)|(?:(/)(?![/*]))))", end: "(?:(/=)|(?:(/)(?!\\*([^\\*]|(\\*[^\\/]))*\\*\\/)))", endCaptures: { 1: { name: "keyword.operator.assignment.compound.js" }, 2: { name: "keyword.operator.arithmetic.js" } }, patterns: [{ include: "#comment" }] }, { captures: { 1: { name: "keyword.operator.assignment.compound.js" }, 2: { name: "keyword.operator.arithmetic.js" } }, match: "(?<=[_$0-9A-Za-z)\\]])\\s*(?:(/=)|(?:(/)(?![/*])))" }] }, expressionPunctuations: { patterns: [{ include: "#punctuation-comma" }, { include: "#punctuation-accessor" }] }, expressionWithoutIdentifiers: { patterns: [{ include: "#jsx" }, { include: "#string" }, { include: "#regex" }, { include: "#comment" }, { include: "#function-expression" }, { include: "#class-expression" }, { include: "#arrow-function" }, { include: "#paren-expression-possibly-arrow" }, { include: "#cast" }, { include: "#ternary-expression" }, { include: "#new-expr" }, { include: "#instanceof-expr" }, { include: "#object-literal" }, { include: "#expression-operators" }, { include: "#function-call" }, { include: "#literal" }, { include: "#support-objects" }, { include: "#paren-expression" }] }, "field-declaration": { begin: "(?<!\\()(?:(?<![_$0-9A-Za-z])(?:(?<=\\.\\.\\.)|(?<!\\.))(readonly)\\s+)?(?=\\s*((\\b(?<!\\$)0(?:x|X)[0-9a-fA-F][0-9a-fA-F_]*(n)?\\b(?!\\$))|(\\b(?<!\\$)0(?:b|B)[01][01_]*(n)?\\b(?!\\$))|(\\b(?<!\\$)0(?:o|O)?[0-7][0-7_]*(n)?\\b(?!\\$))|((?<!\\$)(?:(?:\\b\\d[0-9_]*(\\.)\\d[0-9_]*[eE][+-]?\\d[0-9_]*(n)?\\b)|(?:\\b\\d[0-9_]*(\\.)[eE][+-]?\\d[0-9_]*(n)?\\b)|(?:\\B(\\.)\\d[0-9_]*[eE][+-]?\\d[0-9_]*(n)?\\b)|(?:\\b\\d[0-9_]*[eE][+-]?\\d[0-9_]*(n)?\\b)|(?:\\b\\d[0-9_]*(\\.)\\d[0-9_]*(n)?\\b)|(?:\\b\\d[0-9_]*(\\.)(n)?\\B)|(?:\\B(\\.)\\d[0-9_]*(n)?\\b)|(?:\\b\\d[0-9_]*(n)?\\b(?!\\.)))(?!\\$))|(\\#?[_$A-Za-z][_$0-9A-Za-z]*)|(\\'([^\\'\\\\]|\\\\.)*\\')|(\\\"([^\\\"\\\\]|\\\\.)*\\\")|(\\`([^\\`\\\\]|\\\\.)*\\`)|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])+\\]))\\s*(?:(?:(\\?)|(\\!))\\s*)?(=|:|;|,|\\}|$))", beginCaptures: { 1: { name: "storage.modifier.js" } }, end: "(?=\\}|;|,|$|(^(?!\\s*((\\b(?<!\\$)0(?:x|X)[0-9a-fA-F][0-9a-fA-F_]*(n)?\\b(?!\\$))|(\\b(?<!\\$)0(?:b|B)[01][01_]*(n)?\\b(?!\\$))|(\\b(?<!\\$)0(?:o|O)?[0-7][0-7_]*(n)?\\b(?!\\$))|((?<!\\$)(?:(?:\\b\\d[0-9_]*(\\.)\\d[0-9_]*[eE][+-]?\\d[0-9_]*(n)?\\b)|(?:\\b\\d[0-9_]*(\\.)[eE][+-]?\\d[0-9_]*(n)?\\b)|(?:\\B(\\.)\\d[0-9_]*[eE][+-]?\\d[0-9_]*(n)?\\b)|(?:\\b\\d[0-9_]*[eE][+-]?\\d[0-9_]*(n)?\\b)|(?:\\b\\d[0-9_]*(\\.)\\d[0-9_]*(n)?\\b)|(?:\\b\\d[0-9_]*(\\.)(n)?\\B)|(?:\\B(\\.)\\d[0-9_]*(n)?\\b)|(?:\\b\\d[0-9_]*(n)?\\b(?!\\.)))(?!\\$))|(\\#?[_$A-Za-z][_$0-9A-Za-z]*)|(\\'([^\\'\\\\]|\\\\.)*\\')|(\\\"([^\\\"\\\\]|\\\\.)*\\\")|(\\`([^\\`\\\\]|\\\\.)*\\`)|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])+\\]))\\s*(?:(?:(\\?)|(\\!))\\s*)?(=|:|;|,|$))))|(?<=\\})", name: "meta.field.declaration.js", patterns: [{ include: "#variable-initializer" }, { include: "#type-annotation" }, { include: "#string" }, { include: "#array-literal" }, { include: "#numeric-literal" }, { include: "#comment" }, { captures: { 1: { name: "meta.definition.property.js entity.name.function.js" }, 2: { name: "keyword.operator.optional.js" }, 3: { name: "keyword.operator.definiteassignment.js" } }, match: "(\\#?[_$A-Za-z][_$0-9A-Za-z]*)(?:(\\?)|(\\!))?(?=\\s*\\s*(=\\s*(((async\\s+)?((function\\s*[(<*])|(function\\s+)|([_$A-Za-z][_$0-9A-Za-z]*\\s*=>)))|((async\\s*)?(((<\\s*$)|([\\(]\\s*((([\\{\\[]\\s*)?$)|((\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})\\s*((:\\s*\\{?$)|((\\s*([^<>\\(\\)\\{\\}]|\\<([^<>]|\\<([^<>]|\\<[^<>]+\\>)+\\>)+\\>|\\([^\\(\\)]+\\)|\\{[^\\{\\}]+\\})+\\s*)?=\\s*)))|((\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\])\\s*((:\\s*\\[?$)|((\\s*([^<>\\(\\)\\{\\}]|\\<([^<>]|\\<([^<>]|\\<[^<>]+\\>)+\\>)+\\>|\\([^\\(\\)]+\\)|\\{[^\\{\\}]+\\})+\\s*)?=\\s*))))))|((<\\s*(((const\\s+)?[_$A-Za-z])|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\]))([^=<>]|=[^<]|\\<\\s*(((const\\s+)?[_$A-Za-z])|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\]))([^=<>]|=[^<]|\\<\\s*(((const\\s+)?[_$A-Za-z])|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\]))([^=<>]|=[^<])*\\>)*\\>)*>\\s*)?[(]\\s*(\\/\\*([^\\*]|(\\*[^\\/]))*\\*\\/\\s*)*(([)]\\s*:)|((\\.\\.\\.\\s*)?[_$A-Za-z][_$0-9A-Za-z]*\\s*:)))|([<]\\s*[_$A-Za-z][_$0-9A-Za-z]*\\s+extends\\s*[^=>])|((<\\s*(((const\\s+)?[_$A-Za-z])|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\]))([^=<>]|=[^<]|\\<\\s*(((const\\s+)?[_$A-Za-z])|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\]))([^=<>]|=[^<]|\\<\\s*(((const\\s+)?[_$A-Za-z])|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\]))([^=<>]|=[^<])*\\>)*\\>)*>\\s*)?\\(\\s*(\\/\\*([^\\*]|(\\*[^\\/]))*\\*\\/\\s*)*(([_$A-Za-z]|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\])|(\\.\\.\\.\\s*[_$A-Za-z]))([^()\\'\\\"\\`]|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\'([^\\'\\\\]|\\\\.)*\\')|(\\\"([^\\\"\\\\]|\\\\.)*\\\")|(\\`([^\\`\\\\]|\\\\.)*\\`))*)?\\)(\\s*:\\s*([^<>\\(\\)\\{\\}]|\\<([^<>]|\\<([^<>]|\\<[^<>]+\\>)+\\>)+\\>|\\([^\\(\\)]+\\)|\\{[^\\{\\}]+\\})+)?\\s*=>)))))|(:\\s*((<)|([(]\\s*(([)])|(\\.\\.\\.)|([_$0-9A-Za-z]+\\s*(([:,?=])|([)]\\s*=>)))))))|(:\\s*(?<![_$0-9A-Za-z])(?:(?<=\\.\\.\\.)|(?<!\\.))Function(?![_$0-9A-Za-z])(?:(?=\\.\\.\\.)|(?!\\.)))|(:\\s*((<\\s*$)|([\\(]\\s*((([\\{\\[]\\s*)?$)|((\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})\\s*((:\\s*\\{?$)|((\\s*([^<>\\(\\)\\{\\}]|\\<([^<>]|\\<([^<>]|\\<[^<>]+\\>)+\\>)+\\>|\\([^\\(\\)]+\\)|\\{[^\\{\\}]+\\})+\\s*)?=\\s*)))|((\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\])\\s*((:\\s*\\[?$)|((\\s*([^<>\\(\\)\\{\\}]|\\<([^<>]|\\<([^<>]|\\<[^<>]+\\>)+\\>)+\\>|\\([^\\(\\)]+\\)|\\{[^\\{\\}]+\\})+\\s*)?=\\s*)))))))|(:\\s*(=>|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(<[^<>]*>)|[^<>(),=])+=\\s*(((async\\s+)?((function\\s*[(<*])|(function\\s+)|([_$A-Za-z][_$0-9A-Za-z]*\\s*=>)))|((async\\s*)?(((<\\s*$)|([\\(]\\s*((([\\{\\[]\\s*)?$)|((\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})\\s*((:\\s*\\{?$)|((\\s*([^<>\\(\\)\\{\\}]|\\<([^<>]|\\<([^<>]|\\<[^<>]+\\>)+\\>)+\\>|\\([^\\(\\)]+\\)|\\{[^\\{\\}]+\\})+\\s*)?=\\s*)))|((\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\])\\s*((:\\s*\\[?$)|((\\s*([^<>\\(\\)\\{\\}]|\\<([^<>]|\\<([^<>]|\\<[^<>]+\\>)+\\>)+\\>|\\([^\\(\\)]+\\)|\\{[^\\{\\}]+\\})+\\s*)?=\\s*))))))|((<\\s*(((const\\s+)?[_$A-Za-z])|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\]))([^=<>]|=[^<]|\\<\\s*(((const\\s+)?[_$A-Za-z])|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\]))([^=<>]|=[^<]|\\<\\s*(((const\\s+)?[_$A-Za-z])|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\]))([^=<>]|=[^<])*\\>)*\\>)*>\\s*)?[(]\\s*(\\/\\*([^\\*]|(\\*[^\\/]))*\\*\\/\\s*)*(([)]\\s*:)|((\\.\\.\\.\\s*)?[_$A-Za-z][_$0-9A-Za-z]*\\s*:)))|([<]\\s*[_$A-Za-z][_$0-9A-Za-z]*\\s+extends\\s*[^=>])|((<\\s*(((const\\s+)?[_$A-Za-z])|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\]))([^=<>]|=[^<]|\\<\\s*(((const\\s+)?[_$A-Za-z])|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\]))([^=<>]|=[^<]|\\<\\s*(((const\\s+)?[_$A-Za-z])|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\]))([^=<>]|=[^<])*\\>)*\\>)*>\\s*)?\\(\\s*(\\/\\*([^\\*]|(\\*[^\\/]))*\\*\\/\\s*)*(([_$A-Za-z]|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\])|(\\.\\.\\.\\s*[_$A-Za-z]))([^()\\'\\\"\\`]|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\'([^\\'\\\\]|\\\\.)*\\')|(\\\"([^\\\"\\\\]|\\\\.)*\\\")|(\\`([^\\`\\\\]|\\\\.)*\\`))*)?\\)(\\s*:\\s*([^<>\\(\\)\\{\\}]|\\<([^<>]|\\<([^<>]|\\<[^<>]+\\>)+\\>)+\\>|\\([^\\(\\)]+\\)|\\{[^\\{\\}]+\\})+)?\\s*=>))))))" }, { match: "\\#?[_$A-Za-z][_$0-9A-Za-z]*", name: "meta.definition.property.js variable.object.property.js" }, { match: "\\?", name: "keyword.operator.optional.js" }, { match: "\\!", name: "keyword.operator.definiteassignment.js" }] }, "for-loop": { begin: "(?<![_$0-9A-Za-z])(?:(?<=\\.\\.\\.)|(?<!\\.))for(?=((\\s+|(\\s*\\/\\*([^\\*]|(\\*[^\\/]))*\\*\\/\\s*))await)?\\s*(\\/\\*([^\\*]|(\\*[^\\/]))*\\*\\/\\s*)?(\\())", beginCaptures: { 0: { name: "keyword.control.loop.js" } }, end: "(?<=\\))", patterns: [{ include: "#comment" }, { match: "await", name: "keyword.control.loop.js" }, { begin: "\\(", beginCaptures: { 0: { name: "meta.brace.round.js" } }, end: "\\)", endCaptures: { 0: { name: "meta.brace.round.js" } }, patterns: [{ include: "#var-expr" }, { include: "#expression" }, { include: "#punctuation-semicolon" }] }] }, "function-body": { patterns: [{ include: "#comment" }, { include: "#type-parameters" }, { include: "#function-parameters" }, { include: "#return-type" }, { include: "#type-function-return-type" }, { include: "#decl-block" }, { match: "\\*", name: "keyword.generator.asterisk.js" }] }, "function-call": { patterns: [{ begin: "(?=(((([_$A-Za-z][_$0-9A-Za-z]*)(\\s*\\??\\.\\s*(\\#?[_$A-Za-z][_$0-9A-Za-z]*))*)|(\\??\\.\\s*\\#?[_$A-Za-z][_$0-9A-Za-z]*))|(?<=[\\)]))\\s*(?:(\\?\\.\\s*)|(\\!))?((<\\s*(((keyof|infer|typeof|readonly)\\s+)|(([_$A-Za-z][_$0-9A-Za-z]*|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\])|(\\'([^\\'\\\\]|\\\\.)*\\')|(\\\"([^\\\"\\\\]|\\\\.)*\\\")|(\\`([^\\`\\\\]|\\\\.)*\\`))(?=\\s*([\\<\\>\\,\\.\\[]|=>|&(?!&)|\\|(?!\\|)))))([^<>\\(]|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(?<==)\\>|\\<\\s*(((keyof|infer|typeof|readonly)\\s+)|(([_$A-Za-z][_$0-9A-Za-z]*|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\])|(\\'([^\\'\\\\]|\\\\.)*\\')|(\\\"([^\\\"\\\\]|\\\\.)*\\\")|(\\`([^\\`\\\\]|\\\\.)*\\`))(?=\\s*([\\<\\>\\,\\.\\[]|=>|&(?!&)|\\|(?!\\|)))))(([^<>\\(]|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(?<==)\\>|\\<\\s*(((keyof|infer|typeof|readonly)\\s+)|(([_$A-Za-z][_$0-9A-Za-z]*|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\])|(\\'([^\\'\\\\]|\\\\.)*\\')|(\\\"([^\\\"\\\\]|\\\\.)*\\\")|(\\`([^\\`\\\\]|\\\\.)*\\`))(?=\\s*([\\<\\>\\,\\.\\[]|=>|&(?!&)|\\|(?!\\|)))))([^<>\\(]|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(?<==)\\>)*(?<!=)\\>))*(?<!=)\\>)*(?<!=)>\\s*)?\\())", end: "(?<=\\))(?!(((([_$A-Za-z][_$0-9A-Za-z]*)(\\s*\\??\\.\\s*(\\#?[_$A-Za-z][_$0-9A-Za-z]*))*)|(\\??\\.\\s*\\#?[_$A-Za-z][_$0-9A-Za-z]*))|(?<=[\\)]))\\s*(?:(\\?\\.\\s*)|(\\!))?((<\\s*(((keyof|infer|typeof|readonly)\\s+)|(([_$A-Za-z][_$0-9A-Za-z]*|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\])|(\\'([^\\'\\\\]|\\\\.)*\\')|(\\\"([^\\\"\\\\]|\\\\.)*\\\")|(\\`([^\\`\\\\]|\\\\.)*\\`))(?=\\s*([\\<\\>\\,\\.\\[]|=>|&(?!&)|\\|(?!\\|)))))([^<>\\(]|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(?<==)\\>|\\<\\s*(((keyof|infer|typeof|readonly)\\s+)|(([_$A-Za-z][_$0-9A-Za-z]*|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\])|(\\'([^\\'\\\\]|\\\\.)*\\')|(\\\"([^\\\"\\\\]|\\\\.)*\\\")|(\\`([^\\`\\\\]|\\\\.)*\\`))(?=\\s*([\\<\\>\\,\\.\\[]|=>|&(?!&)|\\|(?!\\|)))))(([^<>\\(]|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(?<==)\\>|\\<\\s*(((keyof|infer|typeof|readonly)\\s+)|(([_$A-Za-z][_$0-9A-Za-z]*|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\])|(\\'([^\\'\\\\]|\\\\.)*\\')|(\\\"([^\\\"\\\\]|\\\\.)*\\\")|(\\`([^\\`\\\\]|\\\\.)*\\`))(?=\\s*([\\<\\>\\,\\.\\[]|=>|&(?!&)|\\|(?!\\|)))))([^<>\\(]|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(?<==)\\>)*(?<!=)\\>))*(?<!=)\\>)*(?<!=)>\\s*)?\\())", patterns: [{ begin: "(?=(([_$A-Za-z][_$0-9A-Za-z]*)(\\s*\\??\\.\\s*(\\#?[_$A-Za-z][_$0-9A-Za-z]*))*)|(\\??\\.\\s*\\#?[_$A-Za-z][_$0-9A-Za-z]*))", end: "(?=\\s*(?:(\\?\\.\\s*)|(\\!))?((<\\s*(((keyof|infer|typeof|readonly)\\s+)|(([_$A-Za-z][_$0-9A-Za-z]*|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\])|(\\'([^\\'\\\\]|\\\\.)*\\')|(\\\"([^\\\"\\\\]|\\\\.)*\\\")|(\\`([^\\`\\\\]|\\\\.)*\\`))(?=\\s*([\\<\\>\\,\\.\\[]|=>|&(?!&)|\\|(?!\\|)))))([^<>\\(]|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(?<==)\\>|\\<\\s*(((keyof|infer|typeof|readonly)\\s+)|(([_$A-Za-z][_$0-9A-Za-z]*|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\])|(\\'([^\\'\\\\]|\\\\.)*\\')|(\\\"([^\\\"\\\\]|\\\\.)*\\\")|(\\`([^\\`\\\\]|\\\\.)*\\`))(?=\\s*([\\<\\>\\,\\.\\[]|=>|&(?!&)|\\|(?!\\|)))))(([^<>\\(]|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(?<==)\\>|\\<\\s*(((keyof|infer|typeof|readonly)\\s+)|(([_$A-Za-z][_$0-9A-Za-z]*|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\])|(\\'([^\\'\\\\]|\\\\.)*\\')|(\\\"([^\\\"\\\\]|\\\\.)*\\\")|(\\`([^\\`\\\\]|\\\\.)*\\`))(?=\\s*([\\<\\>\\,\\.\\[]|=>|&(?!&)|\\|(?!\\|)))))([^<>\\(]|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(?<==)\\>)*(?<!=)\\>))*(?<!=)\\>)*(?<!=)>\\s*)?\\())", name: "meta.function-call.js", patterns: [{ include: "#function-call-target" }] }, { include: "#comment" }, { include: "#function-call-optionals" }, { include: "#type-arguments" }, { include: "#paren-expression" }] }, { begin: "(?=(((([_$A-Za-z][_$0-9A-Za-z]*)(\\s*\\??\\.\\s*(\\#?[_$A-Za-z][_$0-9A-Za-z]*))*)|(\\??\\.\\s*\\#?[_$A-Za-z][_$0-9A-Za-z]*))|(?<=[\\)]))(<\\s*[\\{\\[\\(]\\s*$))", end: "(?<=\\>)(?!(((([_$A-Za-z][_$0-9A-Za-z]*)(\\s*\\??\\.\\s*(\\#?[_$A-Za-z][_$0-9A-Za-z]*))*)|(\\??\\.\\s*\\#?[_$A-Za-z][_$0-9A-Za-z]*))|(?<=[\\)]))(<\\s*[\\{\\[\\(]\\s*$))", patterns: [{ begin: "(?=(([_$A-Za-z][_$0-9A-Za-z]*)(\\s*\\??\\.\\s*(\\#?[_$A-Za-z][_$0-9A-Za-z]*))*)|(\\??\\.\\s*\\#?[_$A-Za-z][_$0-9A-Za-z]*))", end: "(?=(<\\s*[\\{\\[\\(]\\s*$))", name: "meta.function-call.js", patterns: [{ include: "#function-call-target" }] }, { include: "#comment" }, { include: "#function-call-optionals" }, { include: "#type-arguments" }] }] }, "function-call-optionals": { patterns: [{ match: "\\?\\.", name: "meta.function-call.js punctuation.accessor.optional.js" }, { match: "\\!", name: "meta.function-call.js keyword.operator.definiteassignment.js" }] }, "function-call-target": { patterns: [{ include: "#support-function-call-identifiers" }, { match: "(\\#?[_$A-Za-z][_$0-9A-Za-z]*)", name: "entity.name.function.js" }] }, "function-declaration": { begin: "(?<![_$0-9A-Za-z])(?:(?<=\\.\\.\\.)|(?<!\\.))(?:(\\bexport)\\s+)?(?:(\\bdeclare)\\s+)?(?:(async)\\s+)?(function\\b)(?:\\s*(\\*))?(?:(?:\\s+|(?<=\\*))([_$A-Za-z][_$0-9A-Za-z]*))?\\s*", beginCaptures: { 1: { name: "keyword.control.export.js" }, 2: { name: "storage.modifier.js" }, 3: { name: "storage.modifier.async.js" }, 4: { name: "storage.type.function.js" }, 5: { name: "keyword.generator.asterisk.js" }, 6: { name: "meta.definition.function.js entity.name.function.js" } }, end: "(?=;|^\\s*$|(?:^\\s*(?:abstract|async|(?:\\bawait\\s+(?:\\busing(?=\\s+(?!in\\b|of\\b(?!\\s*(?:of\\b|=)))[_$A-Za-z])\\b)\\b)|break|case|catch|class|const|continue|declare|do|else|enum|export|finally|function|for|goto|if|import|interface|let|module|namespace|switch|return|throw|try|type|(?:\\busing(?=\\s+(?!in\\b|of\\b(?!\\s*(?:of\\b|=)))[_$A-Za-z])\\b)|var|while)\\b))|(?<=\\})", name: "meta.function.js", patterns: [{ include: "#function-name" }, { include: "#function-body" }] }, "function-expression": { begin: "(?<![_$0-9A-Za-z])(?:(?<=\\.\\.\\.)|(?<!\\.))(?:(async)\\s+)?(function\\b)(?:\\s*(\\*))?(?:(?:\\s+|(?<=\\*))([_$A-Za-z][_$0-9A-Za-z]*))?\\s*", beginCaptures: { 1: { name: "storage.modifier.async.js" }, 2: { name: "storage.type.function.js" }, 3: { name: "keyword.generator.asterisk.js" }, 4: { name: "meta.definition.function.js entity.name.function.js" } }, end: "(?=;)|(?<=\\})", name: "meta.function.expression.js", patterns: [{ include: "#function-name" }, { include: "#single-line-comment-consuming-line-ending" }, { include: "#function-body" }] }, "function-name": { match: "[_$A-Za-z][_$0-9A-Za-z]*", name: "meta.definition.function.js entity.name.function.js" }, "function-parameters": { begin: "\\(", beginCaptures: { 0: { name: "punctuation.definition.parameters.begin.js" } }, end: "\\)", endCaptures: { 0: { name: "punctuation.definition.parameters.end.js" } }, name: "meta.parameters.js", patterns: [{ include: "#function-parameters-body" }] }, "function-parameters-body": { patterns: [{ include: "#comment" }, { include: "#string" }, { include: "#decorator" }, { include: "#destructuring-parameter" }, { include: "#parameter-name" }, { include: "#parameter-type-annotation" }, { include: "#variable-initializer" }, { match: ",", name: "punctuation.separator.parameter.js" }] }, identifiers: { patterns: [{ include: "#object-identifiers" }, { captures: { 1: { name: "punctuation.accessor.js" }, 2: { name: "punctuation.accessor.optional.js" }, 3: { name: "entity.name.function.js" } }, match: "(?:(?:(\\.)|(\\?\\.(?!\\s*[\\d])))\\s*)?([_$A-Za-z][_$0-9A-Za-z]*)(?=\\s*=\\s*(((async\\s+)?((function\\s*[(<*])|(function\\s+)|([_$A-Za-z][_$0-9A-Za-z]*\\s*=>)))|((async\\s*)?(((<\\s*$)|([\\(]\\s*((([\\{\\[]\\s*)?$)|((\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})\\s*((:\\s*\\{?$)|((\\s*([^<>\\(\\)\\{\\}]|\\<([^<>]|\\<([^<>]|\\<[^<>]+\\>)+\\>)+\\>|\\([^\\(\\)]+\\)|\\{[^\\{\\}]+\\})+\\s*)?=\\s*)))|((\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\])\\s*((:\\s*\\[?$)|((\\s*([^<>\\(\\)\\{\\}]|\\<([^<>]|\\<([^<>]|\\<[^<>]+\\>)+\\>)+\\>|\\([^\\(\\)]+\\)|\\{[^\\{\\}]+\\})+\\s*)?=\\s*))))))|((<\\s*(((const\\s+)?[_$A-Za-z])|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\]))([^=<>]|=[^<]|\\<\\s*(((const\\s+)?[_$A-Za-z])|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\]))([^=<>]|=[^<]|\\<\\s*(((const\\s+)?[_$A-Za-z])|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\]))([^=<>]|=[^<])*\\>)*\\>)*>\\s*)?[(]\\s*(\\/\\*([^\\*]|(\\*[^\\/]))*\\*\\/\\s*)*(([)]\\s*:)|((\\.\\.\\.\\s*)?[_$A-Za-z][_$0-9A-Za-z]*\\s*:)))|([<]\\s*[_$A-Za-z][_$0-9A-Za-z]*\\s+extends\\s*[^=>])|((<\\s*(((const\\s+)?[_$A-Za-z])|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\]))([^=<>]|=[^<]|\\<\\s*(((const\\s+)?[_$A-Za-z])|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\]))([^=<>]|=[^<]|\\<\\s*(((const\\s+)?[_$A-Za-z])|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\]))([^=<>]|=[^<])*\\>)*\\>)*>\\s*)?\\(\\s*(\\/\\*([^\\*]|(\\*[^\\/]))*\\*\\/\\s*)*(([_$A-Za-z]|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\])|(\\.\\.\\.\\s*[_$A-Za-z]))([^()\\'\\\"\\`]|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\'([^\\'\\\\]|\\\\.)*\\')|(\\\"([^\\\"\\\\]|\\\\.)*\\\")|(\\`([^\\`\\\\]|\\\\.)*\\`))*)?\\)(\\s*:\\s*([^<>\\(\\)\\{\\}]|\\<([^<>]|\\<([^<>]|\\<[^<>]+\\>)+\\>)+\\>|\\([^\\(\\)]+\\)|\\{[^\\{\\}]+\\})+)?\\s*=>)))))" }, { captures: { 1: { name: "punctuation.accessor.js" }, 2: { name: "punctuation.accessor.optional.js" }, 3: { name: "variable.other.constant.property.js" } }, match: "(?:(\\.)|(\\?\\.(?!\\s*[\\d])))\\s*(\\#?[A-Z][_$\\dA-Z]*)(?![_$0-9A-Za-z])" }, { captures: { 1: { name: "punctuation.accessor.js" }, 2: { name: "punctuation.accessor.optional.js" }, 3: { name: "variable.other.property.js" } }, match: "(?:(\\.)|(\\?\\.(?!\\s*[\\d])))\\s*(\\#?[_$A-Za-z][_$0-9A-Za-z]*)" }, { match: "([A-Z][_$\\dA-Z]*)(?![_$0-9A-Za-z])", name: "variable.other.constant.js" }, { match: "[_$A-Za-z][_$0-9A-Za-z]*", name: "variable.other.readwrite.js" }] }, "if-statement": { patterns: [{ begin: "(?<![_$0-9A-Za-z])(?:(?<=\\.\\.\\.)|(?<!\\.))(?=\\bif\\s*(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))\\s*(?!\\{))", end: "(?=;|$|\\})", patterns: [{ include: "#comment" }, { begin: "(?<![_$0-9A-Za-z])(?:(?<=\\.\\.\\.)|(?<!\\.))(if)\\s*(\\()", beginCaptures: { 1: { name: "keyword.control.conditional.js" }, 2: { name: "meta.brace.round.js" } }, end: "\\)", endCaptures: { 0: { name: "meta.brace.round.js" } }, patterns: [{ include: "#expression" }] }, { begin: "(?<=\\))\\s*\\/(?![\\/*])(?=(?:[^\\/\\\\\\[]|\\\\.|\\[([^\\]\\\\]|\\\\.)*\\])+\\/([dgimsuy]+|(?![\\/\\*])|(?=\\/\\*))(?!\\s*[a-zA-Z0-9_$]))", beginCaptures: { 0: { name: "punctuation.definition.string.begin.js" } }, end: "(/)([dgimsuy]*)", endCaptures: { 1: { name: "punctuation.definition.string.end.js" }, 2: { name: "keyword.other.js" } }, name: "string.regexp.js", patterns: [{ include: "#regexp" }] }, { include: "#statements" }] }] }, "import-declaration": { begin: "(?<![_$0-9A-Za-z])(?:(?<=\\.\\.\\.)|(?<!\\.))(?:(\\bexport)\\s+)?(?:(\\bdeclare)\\s+)?\\b(import)(?:\\s+(type)(?!\\s+from))?(?!\\s*[:\\(])(?![_$0-9A-Za-z])(?:(?=\\.\\.\\.)|(?!\\.))", beginCaptures: { 1: { name: "keyword.control.export.js" }, 2: { name: "storage.modifier.js" }, 3: { name: "keyword.control.import.js" }, 4: { name: "keyword.control.type.js" } }, end: "(?<!^import|[^\\._$0-9A-Za-z]import)(?=;|$|^)", name: "meta.import.js", patterns: [{ include: "#single-line-comment-consuming-line-ending" }, { include: "#comment" }, { include: "#string" }, { begin: `(?<=^import|[^\\._$0-9A-Za-z]import)(?!\\s*["'])`, end: "\\bfrom\\b", endCaptures: { 0: { name: "keyword.control.from.js" } }, patterns: [{ include: "#import-export-declaration" }] }, { include: "#import-export-declaration" }] }, "import-equals-declaration": { patterns: [{ begin: "(?<![_$0-9A-Za-z])(?:(?<=\\.\\.\\.)|(?<!\\.))(?:(\\bexport)\\s+)?(?:(\\bdeclare)\\s+)?\\b(import)(?:\\s+(type))?\\s+([_$A-Za-z][_$0-9A-Za-z]*)\\s*(=)\\s*(require)\\s*(\\()", beginCaptures: { 1: { name: "keyword.control.export.js" }, 2: { name: "storage.modifier.js" }, 3: { name: "keyword.control.import.js" }, 4: { name: "keyword.control.type.js" }, 5: { name: "variable.other.readwrite.alias.js" }, 6: { name: "keyword.operator.assignment.js" }, 7: { name: "keyword.control.require.js" }, 8: { name: "meta.brace.round.js" } }, end: "\\)", endCaptures: { 0: { name: "meta.brace.round.js" } }, name: "meta.import-equals.external.js", patterns: [{ include: "#comment" }, { include: "#string" }] }, { begin: "(?<![_$0-9A-Za-z])(?:(?<=\\.\\.\\.)|(?<!\\.))(?:(\\bexport)\\s+)?(?:(\\bdeclare)\\s+)?\\b(import)(?:\\s+(type))?\\s+([_$A-Za-z][_$0-9A-Za-z]*)\\s*(=)\\s*(?!require\\b)", beginCaptures: { 1: { name: "keyword.control.export.js" }, 2: { name: "storage.modifier.js" }, 3: { name: "keyword.control.import.js" }, 4: { name: "keyword.control.type.js" }, 5: { name: "variable.other.readwrite.alias.js" }, 6: { name: "keyword.operator.assignment.js" } }, end: "(?=;|$|^)", name: "meta.import-equals.internal.js", patterns: [{ include: "#single-line-comment-consuming-line-ending" }, { include: "#comment" }, { captures: { 1: { name: "entity.name.type.module.js" }, 2: { name: "punctuation.accessor.js" }, 3: { name: "punctuation.accessor.optional.js" } }, match: "([_$A-Za-z][_$0-9A-Za-z]*)\\s*(?:(\\.)|(\\?\\.(?!\\s*[\\d])))" }, { match: "([_$A-Za-z][_$0-9A-Za-z]*)", name: "variable.other.readwrite.js" }] }] }, "import-export-assert-clause": { begin: "(?<![_$0-9A-Za-z])(?:(?<=\\.\\.\\.)|(?<!\\.))(?:(with)|(assert))\\s*(\\{)", beginCaptures: { 1: { name: "keyword.control.with.js" }, 2: { name: "keyword.control.assert.js" }, 3: { name: "punctuation.definition.block.js" } }, end: "\\}", endCaptures: { 0: { name: "punctuation.definition.block.js" } }, patterns: [{ include: "#comment" }, { include: "#string" }, { match: "(?:[_$A-Za-z][_$0-9A-Za-z]*)\\s*(?=(\\/\\*([^\\*]|(\\*[^\\/]))*\\*\\/\\s*)*:)", name: "meta.object-literal.key.js" }, { match: ":", name: "punctuation.separator.key-value.js" }] }, "import-export-block": { begin: "\\{", beginCaptures: { 0: { name: "punctuation.definition.block.js" } }, end: "\\}", endCaptures: { 0: { name: "punctuation.definition.block.js" } }, name: "meta.block.js", patterns: [{ include: "#import-export-clause" }] }, "import-export-clause": { patterns: [{ include: "#comment" }, { captures: { 1: { name: "keyword.control.type.js" }, 2: { name: "keyword.control.default.js" }, 3: { name: "constant.language.import-export-all.js" }, 4: { name: "variable.other.readwrite.js" }, 5: { name: "keyword.control.as.js" }, 6: { name: "keyword.control.default.js" }, 7: { name: "variable.other.readwrite.alias.js" } }, match: "(?<![_$0-9A-Za-z])(?:(?<=\\.\\.\\.)|(?<!\\.))(?:(?:(\\btype)\\s+)?(?:(\\bdefault)|(\\*)|(\\b[_$A-Za-z][_$0-9A-Za-z]*)))\\s+(as)\\s+(?:(default(?![_$0-9A-Za-z])(?:(?=\\.\\.\\.)|(?!\\.)))|([_$A-Za-z][_$0-9A-Za-z]*))" }, { include: "#punctuation-comma" }, { match: "\\*", name: "constant.language.import-export-all.js" }, { match: "\\b(default)\\b", name: "keyword.control.default.js" }, { captures: { 1: { name: "keyword.control.type.js" }, 2: { name: "variable.other.readwrite.alias.js" } }, match: "(?:(\\btype)\\s+)?([_$A-Za-z][_$0-9A-Za-z]*)" }] }, "import-export-declaration": { patterns: [{ include: "#comment" }, { include: "#string" }, { include: "#import-export-block" }, { match: "\\bfrom\\b", name: "keyword.control.from.js" }, { include: "#import-export-assert-clause" }, { include: "#import-export-clause" }] }, "indexer-declaration": { begin: "(?:(?<![_$0-9A-Za-z])(?:(?<=\\.\\.\\.)|(?<!\\.))(readonly)\\s*)?\\s*(\\[)\\s*([_$A-Za-z][_$0-9A-Za-z]*)\\s*(?=:)", beginCaptures: { 1: { name: "storage.modifier.js" }, 2: { name: "meta.brace.square.js" }, 3: { name: "variable.parameter.js" } }, end: "(\\])\\s*(\\?\\s*)?|$", endCaptures: { 1: { name: "meta.brace.square.js" }, 2: { name: "keyword.operator.optional.js" } }, name: "meta.indexer.declaration.js", patterns: [{ include: "#type-annotation" }] }, "indexer-mapped-type-declaration": { begin: "(?:(?<![_$0-9A-Za-z])(?:(?<=\\.\\.\\.)|(?<!\\.))([+-])?(readonly)\\s*)?\\s*(\\[)\\s*([_$A-Za-z][_$0-9A-Za-z]*)\\s+(in)\\s+", beginCaptures: { 1: { name: "keyword.operator.type.modifier.js" }, 2: { name: "storage.modifier.js" }, 3: { name: "meta.brace.square.js" }, 4: { name: "entity.name.type.js" }, 5: { name: "keyword.operator.expression.in.js" } }, end: "(\\])([+-])?\\s*(\\?\\s*)?|$", endCaptures: { 1: { name: "meta.brace.square.js" }, 2: { name: "keyword.operator.type.modifier.js" }, 3: { name: "keyword.operator.optional.js" } }, name: "meta.indexer.mappedtype.declaration.js", patterns: [{ captures: { 1: { name: "keyword.control.as.js" } }, match: "(?<![_$0-9A-Za-z])(?:(?<=\\.\\.\\.)|(?<!\\.))(as)\\s+" }, { include: "#type" }] }, "inline-tags": { patterns: [{ captures: { 1: { name: "punctuation.definition.bracket.square.begin.jsdoc" }, 2: { name: "punctuation.definition.bracket.square.end.jsdoc" } }, match: "(\\[)[^\\]]+(\\])(?={@(?:link|linkcode|linkplain|tutorial))", name: "constant.other.description.jsdoc" }, { begin: "({)((@)(?:link(?:code|plain)?|tutorial))\\s*", beginCaptures: { 1: { name: "punctuation.definition.bracket.curly.begin.jsdoc" }, 2: { name: "storage.type.class.jsdoc" }, 3: { name: "punctuation.definition.inline.tag.jsdoc" } }, end: "}|(?=\\*/)", endCaptures: { 0: { name: "punctuation.definition.bracket.curly.end.jsdoc" } }, name: "entity.name.type.instance.jsdoc", patterns: [{ captures: { 1: { name: "variable.other.link.underline.jsdoc" }, 2: { name: "punctuation.separator.pipe.jsdoc" } }, match: "\\G((?=https?://)(?:[^|}\\s*]|\\*[/])+)(\\|)?" }, { captures: { 1: { name: "variable.other.description.jsdoc" }, 2: { name: "punctuation.separator.pipe.jsdoc" } }, match: "\\G((?:[^{}@\\s|*]|\\*[^/])+)(\\|)?" }] }] }, "instanceof-expr": { begin: "(?<![_$0-9A-Za-z])(?:(?<=\\.\\.\\.)|(?<!\\.))(instanceof)(?![_$0-9A-Za-z])(?:(?=\\.\\.\\.)|(?!\\.))", beginCaptures: { 1: { name: "keyword.operator.expression.instanceof.js" } }, end: "(?<=\\))|(?=[;),}\\]:?\\-\\+\\>]|\\|\\||\\&\\&|\\!\\=\\=|$|(===|!==|==|!=)|(([\\&\\~\\^\\|]\\s*)?[_$A-Za-z][_$0-9A-Za-z]*\\s+instanceof(?![_$0-9A-Za-z])(?:(?=\\.\\.\\.)|(?!\\.)))|((?<![_$0-9A-Za-z])(?:(?<=\\.\\.\\.)|(?<!\\.))function((\\s+[_$A-Za-z][_$0-9A-Za-z]*)|(\\s*[\\(]))))", patterns: [{ include: "#type" }] }, "interface-declaration": { begin: "(?<![_$0-9A-Za-z])(?:(?<=\\.\\.\\.)|(?<!\\.))(?:(\\bexport)\\s+)?(?:(\\bdeclare)\\s+)?\\b(?:(abstract)\\s+)?\\b(interface)\\b(?=\\s+|/[/*])", beginCaptures: { 1: { name: "keyword.control.export.js" }, 2: { name: "storage.modifier.js" }, 3: { name: "storage.modifier.js" }, 4: { name: "storage.type.interface.js" } }, end: "(?<=\\})", name: "meta.interface.js", patterns: [{ include: "#comment" }, { include: "#class-or-interface-heritage" }, { captures: { 0: { name: "entity.name.type.interface.js" } }, match: "[_$A-Za-z][_$0-9A-Za-z]*" }, { include: "#type-parameters" }, { include: "#class-or-interface-body" }] }, jsdoctype: { patterns: [{ begin: "\\G({)", beginCaptures: { 0: { name: "entity.name.type.instance.jsdoc" }, 1: { name: "punctuation.definition.bracket.curly.begin.jsdoc" } }, contentName: "entity.name.type.instance.jsdoc", end: "((}))\\s*|(?=\\*/)", endCaptures: { 1: { name: "entity.name.type.instance.jsdoc" }, 2: { name: "punctuation.definition.bracket.curly.end.jsdoc" } }, patterns: [{ include: "#brackets" }] }] }, jsx: { patterns: [{ include: "#jsx-tag-without-attributes-in-expression" }, { include: "#jsx-tag-in-expression" }] }, "jsx-children": { patterns: [{ include: "#jsx-tag-without-attributes" }, { include: "#jsx-tag" }, { include: "#jsx-evaluated-code" }, { include: "#jsx-entities" }] }, "jsx-entities": { patterns: [{ captures: { 1: { name: "punctuation.definition.entity.js" }, 3: { name: "punctuation.definition.entity.js" } }, match: "(&)([a-zA-Z0-9]+|#\\d+|#x[0-9a-fA-F]+)(;)", name: "constant.character.entity.js" }] }, "jsx-evaluated-code": { begin: "\\{", beginCaptures: { 0: { name: "punctuation.section.embedded.begin.js" } }, contentName: "meta.embedded.expression.js", end: "\\}", endCaptures: { 0: { name: "punctuation.section.embedded.end.js" } }, patterns: [{ include: "#expression" }] }, "jsx-string-double-quoted": { begin: '"', beginCaptures: { 0: { name: "punctuation.definition.string.begin.js" } }, end: '"', endCaptures: { 0: { name: "punctuation.definition.string.end.js" } }, name: "string.quoted.double.js", patterns: [{ include: "#jsx-entities" }] }, "jsx-string-single-quoted": { begin: "'", beginCaptures: { 0: { name: "punctuation.definition.string.begin.js" } }, end: "'", endCaptures: { 0: { name: "punctuation.definition.string.end.js" } }, name: "string.quoted.single.js", patterns: [{ include: "#jsx-entities" }] }, "jsx-tag": { begin: "(?=(<)\\s*(?:([_$A-Za-z][-_$0-9A-Za-z.]*)(?<!\\.|-)(:))?((?:[a-z][a-z0-9]*|([_$A-Za-z][-_$0-9A-Za-z.]*))(?<!\\.|-))(?=((<\\s*)|(\\s+))(?!\\?)|\\/?>))", end: "(/>)|(?:(</)\\s*(?:([_$A-Za-z][-_$0-9A-Za-z.]*)(?<!\\.|-)(:))?((?:[a-z][a-z0-9]*|([_$A-Za-z][-_$0-9A-Za-z.]*))(?<!\\.|-))?\\s*(>))", endCaptures: { 1: { name: "punctuation.definition.tag.end.js" }, 2: { name: "punctuation.definition.tag.begin.js" }, 3: { name: "entity.name.tag.namespace.js" }, 4: { name: "punctuation.separator.namespace.js" }, 5: { name: "entity.name.tag.js" }, 6: { name: "support.class.component.js" }, 7: { name: "punctuation.definition.tag.end.js" } }, name: "meta.tag.js", patterns: [{ begin: "(<)\\s*(?:([_$A-Za-z][-_$0-9A-Za-z.]*)(?<!\\.|-)(:))?((?:[a-z][a-z0-9]*|([_$A-Za-z][-_$0-9A-Za-z.]*))(?<!\\.|-))(?=((<\\s*)|(\\s+))(?!\\?)|\\/?>)", beginCaptures: { 1: { name: "punctuation.definition.tag.begin.js" }, 2: { name: "entity.name.tag.namespace.js" }, 3: { name: "punctuation.separator.namespace.js" }, 4: { name: "entity.name.tag.js" }, 5: { name: "support.class.component.js" } }, end: "(?=[/]?>)", patterns: [{ include: "#comment" }, { include: "#type-arguments" }, { include: "#jsx-tag-attributes" }] }, { begin: "(>)", beginCaptures: { 1: { name: "punctuation.definition.tag.end.js" } }, contentName: "meta.jsx.children.js", end: "(?=</)", patterns: [{ include: "#jsx-children" }] }] }, "jsx-tag-attribute-assignment": { match: `=(?=\\s*(?:'|"|{|/\\*|//|\\n))`, name: "keyword.operator.assignment.js" }, "jsx-tag-attribute-name": { captures: { 1: { name: "entity.other.attribute-name.namespace.js" }, 2: { name: "punctuation.separator.namespace.js" }, 3: { name: "entity.other.attribute-name.js" } }, match: "\\s*(?:([_$A-Za-z][-_$0-9A-Za-z.]*)(:))?([_$A-Za-z][-_$0-9A-Za-z]*)(?=\\s|=|/?>|/\\*|//)" }, "jsx-tag-attributes": { begin: "\\s+", end: "(?=[/]?>)", name: "meta.tag.attributes.js", patterns: [{ include: "#comment" }, { include: "#jsx-tag-attribute-name" }, { include: "#jsx-tag-attribute-assignment" }, { include: "#jsx-string-double-quoted" }, { include: "#jsx-string-single-quoted" }, { include: "#jsx-evaluated-code" }, { include: "#jsx-tag-attributes-illegal" }] }, "jsx-tag-attributes-illegal": { match: "\\S+", name: "invalid.illegal.attribute.js" }, "jsx-tag-in-expression": { begin: "(?<!\\+\\+|--)(?<=[({\\[,?=>:*]|&&|\\|\\||\\?|\\*\\/|^await|[^\\._$0-9A-Za-z]await|^return|[^\\._$0-9A-Za-z]return|^default|[^\\._$0-9A-Za-z]default|^yield|[^\\._$0-9A-Za-z]yield|^)\\s*(?!<\\s*[_$A-Za-z][_$0-9A-Za-z]*((\\s+extends\\s+[^=>])|,))(?=(<)\\s*(?:([_$A-Za-z][-_$0-9A-Za-z.]*)(?<!\\.|-)(:))?((?:[a-z][a-z0-9]*|([_$A-Za-z][-_$0-9A-Za-z.]*))(?<!\\.|-))(?=((<\\s*)|(\\s+))(?!\\?)|\\/?>))", end: "(?!(<)\\s*(?:([_$A-Za-z][-_$0-9A-Za-z.]*)(?<!\\.|-)(:))?((?:[a-z][a-z0-9]*|([_$A-Za-z][-_$0-9A-Za-z.]*))(?<!\\.|-))(?=((<\\s*)|(\\s+))(?!\\?)|\\/?>))", patterns: [{ include: "#jsx-tag" }] }, "jsx-tag-without-attributes": { begin: "(<)\\s*(?:([_$A-Za-z][-_$0-9A-Za-z.]*)(?<!\\.|-)(:))?((?:[a-z][a-z0-9]*|([_$A-Za-z][-_$0-9A-Za-z.]*))(?<!\\.|-))?\\s*(>)", beginCaptures: { 1: { name: "punctuation.definition.tag.begin.js" }, 2: { name: "entity.name.tag.namespace.js" }, 3: { name: "punctuation.separator.namespace.js" }, 4: { name: "entity.name.tag.js" }, 5: { name: "support.class.component.js" }, 6: { name: "punctuation.definition.tag.end.js" } }, contentName: "meta.jsx.children.js", end: "(</)\\s*(?:([_$A-Za-z][-_$0-9A-Za-z.]*)(?<!\\.|-)(:))?((?:[a-z][a-z0-9]*|([_$A-Za-z][-_$0-9A-Za-z.]*))(?<!\\.|-))?\\s*(>)", endCaptures: { 1: { name: "punctuation.definition.tag.begin.js" }, 2: { name: "entity.name.tag.namespace.js" }, 3: { name: "punctuation.separator.namespace.js" }, 4: { name: "entity.name.tag.js" }, 5: { name: "support.class.component.js" }, 6: { name: "punctuation.definition.tag.end.js" } }, name: "meta.tag.without-attributes.js", patterns: [{ include: "#jsx-children" }] }, "jsx-tag-without-attributes-in-expression": { begin: "(?<!\\+\\+|--)(?<=[({\\[,?=>:*]|&&|\\|\\||\\?|\\*\\/|^await|[^\\._$0-9A-Za-z]await|^return|[^\\._$0-9A-Za-z]return|^default|[^\\._$0-9A-Za-z]default|^yield|[^\\._$0-9A-Za-z]yield|^)\\s*(?=(<)\\s*(?:([_$A-Za-z][-_$0-9A-Za-z.]*)(?<!\\.|-)(:))?((?:[a-z][a-z0-9]*|([_$A-Za-z][-_$0-9A-Za-z.]*))(?<!\\.|-))?\\s*(>))", end: "(?!(<)\\s*(?:([_$A-Za-z][-_$0-9A-Za-z.]*)(?<!\\.|-)(:))?((?:[a-z][a-z0-9]*|([_$A-Za-z][-_$0-9A-Za-z.]*))(?<!\\.|-))?\\s*(>))", patterns: [{ include: "#jsx-tag-without-attributes" }] }, label: { patterns: [{ begin: "([_$A-Za-z][_$0-9A-Za-z]*)\\s*(:)(?=\\s*\\{)", beginCaptures: { 1: { name: "entity.name.label.js" }, 2: { name: "punctuation.separator.label.js" } }, end: "(?<=\\})", patterns: [{ include: "#decl-block" }] }, { captures: { 1: { name: "entity.name.label.js" }, 2: { name: "punctuation.separator.label.js" } }, match: "([_$A-Za-z][_$0-9A-Za-z]*)\\s*(:)" }] }, literal: { patterns: [{ include: "#numeric-literal" }, { include: "#boolean-literal" }, { include: "#null-literal" }, { include: "#undefined-literal" }, { include: "#numericConstant-literal" }, { include: "#array-literal" }, { include: "#this-literal" }, { include: "#super-literal" }] }, "method-declaration": { patterns: [{ begin: "(?<![_$0-9A-Za-z])(?:(?<=\\.\\.\\.)|(?<!\\.))(?:\\b(override)\\s+)?(?:\\b(public|private|protected)\\s+)?(?:\\b(abstract)\\s+)?(?:\\b(async)\\s+)?\\s*\\b(constructor)\\b(?!:)(?![_$0-9A-Za-z])(?:(?=\\.\\.\\.)|(?!\\.))", beginCaptures: { 1: { name: "storage.modifier.js" }, 2: { name: "storage.modifier.js" }, 3: { name: "storage.modifier.js" }, 4: { name: "storage.modifier.async.js" }, 5: { name: "storage.type.js" } }, end: "(?=\\}|;|,|$)|(?<=\\})", name: "meta.method.declaration.js", patterns: [{ include: "#method-declaration-name" }, { include: "#function-body" }] }, { begin: "(?<![_$0-9A-Za-z])(?:(?<=\\.\\.\\.)|(?<!\\.))(?:\\b(override)\\s+)?(?:\\b(public|private|protected)\\s+)?(?:\\b(abstract)\\s+)?(?:\\b(async)\\s+)?(?:(?:\\s*\\b(new)\\b(?!:)(?![_$0-9A-Za-z])(?:(?=\\.\\.\\.)|(?!\\.)))|(?:(\\*)\\s*)?)(?=\\s*((<\\s*(((const\\s+)?[_$A-Za-z])|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\]))([^=<>]|=[^<]|\\<\\s*(((const\\s+)?[_$A-Za-z])|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\]))([^=<>]|=[^<]|\\<\\s*(((const\\s+)?[_$A-Za-z])|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\]))([^=<>]|=[^<])*\\>)*\\>)*>\\s*))?[\\(])", beginCaptures: { 1: { name: "storage.modifier.js" }, 2: { name: "storage.modifier.js" }, 3: { name: "storage.modifier.js" }, 4: { name: "storage.modifier.async.js" }, 5: { name: "keyword.operator.new.js" }, 6: { name: "keyword.generator.asterisk.js" } }, end: "(?=\\}|;|,|$)|(?<=\\})", name: "meta.method.declaration.js", patterns: [{ include: "#method-declaration-name" }, { include: "#function-body" }] }, { begin: "(?<![_$0-9A-Za-z])(?:(?<=\\.\\.\\.)|(?<!\\.))(?:\\b(override)\\s+)?(?:\\b(public|private|protected)\\s+)?(?:\\b(abstract)\\s+)?(?:\\b(async)\\s+)?(?:\\b(get|set)\\s+)?(?:(\\*)\\s*)?(?=\\s*(((\\b(?<!\\$)0(?:x|X)[0-9a-fA-F][0-9a-fA-F_]*(n)?\\b(?!\\$))|(\\b(?<!\\$)0(?:b|B)[01][01_]*(n)?\\b(?!\\$))|(\\b(?<!\\$)0(?:o|O)?[0-7][0-7_]*(n)?\\b(?!\\$))|((?<!\\$)(?:(?:\\b\\d[0-9_]*(\\.)\\d[0-9_]*[eE][+-]?\\d[0-9_]*(n)?\\b)|(?:\\b\\d[0-9_]*(\\.)[eE][+-]?\\d[0-9_]*(n)?\\b)|(?:\\B(\\.)\\d[0-9_]*[eE][+-]?\\d[0-9_]*(n)?\\b)|(?:\\b\\d[0-9_]*[eE][+-]?\\d[0-9_]*(n)?\\b)|(?:\\b\\d[0-9_]*(\\.)\\d[0-9_]*(n)?\\b)|(?:\\b\\d[0-9_]*(\\.)(n)?\\B)|(?:\\B(\\.)\\d[0-9_]*(n)?\\b)|(?:\\b\\d[0-9_]*(n)?\\b(?!\\.)))(?!\\$))|([_$A-Za-z][_$0-9A-Za-z]*)|(\\'([^\\'\\\\]|\\\\.)*\\')|(\\\"([^\\\"\\\\]|\\\\.)*\\\")|(\\`([^\\`\\\\]|\\\\.)*\\`)|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])+\\]))\\s*(\\??))\\s*((<\\s*(((const\\s+)?[_$A-Za-z])|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\]))([^=<>]|=[^<]|\\<\\s*(((const\\s+)?[_$A-Za-z])|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\]))([^=<>]|=[^<]|\\<\\s*(((const\\s+)?[_$A-Za-z])|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\]))([^=<>]|=[^<])*\\>)*\\>)*>\\s*))?[\\(])", beginCaptures: { 1: { name: "storage.modifier.js" }, 2: { name: "storage.modifier.js" }, 3: { name: "storage.modifier.js" }, 4: { name: "storage.modifier.async.js" }, 5: { name: "storage.type.property.js" }, 6: { name: "keyword.generator.asterisk.js" } }, end: "(?=\\}|;|,|$)|(?<=\\})", name: "meta.method.declaration.js", patterns: [{ include: "#method-declaration-name" }, { include: "#function-body" }] }] }, "method-declaration-name": { begin: "(?=((\\b(?<!\\$)0(?:x|X)[0-9a-fA-F][0-9a-fA-F_]*(n)?\\b(?!\\$))|(\\b(?<!\\$)0(?:b|B)[01][01_]*(n)?\\b(?!\\$))|(\\b(?<!\\$)0(?:o|O)?[0-7][0-7_]*(n)?\\b(?!\\$))|((?<!\\$)(?:(?:\\b\\d[0-9_]*(\\.)\\d[0-9_]*[eE][+-]?\\d[0-9_]*(n)?\\b)|(?:\\b\\d[0-9_]*(\\.)[eE][+-]?\\d[0-9_]*(n)?\\b)|(?:\\B(\\.)\\d[0-9_]*[eE][+-]?\\d[0-9_]*(n)?\\b)|(?:\\b\\d[0-9_]*[eE][+-]?\\d[0-9_]*(n)?\\b)|(?:\\b\\d[0-9_]*(\\.)\\d[0-9_]*(n)?\\b)|(?:\\b\\d[0-9_]*(\\.)(n)?\\B)|(?:\\B(\\.)\\d[0-9_]*(n)?\\b)|(?:\\b\\d[0-9_]*(n)?\\b(?!\\.)))(?!\\$))|([_$A-Za-z][_$0-9A-Za-z]*)|(\\'([^\\'\\\\]|\\\\.)*\\')|(\\\"([^\\\"\\\\]|\\\\.)*\\\")|(\\`([^\\`\\\\]|\\\\.)*\\`)|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])+\\]))\\s*(\\??)\\s*[\\(\\<])", end: "(?=\\(|\\<)", patterns: [{ include: "#string" }, { include: "#array-literal" }, { include: "#numeric-literal" }, { match: "[_$A-Za-z][_$0-9A-Za-z]*", name: "meta.definition.method.js entity.name.function.js" }, { match: "\\?", name: "keyword.operator.optional.js" }] }, "namespace-declaration": { begin: "(?:(?<![_$0-9A-Za-z])(?:(?<=\\.\\.\\.)|(?<!\\.))(?:(\\bexport)\\s+)?(?:(\\bdeclare)\\s+)?\\b(namespace|module)\\s+(?=[_$A-Za-z\"'`]))", beginCaptures: { 1: { name: "keyword.control.export.js" }, 2: { name: "storage.modifier.js" }, 3: { name: "storage.type.namespace.js" } }, end: "(?<=\\})|(?=;|^\\s*$|(?:^\\s*(?:abstract|async|(?:\\bawait\\s+(?:\\busing(?=\\s+(?!in\\b|of\\b(?!\\s*(?:of\\b|=)))[_$A-Za-z])\\b)\\b)|break|case|catch|class|const|continue|declare|do|else|enum|export|finally|function|for|goto|if|import|interface|let|module|namespace|switch|return|throw|try|type|(?:\\busing(?=\\s+(?!in\\b|of\\b(?!\\s*(?:of\\b|=)))[_$A-Za-z])\\b)|var|while)\\b))", name: "meta.namespace.declaration.js", patterns: [{ include: "#comment" }, { include: "#string" }, { match: "([_$A-Za-z][_$0-9A-Za-z]*)", name: "entity.name.type.module.js" }, { include: "#punctuation-accessor" }, { include: "#decl-block" }] }, "new-expr": { begin: "(?<![_$0-9A-Za-z])(?:(?<=\\.\\.\\.)|(?<!\\.))(new)(?![_$0-9A-Za-z])(?:(?=\\.\\.\\.)|(?!\\.))", beginCaptures: { 1: { name: "keyword.operator.new.js" } }, end: "(?<=\\))|(?=[;),}\\]:?\\-\\+\\>]|\\|\\||\\&\\&|\\!\\=\\=|$|((?<![_$0-9A-Za-z])(?:(?<=\\.\\.\\.)|(?<!\\.))new(?![_$0-9A-Za-z])(?:(?=\\.\\.\\.)|(?!\\.)))|((?<![_$0-9A-Za-z])(?:(?<=\\.\\.\\.)|(?<!\\.))function((\\s+[_$A-Za-z][_$0-9A-Za-z]*)|(\\s*[\\(]))))", name: "new.expr.js", patterns: [{ include: "#expression" }] }, "null-literal": { match: "(?<![_$0-9A-Za-z])(?:(?<=\\.\\.\\.)|(?<!\\.))null(?![_$0-9A-Za-z])(?:(?=\\.\\.\\.)|(?!\\.))", name: "constant.language.null.js" }, "numeric-literal": { patterns: [{ captures: { 1: { name: "storage.type.numeric.bigint.js" } }, match: "\\b(?<!\\$)0(?:x|X)[0-9a-fA-F][0-9a-fA-F_]*(n)?\\b(?!\\$)", name: "constant.numeric.hex.js" }, { captures: { 1: { name: "storage.type.numeric.bigint.js" } }, match: "\\b(?<!\\$)0(?:b|B)[01][01_]*(n)?\\b(?!\\$)", name: "constant.numeric.binary.js" }, { captures: { 1: { name: "storage.type.numeric.bigint.js" } }, match: "\\b(?<!\\$)0(?:o|O)?[0-7][0-7_]*(n)?\\b(?!\\$)", name: "constant.numeric.octal.js" }, { captures: { 0: { name: "constant.numeric.decimal.js" }, 1: { name: "meta.delimiter.decimal.period.js" }, 2: { name: "storage.type.numeric.bigint.js" }, 3: { name: "meta.delimiter.decimal.period.js" }, 4: { name: "storage.type.numeric.bigint.js" }, 5: { name: "meta.delimiter.decimal.period.js" }, 6: { name: "storage.type.numeric.bigint.js" }, 7: { name: "storage.type.numeric.bigint.js" }, 8: { name: "meta.delimiter.decimal.period.js" }, 9: { name: "storage.type.numeric.bigint.js" }, 10: { name: "meta.delimiter.decimal.period.js" }, 11: { name: "storage.type.numeric.bigint.js" }, 12: { name: "meta.delimiter.decimal.period.js" }, 13: { name: "storage.type.numeric.bigint.js" }, 14: { name: "storage.type.numeric.bigint.js" } }, match: "(?<!\\$)(?:(?:\\b\\d[0-9_]*(\\.)\\d[0-9_]*[eE][+-]?\\d[0-9_]*(n)?\\b)|(?:\\b\\d[0-9_]*(\\.)[eE][+-]?\\d[0-9_]*(n)?\\b)|(?:\\B(\\.)\\d[0-9_]*[eE][+-]?\\d[0-9_]*(n)?\\b)|(?:\\b\\d[0-9_]*[eE][+-]?\\d[0-9_]*(n)?\\b)|(?:\\b\\d[0-9_]*(\\.)\\d[0-9_]*(n)?\\b)|(?:\\b\\d[0-9_]*(\\.)(n)?\\B)|(?:\\B(\\.)\\d[0-9_]*(n)?\\b)|(?:\\b\\d[0-9_]*(n)?\\b(?!\\.)))(?!\\$)" }] }, "numericConstant-literal": { patterns: [{ match: "(?<![_$0-9A-Za-z])(?:(?<=\\.\\.\\.)|(?<!\\.))NaN(?![_$0-9A-Za-z])(?:(?=\\.\\.\\.)|(?!\\.))", name: "constant.language.nan.js" }, { match: "(?<![_$0-9A-Za-z])(?:(?<=\\.\\.\\.)|(?<!\\.))Infinity(?![_$0-9A-Za-z])(?:(?=\\.\\.\\.)|(?!\\.))", name: "constant.language.infinity.js" }] }, "object-binding-element": { patterns: [{ include: "#comment" }, { begin: "(?=((\\b(?<!\\$)0(?:x|X)[0-9a-fA-F][0-9a-fA-F_]*(n)?\\b(?!\\$))|(\\b(?<!\\$)0(?:b|B)[01][01_]*(n)?\\b(?!\\$))|(\\b(?<!\\$)0(?:o|O)?[0-7][0-7_]*(n)?\\b(?!\\$))|((?<!\\$)(?:(?:\\b\\d[0-9_]*(\\.)\\d[0-9_]*[eE][+-]?\\d[0-9_]*(n)?\\b)|(?:\\b\\d[0-9_]*(\\.)[eE][+-]?\\d[0-9_]*(n)?\\b)|(?:\\B(\\.)\\d[0-9_]*[eE][+-]?\\d[0-9_]*(n)?\\b)|(?:\\b\\d[0-9_]*[eE][+-]?\\d[0-9_]*(n)?\\b)|(?:\\b\\d[0-9_]*(\\.)\\d[0-9_]*(n)?\\b)|(?:\\b\\d[0-9_]*(\\.)(n)?\\B)|(?:\\B(\\.)\\d[0-9_]*(n)?\\b)|(?:\\b\\d[0-9_]*(n)?\\b(?!\\.)))(?!\\$))|([_$A-Za-z][_$0-9A-Za-z]*)|(\\'([^\\'\\\\]|\\\\.)*\\')|(\\\"([^\\\"\\\\]|\\\\.)*\\\")|(\\`([^\\`\\\\]|\\\\.)*\\`)|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])+\\]))\\s*(:))", end: "(?=,|\\})", patterns: [{ include: "#object-binding-element-propertyName" }, { include: "#binding-element" }] }, { include: "#object-binding-pattern" }, { include: "#destructuring-variable-rest" }, { include: "#variable-initializer" }, { include: "#punctuation-comma" }] }, "object-binding-element-const": { patterns: [{ include: "#comment" }, { begin: "(?=((\\b(?<!\\$)0(?:x|X)[0-9a-fA-F][0-9a-fA-F_]*(n)?\\b(?!\\$))|(\\b(?<!\\$)0(?:b|B)[01][01_]*(n)?\\b(?!\\$))|(\\b(?<!\\$)0(?:o|O)?[0-7][0-7_]*(n)?\\b(?!\\$))|((?<!\\$)(?:(?:\\b\\d[0-9_]*(\\.)\\d[0-9_]*[eE][+-]?\\d[0-9_]*(n)?\\b)|(?:\\b\\d[0-9_]*(\\.)[eE][+-]?\\d[0-9_]*(n)?\\b)|(?:\\B(\\.)\\d[0-9_]*[eE][+-]?\\d[0-9_]*(n)?\\b)|(?:\\b\\d[0-9_]*[eE][+-]?\\d[0-9_]*(n)?\\b)|(?:\\b\\d[0-9_]*(\\.)\\d[0-9_]*(n)?\\b)|(?:\\b\\d[0-9_]*(\\.)(n)?\\B)|(?:\\B(\\.)\\d[0-9_]*(n)?\\b)|(?:\\b\\d[0-9_]*(n)?\\b(?!\\.)))(?!\\$))|([_$A-Za-z][_$0-9A-Za-z]*)|(\\'([^\\'\\\\]|\\\\.)*\\')|(\\\"([^\\\"\\\\]|\\\\.)*\\\")|(\\`([^\\`\\\\]|\\\\.)*\\`)|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])+\\]))\\s*(:))", end: "(?=,|\\})", patterns: [{ include: "#object-binding-element-propertyName" }, { include: "#binding-element-const" }] }, { include: "#object-binding-pattern-const" }, { include: "#destructuring-variable-rest-const" }, { include: "#variable-initializer" }, { include: "#punctuation-comma" }] }, "object-binding-element-propertyName": { begin: "(?=((\\b(?<!\\$)0(?:x|X)[0-9a-fA-F][0-9a-fA-F_]*(n)?\\b(?!\\$))|(\\b(?<!\\$)0(?:b|B)[01][01_]*(n)?\\b(?!\\$))|(\\b(?<!\\$)0(?:o|O)?[0-7][0-7_]*(n)?\\b(?!\\$))|((?<!\\$)(?:(?:\\b\\d[0-9_]*(\\.)\\d[0-9_]*[eE][+-]?\\d[0-9_]*(n)?\\b)|(?:\\b\\d[0-9_]*(\\.)[eE][+-]?\\d[0-9_]*(n)?\\b)|(?:\\B(\\.)\\d[0-9_]*[eE][+-]?\\d[0-9_]*(n)?\\b)|(?:\\b\\d[0-9_]*[eE][+-]?\\d[0-9_]*(n)?\\b)|(?:\\b\\d[0-9_]*(\\.)\\d[0-9_]*(n)?\\b)|(?:\\b\\d[0-9_]*(\\.)(n)?\\B)|(?:\\B(\\.)\\d[0-9_]*(n)?\\b)|(?:\\b\\d[0-9_]*(n)?\\b(?!\\.)))(?!\\$))|([_$A-Za-z][_$0-9A-Za-z]*)|(\\'([^\\'\\\\]|\\\\.)*\\')|(\\\"([^\\\"\\\\]|\\\\.)*\\\")|(\\`([^\\`\\\\]|\\\\.)*\\`)|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])+\\]))\\s*(:))", end: "(:)", endCaptures: { 0: { name: "punctuation.destructuring.js" } }, patterns: [{ include: "#string" }, { include: "#array-literal" }, { include: "#numeric-literal" }, { match: "([_$A-Za-z][_$0-9A-Za-z]*)", name: "variable.object.property.js" }] }, "object-binding-pattern": { begin: "(?:(\\.\\.\\.)\\s*)?(\\{)", beginCaptures: { 1: { name: "keyword.operator.rest.js" }, 2: { name: "punctuation.definition.binding-pattern.object.js" } }, end: "\\}", endCaptures: { 0: { name: "punctuation.definition.binding-pattern.object.js" } }, patterns: [{ include: "#object-binding-element" }] }, "object-binding-pattern-const": { begin: "(?:(\\.\\.\\.)\\s*)?(\\{)", beginCaptures: { 1: { name: "keyword.operator.rest.js" }, 2: { name: "punctuation.definition.binding-pattern.object.js" } }, end: "\\}", endCaptures: { 0: { name: "punctuation.definition.binding-pattern.object.js" } }, patterns: [{ include: "#object-binding-element-const" }] }, "object-identifiers": { patterns: [{ match: "([_$A-Za-z][_$0-9A-Za-z]*)(?=\\s*\\??\\.\\s*prototype\\b(?!\\$))", name: "support.class.js" }, { captures: { 1: { name: "punctuation.accessor.js" }, 2: { name: "punctuation.accessor.optional.js" }, 3: { name: "variable.other.constant.object.property.js" }, 4: { name: "variable.other.object.property.js" } }, match: "(?:(\\.)|(\\?\\.(?!\\s*[\\d])))\\s*(?:(\\#?[A-Z][_$\\dA-Z]*)|(\\#?[_$A-Za-z][_$0-9A-Za-z]*))(?=\\s*\\??\\.\\s*\\#?[_$A-Za-z][_$0-9A-Za-z]*)" }, { captures: { 1: { name: "variable.other.constant.object.js" }, 2: { name: "variable.other.object.js" } }, match: "(?:([A-Z][_$\\dA-Z]*)|([_$A-Za-z][_$0-9A-Za-z]*))(?=\\s*\\??\\.\\s*\\#?[_$A-Za-z][_$0-9A-Za-z]*)" }] }, "object-literal": { begin: "\\{", beginCaptures: { 0: { name: "punctuation.definition.block.js" } }, end: "\\}", endCaptures: { 0: { name: "punctuation.definition.block.js" } }, name: "meta.objectliteral.js", patterns: [{ include: "#object-member" }] }, "object-literal-method-declaration": { begin: "(?<![_$0-9A-Za-z])(?:(?<=\\.\\.\\.)|(?<!\\.))(?:\\b(async)\\s+)?(?:\\b(get|set)\\s+)?(?:(\\*)\\s*)?(?=\\s*(((\\b(?<!\\$)0(?:x|X)[0-9a-fA-F][0-9a-fA-F_]*(n)?\\b(?!\\$))|(\\b(?<!\\$)0(?:b|B)[01][01_]*(n)?\\b(?!\\$))|(\\b(?<!\\$)0(?:o|O)?[0-7][0-7_]*(n)?\\b(?!\\$))|((?<!\\$)(?:(?:\\b\\d[0-9_]*(\\.)\\d[0-9_]*[eE][+-]?\\d[0-9_]*(n)?\\b)|(?:\\b\\d[0-9_]*(\\.)[eE][+-]?\\d[0-9_]*(n)?\\b)|(?:\\B(\\.)\\d[0-9_]*[eE][+-]?\\d[0-9_]*(n)?\\b)|(?:\\b\\d[0-9_]*[eE][+-]?\\d[0-9_]*(n)?\\b)|(?:\\b\\d[0-9_]*(\\.)\\d[0-9_]*(n)?\\b)|(?:\\b\\d[0-9_]*(\\.)(n)?\\B)|(?:\\B(\\.)\\d[0-9_]*(n)?\\b)|(?:\\b\\d[0-9_]*(n)?\\b(?!\\.)))(?!\\$))|([_$A-Za-z][_$0-9A-Za-z]*)|(\\'([^\\'\\\\]|\\\\.)*\\')|(\\\"([^\\\"\\\\]|\\\\.)*\\\")|(\\`([^\\`\\\\]|\\\\.)*\\`)|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])+\\]))\\s*(\\??))\\s*((<\\s*(((const\\s+)?[_$A-Za-z])|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\]))([^=<>]|=[^<]|\\<\\s*(((const\\s+)?[_$A-Za-z])|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\]))([^=<>]|=[^<]|\\<\\s*(((const\\s+)?[_$A-Za-z])|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\]))([^=<>]|=[^<])*\\>)*\\>)*>\\s*))?[\\(])", beginCaptures: { 1: { name: "storage.modifier.async.js" }, 2: { name: "storage.type.property.js" }, 3: { name: "keyword.generator.asterisk.js" } }, end: "(?=\\}|;|,)|(?<=\\})", name: "meta.method.declaration.js", patterns: [{ include: "#method-declaration-name" }, { include: "#function-body" }, { begin: "(?<![_$0-9A-Za-z])(?:(?<=\\.\\.\\.)|(?<!\\.))(?:\\b(async)\\s+)?(?:\\b(get|set)\\s+)?(?:(\\*)\\s*)?(?=\\s*(((\\b(?<!\\$)0(?:x|X)[0-9a-fA-F][0-9a-fA-F_]*(n)?\\b(?!\\$))|(\\b(?<!\\$)0(?:b|B)[01][01_]*(n)?\\b(?!\\$))|(\\b(?<!\\$)0(?:o|O)?[0-7][0-7_]*(n)?\\b(?!\\$))|((?<!\\$)(?:(?:\\b\\d[0-9_]*(\\.)\\d[0-9_]*[eE][+-]?\\d[0-9_]*(n)?\\b)|(?:\\b\\d[0-9_]*(\\.)[eE][+-]?\\d[0-9_]*(n)?\\b)|(?:\\B(\\.)\\d[0-9_]*[eE][+-]?\\d[0-9_]*(n)?\\b)|(?:\\b\\d[0-9_]*[eE][+-]?\\d[0-9_]*(n)?\\b)|(?:\\b\\d[0-9_]*(\\.)\\d[0-9_]*(n)?\\b)|(?:\\b\\d[0-9_]*(\\.)(n)?\\B)|(?:\\B(\\.)\\d[0-9_]*(n)?\\b)|(?:\\b\\d[0-9_]*(n)?\\b(?!\\.)))(?!\\$))|([_$A-Za-z][_$0-9A-Za-z]*)|(\\'([^\\'\\\\]|\\\\.)*\\')|(\\\"([^\\\"\\\\]|\\\\.)*\\\")|(\\`([^\\`\\\\]|\\\\.)*\\`)|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])+\\]))\\s*(\\??))\\s*((<\\s*(((const\\s+)?[_$A-Za-z])|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\]))([^=<>]|=[^<]|\\<\\s*(((const\\s+)?[_$A-Za-z])|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\]))([^=<>]|=[^<]|\\<\\s*(((const\\s+)?[_$A-Za-z])|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\]))([^=<>]|=[^<])*\\>)*\\>)*>\\s*))?[\\(])", beginCaptures: { 1: { name: "storage.modifier.async.js" }, 2: { name: "storage.type.property.js" }, 3: { name: "keyword.generator.asterisk.js" } }, end: "(?=\\(|\\<)", patterns: [{ include: "#method-declaration-name" }] }] }, "object-member": { patterns: [{ include: "#comment" }, { include: "#object-literal-method-declaration" }, { begin: "(?=\\[)", end: "(?=:)|((?<=[\\]])(?=\\s*[\\(\\<]))", name: "meta.object.member.js meta.object-literal.key.js", patterns: [{ include: "#comment" }, { include: "#array-literal" }] }, { begin: "(?=[\\'\\\"\\`])", end: "(?=:)|((?<=[\\'\\\"\\`])(?=((\\s*[\\(\\<,}])|(\\s+(as|satisifies)\\s+))))", name: "meta.object.member.js meta.object-literal.key.js", patterns: [{ include: "#comment" }, { include: "#string" }] }, { begin: "(?=(\\b(?<!\\$)0(?:x|X)[0-9a-fA-F][0-9a-fA-F_]*(n)?\\b(?!\\$))|(\\b(?<!\\$)0(?:b|B)[01][01_]*(n)?\\b(?!\\$))|(\\b(?<!\\$)0(?:o|O)?[0-7][0-7_]*(n)?\\b(?!\\$))|((?<!\\$)(?:(?:\\b\\d[0-9_]*(\\.)\\d[0-9_]*[eE][+-]?\\d[0-9_]*(n)?\\b)|(?:\\b\\d[0-9_]*(\\.)[eE][+-]?\\d[0-9_]*(n)?\\b)|(?:\\B(\\.)\\d[0-9_]*[eE][+-]?\\d[0-9_]*(n)?\\b)|(?:\\b\\d[0-9_]*[eE][+-]?\\d[0-9_]*(n)?\\b)|(?:\\b\\d[0-9_]*(\\.)\\d[0-9_]*(n)?\\b)|(?:\\b\\d[0-9_]*(\\.)(n)?\\B)|(?:\\B(\\.)\\d[0-9_]*(n)?\\b)|(?:\\b\\d[0-9_]*(n)?\\b(?!\\.)))(?!\\$)))", end: "(?=:)|(?=\\s*([\\(\\<,}])|(\\s+as|satisifies\\s+))", name: "meta.object.member.js meta.object-literal.key.js", patterns: [{ include: "#comment" }, { include: "#numeric-literal" }] }, { begin: "(?<=[\\]\\'\\\"\\`])(?=\\s*[\\(\\<])", end: "(?=\\}|;|,)|(?<=\\})", name: "meta.method.declaration.js", patterns: [{ include: "#function-body" }] }, { captures: { 0: { name: "meta.object-literal.key.js" }, 1: { name: "constant.numeric.decimal.js" } }, match: "(?![_$A-Za-z])([\\d]+)\\s*(?=(\\/\\*([^\\*]|(\\*[^\\/]))*\\*\\/\\s*)*:)", name: "meta.object.member.js" }, { captures: { 0: { name: "meta.object-literal.key.js" }, 1: { name: "entity.name.function.js" } }, match: "(?:([_$A-Za-z][_$0-9A-Za-z]*)\\s*(?=(\\/\\*([^\\*]|(\\*[^\\/]))*\\*\\/\\s*)*:(\\s*\\/\\*([^\\*]|(\\*[^\\/]))*\\*\\/)*\\s*(((async\\s+)?((function\\s*[(<*])|(function\\s+)|([_$A-Za-z][_$0-9A-Za-z]*\\s*=>)))|((async\\s*)?(((<\\s*$)|([\\(]\\s*((([\\{\\[]\\s*)?$)|((\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})\\s*((:\\s*\\{?$)|((\\s*([^<>\\(\\)\\{\\}]|\\<([^<>]|\\<([^<>]|\\<[^<>]+\\>)+\\>)+\\>|\\([^\\(\\)]+\\)|\\{[^\\{\\}]+\\})+\\s*)?=\\s*)))|((\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\])\\s*((:\\s*\\[?$)|((\\s*([^<>\\(\\)\\{\\}]|\\<([^<>]|\\<([^<>]|\\<[^<>]+\\>)+\\>)+\\>|\\([^\\(\\)]+\\)|\\{[^\\{\\}]+\\})+\\s*)?=\\s*))))))|((<\\s*(((const\\s+)?[_$A-Za-z])|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\]))([^=<>]|=[^<]|\\<\\s*(((const\\s+)?[_$A-Za-z])|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\]))([^=<>]|=[^<]|\\<\\s*(((const\\s+)?[_$A-Za-z])|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\]))([^=<>]|=[^<])*\\>)*\\>)*>\\s*)?[(]\\s*(\\/\\*([^\\*]|(\\*[^\\/]))*\\*\\/\\s*)*(([)]\\s*:)|((\\.\\.\\.\\s*)?[_$A-Za-z][_$0-9A-Za-z]*\\s*:)))|([<]\\s*[_$A-Za-z][_$0-9A-Za-z]*\\s+extends\\s*[^=>])|((<\\s*(((const\\s+)?[_$A-Za-z])|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\]))([^=<>]|=[^<]|\\<\\s*(((const\\s+)?[_$A-Za-z])|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\]))([^=<>]|=[^<]|\\<\\s*(((const\\s+)?[_$A-Za-z])|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\]))([^=<>]|=[^<])*\\>)*\\>)*>\\s*)?\\(\\s*(\\/\\*([^\\*]|(\\*[^\\/]))*\\*\\/\\s*)*(([_$A-Za-z]|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\])|(\\.\\.\\.\\s*[_$A-Za-z]))([^()\\'\\\"\\`]|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\'([^\\'\\\\]|\\\\.)*\\')|(\\\"([^\\\"\\\\]|\\\\.)*\\\")|(\\`([^\\`\\\\]|\\\\.)*\\`))*)?\\)(\\s*:\\s*([^<>\\(\\)\\{\\}]|\\<([^<>]|\\<([^<>]|\\<[^<>]+\\>)+\\>)+\\>|\\([^\\(\\)]+\\)|\\{[^\\{\\}]+\\})+)?\\s*=>))))))", name: "meta.object.member.js" }, { captures: { 0: { name: "meta.object-literal.key.js" } }, match: "(?:[_$A-Za-z][_$0-9A-Za-z]*)\\s*(?=(\\/\\*([^\\*]|(\\*[^\\/]))*\\*\\/\\s*)*:)", name: "meta.object.member.js" }, { begin: "\\.\\.\\.", beginCaptures: { 0: { name: "keyword.operator.spread.js" } }, end: "(?=,|\\})", name: "meta.object.member.js", patterns: [{ include: "#expression" }] }, { captures: { 1: { name: "variable.other.readwrite.js" } }, match: "([_$A-Za-z][_$0-9A-Za-z]*)\\s*(?=,|\\}|$|\\/\\/|\\/\\*)", name: "meta.object.member.js" }, { captures: { 1: { name: "keyword.control.as.js" }, 2: { name: "storage.modifier.js" } }, match: "(?<![_$0-9A-Za-z])(?:(?<=\\.\\.\\.)|(?<!\\.))(as)\\s+(const)(?=\\s*([,}]|$))", name: "meta.object.member.js" }, { begin: "(?<![_$0-9A-Za-z])(?:(?<=\\.\\.\\.)|(?<!\\.))(?:(as)|(satisfies))\\s+", beginCaptures: { 1: { name: "keyword.control.as.js" }, 2: { name: "keyword.control.satisfies.js" } }, end: "(?=[;),}\\]:?\\-\\+\\>]|\\|\\||\\&\\&|\\!\\=\\=|$|^|((?<![_$0-9A-Za-z])(?:(?<=\\.\\.\\.)|(?<!\\.))(as|satisifies)\\s+))", name: "meta.object.member.js", patterns: [{ include: "#type" }] }, { begin: "(?=[_$A-Za-z][_$0-9A-Za-z]*\\s*=)", end: "(?=,|\\}|$|\\/\\/|\\/\\*)", name: "meta.object.member.js", patterns: [{ include: "#expression" }] }, { begin: ":", beginCaptures: { 0: { name: "meta.object-literal.key.js punctuation.separator.key-value.js" } }, end: "(?=,|\\})", name: "meta.object.member.js", patterns: [{ begin: "(?<=:)\\s*(async)?(?=\\s*(<\\s*(((const\\s+)?[_$A-Za-z])|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\]))([^=<>]|=[^<]|\\<\\s*(((const\\s+)?[_$A-Za-z])|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\]))([^=<>]|=[^<]|\\<\\s*(((const\\s+)?[_$A-Za-z])|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\]))([^=<>]|=[^<])*\\>)*\\>)*>\\s*)\\(\\s*((([\\{\\[]\\s*)?$)|((\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})\\s*((:\\s*\\{?$)|((\\s*([^<>\\(\\)\\{\\}]|\\<([^<>]|\\<([^<>]|\\<[^<>]+\\>)+\\>)+\\>|\\([^\\(\\)]+\\)|\\{[^\\{\\}]+\\})+\\s*)?=\\s*)))|((\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\])\\s*((:\\s*\\[?$)|((\\s*([^<>\\(\\)\\{\\}]|\\<([^<>]|\\<([^<>]|\\<[^<>]+\\>)+\\>)+\\>|\\([^\\(\\)]+\\)|\\{[^\\{\\}]+\\})+\\s*)?=\\s*)))))", beginCaptures: { 1: { name: "storage.modifier.async.js" } }, end: "(?<=\\))", patterns: [{ include: "#type-parameters" }, { begin: "\\(", beginCaptures: { 0: { name: "meta.brace.round.js" } }, end: "\\)", endCaptures: { 0: { name: "meta.brace.round.js" } }, patterns: [{ include: "#expression-inside-possibly-arrow-parens" }] }] }, { begin: "(?<=:)\\s*(async)?\\s*(\\()(?=\\s*((([\\{\\[]\\s*)?$)|((\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})\\s*((:\\s*\\{?$)|((\\s*([^<>\\(\\)\\{\\}]|\\<([^<>]|\\<([^<>]|\\<[^<>]+\\>)+\\>)+\\>|\\([^\\(\\)]+\\)|\\{[^\\{\\}]+\\})+\\s*)?=\\s*)))|((\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\])\\s*((:\\s*\\[?$)|((\\s*([^<>\\(\\)\\{\\}]|\\<([^<>]|\\<([^<>]|\\<[^<>]+\\>)+\\>)+\\>|\\([^\\(\\)]+\\)|\\{[^\\{\\}]+\\})+\\s*)?=\\s*)))))", beginCaptures: { 1: { name: "storage.modifier.async.js" }, 2: { name: "meta.brace.round.js" } }, end: "\\)", endCaptures: { 0: { name: "meta.brace.round.js" } }, patterns: [{ include: "#expression-inside-possibly-arrow-parens" }] }, { begin: "(?<=:)\\s*(async)?\\s*(?=\\<\\s*$)", beginCaptures: { 1: { name: "storage.modifier.async.js" } }, end: "(?<=\\>)", patterns: [{ include: "#type-parameters" }] }, { begin: "(?<=\\>)\\s*(\\()(?=\\s*((([\\{\\[]\\s*)?$)|((\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})\\s*((:\\s*\\{?$)|((\\s*([^<>\\(\\)\\{\\}]|\\<([^<>]|\\<([^<>]|\\<[^<>]+\\>)+\\>)+\\>|\\([^\\(\\)]+\\)|\\{[^\\{\\}]+\\})+\\s*)?=\\s*)))|((\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\])\\s*((:\\s*\\[?$)|((\\s*([^<>\\(\\)\\{\\}]|\\<([^<>]|\\<([^<>]|\\<[^<>]+\\>)+\\>)+\\>|\\([^\\(\\)]+\\)|\\{[^\\{\\}]+\\})+\\s*)?=\\s*)))))", beginCaptures: { 1: { name: "meta.brace.round.js" } }, end: "\\)", endCaptures: { 0: { name: "meta.brace.round.js" } }, patterns: [{ include: "#expression-inside-possibly-arrow-parens" }] }, { include: "#possibly-arrow-return-type" }, { include: "#expression" }] }, { include: "#punctuation-comma" }, { include: "#decl-block" }] }, "parameter-array-binding-pattern": { begin: "(?:(\\.\\.\\.)\\s*)?(\\[)", beginCaptures: { 1: { name: "keyword.operator.rest.js" }, 2: { name: "punctuation.definition.binding-pattern.array.js" } }, end: "\\]", endCaptures: { 0: { name: "punctuation.definition.binding-pattern.array.js" } }, patterns: [{ include: "#parameter-binding-element" }, { include: "#punctuation-comma" }] }, "parameter-binding-element": { patterns: [{ include: "#comment" }, { include: "#string" }, { include: "#numeric-literal" }, { include: "#regex" }, { include: "#parameter-object-binding-pattern" }, { include: "#parameter-array-binding-pattern" }, { include: "#destructuring-parameter-rest" }, { include: "#variable-initializer" }] }, "parameter-name": { patterns: [{ captures: { 1: { name: "storage.modifier.js" } }, match: "(?<![_$0-9A-Za-z])(?:(?<=\\.\\.\\.)|(?<!\\.))(override|public|protected|private|readonly)\\s+(?=(override|public|protected|private|readonly)\\s+)" }, { captures: { 1: { name: "storage.modifier.js" }, 2: { name: "keyword.operator.rest.js" }, 3: { name: "entity.name.function.js variable.language.this.js" }, 4: { name: "entity.name.function.js" }, 5: { name: "keyword.operator.optional.js" } }, match: "(?:(?<![_$0-9A-Za-z])(?:(?<=\\.\\.\\.)|(?<!\\.))(override|public|private|protected|readonly)\\s+)?(?:(\\.\\.\\.)\\s*)?(?<!=|:)(?<![_$0-9A-Za-z])(?:(?<=\\.\\.\\.)|(?<!\\.))(?:(this)|([_$A-Za-z][_$0-9A-Za-z]*))(?![_$0-9A-Za-z])(?:(?=\\.\\.\\.)|(?!\\.))\\s*(\\??)(?=\\s*(=\\s*(((async\\s+)?((function\\s*[(<*])|(function\\s+)|([_$A-Za-z][_$0-9A-Za-z]*\\s*=>)))|((async\\s*)?(((<\\s*$)|([\\(]\\s*((([\\{\\[]\\s*)?$)|((\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})\\s*((:\\s*\\{?$)|((\\s*([^<>\\(\\)\\{\\}]|\\<([^<>]|\\<([^<>]|\\<[^<>]+\\>)+\\>)+\\>|\\([^\\(\\)]+\\)|\\{[^\\{\\}]+\\})+\\s*)?=\\s*)))|((\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\])\\s*((:\\s*\\[?$)|((\\s*([^<>\\(\\)\\{\\}]|\\<([^<>]|\\<([^<>]|\\<[^<>]+\\>)+\\>)+\\>|\\([^\\(\\)]+\\)|\\{[^\\{\\}]+\\})+\\s*)?=\\s*))))))|((<\\s*(((const\\s+)?[_$A-Za-z])|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\]))([^=<>]|=[^<]|\\<\\s*(((const\\s+)?[_$A-Za-z])|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\]))([^=<>]|=[^<]|\\<\\s*(((const\\s+)?[_$A-Za-z])|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\]))([^=<>]|=[^<])*\\>)*\\>)*>\\s*)?[(]\\s*(\\/\\*([^\\*]|(\\*[^\\/]))*\\*\\/\\s*)*(([)]\\s*:)|((\\.\\.\\.\\s*)?[_$A-Za-z][_$0-9A-Za-z]*\\s*:)))|([<]\\s*[_$A-Za-z][_$0-9A-Za-z]*\\s+extends\\s*[^=>])|((<\\s*(((const\\s+)?[_$A-Za-z])|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\]))([^=<>]|=[^<]|\\<\\s*(((const\\s+)?[_$A-Za-z])|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\]))([^=<>]|=[^<]|\\<\\s*(((const\\s+)?[_$A-Za-z])|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\]))([^=<>]|=[^<])*\\>)*\\>)*>\\s*)?\\(\\s*(\\/\\*([^\\*]|(\\*[^\\/]))*\\*\\/\\s*)*(([_$A-Za-z]|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\])|(\\.\\.\\.\\s*[_$A-Za-z]))([^()\\'\\\"\\`]|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\'([^\\'\\\\]|\\\\.)*\\')|(\\\"([^\\\"\\\\]|\\\\.)*\\\")|(\\`([^\\`\\\\]|\\\\.)*\\`))*)?\\)(\\s*:\\s*([^<>\\(\\)\\{\\}]|\\<([^<>]|\\<([^<>]|\\<[^<>]+\\>)+\\>)+\\>|\\([^\\(\\)]+\\)|\\{[^\\{\\}]+\\})+)?\\s*=>)))))|(:\\s*((<)|([(]\\s*(([)])|(\\.\\.\\.)|([_$0-9A-Za-z]+\\s*(([:,?=])|([)]\\s*=>)))))))|(:\\s*(?<![_$0-9A-Za-z])(?:(?<=\\.\\.\\.)|(?<!\\.))Function(?![_$0-9A-Za-z])(?:(?=\\.\\.\\.)|(?!\\.)))|(:\\s*((<\\s*$)|([\\(]\\s*((([\\{\\[]\\s*)?$)|((\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})\\s*((:\\s*\\{?$)|((\\s*([^<>\\(\\)\\{\\}]|\\<([^<>]|\\<([^<>]|\\<[^<>]+\\>)+\\>)+\\>|\\([^\\(\\)]+\\)|\\{[^\\{\\}]+\\})+\\s*)?=\\s*)))|((\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\])\\s*((:\\s*\\[?$)|((\\s*([^<>\\(\\)\\{\\}]|\\<([^<>]|\\<([^<>]|\\<[^<>]+\\>)+\\>)+\\>|\\([^\\(\\)]+\\)|\\{[^\\{\\}]+\\})+\\s*)?=\\s*)))))))|(:\\s*(=>|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(<[^<>]*>)|[^<>(),=])+=\\s*(((async\\s+)?((function\\s*[(<*])|(function\\s+)|([_$A-Za-z][_$0-9A-Za-z]*\\s*=>)))|((async\\s*)?(((<\\s*$)|([\\(]\\s*((([\\{\\[]\\s*)?$)|((\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})\\s*((:\\s*\\{?$)|((\\s*([^<>\\(\\)\\{\\}]|\\<([^<>]|\\<([^<>]|\\<[^<>]+\\>)+\\>)+\\>|\\([^\\(\\)]+\\)|\\{[^\\{\\}]+\\})+\\s*)?=\\s*)))|((\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\])\\s*((:\\s*\\[?$)|((\\s*([^<>\\(\\)\\{\\}]|\\<([^<>]|\\<([^<>]|\\<[^<>]+\\>)+\\>)+\\>|\\([^\\(\\)]+\\)|\\{[^\\{\\}]+\\})+\\s*)?=\\s*))))))|((<\\s*(((const\\s+)?[_$A-Za-z])|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\]))([^=<>]|=[^<]|\\<\\s*(((const\\s+)?[_$A-Za-z])|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\]))([^=<>]|=[^<]|\\<\\s*(((const\\s+)?[_$A-Za-z])|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\]))([^=<>]|=[^<])*\\>)*\\>)*>\\s*)?[(]\\s*(\\/\\*([^\\*]|(\\*[^\\/]))*\\*\\/\\s*)*(([)]\\s*:)|((\\.\\.\\.\\s*)?[_$A-Za-z][_$0-9A-Za-z]*\\s*:)))|([<]\\s*[_$A-Za-z][_$0-9A-Za-z]*\\s+extends\\s*[^=>])|((<\\s*(((const\\s+)?[_$A-Za-z])|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\]))([^=<>]|=[^<]|\\<\\s*(((const\\s+)?[_$A-Za-z])|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\]))([^=<>]|=[^<]|\\<\\s*(((const\\s+)?[_$A-Za-z])|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\]))([^=<>]|=[^<])*\\>)*\\>)*>\\s*)?\\(\\s*(\\/\\*([^\\*]|(\\*[^\\/]))*\\*\\/\\s*)*(([_$A-Za-z]|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\])|(\\.\\.\\.\\s*[_$A-Za-z]))([^()\\'\\\"\\`]|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\'([^\\'\\\\]|\\\\.)*\\')|(\\\"([^\\\"\\\\]|\\\\.)*\\\")|(\\`([^\\`\\\\]|\\\\.)*\\`))*)?\\)(\\s*:\\s*([^<>\\(\\)\\{\\}]|\\<([^<>]|\\<([^<>]|\\<[^<>]+\\>)+\\>)+\\>|\\([^\\(\\)]+\\)|\\{[^\\{\\}]+\\})+)?\\s*=>))))))" }, { captures: { 1: { name: "storage.modifier.js" }, 2: { name: "keyword.operator.rest.js" }, 3: { name: "variable.parameter.js variable.language.this.js" }, 4: { name: "variable.parameter.js" }, 5: { name: "keyword.operator.optional.js" } }, match: "(?:(?<![_$0-9A-Za-z])(?:(?<=\\.\\.\\.)|(?<!\\.))(override|public|private|protected|readonly)\\s+)?(?:(\\.\\.\\.)\\s*)?(?<!=|:)(?<![_$0-9A-Za-z])(?:(?<=\\.\\.\\.)|(?<!\\.))(?:(this)|([_$A-Za-z][_$0-9A-Za-z]*))(?![_$0-9A-Za-z])(?:(?=\\.\\.\\.)|(?!\\.))\\s*(\\??)" }] }, "parameter-object-binding-element": { patterns: [{ include: "#comment" }, { begin: "(?=((\\b(?<!\\$)0(?:x|X)[0-9a-fA-F][0-9a-fA-F_]*(n)?\\b(?!\\$))|(\\b(?<!\\$)0(?:b|B)[01][01_]*(n)?\\b(?!\\$))|(\\b(?<!\\$)0(?:o|O)?[0-7][0-7_]*(n)?\\b(?!\\$))|((?<!\\$)(?:(?:\\b\\d[0-9_]*(\\.)\\d[0-9_]*[eE][+-]?\\d[0-9_]*(n)?\\b)|(?:\\b\\d[0-9_]*(\\.)[eE][+-]?\\d[0-9_]*(n)?\\b)|(?:\\B(\\.)\\d[0-9_]*[eE][+-]?\\d[0-9_]*(n)?\\b)|(?:\\b\\d[0-9_]*[eE][+-]?\\d[0-9_]*(n)?\\b)|(?:\\b\\d[0-9_]*(\\.)\\d[0-9_]*(n)?\\b)|(?:\\b\\d[0-9_]*(\\.)(n)?\\B)|(?:\\B(\\.)\\d[0-9_]*(n)?\\b)|(?:\\b\\d[0-9_]*(n)?\\b(?!\\.)))(?!\\$))|([_$A-Za-z][_$0-9A-Za-z]*)|(\\'([^\\'\\\\]|\\\\.)*\\')|(\\\"([^\\\"\\\\]|\\\\.)*\\\")|(\\`([^\\`\\\\]|\\\\.)*\\`)|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])+\\]))\\s*(:))", end: "(?=,|\\})", patterns: [{ include: "#object-binding-element-propertyName" }, { include: "#parameter-binding-element" }, { include: "#paren-expression" }] }, { include: "#parameter-object-binding-pattern" }, { include: "#destructuring-parameter-rest" }, { include: "#variable-initializer" }, { include: "#punctuation-comma" }] }, "parameter-object-binding-pattern": { begin: "(?:(\\.\\.\\.)\\s*)?(\\{)", beginCaptures: { 1: { name: "keyword.operator.rest.js" }, 2: { name: "punctuation.definition.binding-pattern.object.js" } }, end: "\\}", endCaptures: { 0: { name: "punctuation.definition.binding-pattern.object.js" } }, patterns: [{ include: "#parameter-object-binding-element" }] }, "parameter-type-annotation": { patterns: [{ begin: "(:)", beginCaptures: { 1: { name: "keyword.operator.type.annotation.js" } }, end: "(?=[,)])|(?==[^>])", name: "meta.type.annotation.js", patterns: [{ include: "#type" }] }] }, "paren-expression": { begin: "\\(", beginCaptures: { 0: { name: "meta.brace.round.js" } }, end: "\\)", endCaptures: { 0: { name: "meta.brace.round.js" } }, patterns: [{ include: "#expression" }] }, "paren-expression-possibly-arrow": { patterns: [{ begin: "(?<=[(=,])\\s*(async)?(?=\\s*((<\\s*(((const\\s+)?[_$A-Za-z])|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\]))([^=<>]|=[^<]|\\<\\s*(((const\\s+)?[_$A-Za-z])|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\]))([^=<>]|=[^<]|\\<\\s*(((const\\s+)?[_$A-Za-z])|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\]))([^=<>]|=[^<])*\\>)*\\>)*>\\s*))?\\(\\s*((([\\{\\[]\\s*)?$)|((\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})\\s*((:\\s*\\{?$)|((\\s*([^<>\\(\\)\\{\\}]|\\<([^<>]|\\<([^<>]|\\<[^<>]+\\>)+\\>)+\\>|\\([^\\(\\)]+\\)|\\{[^\\{\\}]+\\})+\\s*)?=\\s*)))|((\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\])\\s*((:\\s*\\[?$)|((\\s*([^<>\\(\\)\\{\\}]|\\<([^<>]|\\<([^<>]|\\<[^<>]+\\>)+\\>)+\\>|\\([^\\(\\)]+\\)|\\{[^\\{\\}]+\\})+\\s*)?=\\s*)))))", beginCaptures: { 1: { name: "storage.modifier.async.js" } }, end: "(?<=\\))", patterns: [{ include: "#paren-expression-possibly-arrow-with-typeparameters" }] }, { begin: "(?<=[(=,]|=>|^return|[^\\._$0-9A-Za-z]return)\\s*(async)?(?=\\s*((((<\\s*(((const\\s+)?[_$A-Za-z])|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\]))([^=<>]|=[^<]|\\<\\s*(((const\\s+)?[_$A-Za-z])|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\]))([^=<>]|=[^<]|\\<\\s*(((const\\s+)?[_$A-Za-z])|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\]))([^=<>]|=[^<])*\\>)*\\>)*>\\s*))?\\()|(<)|((<\\s*(((const\\s+)?[_$A-Za-z])|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\]))([^=<>]|=[^<]|\\<\\s*(((const\\s+)?[_$A-Za-z])|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\]))([^=<>]|=[^<]|\\<\\s*(((const\\s+)?[_$A-Za-z])|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\]))([^=<>]|=[^<])*\\>)*\\>)*>\\s*)))\\s*$)", beginCaptures: { 1: { name: "storage.modifier.async.js" } }, end: "(?<=\\))", patterns: [{ include: "#paren-expression-possibly-arrow-with-typeparameters" }] }, { include: "#possibly-arrow-return-type" }] }, "paren-expression-possibly-arrow-with-typeparameters": { patterns: [{ include: "#type-parameters" }, { begin: "\\(", beginCaptures: { 0: { name: "meta.brace.round.js" } }, end: "\\)", endCaptures: { 0: { name: "meta.brace.round.js" } }, patterns: [{ include: "#expression-inside-possibly-arrow-parens" }] }] }, "possibly-arrow-return-type": { begin: "(?<=\\)|^)\\s*(:)(?=\\s*([^<>\\(\\)\\{\\}]|\\<([^<>]|\\<([^<>]|\\<[^<>]+\\>)+\\>)+\\>|\\([^\\(\\)]+\\)|\\{[^\\{\\}]+\\})+\\s*=>)", beginCaptures: { 1: { name: "meta.arrow.js meta.return.type.arrow.js keyword.operator.type.annotation.js" } }, contentName: "meta.arrow.js meta.return.type.arrow.js", end: "(?==>|\\{|(^\\s*(export|function|class|interface|let|var|(?:\\busing(?=\\s+(?!in\\b|of\\b(?!\\s*(?:of\\b|=)))[_$A-Za-z])\\b)|(?:\\bawait\\s+(?:\\busing(?=\\s+(?!in\\b|of\\b(?!\\s*(?:of\\b|=)))[_$A-Za-z])\\b)\\b)|const|import|enum|namespace|module|type|abstract|declare)\\s+))", patterns: [{ include: "#arrow-return-type-body" }] }, "property-accessor": { match: "(?<![_$0-9A-Za-z])(?:(?<=\\.\\.\\.)|(?<!\\.))(accessor|get|set)(?![_$0-9A-Za-z])(?:(?=\\.\\.\\.)|(?!\\.))", name: "storage.type.property.js" }, "punctuation-accessor": { captures: { 1: { name: "punctuation.accessor.js" }, 2: { name: "punctuation.accessor.optional.js" } }, match: "(?:(\\.)|(\\?\\.(?!\\s*[\\d])))" }, "punctuation-comma": { match: ",", name: "punctuation.separator.comma.js" }, "punctuation-semicolon": { match: ";", name: "punctuation.terminator.statement.js" }, "qstring-double": { begin: '"', beginCaptures: { 0: { name: "punctuation.definition.string.begin.js" } }, end: '(")|((?:[^\\\\\\n])$)', endCaptures: { 1: { name: "punctuation.definition.string.end.js" }, 2: { name: "invalid.illegal.newline.js" } }, name: "string.quoted.double.js", patterns: [{ include: "#string-character-escape" }] }, "qstring-single": { begin: "'", beginCaptures: { 0: { name: "punctuation.definition.string.begin.js" } }, end: "(\\')|((?:[^\\\\\\n])$)", endCaptures: { 1: { name: "punctuation.definition.string.end.js" }, 2: { name: "invalid.illegal.newline.js" } }, name: "string.quoted.single.js", patterns: [{ include: "#string-character-escape" }] }, regex: { patterns: [{ begin: "(?<!\\+\\+|--|})(?<=[=(:,\\[?+!]|^return|[^\\._$0-9A-Za-z]return|^case|[^\\._$0-9A-Za-z]case|=>|&&|\\|\\||\\*\\/)\\s*(\\/)(?![\\/*])(?=(?:[^\\/\\\\\\[\\()]|\\\\.|\\[([^\\]\\\\]|\\\\.)+\\]|\\(([^\\)\\\\]|\\\\.)+\\))+\\/([dgimsuy]+|(?![\\/\\*])|(?=\\/\\*))(?!\\s*[a-zA-Z0-9_$]))", beginCaptures: { 1: { name: "punctuation.definition.string.begin.js" } }, end: "(/)([dgimsuy]*)", endCaptures: { 1: { name: "punctuation.definition.string.end.js" }, 2: { name: "keyword.other.js" } }, name: "string.regexp.js", patterns: [{ include: "#regexp" }] }, { begin: "((?<![_$0-9A-Za-z)\\]]|\\+\\+|--|}|\\*\\/)|((?<=^return|[^\\._$0-9A-Za-z]return|^case|[^\\._$0-9A-Za-z]case))\\s*)\\/(?![\\/*])(?=(?:[^\\/\\\\\\[]|\\\\.|\\[([^\\]\\\\]|\\\\.)*\\])+\\/([dgimsuy]+|(?![\\/\\*])|(?=\\/\\*))(?!\\s*[a-zA-Z0-9_$]))", beginCaptures: { 0: { name: "punctuation.definition.string.begin.js" } }, end: "(/)([dgimsuy]*)", endCaptures: { 1: { name: "punctuation.definition.string.end.js" }, 2: { name: "keyword.other.js" } }, name: "string.regexp.js", patterns: [{ include: "#regexp" }] }] }, "regex-character-class": { patterns: [{ match: "\\\\[wWsSdDtrnvf]|\\.", name: "constant.other.character-class.regexp" }, { match: "\\\\([0-7]{3}|x[0-9A-Fa-f]{2}|u[0-9A-Fa-f]{4})", name: "constant.character.numeric.regexp" }, { match: "\\\\c[A-Z]", name: "constant.character.control.regexp" }, { match: "\\\\.", name: "constant.character.escape.backslash.regexp" }] }, regexp: { patterns: [{ match: "\\\\[bB]|\\^|\\$", name: "keyword.control.anchor.regexp" }, { captures: { 0: { name: "keyword.other.back-reference.regexp" }, 1: { name: "variable.other.regexp" } }, match: "\\\\[1-9]\\d*|\\\\k<([a-zA-Z_$][\\w$]*)>" }, { match: "[?+*]|\\{(\\d+,\\d+|\\d+,|,\\d+|\\d+)\\}\\??", name: "keyword.operator.quantifier.regexp" }, { match: "\\|", name: "keyword.operator.or.regexp" }, { begin: "(\\()((\\?=)|(\\?!)|(\\?<=)|(\\?<!))", beginCaptures: { 1: { name: "punctuation.definition.group.regexp" }, 2: { name: "punctuation.definition.group.assertion.regexp" }, 3: { name: "meta.assertion.look-ahead.regexp" }, 4: { name: "meta.assertion.negative-look-ahead.regexp" }, 5: { name: "meta.assertion.look-behind.regexp" }, 6: { name: "meta.assertion.negative-look-behind.regexp" } }, end: "(\\))", endCaptures: { 1: { name: "punctuation.definition.group.regexp" } }, name: "meta.group.assertion.regexp", patterns: [{ include: "#regexp" }] }, { begin: "\\((?:(\\?:)|(?:\\?<([a-zA-Z_$][\\w$]*)>))?", beginCaptures: { 0: { name: "punctuation.definition.group.regexp" }, 1: { name: "punctuation.definition.group.no-capture.regexp" }, 2: { name: "variable.other.regexp" } }, end: "\\)", endCaptures: { 0: { name: "punctuation.definition.group.regexp" } }, name: "meta.group.regexp", patterns: [{ include: "#regexp" }] }, { begin: "(\\[)(\\^)?", beginCaptures: { 1: { name: "punctuation.definition.character-class.regexp" }, 2: { name: "keyword.operator.negation.regexp" } }, end: "(\\])", endCaptures: { 1: { name: "punctuation.definition.character-class.regexp" } }, name: "constant.other.character-class.set.regexp", patterns: [{ captures: { 1: { name: "constant.character.numeric.regexp" }, 2: { name: "constant.character.control.regexp" }, 3: { name: "constant.character.escape.backslash.regexp" }, 4: { name: "constant.character.numeric.regexp" }, 5: { name: "constant.character.control.regexp" }, 6: { name: "constant.character.escape.backslash.regexp" } }, match: "(?:.|(\\\\(?:[0-7]{3}|x[0-9A-Fa-f]{2}|u[0-9A-Fa-f]{4}))|(\\\\c[A-Z])|(\\\\.))\\-(?:[^\\]\\\\]|(\\\\(?:[0-7]{3}|x[0-9A-Fa-f]{2}|u[0-9A-Fa-f]{4}))|(\\\\c[A-Z])|(\\\\.))", name: "constant.other.character-class.range.regexp" }, { include: "#regex-character-class" }] }, { include: "#regex-character-class" }] }, "return-type": { patterns: [{ begin: "(?<=\\))\\s*(:)(?=\\s*\\S)", beginCaptures: { 1: { name: "keyword.operator.type.annotation.js" } }, end: "(?<![:|&])(?=$|^|[{};,]|//)", name: "meta.return.type.js", patterns: [{ include: "#return-type-core" }] }, { begin: "(?<=\\))\\s*(:)", beginCaptures: { 1: { name: "keyword.operator.type.annotation.js" } }, end: "(?<![:|&])((?=[{};,]|//|^\\s*$)|((?<=\\S)(?=\\s*$)))", name: "meta.return.type.js", patterns: [{ include: "#return-type-core" }] }] }, "return-type-core": { patterns: [{ include: "#comment" }, { begin: "(?<=[:|&])(?=\\s*\\{)", end: "(?<=\\})", patterns: [{ include: "#type-object" }] }, { include: "#type-predicate-operator" }, { include: "#type" }] }, shebang: { captures: { 1: { name: "punctuation.definition.comment.js" } }, match: "\\A(#!).*(?=$)", name: "comment.line.shebang.js" }, "single-line-comment-consuming-line-ending": { begin: "(^[ \\t]+)?((//)(?:\\s*((@)internal)(?=\\s|$))?)", beginCaptures: { 1: { name: "punctuation.whitespace.comment.leading.js" }, 2: { name: "comment.line.double-slash.js" }, 3: { name: "punctuation.definition.comment.js" }, 4: { name: "storage.type.internaldeclaration.js" }, 5: { name: "punctuation.decorator.internaldeclaration.js" } }, contentName: "comment.line.double-slash.js", end: "(?=^)" }, statements: { patterns: [{ include: "#declaration" }, { include: "#control-statement" }, { include: "#after-operator-block-as-object-literal" }, { include: "#decl-block" }, { include: "#label" }, { include: "#expression" }, { include: "#punctuation-semicolon" }, { include: "#string" }, { include: "#comment" }] }, string: { patterns: [{ include: "#qstring-single" }, { include: "#qstring-double" }, { include: "#template" }] }, "string-character-escape": { match: "\\\\(x[0-9A-Fa-f]{2}|u[0-9A-Fa-f]{4}|u\\{[0-9A-Fa-f]+\\}|[0-2][0-7]{0,2}|3[0-6][0-7]?|37[0-7]?|[4-7][0-7]?|.|$)", name: "constant.character.escape.js" }, "super-literal": { match: "(?<![_$0-9A-Za-z])(?:(?<=\\.\\.\\.)|(?<!\\.))super\\b(?!\\$)", name: "variable.language.super.js" }, "support-function-call-identifiers": { patterns: [{ include: "#literal" }, { include: "#support-objects" }, { include: "#object-identifiers" }, { include: "#punctuation-accessor" }, { match: "(?:(?<![_$0-9A-Za-z])(?:(?<=\\.\\.\\.)|(?<!\\.))import(?=\\s*[\\(]\\s*[\\\"\\'\\`]))", name: "keyword.operator.expression.import.js" }] }, "support-objects": { patterns: [{ match: "(?<![_$0-9A-Za-z])(?:(?<=\\.\\.\\.)|(?<!\\.))(arguments)\\b(?!\\$)", name: "variable.language.arguments.js" }, { match: "(?<![_$0-9A-Za-z])(?:(?<=\\.\\.\\.)|(?<!\\.))(Promise)\\b(?!\\$)", name: "support.class.promise.js" }, { captures: { 1: { name: "keyword.control.import.js" }, 2: { name: "punctuation.accessor.js" }, 3: { name: "punctuation.accessor.optional.js" }, 4: { name: "support.variable.property.importmeta.js" } }, match: "(?<![_$0-9A-Za-z])(?:(?<=\\.\\.\\.)|(?<!\\.))(import)\\s*(?:(\\.)|(\\?\\.(?!\\s*[\\d])))\\s*(meta)\\b(?!\\$)" }, { captures: { 1: { name: "keyword.operator.new.js" }, 2: { name: "punctuation.accessor.js" }, 3: { name: "punctuation.accessor.optional.js" }, 4: { name: "support.variable.property.target.js" } }, match: "(?<![_$0-9A-Za-z])(?:(?<=\\.\\.\\.)|(?<!\\.))(new)\\s*(?:(\\.)|(\\?\\.(?!\\s*[\\d])))\\s*(target)\\b(?!\\$)" }, { captures: { 1: { name: "punctuation.accessor.js" }, 2: { name: "punctuation.accessor.optional.js" }, 3: { name: "support.variable.property.js" }, 4: { name: "support.constant.js" } }, match: "(?:(\\.)|(\\?\\.(?!\\s*[\\d])))\\s*(?:(?:(constructor|length|prototype|__proto__)\\b(?!\\$|\\s*(<\\s*(((const\\s+)?[_$A-Za-z])|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\]))([^=<>]|=[^<]|\\<\\s*(((const\\s+)?[_$A-Za-z])|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\]))([^=<>]|=[^<]|\\<\\s*(((const\\s+)?[_$A-Za-z])|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\]))([^=<>]|=[^<])*\\>)*\\>)*>\\s*)?\\())|(?:(EPSILON|MAX_SAFE_INTEGER|MAX_VALUE|MIN_SAFE_INTEGER|MIN_VALUE|NEGATIVE_INFINITY|POSITIVE_INFINITY)\\b(?!\\$)))" }, { captures: { 1: { name: "support.type.object.module.js" }, 2: { name: "support.type.object.module.js" }, 3: { name: "punctuation.accessor.js" }, 4: { name: "punctuation.accessor.optional.js" }, 5: { name: "support.type.object.module.js" } }, match: "(?<![_$0-9A-Za-z])(?:(?<=\\.\\.\\.)|(?<!\\.))(?:(exports)|(module)(?:(?:(\\.)|(\\?\\.(?!\\s*[\\d])))(exports|id|filename|loaded|parent|children))?)\\b(?!\\$)" }] }, "switch-statement": { begin: "(?<![_$0-9A-Za-z])(?:(?<=\\.\\.\\.)|(?<!\\.))(?=\\bswitch\\s*\\()", end: "\\}", endCaptures: { 0: { name: "punctuation.definition.block.js" } }, name: "switch-statement.expr.js", patterns: [{ include: "#comment" }, { begin: "(?<![_$0-9A-Za-z])(?:(?<=\\.\\.\\.)|(?<!\\.))(switch)\\s*(\\()", beginCaptures: { 1: { name: "keyword.control.switch.js" }, 2: { name: "meta.brace.round.js" } }, end: "\\)", endCaptures: { 0: { name: "meta.brace.round.js" } }, name: "switch-expression.expr.js", patterns: [{ include: "#expression" }] }, { begin: "\\{", beginCaptures: { 0: { name: "punctuation.definition.block.js" } }, end: "(?=\\})", name: "switch-block.expr.js", patterns: [{ begin: "(?<![_$0-9A-Za-z])(?:(?<=\\.\\.\\.)|(?<!\\.))(case|default(?=:))(?![_$0-9A-Za-z])(?:(?=\\.\\.\\.)|(?!\\.))", beginCaptures: { 1: { name: "keyword.control.switch.js" } }, end: "(?=:)", name: "case-clause.expr.js", patterns: [{ include: "#expression" }] }, { begin: "(:)\\s*(\\{)", beginCaptures: { 1: { name: "case-clause.expr.js punctuation.definition.section.case-statement.js" }, 2: { name: "meta.block.js punctuation.definition.block.js" } }, contentName: "meta.block.js", end: "\\}", endCaptures: { 0: { name: "meta.block.js punctuation.definition.block.js" } }, patterns: [{ include: "#statements" }] }, { captures: { 0: { name: "case-clause.expr.js punctuation.definition.section.case-statement.js" } }, match: "(:)" }, { include: "#statements" }] }] }, template: { patterns: [{ include: "#template-call" }, { begin: "([_$A-Za-z][_$0-9A-Za-z]*)?(`)", beginCaptures: { 1: { name: "entity.name.function.tagged-template.js" }, 2: { name: "string.template.js punctuation.definition.string.template.begin.js" } }, contentName: "string.template.js", end: "`", endCaptures: { 0: { name: "string.template.js punctuation.definition.string.template.end.js" } }, patterns: [{ include: "#template-substitution-element" }, { include: "#string-character-escape" }] }] }, "template-call": { patterns: [{ begin: "(?=(([_$A-Za-z][_$0-9A-Za-z]*\\s*\\??\\.\\s*)*|(\\??\\.\\s*)?)([_$A-Za-z][_$0-9A-Za-z]*)(<\\s*(((keyof|infer|typeof|readonly)\\s+)|(([_$A-Za-z][_$0-9A-Za-z]*|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\])|(\\'([^\\'\\\\]|\\\\.)*\\')|(\\\"([^\\\"\\\\]|\\\\.)*\\\")|(\\`([^\\`\\\\]|\\\\.)*\\`))(?=\\s*([\\<\\>\\,\\.\\[]|=>|&(?!&)|\\|(?!\\|)))))([^<>\\(]|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(?<==)\\>|\\<\\s*(((keyof|infer|typeof|readonly)\\s+)|(([_$A-Za-z][_$0-9A-Za-z]*|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\])|(\\'([^\\'\\\\]|\\\\.)*\\')|(\\\"([^\\\"\\\\]|\\\\.)*\\\")|(\\`([^\\`\\\\]|\\\\.)*\\`))(?=\\s*([\\<\\>\\,\\.\\[]|=>|&(?!&)|\\|(?!\\|)))))(([^<>\\(]|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(?<==)\\>|\\<\\s*(((keyof|infer|typeof|readonly)\\s+)|(([_$A-Za-z][_$0-9A-Za-z]*|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\])|(\\'([^\\'\\\\]|\\\\.)*\\')|(\\\"([^\\\"\\\\]|\\\\.)*\\\")|(\\`([^\\`\\\\]|\\\\.)*\\`))(?=\\s*([\\<\\>\\,\\.\\[]|=>|&(?!&)|\\|(?!\\|)))))([^<>\\(]|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(?<==)\\>)*(?<!=)\\>))*(?<!=)\\>)*(?<!=)>\\s*)?`)", end: "(?=`)", patterns: [{ begin: "(?=(([_$A-Za-z][_$0-9A-Za-z]*\\s*\\??\\.\\s*)*|(\\??\\.\\s*)?)([_$A-Za-z][_$0-9A-Za-z]*))", end: "(?=(<\\s*(((keyof|infer|typeof|readonly)\\s+)|(([_$A-Za-z][_$0-9A-Za-z]*|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\])|(\\'([^\\'\\\\]|\\\\.)*\\')|(\\\"([^\\\"\\\\]|\\\\.)*\\\")|(\\`([^\\`\\\\]|\\\\.)*\\`))(?=\\s*([\\<\\>\\,\\.\\[]|=>|&(?!&)|\\|(?!\\|)))))([^<>\\(]|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(?<==)\\>|\\<\\s*(((keyof|infer|typeof|readonly)\\s+)|(([_$A-Za-z][_$0-9A-Za-z]*|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\])|(\\'([^\\'\\\\]|\\\\.)*\\')|(\\\"([^\\\"\\\\]|\\\\.)*\\\")|(\\`([^\\`\\\\]|\\\\.)*\\`))(?=\\s*([\\<\\>\\,\\.\\[]|=>|&(?!&)|\\|(?!\\|)))))(([^<>\\(]|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(?<==)\\>|\\<\\s*(((keyof|infer|typeof|readonly)\\s+)|(([_$A-Za-z][_$0-9A-Za-z]*|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\])|(\\'([^\\'\\\\]|\\\\.)*\\')|(\\\"([^\\\"\\\\]|\\\\.)*\\\")|(\\`([^\\`\\\\]|\\\\.)*\\`))(?=\\s*([\\<\\>\\,\\.\\[]|=>|&(?!&)|\\|(?!\\|)))))([^<>\\(]|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(?<==)\\>)*(?<!=)\\>))*(?<!=)\\>)*(?<!=)>\\s*)?`)", patterns: [{ include: "#support-function-call-identifiers" }, { match: "([_$A-Za-z][_$0-9A-Za-z]*)", name: "entity.name.function.tagged-template.js" }] }, { include: "#type-arguments" }] }, { begin: "([_$A-Za-z][_$0-9A-Za-z]*)?\\s*(?=(<\\s*(((keyof|infer|typeof|readonly)\\s+)|(([_$A-Za-z][_$0-9A-Za-z]*|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\])|(\\'([^\\'\\\\]|\\\\.)*\\')|(\\\"([^\\\"\\\\]|\\\\.)*\\\")|(\\`([^\\`\\\\]|\\\\.)*\\`))(?=\\s*([\\<\\>\\,\\.\\[]|=>|&(?!&)|\\|(?!\\|)))))([^<>\\(]|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(?<==)\\>|\\<\\s*(((keyof|infer|typeof|readonly)\\s+)|(([_$A-Za-z][_$0-9A-Za-z]*|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\])|(\\'([^\\'\\\\]|\\\\.)*\\')|(\\\"([^\\\"\\\\]|\\\\.)*\\\")|(\\`([^\\`\\\\]|\\\\.)*\\`))(?=\\s*([\\<\\>\\,\\.\\[]|=>|&(?!&)|\\|(?!\\|)))))(([^<>\\(]|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(?<==)\\>|\\<\\s*(((keyof|infer|typeof|readonly)\\s+)|(([_$A-Za-z][_$0-9A-Za-z]*|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\])|(\\'([^\\'\\\\]|\\\\.)*\\')|(\\\"([^\\\"\\\\]|\\\\.)*\\\")|(\\`([^\\`\\\\]|\\\\.)*\\`))(?=\\s*([\\<\\>\\,\\.\\[]|=>|&(?!&)|\\|(?!\\|)))))([^<>\\(]|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(?<==)\\>)*(?<!=)\\>))*(?<!=)\\>)*(?<!=)>\\s*)`)", beginCaptures: { 1: { name: "entity.name.function.tagged-template.js" } }, end: "(?=`)", patterns: [{ include: "#type-arguments" }] }] }, "template-substitution-element": { begin: "\\$\\{", beginCaptures: { 0: { name: "punctuation.definition.template-expression.begin.js" } }, contentName: "meta.embedded.line.js", end: "\\}", endCaptures: { 0: { name: "punctuation.definition.template-expression.end.js" } }, name: "meta.template.expression.js", patterns: [{ include: "#expression" }] }, "template-type": { patterns: [{ include: "#template-call" }, { begin: "([_$A-Za-z][_$0-9A-Za-z]*)?(`)", beginCaptures: { 1: { name: "entity.name.function.tagged-template.js" }, 2: { name: "string.template.js punctuation.definition.string.template.begin.js" } }, contentName: "string.template.js", end: "`", endCaptures: { 0: { name: "string.template.js punctuation.definition.string.template.end.js" } }, patterns: [{ include: "#template-type-substitution-element" }, { include: "#string-character-escape" }] }] }, "template-type-substitution-element": { begin: "\\$\\{", beginCaptures: { 0: { name: "punctuation.definition.template-expression.begin.js" } }, contentName: "meta.embedded.line.js", end: "\\}", endCaptures: { 0: { name: "punctuation.definition.template-expression.end.js" } }, name: "meta.template.expression.js", patterns: [{ include: "#type" }] }, "ternary-expression": { begin: "(?!\\?\\.\\s*[^\\d])(\\?)(?!\\?)", beginCaptures: { 1: { name: "keyword.operator.ternary.js" } }, end: "\\s*(:)", endCaptures: { 1: { name: "keyword.operator.ternary.js" } }, patterns: [{ include: "#expression" }] }, "this-literal": { match: "(?<![_$0-9A-Za-z])(?:(?<=\\.\\.\\.)|(?<!\\.))this\\b(?!\\$)", name: "variable.language.this.js" }, type: { patterns: [{ include: "#comment" }, { include: "#type-string" }, { include: "#numeric-literal" }, { include: "#type-primitive" }, { include: "#type-builtin-literals" }, { include: "#type-parameters" }, { include: "#type-tuple" }, { include: "#type-object" }, { include: "#type-operators" }, { include: "#type-conditional" }, { include: "#type-fn-type-parameters" }, { include: "#type-paren-or-function-parameters" }, { include: "#type-function-return-type" }, { captures: { 1: { name: "storage.modifier.js" } }, match: "(?<![_$0-9A-Za-z])(?:(?<=\\.\\.\\.)|(?<!\\.))(readonly)(?![_$0-9A-Za-z])(?:(?=\\.\\.\\.)|(?!\\.))\\s*" }, { include: "#type-name" }] }, "type-alias-declaration": { begin: "(?<![_$0-9A-Za-z])(?:(?<=\\.\\.\\.)|(?<!\\.))(?:(\\bexport)\\s+)?(?:(\\bdeclare)\\s+)?\\b(type)\\b\\s+([_$A-Za-z][_$0-9A-Za-z]*)\\s*", beginCaptures: { 1: { name: "keyword.control.export.js" }, 2: { name: "storage.modifier.js" }, 3: { name: "storage.type.type.js" }, 4: { name: "entity.name.type.alias.js" } }, end: "(?=\\}|;|^\\s*$|(?:^\\s*(?:abstract|async|(?:\\bawait\\s+(?:\\busing(?=\\s+(?!in\\b|of\\b(?!\\s*(?:of\\b|=)))[_$A-Za-z])\\b)\\b)|break|case|catch|class|const|continue|declare|do|else|enum|export|finally|function|for|goto|if|import|interface|let|module|namespace|switch|return|throw|try|type|(?:\\busing(?=\\s+(?!in\\b|of\\b(?!\\s*(?:of\\b|=)))[_$A-Za-z])\\b)|var|while)\\b))", name: "meta.type.declaration.js", patterns: [{ include: "#comment" }, { include: "#type-parameters" }, { begin: "(=)\\s*(intrinsic)(?![_$0-9A-Za-z])(?:(?=\\.\\.\\.)|(?!\\.))", beginCaptures: { 1: { name: "keyword.operator.assignment.js" }, 2: { name: "keyword.control.intrinsic.js" } }, end: "(?=\\}|;|^\\s*$|(?:^\\s*(?:abstract|async|(?:\\bawait\\s+(?:\\busing(?=\\s+(?!in\\b|of\\b(?!\\s*(?:of\\b|=)))[_$A-Za-z])\\b)\\b)|break|case|catch|class|const|continue|declare|do|else|enum|export|finally|function|for|goto|if|import|interface|let|module|namespace|switch|return|throw|try|type|(?:\\busing(?=\\s+(?!in\\b|of\\b(?!\\s*(?:of\\b|=)))[_$A-Za-z])\\b)|var|while)\\b))", patterns: [{ include: "#type" }] }, { begin: "(=)\\s*", beginCaptures: { 1: { name: "keyword.operator.assignment.js" } }, end: "(?=\\}|;|^\\s*$|(?:^\\s*(?:abstract|async|(?:\\bawait\\s+(?:\\busing(?=\\s+(?!in\\b|of\\b(?!\\s*(?:of\\b|=)))[_$A-Za-z])\\b)\\b)|break|case|catch|class|const|continue|declare|do|else|enum|export|finally|function|for|goto|if|import|interface|let|module|namespace|switch|return|throw|try|type|(?:\\busing(?=\\s+(?!in\\b|of\\b(?!\\s*(?:of\\b|=)))[_$A-Za-z])\\b)|var|while)\\b))", patterns: [{ include: "#type" }] }] }, "type-annotation": { patterns: [{ begin: "(:)(?=\\s*\\S)", beginCaptures: { 1: { name: "keyword.operator.type.annotation.js" } }, end: "(?<![:|&])(?!\\s*[|&]\\s+)((?=^|[,);\\}\\]]|//)|(?==[^>])|((?<=[\\}>\\]\\)]|[_$A-Za-z])\\s*(?=\\{)))", name: "meta.type.annotation.js", patterns: [{ include: "#type" }] }, { begin: "(:)", beginCaptures: { 1: { name: "keyword.operator.type.annotation.js" } }, end: "(?<![:|&])((?=[,);\\}\\]]|\\/\\/)|(?==[^>])|(?=^\\s*$)|((?<=[\\}>\\]\\)]|[_$A-Za-z])\\s*(?=\\{)))", name: "meta.type.annotation.js", patterns: [{ include: "#type" }] }] }, "type-arguments": { begin: "\\<", beginCaptures: { 0: { name: "punctuation.definition.typeparameters.begin.js" } }, end: "\\>", endCaptures: { 0: { name: "punctuation.definition.typeparameters.end.js" } }, name: "meta.type.parameters.js", patterns: [{ include: "#type-arguments-body" }] }, "type-arguments-body": { patterns: [{ captures: { 0: { name: "keyword.operator.type.js" } }, match: "(?<![_$0-9A-Za-z])(?:(?<=\\.\\.\\.)|(?<!\\.))(_)(?![_$0-9A-Za-z])(?:(?=\\.\\.\\.)|(?!\\.))" }, { include: "#type" }, { include: "#punctuation-comma" }] }, "type-builtin-literals": { match: "(?<![_$0-9A-Za-z])(?:(?<=\\.\\.\\.)|(?<!\\.))(this|true|false|undefined|null|object)(?![_$0-9A-Za-z])(?:(?=\\.\\.\\.)|(?!\\.))", name: "support.type.builtin.js" }, "type-conditional": { patterns: [{ begin: "(?<![_$0-9A-Za-z])(?:(?<=\\.\\.\\.)|(?<!\\.))(extends)\\s+", beginCaptures: { 1: { name: "storage.modifier.js" } }, end: "(?<=:)", patterns: [{ begin: "\\?", beginCaptures: { 0: { name: "keyword.operator.ternary.js" } }, end: ":", endCaptures: { 0: { name: "keyword.operator.ternary.js" } }, patterns: [{ include: "#type" }] }, { include: "#type" }] }] }, "type-fn-type-parameters": { patterns: [{ begin: "(?<![_$0-9A-Za-z])(?:(?<=\\.\\.\\.)|(?<!\\.))(?:(abstract)\\s+)?(new)\\b(?=\\s*\\<)", beginCaptures: { 1: { name: "meta.type.constructor.js storage.modifier.js" }, 2: { name: "meta.type.constructor.js keyword.control.new.js" } }, end: "(?<=>)", patterns: [{ include: "#comment" }, { include: "#type-parameters" }] }, { begin: "(?<![_$0-9A-Za-z])(?:(?<=\\.\\.\\.)|(?<!\\.))(?:(abstract)\\s+)?(new)\\b\\s*(?=\\()", beginCaptures: { 1: { name: "storage.modifier.js" }, 2: { name: "keyword.control.new.js" } }, end: "(?<=\\))", name: "meta.type.constructor.js", patterns: [{ include: "#function-parameters" }] }, { begin: "((?=[(]\\s*(([)])|(\\.\\.\\.)|([_$0-9A-Za-z]+\\s*(([:,?=])|([)]\\s*=>))))))", end: "(?<=\\))", name: "meta.type.function.js", patterns: [{ include: "#function-parameters" }] }] }, "type-function-return-type": { patterns: [{ begin: "(=>)(?=\\s*\\S)", beginCaptures: { 1: { name: "storage.type.function.arrow.js" } }, end: "(?<!=>)(?<![|&])(?=[,\\]\\)\\{\\}=;>:\\?]|//|$)", name: "meta.type.function.return.js", patterns: [{ include: "#type-function-return-type-core" }] }, { begin: "=>", beginCaptures: { 0: { name: "storage.type.function.arrow.js" } }, end: "(?<!=>)(?<![|&])((?=[,\\]\\)\\{\\}=;:\\?>]|//|^\\s*$)|((?<=\\S)(?=\\s*$)))", name: "meta.type.function.return.js", patterns: [{ include: "#type-function-return-type-core" }] }] }, "type-function-return-type-core": { patterns: [{ include: "#comment" }, { begin: "(?<==>)(?=\\s*\\{)", end: "(?<=\\})", patterns: [{ include: "#type-object" }] }, { include: "#type-predicate-operator" }, { include: "#type" }] }, "type-infer": { patterns: [{ captures: { 1: { name: "keyword.operator.expression.infer.js" }, 2: { name: "entity.name.type.js" }, 3: { name: "keyword.operator.expression.extends.js" } }, match: "(?<![_$0-9A-Za-z])(?:(?<=\\.\\.\\.)|(?<!\\.))(infer)\\s+([_$A-Za-z][_$0-9A-Za-z]*)(?![_$0-9A-Za-z])(?:(?=\\.\\.\\.)|(?!\\.))(?:\\s+(extends)(?![_$0-9A-Za-z])(?:(?=\\.\\.\\.)|(?!\\.)))?", name: "meta.type.infer.js" }] }, "type-name": { patterns: [{ begin: "([_$A-Za-z][_$0-9A-Za-z]*)\\s*(?:(\\.)|(\\?\\.(?!\\s*[\\d])))\\s*(<)", captures: { 1: { name: "entity.name.type.module.js" }, 2: { name: "punctuation.accessor.js" }, 3: { name: "punctuation.accessor.optional.js" }, 4: { name: "meta.type.parameters.js punctuation.definition.typeparameters.begin.js" } }, contentName: "meta.type.parameters.js", end: "(>)", endCaptures: { 1: { name: "meta.type.parameters.js punctuation.definition.typeparameters.end.js" } }, patterns: [{ include: "#type-arguments-body" }] }, { begin: "([_$A-Za-z][_$0-9A-Za-z]*)\\s*(<)", beginCaptures: { 1: { name: "entity.name.type.js" }, 2: { name: "meta.type.parameters.js punctuation.definition.typeparameters.begin.js" } }, contentName: "meta.type.parameters.js", end: "(>)", endCaptures: { 1: { name: "meta.type.parameters.js punctuation.definition.typeparameters.end.js" } }, patterns: [{ include: "#type-arguments-body" }] }, { captures: { 1: { name: "entity.name.type.module.js" }, 2: { name: "punctuation.accessor.js" }, 3: { name: "punctuation.accessor.optional.js" } }, match: "([_$A-Za-z][_$0-9A-Za-z]*)\\s*(?:(\\.)|(\\?\\.(?!\\s*[\\d])))" }, { match: "[_$A-Za-z][_$0-9A-Za-z]*", name: "entity.name.type.js" }] }, "type-object": { begin: "\\{", beginCaptures: { 0: { name: "punctuation.definition.block.js" } }, end: "\\}", endCaptures: { 0: { name: "punctuation.definition.block.js" } }, name: "meta.object.type.js", patterns: [{ include: "#comment" }, { include: "#method-declaration" }, { include: "#indexer-declaration" }, { include: "#indexer-mapped-type-declaration" }, { include: "#field-declaration" }, { include: "#type-annotation" }, { begin: "\\.\\.\\.", beginCaptures: { 0: { name: "keyword.operator.spread.js" } }, end: "(?=\\}|;|,|$)|(?<=\\})", patterns: [{ include: "#type" }] }, { include: "#punctuation-comma" }, { include: "#punctuation-semicolon" }, { include: "#type" }] }, "type-operators": { patterns: [{ include: "#typeof-operator" }, { include: "#type-infer" }, { begin: "([&|])(?=\\s*\\{)", beginCaptures: { 0: { name: "keyword.operator.type.js" } }, end: "(?<=\\})", patterns: [{ include: "#type-object" }] }, { begin: "[&|]", beginCaptures: { 0: { name: "keyword.operator.type.js" } }, end: "(?=\\S)" }, { match: "(?<![_$0-9A-Za-z])(?:(?<=\\.\\.\\.)|(?<!\\.))keyof(?![_$0-9A-Za-z])(?:(?=\\.\\.\\.)|(?!\\.))", name: "keyword.operator.expression.keyof.js" }, { match: "(\\?|\\:)", name: "keyword.operator.ternary.js" }, { match: "(?<![_$0-9A-Za-z])(?:(?<=\\.\\.\\.)|(?<!\\.))import(?=\\s*\\()", name: "keyword.operator.expression.import.js" }] }, "type-parameters": { begin: "(<)", beginCaptures: { 1: { name: "punctuation.definition.typeparameters.begin.js" } }, end: "(>)", endCaptures: { 1: { name: "punctuation.definition.typeparameters.end.js" } }, name: "meta.type.parameters.js", patterns: [{ include: "#comment" }, { match: "(?<![_$0-9A-Za-z])(?:(?<=\\.\\.\\.)|(?<!\\.))(extends|in|out|const)(?![_$0-9A-Za-z])(?:(?=\\.\\.\\.)|(?!\\.))", name: "storage.modifier.js" }, { include: "#type" }, { include: "#punctuation-comma" }, { match: "(=)(?!>)", name: "keyword.operator.assignment.js" }] }, "type-paren-or-function-parameters": { begin: "\\(", beginCaptures: { 0: { name: "meta.brace.round.js" } }, end: "\\)", endCaptures: { 0: { name: "meta.brace.round.js" } }, name: "meta.type.paren.cover.js", patterns: [{ captures: { 1: { name: "storage.modifier.js" }, 2: { name: "keyword.operator.rest.js" }, 3: { name: "entity.name.function.js variable.language.this.js" }, 4: { name: "entity.name.function.js" }, 5: { name: "keyword.operator.optional.js" } }, match: "(?:(?<![_$0-9A-Za-z])(?:(?<=\\.\\.\\.)|(?<!\\.))(public|private|protected|readonly)\\s+)?(?:(\\.\\.\\.)\\s*)?(?<!=|:)(?<![_$0-9A-Za-z])(?:(?<=\\.\\.\\.)|(?<!\\.))(?:(this)|([_$A-Za-z][_$0-9A-Za-z]*))\\s*(\\??)(?=\\s*(:\\s*((<)|([(]\\s*(([)])|(\\.\\.\\.)|([_$0-9A-Za-z]+\\s*(([:,?=])|([)]\\s*=>)))))))|(:\\s*(?<![_$0-9A-Za-z])(?:(?<=\\.\\.\\.)|(?<!\\.))Function(?![_$0-9A-Za-z])(?:(?=\\.\\.\\.)|(?!\\.)))|(:\\s*((<\\s*$)|([\\(]\\s*((([\\{\\[]\\s*)?$)|((\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})\\s*((:\\s*\\{?$)|((\\s*([^<>\\(\\)\\{\\}]|\\<([^<>]|\\<([^<>]|\\<[^<>]+\\>)+\\>)+\\>|\\([^\\(\\)]+\\)|\\{[^\\{\\}]+\\})+\\s*)?=\\s*)))|((\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\])\\s*((:\\s*\\[?$)|((\\s*([^<>\\(\\)\\{\\}]|\\<([^<>]|\\<([^<>]|\\<[^<>]+\\>)+\\>)+\\>|\\([^\\(\\)]+\\)|\\{[^\\{\\}]+\\})+\\s*)?=\\s*))))))))" }, { captures: { 1: { name: "storage.modifier.js" }, 2: { name: "keyword.operator.rest.js" }, 3: { name: "variable.parameter.js variable.language.this.js" }, 4: { name: "variable.parameter.js" }, 5: { name: "keyword.operator.optional.js" } }, match: "(?:(?<![_$0-9A-Za-z])(?:(?<=\\.\\.\\.)|(?<!\\.))(public|private|protected|readonly)\\s+)?(?:(\\.\\.\\.)\\s*)?(?<!=|:)(?<![_$0-9A-Za-z])(?:(?<=\\.\\.\\.)|(?<!\\.))(?:(this)|([_$A-Za-z][_$0-9A-Za-z]*))\\s*(\\??)(?=:)" }, { include: "#type-annotation" }, { match: ",", name: "punctuation.separator.parameter.js" }, { include: "#type" }] }, "type-predicate-operator": { patterns: [{ captures: { 1: { name: "keyword.operator.type.asserts.js" }, 2: { name: "variable.parameter.js variable.language.this.js" }, 3: { name: "variable.parameter.js" }, 4: { name: "keyword.operator.expression.is.js" } }, match: "(?<![_$0-9A-Za-z])(?:(?<=\\.\\.\\.)|(?<!\\.))(?:(asserts)\\s+)?(?!asserts)(?:(this)|([_$A-Za-z][_$0-9A-Za-z]*))\\s(is)(?![_$0-9A-Za-z])(?:(?=\\.\\.\\.)|(?!\\.))" }, { captures: { 1: { name: "keyword.operator.type.asserts.js" }, 2: { name: "variable.parameter.js variable.language.this.js" }, 3: { name: "variable.parameter.js" } }, match: "(?<![_$0-9A-Za-z])(?:(?<=\\.\\.\\.)|(?<!\\.))(asserts)\\s+(?!is)(?:(this)|([_$A-Za-z][_$0-9A-Za-z]*))(?![_$0-9A-Za-z])(?:(?=\\.\\.\\.)|(?!\\.))" }, { match: "(?<![_$0-9A-Za-z])(?:(?<=\\.\\.\\.)|(?<!\\.))asserts(?![_$0-9A-Za-z])(?:(?=\\.\\.\\.)|(?!\\.))", name: "keyword.operator.type.asserts.js" }, { match: "(?<![_$0-9A-Za-z])(?:(?<=\\.\\.\\.)|(?<!\\.))is(?![_$0-9A-Za-z])(?:(?=\\.\\.\\.)|(?!\\.))", name: "keyword.operator.expression.is.js" }] }, "type-primitive": { match: "(?<![_$0-9A-Za-z])(?:(?<=\\.\\.\\.)|(?<!\\.))(string|number|bigint|boolean|symbol|any|void|never|unknown)(?![_$0-9A-Za-z])(?:(?=\\.\\.\\.)|(?!\\.))", name: "support.type.primitive.js" }, "type-string": { patterns: [{ include: "#qstring-single" }, { include: "#qstring-double" }, { include: "#template-type" }] }, "type-tuple": { begin: "\\[", beginCaptures: { 0: { name: "meta.brace.square.js" } }, end: "\\]", endCaptures: { 0: { name: "meta.brace.square.js" } }, name: "meta.type.tuple.js", patterns: [{ match: "\\.\\.\\.", name: "keyword.operator.rest.js" }, { captures: { 1: { name: "entity.name.label.js" }, 2: { name: "keyword.operator.optional.js" }, 3: { name: "punctuation.separator.label.js" } }, match: "(?<![_$0-9A-Za-z])(?:(?<=\\.\\.\\.)|(?<!\\.))([_$A-Za-z][_$0-9A-Za-z]*)\\s*(\\?)?\\s*(:)" }, { include: "#type" }, { include: "#punctuation-comma" }] }, "typeof-operator": { begin: "(?<![_$0-9A-Za-z])(?:(?<=\\.\\.\\.)|(?<!\\.))typeof(?![_$0-9A-Za-z])(?:(?=\\.\\.\\.)|(?!\\.))", beginCaptures: { 0: { name: "keyword.operator.expression.typeof.js" } }, end: "(?=[,);}\\]=>:&|{\\?]|(extends\\s+)|$|;|^\\s*$|(?:^\\s*(?:abstract|async|(?:\\bawait\\s+(?:\\busing(?=\\s+(?!in\\b|of\\b(?!\\s*(?:of\\b|=)))[_$A-Za-z])\\b)\\b)|break|case|catch|class|const|continue|declare|do|else|enum|export|finally|function|for|goto|if|import|interface|let|module|namespace|switch|return|throw|try|type|(?:\\busing(?=\\s+(?!in\\b|of\\b(?!\\s*(?:of\\b|=)))[_$A-Za-z])\\b)|var|while)\\b))", patterns: [{ include: "#type-arguments" }, { include: "#expression" }] }, "undefined-literal": { match: "(?<![_$0-9A-Za-z])(?:(?<=\\.\\.\\.)|(?<!\\.))undefined(?![_$0-9A-Za-z])(?:(?=\\.\\.\\.)|(?!\\.))", name: "constant.language.undefined.js" }, "var-expr": { patterns: [{ begin: "(?=(?<![_$0-9A-Za-z])(?:(?<=\\.\\.\\.)|(?<!\\.))(?:(\\bexport)\\s+)?(?:(\\bdeclare)\\s+)?\\b(var|let)(?![_$0-9A-Za-z])(?:(?=\\.\\.\\.)|(?!\\.)))", end: "(?!(?<![_$0-9A-Za-z])(?:(?<=\\.\\.\\.)|(?<!\\.))(?:(\\bexport)\\s+)?(?:(\\bdeclare)\\s+)?\\b(var|let)(?![_$0-9A-Za-z])(?:(?=\\.\\.\\.)|(?!\\.)))((?=^|;|}|((?<![_$0-9A-Za-z])(?:(?<=\\.\\.\\.)|(?<!\\.))(of|in)\\s+)|;|^\\s*$|(?:^\\s*(?:abstract|async|(?:\\bawait\\s+(?:\\busing(?=\\s+(?!in\\b|of\\b(?!\\s*(?:of\\b|=)))[_$A-Za-z])\\b)\\b)|break|case|catch|class|const|continue|declare|do|else|enum|export|finally|function|for|goto|if|import|interface|let|module|namespace|switch|return|throw|try|type|(?:\\busing(?=\\s+(?!in\\b|of\\b(?!\\s*(?:of\\b|=)))[_$A-Za-z])\\b)|var|while)\\b))|((?<!^let|[^\\._$0-9A-Za-z]let|^var|[^\\._$0-9A-Za-z]var)(?=\\s*$)))", name: "meta.var.expr.js", patterns: [{ begin: "(?<![_$0-9A-Za-z])(?:(?<=\\.\\.\\.)|(?<!\\.))(?:(\\bexport)\\s+)?(?:(\\bdeclare)\\s+)?\\b(var|let)(?![_$0-9A-Za-z])(?:(?=\\.\\.\\.)|(?!\\.))\\s*", beginCaptures: { 1: { name: "keyword.control.export.js" }, 2: { name: "storage.modifier.js" }, 3: { name: "storage.type.js" } }, end: "(?=\\S)" }, { include: "#destructuring-variable" }, { include: "#var-single-variable" }, { include: "#variable-initializer" }, { include: "#comment" }, { begin: "(,)\\s*(?=$|\\/\\/)", beginCaptures: { 1: { name: "punctuation.separator.comma.js" } }, end: "(?<!,)(((?==|;|}|((?<![_$0-9A-Za-z])(?:(?<=\\.\\.\\.)|(?<!\\.))(of|in)\\s+)|^\\s*$))|((?<=\\S)(?=\\s*$)))", patterns: [{ include: "#single-line-comment-consuming-line-ending" }, { include: "#comment" }, { include: "#destructuring-variable" }, { include: "#var-single-variable" }, { include: "#punctuation-comma" }] }, { include: "#punctuation-comma" }] }, { begin: "(?=(?<![_$0-9A-Za-z])(?:(?<=\\.\\.\\.)|(?<!\\.))(?:(\\bexport)\\s+)?(?:(\\bdeclare)\\s+)?\\b(const(?!\\s+enum\\b))(?![_$0-9A-Za-z])(?:(?=\\.\\.\\.)|(?!\\.)))", beginCaptures: { 1: { name: "keyword.control.export.js" }, 2: { name: "storage.modifier.js" }, 3: { name: "storage.type.js" } }, end: "(?!(?<![_$0-9A-Za-z])(?:(?<=\\.\\.\\.)|(?<!\\.))(?:(\\bexport)\\s+)?(?:(\\bdeclare)\\s+)?\\b(const(?!\\s+enum\\b))(?![_$0-9A-Za-z])(?:(?=\\.\\.\\.)|(?!\\.)))((?=^|;|}|((?<![_$0-9A-Za-z])(?:(?<=\\.\\.\\.)|(?<!\\.))(of|in)\\s+)|;|^\\s*$|(?:^\\s*(?:abstract|async|(?:\\bawait\\s+(?:\\busing(?=\\s+(?!in\\b|of\\b(?!\\s*(?:of\\b|=)))[_$A-Za-z])\\b)\\b)|break|case|catch|class|const|continue|declare|do|else|enum|export|finally|function|for|goto|if|import|interface|let|module|namespace|switch|return|throw|try|type|(?:\\busing(?=\\s+(?!in\\b|of\\b(?!\\s*(?:of\\b|=)))[_$A-Za-z])\\b)|var|while)\\b))|((?<!^const|[^\\._$0-9A-Za-z]const)(?=\\s*$)))", name: "meta.var.expr.js", patterns: [{ begin: "(?<![_$0-9A-Za-z])(?:(?<=\\.\\.\\.)|(?<!\\.))(?:(\\bexport)\\s+)?(?:(\\bdeclare)\\s+)?\\b(const(?!\\s+enum\\b))(?![_$0-9A-Za-z])(?:(?=\\.\\.\\.)|(?!\\.))\\s*", beginCaptures: { 1: { name: "keyword.control.export.js" }, 2: { name: "storage.modifier.js" }, 3: { name: "storage.type.js" } }, end: "(?=\\S)" }, { include: "#destructuring-const" }, { include: "#var-single-const" }, { include: "#variable-initializer" }, { include: "#comment" }, { begin: "(,)\\s*(?=$|\\/\\/)", beginCaptures: { 1: { name: "punctuation.separator.comma.js" } }, end: "(?<!,)(((?==|;|}|((?<![_$0-9A-Za-z])(?:(?<=\\.\\.\\.)|(?<!\\.))(of|in)\\s+)|^\\s*$))|((?<=\\S)(?=\\s*$)))", patterns: [{ include: "#single-line-comment-consuming-line-ending" }, { include: "#comment" }, { include: "#destructuring-const" }, { include: "#var-single-const" }, { include: "#punctuation-comma" }] }, { include: "#punctuation-comma" }] }, { begin: "(?=(?<![_$0-9A-Za-z])(?:(?<=\\.\\.\\.)|(?<!\\.))(?:(\\bexport)\\s+)?(?:(\\bdeclare)\\s+)?\\b((?:\\busing(?=\\s+(?!in\\b|of\\b(?!\\s*(?:of\\b|=)))[_$A-Za-z])\\b)|(?:\\bawait\\s+(?:\\busing(?=\\s+(?!in\\b|of\\b(?!\\s*(?:of\\b|=)))[_$A-Za-z])\\b)\\b))(?![_$0-9A-Za-z])(?:(?=\\.\\.\\.)|(?!\\.)))", beginCaptures: { 1: { name: "keyword.control.export.js" }, 2: { name: "storage.modifier.js" }, 3: { name: "storage.type.js" } }, end: "(?!(?<![_$0-9A-Za-z])(?:(?<=\\.\\.\\.)|(?<!\\.))(?:(\\bexport)\\s+)?(?:(\\bdeclare)\\s+)?\\b((?:\\busing(?=\\s+(?!in\\b|of\\b(?!\\s*(?:of\\b|=)))[_$A-Za-z])\\b)|(?:\\bawait\\s+(?:\\busing(?=\\s+(?!in\\b|of\\b(?!\\s*(?:of\\b|=)))[_$A-Za-z])\\b)\\b))(?![_$0-9A-Za-z])(?:(?=\\.\\.\\.)|(?!\\.)))((?=;|}|((?<![_$0-9A-Za-z])(?:(?<=\\.\\.\\.)|(?<!\\.))(of|in)\\s+)|;|^\\s*$|(?:^\\s*(?:abstract|async|(?:\\bawait\\s+(?:\\busing(?=\\s+(?!in\\b|of\\b(?!\\s*(?:of\\b|=)))[_$A-Za-z])\\b)\\b)|break|case|catch|class|const|continue|declare|do|else|enum|export|finally|function|for|goto|if|import|interface|let|module|namespace|switch|return|throw|try|type|(?:\\busing(?=\\s+(?!in\\b|of\\b(?!\\s*(?:of\\b|=)))[_$A-Za-z])\\b)|var|while)\\b))|((?<!^using|[^\\._$0-9A-Za-z]using|^await\\s+using|[^\\._$0-9A-Za-z]await\\s+using)(?=\\s*$)))", name: "meta.var.expr.js", patterns: [{ begin: "(?<![_$0-9A-Za-z])(?:(?<=\\.\\.\\.)|(?<!\\.))(?:(\\bexport)\\s+)?(?:(\\bdeclare)\\s+)?\\b((?:\\busing(?=\\s+(?!in\\b|of\\b(?!\\s*(?:of\\b|=)))[_$A-Za-z])\\b)|(?:\\bawait\\s+(?:\\busing(?=\\s+(?!in\\b|of\\b(?!\\s*(?:of\\b|=)))[_$A-Za-z])\\b)\\b))(?![_$0-9A-Za-z])(?:(?=\\.\\.\\.)|(?!\\.))\\s*", beginCaptures: { 1: { name: "keyword.control.export.js" }, 2: { name: "storage.modifier.js" }, 3: { name: "storage.type.js" } }, end: "(?=\\S)" }, { include: "#var-single-const" }, { include: "#variable-initializer" }, { include: "#comment" }, { begin: "(,)\\s*((?!\\S)|(?=\\/\\/))", beginCaptures: { 1: { name: "punctuation.separator.comma.js" } }, end: "(?<!,)(((?==|;|}|((?<![_$0-9A-Za-z])(?:(?<=\\.\\.\\.)|(?<!\\.))(of|in)\\s+)|^\\s*$))|((?<=\\S)(?=\\s*$)))", patterns: [{ include: "#single-line-comment-consuming-line-ending" }, { include: "#comment" }, { include: "#var-single-const" }, { include: "#punctuation-comma" }] }, { include: "#punctuation-comma" }] }] }, "var-single-const": { patterns: [{ begin: "([_$A-Za-z][_$0-9A-Za-z]*)(?=\\s*(=\\s*(((async\\s+)?((function\\s*[(<*])|(function\\s+)|([_$A-Za-z][_$0-9A-Za-z]*\\s*=>)))|((async\\s*)?(((<\\s*$)|([\\(]\\s*((([\\{\\[]\\s*)?$)|((\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})\\s*((:\\s*\\{?$)|((\\s*([^<>\\(\\)\\{\\}]|\\<([^<>]|\\<([^<>]|\\<[^<>]+\\>)+\\>)+\\>|\\([^\\(\\)]+\\)|\\{[^\\{\\}]+\\})+\\s*)?=\\s*)))|((\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\])\\s*((:\\s*\\[?$)|((\\s*([^<>\\(\\)\\{\\}]|\\<([^<>]|\\<([^<>]|\\<[^<>]+\\>)+\\>)+\\>|\\([^\\(\\)]+\\)|\\{[^\\{\\}]+\\})+\\s*)?=\\s*))))))|((<\\s*(((const\\s+)?[_$A-Za-z])|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\]))([^=<>]|=[^<]|\\<\\s*(((const\\s+)?[_$A-Za-z])|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\]))([^=<>]|=[^<]|\\<\\s*(((const\\s+)?[_$A-Za-z])|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\]))([^=<>]|=[^<])*\\>)*\\>)*>\\s*)?[(]\\s*(\\/\\*([^\\*]|(\\*[^\\/]))*\\*\\/\\s*)*(([)]\\s*:)|((\\.\\.\\.\\s*)?[_$A-Za-z][_$0-9A-Za-z]*\\s*:)))|([<]\\s*[_$A-Za-z][_$0-9A-Za-z]*\\s+extends\\s*[^=>])|((<\\s*(((const\\s+)?[_$A-Za-z])|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\]))([^=<>]|=[^<]|\\<\\s*(((const\\s+)?[_$A-Za-z])|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\]))([^=<>]|=[^<]|\\<\\s*(((const\\s+)?[_$A-Za-z])|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\]))([^=<>]|=[^<])*\\>)*\\>)*>\\s*)?\\(\\s*(\\/\\*([^\\*]|(\\*[^\\/]))*\\*\\/\\s*)*(([_$A-Za-z]|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\])|(\\.\\.\\.\\s*[_$A-Za-z]))([^()\\'\\\"\\`]|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\'([^\\'\\\\]|\\\\.)*\\')|(\\\"([^\\\"\\\\]|\\\\.)*\\\")|(\\`([^\\`\\\\]|\\\\.)*\\`))*)?\\)(\\s*:\\s*([^<>\\(\\)\\{\\}]|\\<([^<>]|\\<([^<>]|\\<[^<>]+\\>)+\\>)+\\>|\\([^\\(\\)]+\\)|\\{[^\\{\\}]+\\})+)?\\s*=>)))))|(:\\s*((<)|([(]\\s*(([)])|(\\.\\.\\.)|([_$0-9A-Za-z]+\\s*(([:,?=])|([)]\\s*=>)))))))|(:\\s*(?<![_$0-9A-Za-z])(?:(?<=\\.\\.\\.)|(?<!\\.))Function(?![_$0-9A-Za-z])(?:(?=\\.\\.\\.)|(?!\\.)))|(:\\s*((<\\s*$)|([\\(]\\s*((([\\{\\[]\\s*)?$)|((\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})\\s*((:\\s*\\{?$)|((\\s*([^<>\\(\\)\\{\\}]|\\<([^<>]|\\<([^<>]|\\<[^<>]+\\>)+\\>)+\\>|\\([^\\(\\)]+\\)|\\{[^\\{\\}]+\\})+\\s*)?=\\s*)))|((\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\])\\s*((:\\s*\\[?$)|((\\s*([^<>\\(\\)\\{\\}]|\\<([^<>]|\\<([^<>]|\\<[^<>]+\\>)+\\>)+\\>|\\([^\\(\\)]+\\)|\\{[^\\{\\}]+\\})+\\s*)?=\\s*)))))))|(:\\s*(=>|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(<[^<>]*>)|[^<>(),=])+=\\s*(((async\\s+)?((function\\s*[(<*])|(function\\s+)|([_$A-Za-z][_$0-9A-Za-z]*\\s*=>)))|((async\\s*)?(((<\\s*$)|([\\(]\\s*((([\\{\\[]\\s*)?$)|((\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})\\s*((:\\s*\\{?$)|((\\s*([^<>\\(\\)\\{\\}]|\\<([^<>]|\\<([^<>]|\\<[^<>]+\\>)+\\>)+\\>|\\([^\\(\\)]+\\)|\\{[^\\{\\}]+\\})+\\s*)?=\\s*)))|((\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\])\\s*((:\\s*\\[?$)|((\\s*([^<>\\(\\)\\{\\}]|\\<([^<>]|\\<([^<>]|\\<[^<>]+\\>)+\\>)+\\>|\\([^\\(\\)]+\\)|\\{[^\\{\\}]+\\})+\\s*)?=\\s*))))))|((<\\s*(((const\\s+)?[_$A-Za-z])|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\]))([^=<>]|=[^<]|\\<\\s*(((const\\s+)?[_$A-Za-z])|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\]))([^=<>]|=[^<]|\\<\\s*(((const\\s+)?[_$A-Za-z])|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\]))([^=<>]|=[^<])*\\>)*\\>)*>\\s*)?[(]\\s*(\\/\\*([^\\*]|(\\*[^\\/]))*\\*\\/\\s*)*(([)]\\s*:)|((\\.\\.\\.\\s*)?[_$A-Za-z][_$0-9A-Za-z]*\\s*:)))|([<]\\s*[_$A-Za-z][_$0-9A-Za-z]*\\s+extends\\s*[^=>])|((<\\s*(((const\\s+)?[_$A-Za-z])|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\]))([^=<>]|=[^<]|\\<\\s*(((const\\s+)?[_$A-Za-z])|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\]))([^=<>]|=[^<]|\\<\\s*(((const\\s+)?[_$A-Za-z])|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\]))([^=<>]|=[^<])*\\>)*\\>)*>\\s*)?\\(\\s*(\\/\\*([^\\*]|(\\*[^\\/]))*\\*\\/\\s*)*(([_$A-Za-z]|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\])|(\\.\\.\\.\\s*[_$A-Za-z]))([^()\\'\\\"\\`]|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\'([^\\'\\\\]|\\\\.)*\\')|(\\\"([^\\\"\\\\]|\\\\.)*\\\")|(\\`([^\\`\\\\]|\\\\.)*\\`))*)?\\)(\\s*:\\s*([^<>\\(\\)\\{\\}]|\\<([^<>]|\\<([^<>]|\\<[^<>]+\\>)+\\>)+\\>|\\([^\\(\\)]+\\)|\\{[^\\{\\}]+\\})+)?\\s*=>))))))", beginCaptures: { 1: { name: "meta.definition.variable.js variable.other.constant.js entity.name.function.js" } }, end: "(?=$|^|[;,=}]|((?<![_$0-9A-Za-z])(?:(?<=\\.\\.\\.)|(?<!\\.))(of|in)\\s+)|(;|^\\s*$|(?:^\\s*(?:abstract|async|(?:\\bawait\\s+(?:\\busing(?=\\s+(?!in\\b|of\\b(?!\\s*(?:of\\b|=)))[_$A-Za-z])\\b)\\b)|break|case|catch|class|const|continue|declare|do|else|enum|export|finally|function|for|goto|if|import|interface|let|module|namespace|switch|return|throw|try|type|(?:\\busing(?=\\s+(?!in\\b|of\\b(?!\\s*(?:of\\b|=)))[_$A-Za-z])\\b)|var|while)\\b)))", name: "meta.var-single-variable.expr.js", patterns: [{ include: "#var-single-variable-type-annotation" }] }, { begin: "([_$A-Za-z][_$0-9A-Za-z]*)", beginCaptures: { 1: { name: "meta.definition.variable.js variable.other.constant.js" } }, end: "(?=$|^|[;,=}]|((?<![_$0-9A-Za-z])(?:(?<=\\.\\.\\.)|(?<!\\.))(of|in)\\s+)|(;|^\\s*$|(?:^\\s*(?:abstract|async|(?:\\bawait\\s+(?:\\busing(?=\\s+(?!in\\b|of\\b(?!\\s*(?:of\\b|=)))[_$A-Za-z])\\b)\\b)|break|case|catch|class|const|continue|declare|do|else|enum|export|finally|function|for|goto|if|import|interface|let|module|namespace|switch|return|throw|try|type|(?:\\busing(?=\\s+(?!in\\b|of\\b(?!\\s*(?:of\\b|=)))[_$A-Za-z])\\b)|var|while)\\b)))", name: "meta.var-single-variable.expr.js", patterns: [{ include: "#var-single-variable-type-annotation" }] }] }, "var-single-variable": { patterns: [{ begin: "([_$A-Za-z][_$0-9A-Za-z]*)(\\!)?(?=\\s*(=\\s*(((async\\s+)?((function\\s*[(<*])|(function\\s+)|([_$A-Za-z][_$0-9A-Za-z]*\\s*=>)))|((async\\s*)?(((<\\s*$)|([\\(]\\s*((([\\{\\[]\\s*)?$)|((\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})\\s*((:\\s*\\{?$)|((\\s*([^<>\\(\\)\\{\\}]|\\<([^<>]|\\<([^<>]|\\<[^<>]+\\>)+\\>)+\\>|\\([^\\(\\)]+\\)|\\{[^\\{\\}]+\\})+\\s*)?=\\s*)))|((\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\])\\s*((:\\s*\\[?$)|((\\s*([^<>\\(\\)\\{\\}]|\\<([^<>]|\\<([^<>]|\\<[^<>]+\\>)+\\>)+\\>|\\([^\\(\\)]+\\)|\\{[^\\{\\}]+\\})+\\s*)?=\\s*))))))|((<\\s*(((const\\s+)?[_$A-Za-z])|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\]))([^=<>]|=[^<]|\\<\\s*(((const\\s+)?[_$A-Za-z])|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\]))([^=<>]|=[^<]|\\<\\s*(((const\\s+)?[_$A-Za-z])|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\]))([^=<>]|=[^<])*\\>)*\\>)*>\\s*)?[(]\\s*(\\/\\*([^\\*]|(\\*[^\\/]))*\\*\\/\\s*)*(([)]\\s*:)|((\\.\\.\\.\\s*)?[_$A-Za-z][_$0-9A-Za-z]*\\s*:)))|([<]\\s*[_$A-Za-z][_$0-9A-Za-z]*\\s+extends\\s*[^=>])|((<\\s*(((const\\s+)?[_$A-Za-z])|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\]))([^=<>]|=[^<]|\\<\\s*(((const\\s+)?[_$A-Za-z])|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\]))([^=<>]|=[^<]|\\<\\s*(((const\\s+)?[_$A-Za-z])|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\]))([^=<>]|=[^<])*\\>)*\\>)*>\\s*)?\\(\\s*(\\/\\*([^\\*]|(\\*[^\\/]))*\\*\\/\\s*)*(([_$A-Za-z]|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\])|(\\.\\.\\.\\s*[_$A-Za-z]))([^()\\'\\\"\\`]|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\'([^\\'\\\\]|\\\\.)*\\')|(\\\"([^\\\"\\\\]|\\\\.)*\\\")|(\\`([^\\`\\\\]|\\\\.)*\\`))*)?\\)(\\s*:\\s*([^<>\\(\\)\\{\\}]|\\<([^<>]|\\<([^<>]|\\<[^<>]+\\>)+\\>)+\\>|\\([^\\(\\)]+\\)|\\{[^\\{\\}]+\\})+)?\\s*=>)))))|(:\\s*((<)|([(]\\s*(([)])|(\\.\\.\\.)|([_$0-9A-Za-z]+\\s*(([:,?=])|([)]\\s*=>)))))))|(:\\s*(?<![_$0-9A-Za-z])(?:(?<=\\.\\.\\.)|(?<!\\.))Function(?![_$0-9A-Za-z])(?:(?=\\.\\.\\.)|(?!\\.)))|(:\\s*((<\\s*$)|([\\(]\\s*((([\\{\\[]\\s*)?$)|((\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})\\s*((:\\s*\\{?$)|((\\s*([^<>\\(\\)\\{\\}]|\\<([^<>]|\\<([^<>]|\\<[^<>]+\\>)+\\>)+\\>|\\([^\\(\\)]+\\)|\\{[^\\{\\}]+\\})+\\s*)?=\\s*)))|((\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\])\\s*((:\\s*\\[?$)|((\\s*([^<>\\(\\)\\{\\}]|\\<([^<>]|\\<([^<>]|\\<[^<>]+\\>)+\\>)+\\>|\\([^\\(\\)]+\\)|\\{[^\\{\\}]+\\})+\\s*)?=\\s*)))))))|(:\\s*(=>|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(<[^<>]*>)|[^<>(),=])+=\\s*(((async\\s+)?((function\\s*[(<*])|(function\\s+)|([_$A-Za-z][_$0-9A-Za-z]*\\s*=>)))|((async\\s*)?(((<\\s*$)|([\\(]\\s*((([\\{\\[]\\s*)?$)|((\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})\\s*((:\\s*\\{?$)|((\\s*([^<>\\(\\)\\{\\}]|\\<([^<>]|\\<([^<>]|\\<[^<>]+\\>)+\\>)+\\>|\\([^\\(\\)]+\\)|\\{[^\\{\\}]+\\})+\\s*)?=\\s*)))|((\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\])\\s*((:\\s*\\[?$)|((\\s*([^<>\\(\\)\\{\\}]|\\<([^<>]|\\<([^<>]|\\<[^<>]+\\>)+\\>)+\\>|\\([^\\(\\)]+\\)|\\{[^\\{\\}]+\\})+\\s*)?=\\s*))))))|((<\\s*(((const\\s+)?[_$A-Za-z])|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\]))([^=<>]|=[^<]|\\<\\s*(((const\\s+)?[_$A-Za-z])|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\]))([^=<>]|=[^<]|\\<\\s*(((const\\s+)?[_$A-Za-z])|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\]))([^=<>]|=[^<])*\\>)*\\>)*>\\s*)?[(]\\s*(\\/\\*([^\\*]|(\\*[^\\/]))*\\*\\/\\s*)*(([)]\\s*:)|((\\.\\.\\.\\s*)?[_$A-Za-z][_$0-9A-Za-z]*\\s*:)))|([<]\\s*[_$A-Za-z][_$0-9A-Za-z]*\\s+extends\\s*[^=>])|((<\\s*(((const\\s+)?[_$A-Za-z])|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\]))([^=<>]|=[^<]|\\<\\s*(((const\\s+)?[_$A-Za-z])|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\]))([^=<>]|=[^<]|\\<\\s*(((const\\s+)?[_$A-Za-z])|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\]))([^=<>]|=[^<])*\\>)*\\>)*>\\s*)?\\(\\s*(\\/\\*([^\\*]|(\\*[^\\/]))*\\*\\/\\s*)*(([_$A-Za-z]|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\])|(\\.\\.\\.\\s*[_$A-Za-z]))([^()\\'\\\"\\`]|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\'([^\\'\\\\]|\\\\.)*\\')|(\\\"([^\\\"\\\\]|\\\\.)*\\\")|(\\`([^\\`\\\\]|\\\\.)*\\`))*)?\\)(\\s*:\\s*([^<>\\(\\)\\{\\}]|\\<([^<>]|\\<([^<>]|\\<[^<>]+\\>)+\\>)+\\>|\\([^\\(\\)]+\\)|\\{[^\\{\\}]+\\})+)?\\s*=>))))))", beginCaptures: { 1: { name: "meta.definition.variable.js entity.name.function.js" }, 2: { name: "keyword.operator.definiteassignment.js" } }, end: "(?=$|^|[;,=}]|((?<![_$0-9A-Za-z])(?:(?<=\\.\\.\\.)|(?<!\\.))(of|in)\\s+)|(;|^\\s*$|(?:^\\s*(?:abstract|async|(?:\\bawait\\s+(?:\\busing(?=\\s+(?!in\\b|of\\b(?!\\s*(?:of\\b|=)))[_$A-Za-z])\\b)\\b)|break|case|catch|class|const|continue|declare|do|else|enum|export|finally|function|for|goto|if|import|interface|let|module|namespace|switch|return|throw|try|type|(?:\\busing(?=\\s+(?!in\\b|of\\b(?!\\s*(?:of\\b|=)))[_$A-Za-z])\\b)|var|while)\\b)))", name: "meta.var-single-variable.expr.js", patterns: [{ include: "#var-single-variable-type-annotation" }] }, { begin: "([A-Z][_$\\dA-Z]*)(?![_$0-9A-Za-z])(\\!)?", beginCaptures: { 1: { name: "meta.definition.variable.js variable.other.constant.js" }, 2: { name: "keyword.operator.definiteassignment.js" } }, end: "(?=$|^|[;,=}]|((?<![_$0-9A-Za-z])(?:(?<=\\.\\.\\.)|(?<!\\.))(of|in)\\s+)|(;|^\\s*$|(?:^\\s*(?:abstract|async|(?:\\bawait\\s+(?:\\busing(?=\\s+(?!in\\b|of\\b(?!\\s*(?:of\\b|=)))[_$A-Za-z])\\b)\\b)|break|case|catch|class|const|continue|declare|do|else|enum|export|finally|function|for|goto|if|import|interface|let|module|namespace|switch|return|throw|try|type|(?:\\busing(?=\\s+(?!in\\b|of\\b(?!\\s*(?:of\\b|=)))[_$A-Za-z])\\b)|var|while)\\b)))", name: "meta.var-single-variable.expr.js", patterns: [{ include: "#var-single-variable-type-annotation" }] }, { begin: "([_$A-Za-z][_$0-9A-Za-z]*)(\\!)?", beginCaptures: { 1: { name: "meta.definition.variable.js variable.other.readwrite.js" }, 2: { name: "keyword.operator.definiteassignment.js" } }, end: "(?=$|^|[;,=}]|((?<![_$0-9A-Za-z])(?:(?<=\\.\\.\\.)|(?<!\\.))(of|in)\\s+)|(;|^\\s*$|(?:^\\s*(?:abstract|async|(?:\\bawait\\s+(?:\\busing(?=\\s+(?!in\\b|of\\b(?!\\s*(?:of\\b|=)))[_$A-Za-z])\\b)\\b)|break|case|catch|class|const|continue|declare|do|else|enum|export|finally|function|for|goto|if|import|interface|let|module|namespace|switch|return|throw|try|type|(?:\\busing(?=\\s+(?!in\\b|of\\b(?!\\s*(?:of\\b|=)))[_$A-Za-z])\\b)|var|while)\\b)))", name: "meta.var-single-variable.expr.js", patterns: [{ include: "#var-single-variable-type-annotation" }] }] }, "var-single-variable-type-annotation": { patterns: [{ include: "#type-annotation" }, { include: "#string" }, { include: "#comment" }] }, "variable-initializer": { patterns: [{ begin: "(?<!=|!)(=)(?!=)(?=\\s*\\S)(?!\\s*.*=>\\s*$)", beginCaptures: { 1: { name: "keyword.operator.assignment.js" } }, end: "(?=$|^|[,);}\\]]|((?<![_$0-9A-Za-z])(?:(?<=\\.\\.\\.)|(?<!\\.))(of|in)\\s+))", patterns: [{ include: "#expression" }] }, { begin: "(?<!=|!)(=)(?!=)", beginCaptures: { 1: { name: "keyword.operator.assignment.js" } }, end: "(?=[,);}\\]]|((?<![_$0-9A-Za-z])(?:(?<=\\.\\.\\.)|(?<!\\.))(of|in)\\s+))|(?=^\\s*$)|(?<![\\|\\&\\+\\-\\*\\/])(?<=\\S)(?<!=)(?=\\s*$)", patterns: [{ include: "#expression" }] }] } }, scopeName: "source.js", aliases: ["js"] }), javascript = [
        lang2
      ];
    }
  });

  // node_modules/shiki/dist/themes/material-theme.mjs
  var material_theme_exports = {};
  __export(material_theme_exports, {
    default: () => materialTheme
  });
  var materialTheme, init_material_theme = __esm({
    "node_modules/shiki/dist/themes/material-theme.mjs"() {
      materialTheme = Object.freeze({
        colors: {
          "activityBar.activeBorder": "#80CBC4",
          "activityBar.background": "#263238",
          "activityBar.border": "#26323860",
          "activityBar.dropBackground": "#f0717880",
          "activityBar.foreground": "#EEFFFF",
          "activityBarBadge.background": "#80CBC4",
          "activityBarBadge.foreground": "#000000",
          "badge.background": "#00000030",
          "badge.foreground": "#546E7A",
          "breadcrumb.activeSelectionForeground": "#80CBC4",
          "breadcrumb.background": "#263238",
          "breadcrumb.focusForeground": "#EEFFFF",
          "breadcrumb.foreground": "#6c8692",
          "breadcrumbPicker.background": "#263238",
          "button.background": "#80CBC420",
          "button.foreground": "#ffffff",
          "debugConsole.errorForeground": "#f07178",
          "debugConsole.infoForeground": "#89DDFF",
          "debugConsole.warningForeground": "#FFCB6B",
          "debugToolBar.background": "#263238",
          "diffEditor.insertedTextBackground": "#89DDFF20",
          "diffEditor.removedTextBackground": "#ff9cac20",
          "dropdown.background": "#263238",
          "dropdown.border": "#FFFFFF10",
          "editor.background": "#263238",
          "editor.findMatchBackground": "#000000",
          "editor.findMatchBorder": "#80CBC4",
          "editor.findMatchHighlight": "#EEFFFF",
          "editor.findMatchHighlightBackground": "#00000050",
          "editor.findMatchHighlightBorder": "#ffffff30",
          "editor.findRangeHighlightBackground": "#FFCB6B30",
          "editor.foreground": "#EEFFFF",
          "editor.lineHighlightBackground": "#00000050",
          "editor.lineHighlightBorder": "#00000000",
          "editor.rangeHighlightBackground": "#FFFFFF0d",
          "editor.selectionBackground": "#80CBC420",
          "editor.selectionHighlightBackground": "#FFCC0020",
          "editor.wordHighlightBackground": "#ff9cac30",
          "editor.wordHighlightStrongBackground": "#C3E88D30",
          "editorBracketMatch.background": "#263238",
          "editorBracketMatch.border": "#FFCC0050",
          "editorCursor.foreground": "#FFCC00",
          "editorError.foreground": "#f0717870",
          "editorGroup.border": "#00000030",
          "editorGroup.dropBackground": "#f0717880",
          "editorGroup.focusedEmptyBorder": "#f07178",
          "editorGroupHeader.tabsBackground": "#263238",
          "editorGutter.addedBackground": "#C3E88D60",
          "editorGutter.deletedBackground": "#f0717860",
          "editorGutter.modifiedBackground": "#82AAFF60",
          "editorHoverWidget.background": "#263238",
          "editorHoverWidget.border": "#FFFFFF10",
          "editorIndentGuide.activeBackground": "#37474F",
          "editorIndentGuide.background": "#37474F70",
          "editorInfo.foreground": "#82AAFF70",
          "editorLineNumber.activeForeground": "#6c8692",
          "editorLineNumber.foreground": "#465A64",
          "editorLink.activeForeground": "#EEFFFF",
          "editorMarkerNavigation.background": "#EEFFFF05",
          "editorOverviewRuler.border": "#263238",
          "editorOverviewRuler.errorForeground": "#f0717840",
          "editorOverviewRuler.findMatchForeground": "#80CBC4",
          "editorOverviewRuler.infoForeground": "#82AAFF40",
          "editorOverviewRuler.warningForeground": "#FFCB6B40",
          "editorRuler.foreground": "#37474F",
          "editorSuggestWidget.background": "#263238",
          "editorSuggestWidget.border": "#FFFFFF10",
          "editorSuggestWidget.foreground": "#EEFFFF",
          "editorSuggestWidget.highlightForeground": "#80CBC4",
          "editorSuggestWidget.selectedBackground": "#00000050",
          "editorWarning.foreground": "#FFCB6B70",
          "editorWhitespace.foreground": "#EEFFFF40",
          "editorWidget.background": "#263238",
          "editorWidget.border": "#80CBC4",
          "editorWidget.resizeBorder": "#80CBC4",
          "extensionBadge.remoteForeground": "#EEFFFF",
          "extensionButton.prominentBackground": "#C3E88D90",
          "extensionButton.prominentForeground": "#EEFFFF",
          "extensionButton.prominentHoverBackground": "#C3E88D",
          focusBorder: "#FFFFFF00",
          foreground: "#EEFFFF",
          "gitDecoration.conflictingResourceForeground": "#FFCB6B90",
          "gitDecoration.deletedResourceForeground": "#f0717890",
          "gitDecoration.ignoredResourceForeground": "#6c869290",
          "gitDecoration.modifiedResourceForeground": "#82AAFF90",
          "gitDecoration.untrackedResourceForeground": "#C3E88D90",
          "input.background": "#303C41",
          "input.border": "#FFFFFF10",
          "input.foreground": "#EEFFFF",
          "input.placeholderForeground": "#EEFFFF60",
          "inputOption.activeBackground": "#EEFFFF30",
          "inputOption.activeBorder": "#EEFFFF30",
          "inputValidation.errorBorder": "#f07178",
          "inputValidation.infoBorder": "#82AAFF",
          "inputValidation.warningBorder": "#FFCB6B",
          "list.activeSelectionBackground": "#263238",
          "list.activeSelectionForeground": "#80CBC4",
          "list.dropBackground": "#f0717880",
          "list.focusBackground": "#EEFFFF20",
          "list.focusForeground": "#EEFFFF",
          "list.highlightForeground": "#80CBC4",
          "list.hoverBackground": "#263238",
          "list.hoverForeground": "#FFFFFF",
          "list.inactiveSelectionBackground": "#00000030",
          "list.inactiveSelectionForeground": "#80CBC4",
          "listFilterWidget.background": "#00000030",
          "listFilterWidget.noMatchesOutline": "#00000030",
          "listFilterWidget.outline": "#00000030",
          "menu.background": "#263238",
          "menu.foreground": "#EEFFFF",
          "menu.selectionBackground": "#00000050",
          "menu.selectionBorder": "#00000030",
          "menu.selectionForeground": "#80CBC4",
          "menu.separatorBackground": "#EEFFFF",
          "menubar.selectionBackground": "#00000030",
          "menubar.selectionBorder": "#00000030",
          "menubar.selectionForeground": "#80CBC4",
          "notebook.focusedCellBorder": "#80CBC4",
          "notebook.inactiveFocusedCellBorder": "#80CBC450",
          "notificationLink.foreground": "#80CBC4",
          "notifications.background": "#263238",
          "notifications.foreground": "#EEFFFF",
          "panel.background": "#263238",
          "panel.border": "#26323860",
          "panel.dropBackground": "#EEFFFF",
          "panelTitle.activeBorder": "#80CBC4",
          "panelTitle.activeForeground": "#FFFFFF",
          "panelTitle.inactiveForeground": "#EEFFFF",
          "peekView.border": "#00000030",
          "peekViewEditor.background": "#303C41",
          "peekViewEditor.matchHighlightBackground": "#80CBC420",
          "peekViewEditorGutter.background": "#303C41",
          "peekViewResult.background": "#303C41",
          "peekViewResult.matchHighlightBackground": "#80CBC420",
          "peekViewResult.selectionBackground": "#6c869270",
          "peekViewTitle.background": "#303C41",
          "peekViewTitleDescription.foreground": "#EEFFFF60",
          "pickerGroup.border": "#FFFFFF1a",
          "pickerGroup.foreground": "#80CBC4",
          "progressBar.background": "#80CBC4",
          "quickInput.background": "#263238",
          "quickInput.foreground": "#6c8692",
          "quickInput.list.focusBackground": "#EEFFFF20",
          "sash.hoverBorder": "#80CBC450",
          "scrollbar.shadow": "#00000030",
          "scrollbarSlider.activeBackground": "#80CBC4",
          "scrollbarSlider.background": "#EEFFFF20",
          "scrollbarSlider.hoverBackground": "#EEFFFF10",
          "selection.background": "#00000080",
          "settings.checkboxBackground": "#263238",
          "settings.checkboxForeground": "#EEFFFF",
          "settings.dropdownBackground": "#263238",
          "settings.dropdownForeground": "#EEFFFF",
          "settings.headerForeground": "#80CBC4",
          "settings.modifiedItemIndicator": "#80CBC4",
          "settings.numberInputBackground": "#263238",
          "settings.numberInputForeground": "#EEFFFF",
          "settings.textInputBackground": "#263238",
          "settings.textInputForeground": "#EEFFFF",
          "sideBar.background": "#263238",
          "sideBar.border": "#26323860",
          "sideBar.foreground": "#6c8692",
          "sideBarSectionHeader.background": "#263238",
          "sideBarSectionHeader.border": "#26323860",
          "sideBarTitle.foreground": "#EEFFFF",
          "statusBar.background": "#263238",
          "statusBar.border": "#26323860",
          "statusBar.debuggingBackground": "#C792EA",
          "statusBar.debuggingForeground": "#ffffff",
          "statusBar.foreground": "#546E7A",
          "statusBar.noFolderBackground": "#263238",
          "statusBarItem.activeBackground": "#f0717880",
          "statusBarItem.hoverBackground": "#546E7A20",
          "statusBarItem.remoteBackground": "#80CBC4",
          "statusBarItem.remoteForeground": "#000000",
          "tab.activeBackground": "#263238",
          "tab.activeBorder": "#80CBC4",
          "tab.activeForeground": "#FFFFFF",
          "tab.activeModifiedBorder": "#6c8692",
          "tab.border": "#263238",
          "tab.inactiveBackground": "#263238",
          "tab.inactiveForeground": "#6c8692",
          "tab.inactiveModifiedBorder": "#904348",
          "tab.unfocusedActiveBorder": "#546E7A",
          "tab.unfocusedActiveForeground": "#EEFFFF",
          "tab.unfocusedActiveModifiedBorder": "#c05a60",
          "tab.unfocusedInactiveModifiedBorder": "#904348",
          "terminal.ansiBlack": "#000000",
          "terminal.ansiBlue": "#82AAFF",
          "terminal.ansiBrightBlack": "#546E7A",
          "terminal.ansiBrightBlue": "#82AAFF",
          "terminal.ansiBrightCyan": "#89DDFF",
          "terminal.ansiBrightGreen": "#C3E88D",
          "terminal.ansiBrightMagenta": "#C792EA",
          "terminal.ansiBrightRed": "#f07178",
          "terminal.ansiBrightWhite": "#ffffff",
          "terminal.ansiBrightYellow": "#FFCB6B",
          "terminal.ansiCyan": "#89DDFF",
          "terminal.ansiGreen": "#C3E88D",
          "terminal.ansiMagenta": "#C792EA",
          "terminal.ansiRed": "#f07178",
          "terminal.ansiWhite": "#ffffff",
          "terminal.ansiYellow": "#FFCB6B",
          "terminalCursor.background": "#000000",
          "terminalCursor.foreground": "#FFCB6B",
          "textLink.activeForeground": "#EEFFFF",
          "textLink.foreground": "#80CBC4",
          "titleBar.activeBackground": "#263238",
          "titleBar.activeForeground": "#EEFFFF",
          "titleBar.border": "#26323860",
          "titleBar.inactiveBackground": "#263238",
          "titleBar.inactiveForeground": "#6c8692",
          "tree.indentGuidesStroke": "#37474F",
          "widget.shadow": "#00000030"
        },
        displayName: "Material Theme",
        name: "material-theme",
        semanticHighlighting: !0,
        tokenColors: [
          {
            settings: {
              background: "#263238",
              foreground: "#EEFFFF"
            }
          },
          {
            scope: "string",
            settings: {
              foreground: "#C3E88D"
            }
          },
          {
            scope: "punctuation, constant.other.symbol",
            settings: {
              foreground: "#89DDFF"
            }
          },
          {
            scope: "constant.character.escape, text.html constant.character.entity.named",
            settings: {
              foreground: "#EEFFFF"
            }
          },
          {
            scope: "constant.language.boolean",
            settings: {
              foreground: "#ff9cac"
            }
          },
          {
            scope: "constant.numeric",
            settings: {
              foreground: "#F78C6C"
            }
          },
          {
            scope: "variable, variable.parameter, support.variable, variable.language, support.constant, meta.definition.variable entity.name.function, meta.function-call.arguments",
            settings: {
              foreground: "#EEFFFF"
            }
          },
          {
            scope: "keyword.other",
            settings: {
              foreground: "#F78C6C"
            }
          },
          {
            scope: "keyword, modifier, variable.language.this, support.type.object, constant.language",
            settings: {
              foreground: "#89DDFF"
            }
          },
          {
            scope: "entity.name.function, support.function",
            settings: {
              foreground: "#82AAFF"
            }
          },
          {
            scope: "storage.type, storage.modifier, storage.control",
            settings: {
              foreground: "#C792EA"
            }
          },
          {
            scope: "support.module, support.node",
            settings: {
              fontStyle: "italic",
              foreground: "#f07178"
            }
          },
          {
            scope: "support.type, constant.other.key",
            settings: {
              foreground: "#FFCB6B"
            }
          },
          {
            scope: "entity.name.type, entity.other.inherited-class, entity.other",
            settings: {
              foreground: "#FFCB6B"
            }
          },
          {
            scope: "comment",
            settings: {
              fontStyle: "italic",
              foreground: "#546E7A"
            }
          },
          {
            scope: "comment punctuation.definition.comment, string.quoted.docstring",
            settings: {
              fontStyle: "italic",
              foreground: "#546E7A"
            }
          },
          {
            scope: "punctuation",
            settings: {
              foreground: "#89DDFF"
            }
          },
          {
            scope: "entity.name, entity.name.type.class, support.type, support.class, meta.use",
            settings: {
              foreground: "#FFCB6B"
            }
          },
          {
            scope: "variable.object.property, meta.field.declaration entity.name.function",
            settings: {
              foreground: "#f07178"
            }
          },
          {
            scope: "meta.definition.method entity.name.function",
            settings: {
              foreground: "#f07178"
            }
          },
          {
            scope: "meta.function entity.name.function",
            settings: {
              foreground: "#82AAFF"
            }
          },
          {
            scope: "template.expression.begin, template.expression.end, punctuation.definition.template-expression.begin, punctuation.definition.template-expression.end",
            settings: {
              foreground: "#89DDFF"
            }
          },
          {
            scope: "meta.embedded, source.groovy.embedded, meta.template.expression",
            settings: {
              foreground: "#EEFFFF"
            }
          },
          {
            scope: "entity.name.tag.yaml",
            settings: {
              foreground: "#f07178"
            }
          },
          {
            scope: "meta.object-literal.key, meta.object-literal.key string, support.type.property-name.json",
            settings: {
              foreground: "#f07178"
            }
          },
          {
            scope: "constant.language.json",
            settings: {
              foreground: "#89DDFF"
            }
          },
          {
            scope: "entity.other.attribute-name.class",
            settings: {
              foreground: "#FFCB6B"
            }
          },
          {
            scope: "entity.other.attribute-name.id",
            settings: {
              foreground: "#F78C6C"
            }
          },
          {
            scope: "source.css entity.name.tag",
            settings: {
              foreground: "#FFCB6B"
            }
          },
          {
            scope: "support.type.property-name.css",
            settings: {
              foreground: "#B2CCD6"
            }
          },
          {
            scope: "meta.tag, punctuation.definition.tag",
            settings: {
              foreground: "#89DDFF"
            }
          },
          {
            scope: "entity.name.tag",
            settings: {
              foreground: "#f07178"
            }
          },
          {
            scope: "entity.other.attribute-name",
            settings: {
              foreground: "#C792EA"
            }
          },
          {
            scope: "punctuation.definition.entity.html",
            settings: {
              foreground: "#EEFFFF"
            }
          },
          {
            scope: "markup.heading",
            settings: {
              foreground: "#89DDFF"
            }
          },
          {
            scope: "text.html.markdown meta.link.inline, meta.link.reference",
            settings: {
              foreground: "#f07178"
            }
          },
          {
            scope: "text.html.markdown beginning.punctuation.definition.list",
            settings: {
              foreground: "#89DDFF"
            }
          },
          {
            scope: "markup.italic",
            settings: {
              fontStyle: "italic",
              foreground: "#f07178"
            }
          },
          {
            scope: "markup.bold",
            settings: {
              fontStyle: "bold",
              foreground: "#f07178"
            }
          },
          {
            scope: "markup.bold markup.italic, markup.italic markup.bold",
            settings: {
              fontStyle: "italic bold",
              foreground: "#f07178"
            }
          },
          {
            scope: "markup.fenced_code.block.markdown punctuation.definition.markdown",
            settings: {
              foreground: "#C3E88D"
            }
          },
          {
            scope: "markup.inline.raw.string.markdown",
            settings: {
              foreground: "#C3E88D"
            }
          },
          {
            scope: "keyword.other.definition.ini",
            settings: {
              foreground: "#f07178"
            }
          },
          {
            scope: "entity.name.section.group-title.ini",
            settings: {
              foreground: "#89DDFF"
            }
          },
          {
            scope: "source.cs meta.class.identifier storage.type",
            settings: {
              foreground: "#FFCB6B"
            }
          },
          {
            scope: "source.cs meta.method.identifier entity.name.function",
            settings: {
              foreground: "#f07178"
            }
          },
          {
            scope: "source.cs meta.method-call meta.method, source.cs entity.name.function",
            settings: {
              foreground: "#82AAFF"
            }
          },
          {
            scope: "source.cs storage.type",
            settings: {
              foreground: "#FFCB6B"
            }
          },
          {
            scope: "source.cs meta.method.return-type",
            settings: {
              foreground: "#FFCB6B"
            }
          },
          {
            scope: "source.cs meta.preprocessor",
            settings: {
              foreground: "#546E7A"
            }
          },
          {
            scope: "source.cs entity.name.type.namespace",
            settings: {
              foreground: "#EEFFFF"
            }
          },
          {
            scope: "meta.jsx.children, SXNested",
            settings: {
              foreground: "#EEFFFF"
            }
          },
          {
            scope: "support.class.component",
            settings: {
              foreground: "#FFCB6B"
            }
          },
          {
            scope: "source.cpp meta.block variable.other",
            settings: {
              foreground: "#EEFFFF"
            }
          },
          {
            scope: "source.python meta.member.access.python",
            settings: {
              foreground: "#f07178"
            }
          },
          {
            scope: "source.python meta.function-call.python, meta.function-call.arguments",
            settings: {
              foreground: "#82AAFF"
            }
          },
          {
            scope: "meta.block",
            settings: {
              foreground: "#f07178"
            }
          },
          {
            scope: "entity.name.function.call",
            settings: {
              foreground: "#82AAFF"
            }
          },
          {
            scope: "source.php support.other.namespace, source.php meta.use support.class",
            settings: {
              foreground: "#EEFFFF"
            }
          },
          {
            scope: "constant.keyword",
            settings: {
              fontStyle: "italic",
              foreground: "#89DDFF"
            }
          },
          {
            scope: "entity.name.function",
            settings: {
              foreground: "#82AAFF"
            }
          },
          {
            settings: {
              background: "#263238",
              foreground: "#EEFFFF"
            }
          },
          {
            scope: [
              "constant.other.placeholder"
            ],
            settings: {
              foreground: "#f07178"
            }
          },
          {
            scope: [
              "markup.deleted"
            ],
            settings: {
              foreground: "#f07178"
            }
          },
          {
            scope: [
              "markup.inserted"
            ],
            settings: {
              foreground: "#C3E88D"
            }
          },
          {
            scope: [
              "markup.underline"
            ],
            settings: {
              fontStyle: "underline"
            }
          },
          {
            scope: [
              "keyword.control"
            ],
            settings: {
              fontStyle: "italic",
              foreground: "#89DDFF"
            }
          },
          {
            scope: [
              "variable.parameter"
            ],
            settings: {
              fontStyle: "italic"
            }
          },
          {
            scope: [
              "variable.parameter.function.language.special.self.python"
            ],
            settings: {
              fontStyle: "italic",
              foreground: "#f07178"
            }
          },
          {
            scope: [
              "constant.character.format.placeholder.other.python"
            ],
            settings: {
              foreground: "#F78C6C"
            }
          },
          {
            scope: [
              "markup.quote"
            ],
            settings: {
              fontStyle: "italic",
              foreground: "#89DDFF"
            }
          },
          {
            scope: [
              "markup.fenced_code.block"
            ],
            settings: {
              foreground: "#EEFFFF90"
            }
          },
          {
            scope: [
              "punctuation.definition.quote"
            ],
            settings: {
              foreground: "#ff9cac"
            }
          },
          {
            scope: [
              "meta.structure.dictionary.json support.type.property-name.json"
            ],
            settings: {
              foreground: "#C792EA"
            }
          },
          {
            scope: [
              "meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json support.type.property-name.json"
            ],
            settings: {
              foreground: "#FFCB6B"
            }
          },
          {
            scope: [
              "meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json support.type.property-name.json"
            ],
            settings: {
              foreground: "#F78C6C"
            }
          },
          {
            scope: [
              "meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json support.type.property-name.json"
            ],
            settings: {
              foreground: "#f07178"
            }
          },
          {
            scope: [
              "meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json support.type.property-name.json"
            ],
            settings: {
              foreground: "#916b53"
            }
          },
          {
            scope: [
              "meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json support.type.property-name.json"
            ],
            settings: {
              foreground: "#82AAFF"
            }
          },
          {
            scope: [
              "meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json support.type.property-name.json"
            ],
            settings: {
              foreground: "#ff9cac"
            }
          },
          {
            scope: [
              "meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json support.type.property-name.json"
            ],
            settings: {
              foreground: "#C792EA"
            }
          },
          {
            scope: [
              "meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json support.type.property-name.json"
            ],
            settings: {
              foreground: "#C3E88D"
            }
          }
        ],
        type: "dark"
      });
    }
  });

  // node_modules/crlf-normalize/dist/index.esm.mjs
  var e, n;
  (function(e3) {
    e3.CR = "\r", e3.CRLF = `\r
`, e3.LF = `
`;
  })(e || (e = {})), function(e3) {
    e3[e3.CR = 13] = "CR", e3[e3.LF = 10] = "LF";
  }(n || (n = {}));
  var i = /\r\n|\r(?!\n)|\n/g, l = new RegExp(`(${i.source})`, i.flags);
  function crlf(e3, n2 = `
`) {
    return e3.replace(i, n2);
  }

  // node_modules/split-smartly2/dist/index.esm.mjs
  var t, e2;
  (function(t3) {
    t3.INCLUDE_SEPARATOR_NONE = "NONE", t3.INCLUDE_SEPARATOR_SEPARATELY = "SEPARATELY", t3.INCLUDE_SEPARATOR_LEFT = "LEFT", t3.INCLUDE_SEPARATOR_RIGHT = "RIGHT", t3.INCLUDE_SEPARATOR_ONLY = "ONLY";
  })(t || (t = {})), function(t3) {
    t3[t3.ACTION_CLOSE = 1] = "ACTION_CLOSE", t3[t3.ACTION_OPEN = 2] = "ACTION_OPEN", t3[t3.ACTION_ADD_FRAGMENT = 3] = "ACTION_ADD_FRAGMENT", t3[t3.ACTION_NULL = 4] = "ACTION_NULL";
  }(e2 || (e2 = {}));
  var once = (t3) => {
    let e3, r3;
    return function(...s2) {
      return r3 || (e3 = t3(...s2), r3 = !0), e3;
    };
  }, isEmpty = (t3) => {
    if (!t3) return !0;
    if (Array.isArray(t3)) {
      if (t3.length === 0) return !0;
    } else if (typeof t3 == "object" && Object.keys(t3).length === 0) return !0;
    return !1;
  }, first = (t3) => t3[0];
  function buildIndexesObject(t3) {
    let e3 = [t3].flat().filter(Boolean);
    return !isEmpty(e3) && {
      values: new Set(e3),
      max: Math.max(...e3),
      count: 0,
      hasIndex() {
        return this.max === -1 / 0 || this.values.has(this.count++);
      },
      isOverMax() {
        return this.max !== -1 / 0 && this.count > this.max;
      }
    };
  }
  var SearchResults = class {
    constructor(t3, e3) {
      this.string = t3, this.searchSettings = e3, this.prepareSearch();
    }
    prepareSearch() {
      for (let t3 of [this.searchSettings.separatorSearch, this.searchSettings.bracketsSearch]) t3.lastIndex = 0;
      Object.assign(this, {
        brackets: [],
        pipe: [],
        currentMentions: [],
        position: 0,
        isDone: !1,
        freeArea: {
          start: 0,
          end: void 0
        },
        lastSeparator: void 0,
        searchString: this.searchSettings.ignoreCase && !this.searchSettings.separatorSearch.ignoreCase ? this.string.toUpperCase() : this.string,
        indexes: buildIndexesObject(this.searchSettings.indexes)
      });
    }
    get pipeIsEmpty() {
      return isEmpty(this.pipe);
    }
    getMentions(t3, e3) {
      let r3 = [], s2 = [];
      for (let n2 of this.currentMentions) n2.index >= t3 && n2.index < e3 ? r3.push(n2.mention) : s2.push(n2);
      return [r3.length && r3, s2];
    }
    trimResultText(t3) {
      return this.searchSettings.trimResult ? t3.trim() : t3;
    }
    trimSeparatorText(t3) {
      return this.searchSettings.trimSeparators ? t3.trim() : t3;
    }
    checkSeparator(t3) {
      let { string: e3 } = this, { check: r3, includePositions: s2, mentions: n2 } = this.searchSettings, { 0: i2 = "", index: a = e3.length, searchWithinData: o } = t3 ?? {}, c = i2.length, h = o ? o.openPosition : this.position, p2 = e3.substring(h, a);
      i2 || (this.isDone = !0), p2 = this.trimResultText(p2), i2 = this.trimSeparatorText(i2);
      let l2, u = o ? [o.open, o.close] : i2;
      if (s2 && (p2 = {
        text: p2,
        position: h
      }, u = {
        text: u,
        position: a,
        isSeparator: !0
      }), n2) {
        p2 = typeof p2 == "string" ? {
          text: p2
        } : p2;
        let [t4, e4] = this.getMentions(h, a);
        t4 && (p2.mentions = t4, l2 = e4);
      }
      if (r3 && i2) {
        let t4 = isNaN(this.tempPosition) ? h : this.tempPosition;
        this.tempPosition = a + i2.length;
        let s3 = this;
        if (!r3({
          getString: once(() => s3.trimResultText(e3.substring(t4, a))),
          getTextAfter: once(() => e3.substring(a + i2.length)),
          getMentions: once(() => s3.getMentions(t4, a)[0]),
          getSeparator: once(() => i2),
          get string() {
            return this.getString();
          },
          get textAfter() {
            return this.getTextAfter();
          },
          get mentions() {
            return this.getMentions();
          },
          get separator() {
            return this.getSeparator();
          }
        })) return [];
        delete this.tempPosition;
      }
      return l2 && (this.currentMentions = l2), this.position = a + c, [p2, u, !0];
    }
    pushToPipe(t3) {
      if (this.indexes) {
        if (!this.indexes.hasIndex()) return;
        this.indexes.isOverMax() && (this.isDone = !0);
      }
      this.pipe.push(t3);
    }
    addToPipe(t3) {
      let [e3, r3, s2] = this.checkSeparator(t3);
      if (!s2) return !1;
      switch (this.searchSettings.includeSeparatorMode) {
        case "SEPARATELY":
          this.pushToPipe(e3), r3 && this.pushToPipe(r3);
          break;
        case "LEFT":
          this.pushToPipe([e3, r3]);
          break;
        case "RIGHT":
          !(typeof e3 == "object" ? e3.text : e3) && !this.lastSeparator || this.pushToPipe([this.lastSeparator, e3]), this.lastSeparator = r3;
          break;
        case "ONLY":
          r3 && this.pushToPipe(r3);
          break;
        default:
          this.pushToPipe(e3);
      }
      return !this.pipeIsEmpty;
    }
    findBrackets() {
      let { searchString: t3, brackets: e3, freeArea: r3, searchSettings: s2 } = this, { bracketsSearch: n2, separatorSearch: i2, searchWithin: a } = s2, o = a ? () => this.pipeIsEmpty : () => (typeof r3.start != "number" || r3.start !== r3.end) && !r3.end;
      for (; o(); ) {
        var c;
        let o2 = n2.exec(t3);
        if (!o2) {
          if (a || isNaN(r3.start)) return !1;
          r3.end = t3.length - 1;
          continue;
        }
        let p2 = o2[0], { close: l2, ignoreMode: u, searchLevels: g } = (h = e3)[h.length - 1] || {}, f;
        switch ((p2 === l2 ? 1 : u && 4) || (f = s2.bracketsMap[p2]) && 2 || ((c = s2.mentions) === null || c === void 0 ? void 0 : c[p2]) && 3) {
          case 1:
            let t4 = e3.pop();
            a ? (g === !0 || g.includes(e3.length + 1)) && this.addToPipe(Object.assign(o2, {
              searchWithinData: t4
            })) : isEmpty(e3) && (r3.start = o2.index, i2 && i2.lastIndex < r3.start && (i2.lastIndex = r3.start));
            break;
          case 2:
            e3.push({
              ...f,
              openPosition: o2.index + p2.length
            }), e3.length !== 1 || a || (r3.end = o2.index);
            break;
          case 3:
            this.currentMentions.push({
              mention: s2.mentions[p2],
              index: o2.index
            });
        }
      }
      var h;
      return !0;
    }
    findSeparator(t3) {
      let { searchString: e3, freeArea: r3 } = this, { separatorSearch: s2 } = this.searchSettings, n2;
      for (; !n2; ) {
        if (t3 = t3 || s2.exec(e3)) if (t3.index <= r3.end) {
          let e4 = t3.index >= r3.start && this.addToPipe(t3);
          if (t3 = null, !e4) continue;
        } else r3.start = r3.end = void 0;
        else this.addToPipe();
        n2 = !0;
      }
      return t3;
    }
    getNext() {
      let t3;
      for (; this.pipeIsEmpty && !this.isDone; ) this.findBrackets() ? this.searchSettings.searchWithin || (t3 = this.findSeparator(t3)) : this.isDone = !0;
      return this.pipeIsEmpty ? null : this.pipe.shift();
    }
    getAll() {
      return [...this];
    }
    getRest() {
      let t3 = [], e3;
      for (; (e3 = this.getNext()) !== null; ) t3.push(e3);
      return t3;
    }
    *[Symbol.iterator]() {
      this.prepareSearch();
      let t3 = this, e3;
      do
        e3 = t3.getNext(), e3 !== null && (yield e3);
      while (e3 !== null);
    }
  };
  function split(t3, e3) {
    let r3 = this.merge(e3), s2 = new SearchResults(t3, r3);
    return typeof r3.indexes == "number" ? s2.getNext() : r3.returnIterator ? s2 : s2.getAll();
  }
  function createSplitFunction(t3) {
    let e3 = split.bind(t3);
    return Object.assign(e3, {
      getOne(t4, r3, s2 = {}) {
        if (isNaN(r3)) throw new TypeError("second parameter of `getOne` function should be index");
        return e3(t4, {
          ...s2,
          indexes: r3
        });
      },
      getFirst: (t4, r3 = {}) => e3(t4, {
        ...r3,
        indexes: 0
      }),
      getIndexes(t4, r3, s2 = {}) {
        if (!Array.isArray(r3)) throw new TypeError("second parameter of `getOne` function should be array of indexes");
        return e3(t4, {
          ...s2,
          indexes: r3
        });
      },
      getIterator: (t4, r3 = {}) => e3(t4, {
        ...r3,
        returnIterator: !0
      })
    });
  }
  function getSplitSmartlyArgs(t3, e3) {
    if (t3 == null || !t3.length) throw new RangeError("empty arguments");
    if (t3.length === 3) {
      if (!e3) return t3;
    } else if (t3.length === 1) {
      let e4 = first(t3);
      typeof e4 == "string" ? t3.push(",", {}) : Array.isArray(e4) ? (t3.unshift(null), t3.push({})) : typeof e4 == "object" && t3.unshift(null, ",");
    } else if (t3.length === 2) typeof t3[0] == "string" && t3[1] instanceof RegExp || typeof t3[1] == "string" || Array.isArray(t3[1]) ? t3.push({}) : t3.unshift(null);
    else if (t3.length > 3) throw new RangeError("Too many arguments passed to splitSmartly function!!!");
    return e3 && (t3[2] = {
      ...t3[2],
      ...e3
    }), t3;
  }
  var r;
  function prepareSearch(t3, e3) {
    return {
      brackets: [],
      mentions: [],
      ignoreInsideQuotes: !0,
      includeSeparatorMode: "NONE",
      ignoreCase: !0,
      trimResult: !0,
      trimSeparators: !1,
      defaultBrackets: [["(", ")"], ["[", "]"], ["{", "}"]],
      ...e3,
      separators: t3,
      init() {
        return function(t4) {
          if (Array.isArray(t4.mentions) || typeof t4.mentions == "string") {
            let e4 = [t4.mentions].flat().filter(Boolean).reduce((e5, r3) => (e5[t4.ignoreCase ? r3.toUpperCase() : r3] = r3, e5), {});
            t4.mentions = !isEmpty(e4) && e4;
          }
          return t4.createBracketsMap().createBracketsSearch().createSeparatorsSearch();
        }(this);
      },
      merge(t4) {
        return function(t5, e4) {
          return e4 ? (e4 = {
            ...t5,
            ...e4
          }, ["brackets", "mentions"].some((t6) => t6 in e4) && e4.init(), e4) : t5;
        }(this, t4);
      },
      arrayToPattern: (t4) => function(t5) {
        var e4;
        return (e4 = r) !== null && e4 !== void 0 || (r = new Set(".{}[]^()+*?\\/$|".split(""))), t5.map((t6) => t6 instanceof RegExp ? t6.source : t6.split("").map((t7) => r.has(t7) ? "\\" + t7 : t7).join("")).join("|");
      }(t4),
      createRegExp: (t4) => RegExp(t4, "g"),
      createBracketsMap() {
        return function(t4) {
          let e4 = t4.brackets = function(t5, e5) {
            var r3;
            return t5 === !0 ? t5 = e5.slice() : typeof t5 != "object" || Array.isArray(t5) ? typeof t5 == "string" && (t5 = t5.split(",").map((t6) => {
              let e6 = t6.trim().split(" ");
              if (e6.length !== 2) {
                if (first(e6).length !== 2) throw new TypeError("open and close parts of brackets should be separated by space symbol");
                e6 = first(e6).split("");
              }
              return e6;
            })) : t5 = Object.entries(t5), (r3 = t5) !== null && r3 !== void 0 ? r3 : [];
          }(t4.brackets, t4.defaultBrackets);
          return e4 = function(t5, e5) {
            return e5.ignoreInsideQuotes && t5.unshift(["'", , , !0], ['"', , , !0]), t5;
          }(e4, t4), t4.bracketsMap = function(t5, e5) {
            return t5.reduce((t6, [r3, s3, ...n2]) => {
              n2.length !== 1 || e5 || n2.unshift(void 0);
              let [i2 = e5 && 1, a] = n2;
              return typeof i2 == "number" && (i2 = [i2]), t6[r3] = {
                open: r3,
                ignoreMode: a,
                searchLevels: i2,
                close: s3 || r3
              }, t6;
            }, {});
          }(e4, t4.searchWithin), t4;
        }(this);
      },
      createBracketsSearch() {
        return function(t4) {
          let e4 = Object.entries(t4.bracketsMap).flatMap(([, { close: t5, open: e5 }]) => t5 !== e5 ? [e5, t5] : e5).concat(Object.keys(t4.mentions || {})).filter(Boolean), r3 = t4.arrayToPattern(e4);
          return t4.bracketsSearch = t4.createRegExp(r3), t4;
        }(this);
      },
      createSeparatorsSearch() {
        return function(t4) {
          let { separators: e4 } = t4;
          if (typeof e4 == "string" || Array.isArray(e4)) {
            let r3 = t4.arrayToPattern([e4].flat().filter(Boolean));
            t4.separatorSearch = t4.createRegExp(r3);
          } else e4 ? (t4.separatorSearch = e4, t4.ignoreCase = e4.ignoreCase) : t4.separatorSearch = /empty/;
          return t4;
        }(this);
      }
    }.init();
  }
  function _splitSmartlyCore(t3, e3) {
    let r3 = prepareSearch(t3, e3);
    return {
      splitSettings: r3,
      splitFn: createSplitFunction(r3)
    };
  }
  function splitSmartly(...t3) {
    let [e3, r3, s2] = getSplitSmartlyArgs(t3), { splitFn: n2 } = _splitSmartlyCore(r3, s2);
    return e3 !== null ? n2(e3) : n2;
  }

  // node_modules/@bluelovers/auto1111-pnginfo/dist/index.esm.mjs
  function _normalizeInputRaw(e3) {
    return crlf(e3).replace(/[ \t\xa0]+(?=\n)/g, "").replace(/\n{3,}/g, `

`).replace(/^[\r\n]+|[\s\r\n]+$/g, "");
  }
  var r2 = /\r?\n/, t2 = /(?:\x00\x00\x00|\u200b\u200b\u200b)\r?\n/;
  function _splitRawToLines(n2) {
    return n2.split(_isRawVersionPlus(n2) ? t2 : r2);
  }
  function _isRawVersionPlus(n2) {
    return t2.test(n2);
  }
  function _parseLine(n2) {
    let [, e3, r3] = n2.match(/^([^:]+)\s*:\s*(.*)$/);
    return [e3, r3];
  }
  function* _parseInfoLineGenerator(n2) {
    n2 = _normalizeInputRaw(n2);
    let r3 = splitSmartly(n2, [","], {
      brackets: !0,
      trimSeparators: !0
    });
    for (let n3 of r3) n3 != null && n3.length && (yield _parseLine(n3));
  }
  function extractPromptAndInfoFromRaw(n2) {
    let e3 = _isRawVersionPlus(n2 = _normalizeInputRaw(n2)), r3 = _splitRawToLines(n2), t3 = "", o = "", i2 = "", a = r3.slice();
    if (r3.length) {
      if (e3) {
        var s2, f;
        if (r3.length > 3) throw new TypeError();
        let n3 = r3.pop();
        if (n3.startsWith("Steps: ") && (i2 = n3, n3 = void 0), (s2 = n3) !== null && s2 !== void 0 || (n3 = r3.pop()), n3.startsWith("Negative prompt: ") && (o = n3.slice(17), n3 = void 0), (f = n3) !== null && f !== void 0 || (n3 = r3.pop()), t3 = n3, r3.length) throw new TypeError();
      } else {
        let n3 = r3[r3.length - 1];
        if (n3.startsWith("Steps: ") && (i2 = r3.pop(), n3 = void 0), r3.length) {
          let e4 = -1;
          for (let t4 = r3.length - 1; t4 >= 0; t4--) if (n3 = r3[t4], n3.startsWith("Negative prompt: ")) {
            e4 = t4, r3[t4] = n3.slice(17);
            break;
          }
          e4 !== -1 && (o = r3.splice(e4).join(`
`)), t3 = r3.join(`
`);
        }
      }
      t3 = t3.replace(/\x00\x00\x00/g, ""), o = o.replace(/\x00\x00\x00/g, "");
    }
    return {
      prompt: t3,
      negative_prompt: o,
      infoline: i2,
      infoline_extra: [],
      lines_raw: a
    };
  }
  function keyToSnakeStyle1(n2) {
    return n2.toLowerCase().replace(/ /g, "_");
  }
  function* handleInfoEntriesGenerator(n2, e3) {
    for (let r3 of n2) yield handleInfoEntry(r3, e3);
  }
  function handleInfoEntry(n2, e3) {
    let r3 = e3?.cast_to_snake, [t3, o] = n2, i2 = parseFloat(o), a = /^0\d/.test(o) || isNaN(i2) || o - i2 != 0;
    return r3 && (t3 = keyToSnakeStyle1(t3)), [t3, a ? o : i2];
  }
  var s;
  function parseFromRawInfo(n2, e3) {
    return Object.fromEntries([...parseFromRawInfoGenerator(n2, e3)]);
  }
  function* parseFromRawInfoGenerator(n2, e3) {
    if (e3 != null && e3.isIncludePrompts) {
      let { prompt: e4, negative_prompt: r3, infoline: t3 } = extractPromptAndInfoFromRaw(n2);
      yield ["prompt", e4], yield ["negative_prompt", r3], n2 = t3;
    }
    yield* handleInfoEntriesGenerator(_parseInfoLineGenerator(n2), e3);
  }
  (function(n2) {
    n2.prompt = "prompt", n2.negative_prompt = "negative_prompt";
  })(s || (s = {}));

  // src/const.ts
  var EXTENSION_NAME = "sd-webui-pnginfo-beautify", CLASS_PREFIX = "shiki_infotext_", tabs = [
    "#html_info_txt2img",
    "#html_info_img2img",
    ["#tab_pnginfo .html-log.prose, #tab_pnginfo .panel .form + .block.gradio-html div > .prose.gradio-html:first-of-type", !0],
    ["#html_info_x_extras.prose", !0, {
      isIncludePrompts: !1
    }],
    ["#html_info_extras.prose", !0, {
      isIncludePrompts: !1
    }],
    ["#html_info_replacer.prose", !0],
    ["#fastpnginfo_geninfo_html", !0],
    //['#fastpnginfo_geninfo  > label > textarea', true],
    /**
     * is trigger by style
     */
    ["#agent_scheduler_history_infotext textarea", !0]
  ];

  // src/logger.ts
  function initLogger() {
    let list = [
      "log",
      "error",
      "debug",
      "info",
      "warn"
      // @ts-ignore
    ];
    return Object.keys(console).reduce((log, method) => {
      let fn = console[method];
      return typeof fn == "function" && list.includes(method) && (log[method] = fn.bind(console, EXTENSION_NAME)), log;
    }, {});
  }
  var logger = initLogger();

  // node_modules/@shikijs/core/dist/types.mjs
  var FontStyle;
  (function(FontStyle2) {
    FontStyle2[FontStyle2.NotSet = -1] = "NotSet", FontStyle2[FontStyle2.None = 0] = "None", FontStyle2[FontStyle2.Italic = 1] = "Italic", FontStyle2[FontStyle2.Bold = 2] = "Bold", FontStyle2[FontStyle2.Underline = 4] = "Underline";
  })(FontStyle || (FontStyle = {}));

  // node_modules/@shikijs/core/dist/textmate.mjs
  typeof process < "u" && process.env.VSCODE_TEXTMATE_DEBUG;
  var EncodedTokenAttributes;
  (function(EncodedTokenAttributes2) {
    function toBinaryStr(encodedTokenAttributes) {
      return encodedTokenAttributes.toString(2).padStart(32, "0");
    }
    EncodedTokenAttributes2.toBinaryStr = toBinaryStr;
    function print(encodedTokenAttributes) {
      let languageId = EncodedTokenAttributes2.getLanguageId(encodedTokenAttributes), tokenType = EncodedTokenAttributes2.getTokenType(encodedTokenAttributes), fontStyle = EncodedTokenAttributes2.getFontStyle(encodedTokenAttributes), foreground = EncodedTokenAttributes2.getForeground(encodedTokenAttributes), background = EncodedTokenAttributes2.getBackground(encodedTokenAttributes);
      console.log({
        languageId,
        tokenType,
        fontStyle,
        foreground,
        background
      });
    }
    EncodedTokenAttributes2.print = print;
    function getLanguageId(encodedTokenAttributes) {
      return (encodedTokenAttributes & 255) >>> 0;
    }
    EncodedTokenAttributes2.getLanguageId = getLanguageId;
    function getTokenType(encodedTokenAttributes) {
      return (encodedTokenAttributes & 768) >>> 8;
    }
    EncodedTokenAttributes2.getTokenType = getTokenType;
    function containsBalancedBrackets(encodedTokenAttributes) {
      return (encodedTokenAttributes & 1024) !== 0;
    }
    EncodedTokenAttributes2.containsBalancedBrackets = containsBalancedBrackets;
    function getFontStyle(encodedTokenAttributes) {
      return (encodedTokenAttributes & 30720) >>> 11;
    }
    EncodedTokenAttributes2.getFontStyle = getFontStyle;
    function getForeground(encodedTokenAttributes) {
      return (encodedTokenAttributes & 16744448) >>> 15;
    }
    EncodedTokenAttributes2.getForeground = getForeground;
    function getBackground(encodedTokenAttributes) {
      return (encodedTokenAttributes & 4278190080) >>> 24;
    }
    EncodedTokenAttributes2.getBackground = getBackground;
    function set(encodedTokenAttributes, languageId, tokenType, containsBalancedBrackets2, fontStyle, foreground, background) {
      let _languageId = EncodedTokenAttributes2.getLanguageId(encodedTokenAttributes), _tokenType = EncodedTokenAttributes2.getTokenType(encodedTokenAttributes), _containsBalancedBracketsBit = EncodedTokenAttributes2.containsBalancedBrackets(encodedTokenAttributes) ? 1 : 0, _fontStyle = EncodedTokenAttributes2.getFontStyle(encodedTokenAttributes), _foreground = EncodedTokenAttributes2.getForeground(encodedTokenAttributes), _background = EncodedTokenAttributes2.getBackground(encodedTokenAttributes);
      return languageId !== 0 && (_languageId = languageId), tokenType !== 8 && (_tokenType = tokenType), containsBalancedBrackets2 !== null && (_containsBalancedBracketsBit = containsBalancedBrackets2 ? 1 : 0), fontStyle !== -1 && (_fontStyle = fontStyle), foreground !== 0 && (_foreground = foreground), background !== 0 && (_background = background), (_languageId << 0 | _tokenType << 8 | _containsBalancedBracketsBit << 10 | _fontStyle << 11 | _foreground << 15 | _background << 24) >>> 0;
    }
    EncodedTokenAttributes2.set = set;
  })(EncodedTokenAttributes || (EncodedTokenAttributes = {}));
  function createMatchers(selector, matchesName) {
    let results = [], tokenizer = newTokenizer(selector), token = tokenizer.next();
    for (; token !== null; ) {
      let priority = 0;
      if (token.length === 2 && token.charAt(1) === ":") {
        switch (token.charAt(0)) {
          case "R":
            priority = 1;
            break;
          case "L":
            priority = -1;
            break;
          default:
            console.log(`Unknown priority ${token} in scope selector`);
        }
        token = tokenizer.next();
      }
      let matcher = parseConjunction();
      if (results.push({ matcher, priority }), token !== ",")
        break;
      token = tokenizer.next();
    }
    return results;
    function parseOperand() {
      if (token === "-") {
        token = tokenizer.next();
        let expressionToNegate = parseOperand();
        return (matcherInput) => !!expressionToNegate && !expressionToNegate(matcherInput);
      }
      if (token === "(") {
        token = tokenizer.next();
        let expressionInParents = parseInnerExpression();
        return token === ")" && (token = tokenizer.next()), expressionInParents;
      }
      if (isIdentifier(token)) {
        let identifiers = [];
        do
          identifiers.push(token), token = tokenizer.next();
        while (isIdentifier(token));
        return (matcherInput) => matchesName(identifiers, matcherInput);
      }
      return null;
    }
    function parseConjunction() {
      let matchers = [], matcher = parseOperand();
      for (; matcher; )
        matchers.push(matcher), matcher = parseOperand();
      return (matcherInput) => matchers.every((matcher2) => matcher2(matcherInput));
    }
    function parseInnerExpression() {
      let matchers = [], matcher = parseConjunction();
      for (; matcher && (matchers.push(matcher), token === "|" || token === ","); ) {
        do
          token = tokenizer.next();
        while (token === "|" || token === ",");
        matcher = parseConjunction();
      }
      return (matcherInput) => matchers.some((matcher2) => matcher2(matcherInput));
    }
  }
  function isIdentifier(token) {
    return !!token && !!token.match(/[\w\.:]+/);
  }
  function newTokenizer(input) {
    let regex = /([LR]:|[\w\.:][\w\.:\-]*|[\,\|\-\(\)])/g, match = regex.exec(input);
    return {
      next: () => {
        if (!match)
          return null;
        let res = match[0];
        return match = regex.exec(input), res;
      }
    };
  }
  function disposeOnigString(str) {
    typeof str.dispose == "function" && str.dispose();
  }
  function clone(something) {
    return doClone(something);
  }
  function doClone(something) {
    return Array.isArray(something) ? cloneArray(something) : typeof something == "object" ? cloneObj(something) : something;
  }
  function cloneArray(arr) {
    let r3 = [];
    for (let i2 = 0, len = arr.length; i2 < len; i2++)
      r3[i2] = doClone(arr[i2]);
    return r3;
  }
  function cloneObj(obj) {
    let r3 = {};
    for (let key2 in obj)
      r3[key2] = doClone(obj[key2]);
    return r3;
  }
  function mergeObjects(target, ...sources) {
    return sources.forEach((source) => {
      for (let key2 in source)
        target[key2] = source[key2];
    }), target;
  }
  function basename(path) {
    let idx = ~path.lastIndexOf("/") || ~path.lastIndexOf("\\");
    return idx === 0 ? path : ~idx === path.length - 1 ? basename(path.substring(0, path.length - 1)) : path.substr(~idx + 1);
  }
  var CAPTURING_REGEX_SOURCE = /\$(\d+)|\${(\d+):\/(downcase|upcase)}/g, RegexSource = class {
    static hasCaptures(regexSource) {
      return regexSource === null ? !1 : (CAPTURING_REGEX_SOURCE.lastIndex = 0, CAPTURING_REGEX_SOURCE.test(regexSource));
    }
    static replaceCaptures(regexSource, captureSource, captureIndices) {
      return regexSource.replace(CAPTURING_REGEX_SOURCE, (match, index, commandIndex, command) => {
        let capture = captureIndices[parseInt(index || commandIndex, 10)];
        if (capture) {
          let result = captureSource.substring(capture.start, capture.end);
          for (; result[0] === "."; )
            result = result.substring(1);
          switch (command) {
            case "downcase":
              return result.toLowerCase();
            case "upcase":
              return result.toUpperCase();
            default:
              return result;
          }
        } else
          return match;
      });
    }
  };
  function strcmp(a, b) {
    return a < b ? -1 : a > b ? 1 : 0;
  }
  function strArrCmp(a, b) {
    if (a === null && b === null)
      return 0;
    if (!a)
      return -1;
    if (!b)
      return 1;
    let len1 = a.length, len2 = b.length;
    if (len1 === len2) {
      for (let i2 = 0; i2 < len1; i2++) {
        let res = strcmp(a[i2], b[i2]);
        if (res !== 0)
          return res;
      }
      return 0;
    }
    return len1 - len2;
  }
  function isValidHexColor(hex) {
    return !!(/^#[0-9a-f]{6}$/i.test(hex) || /^#[0-9a-f]{8}$/i.test(hex) || /^#[0-9a-f]{3}$/i.test(hex) || /^#[0-9a-f]{4}$/i.test(hex));
  }
  function escapeRegExpCharacters(value) {
    return value.replace(/[\-\\\{\}\*\+\?\|\^\$\.\,\[\]\(\)\#\s]/g, "\\$&");
  }
  var CachedFn = class {
    fn;
    cache = /* @__PURE__ */ new Map();
    constructor(fn) {
      this.fn = fn;
    }
    get(key2) {
      if (this.cache.has(key2))
        return this.cache.get(key2);
      let value = this.fn(key2);
      return this.cache.set(key2, value), value;
    }
  }, TopLevelRuleReference = class {
    scopeName;
    constructor(scopeName) {
      this.scopeName = scopeName;
    }
    toKey() {
      return this.scopeName;
    }
  }, TopLevelRepositoryRuleReference = class {
    scopeName;
    ruleName;
    constructor(scopeName, ruleName) {
      this.scopeName = scopeName, this.ruleName = ruleName;
    }
    toKey() {
      return `${this.scopeName}#${this.ruleName}`;
    }
  }, ExternalReferenceCollector = class {
    _references = [];
    _seenReferenceKeys = /* @__PURE__ */ new Set();
    get references() {
      return this._references;
    }
    visitedRule = /* @__PURE__ */ new Set();
    add(reference) {
      let key2 = reference.toKey();
      this._seenReferenceKeys.has(key2) || (this._seenReferenceKeys.add(key2), this._references.push(reference));
    }
  }, ScopeDependencyProcessor = class {
    repo;
    initialScopeName;
    seenFullScopeRequests = /* @__PURE__ */ new Set();
    seenPartialScopeRequests = /* @__PURE__ */ new Set();
    Q;
    constructor(repo, initialScopeName) {
      this.repo = repo, this.initialScopeName = initialScopeName, this.seenFullScopeRequests.add(this.initialScopeName), this.Q = [new TopLevelRuleReference(this.initialScopeName)];
    }
    processQueue() {
      let q = this.Q;
      this.Q = [];
      let deps = new ExternalReferenceCollector();
      for (let dep of q)
        collectReferencesOfReference(dep, this.initialScopeName, this.repo, deps);
      for (let dep of deps.references)
        if (dep instanceof TopLevelRuleReference) {
          if (this.seenFullScopeRequests.has(dep.scopeName))
            continue;
          this.seenFullScopeRequests.add(dep.scopeName), this.Q.push(dep);
        } else {
          if (this.seenFullScopeRequests.has(dep.scopeName) || this.seenPartialScopeRequests.has(dep.toKey()))
            continue;
          this.seenPartialScopeRequests.add(dep.toKey()), this.Q.push(dep);
        }
    }
  };
  function collectReferencesOfReference(reference, baseGrammarScopeName, repo, result) {
    let selfGrammar = repo.lookup(reference.scopeName);
    if (!selfGrammar) {
      if (reference.scopeName === baseGrammarScopeName)
        throw new Error(`No grammar provided for <${baseGrammarScopeName}>`);
      return;
    }
    let baseGrammar = repo.lookup(baseGrammarScopeName);
    reference instanceof TopLevelRuleReference ? collectExternalReferencesInTopLevelRule({ baseGrammar, selfGrammar }, result) : collectExternalReferencesInTopLevelRepositoryRule(reference.ruleName, { baseGrammar, selfGrammar, repository: selfGrammar.repository }, result);
    let injections = repo.injections(reference.scopeName);
    if (injections)
      for (let injection of injections)
        result.add(new TopLevelRuleReference(injection));
  }
  function collectExternalReferencesInTopLevelRepositoryRule(ruleName, context, result) {
    if (context.repository && context.repository[ruleName]) {
      let rule = context.repository[ruleName];
      collectExternalReferencesInRules([rule], context, result);
    }
  }
  function collectExternalReferencesInTopLevelRule(context, result) {
    context.selfGrammar.patterns && Array.isArray(context.selfGrammar.patterns) && collectExternalReferencesInRules(context.selfGrammar.patterns, { ...context, repository: context.selfGrammar.repository }, result), context.selfGrammar.injections && collectExternalReferencesInRules(Object.values(context.selfGrammar.injections), { ...context, repository: context.selfGrammar.repository }, result);
  }
  function collectExternalReferencesInRules(rules, context, result) {
    for (let rule of rules) {
      if (result.visitedRule.has(rule))
        continue;
      result.visitedRule.add(rule);
      let patternRepository = rule.repository ? mergeObjects({}, context.repository, rule.repository) : context.repository;
      Array.isArray(rule.patterns) && collectExternalReferencesInRules(rule.patterns, { ...context, repository: patternRepository }, result);
      let include = rule.include;
      if (!include)
        continue;
      let reference = parseInclude(include);
      switch (reference.kind) {
        case 0:
          collectExternalReferencesInTopLevelRule({ ...context, selfGrammar: context.baseGrammar }, result);
          break;
        case 1:
          collectExternalReferencesInTopLevelRule(context, result);
          break;
        case 2:
          collectExternalReferencesInTopLevelRepositoryRule(reference.ruleName, { ...context, repository: patternRepository }, result);
          break;
        case 3:
        case 4:
          let selfGrammar = reference.scopeName === context.selfGrammar.scopeName ? context.selfGrammar : reference.scopeName === context.baseGrammar.scopeName ? context.baseGrammar : void 0;
          if (selfGrammar) {
            let newContext = { baseGrammar: context.baseGrammar, selfGrammar, repository: patternRepository };
            reference.kind === 4 ? collectExternalReferencesInTopLevelRepositoryRule(reference.ruleName, newContext, result) : collectExternalReferencesInTopLevelRule(newContext, result);
          } else
            reference.kind === 4 ? result.add(new TopLevelRepositoryRuleReference(reference.scopeName, reference.ruleName)) : result.add(new TopLevelRuleReference(reference.scopeName));
          break;
      }
    }
  }
  var BaseReference = class {
    kind = 0;
  }, SelfReference = class {
    kind = 1;
  }, RelativeReference = class {
    ruleName;
    kind = 2;
    constructor(ruleName) {
      this.ruleName = ruleName;
    }
  }, TopLevelReference = class {
    scopeName;
    kind = 3;
    constructor(scopeName) {
      this.scopeName = scopeName;
    }
  }, TopLevelRepositoryReference = class {
    scopeName;
    ruleName;
    kind = 4;
    constructor(scopeName, ruleName) {
      this.scopeName = scopeName, this.ruleName = ruleName;
    }
  };
  function parseInclude(include) {
    if (include === "$base")
      return new BaseReference();
    if (include === "$self")
      return new SelfReference();
    let indexOfSharp = include.indexOf("#");
    if (indexOfSharp === -1)
      return new TopLevelReference(include);
    if (indexOfSharp === 0)
      return new RelativeReference(include.substring(1));
    {
      let scopeName = include.substring(0, indexOfSharp), ruleName = include.substring(indexOfSharp + 1);
      return new TopLevelRepositoryReference(scopeName, ruleName);
    }
  }
  var HAS_BACK_REFERENCES = /\\(\d+)/, BACK_REFERENCING_END = /\\(\d+)/g, endRuleId = -1, whileRuleId = -2;
  var Rule = class {
    $location;
    id;
    _nameIsCapturing;
    _name;
    _contentNameIsCapturing;
    _contentName;
    constructor($location, id, name, contentName) {
      this.$location = $location, this.id = id, this._name = name || null, this._nameIsCapturing = RegexSource.hasCaptures(this._name), this._contentName = contentName || null, this._contentNameIsCapturing = RegexSource.hasCaptures(this._contentName);
    }
    get debugName() {
      let location = this.$location ? `${basename(this.$location.filename)}:${this.$location.line}` : "unknown";
      return `${this.constructor.name}#${this.id} @ ${location}`;
    }
    getName(lineText, captureIndices) {
      return !this._nameIsCapturing || this._name === null || lineText === null || captureIndices === null ? this._name : RegexSource.replaceCaptures(this._name, lineText, captureIndices);
    }
    getContentName(lineText, captureIndices) {
      return !this._contentNameIsCapturing || this._contentName === null ? this._contentName : RegexSource.replaceCaptures(this._contentName, lineText, captureIndices);
    }
  }, CaptureRule = class extends Rule {
    retokenizeCapturedWithRuleId;
    constructor($location, id, name, contentName, retokenizeCapturedWithRuleId) {
      super($location, id, name, contentName), this.retokenizeCapturedWithRuleId = retokenizeCapturedWithRuleId;
    }
    dispose() {
    }
    collectPatterns(grammar, out) {
      throw new Error("Not supported!");
    }
    compile(grammar, endRegexSource) {
      throw new Error("Not supported!");
    }
    compileAG(grammar, endRegexSource, allowA, allowG) {
      throw new Error("Not supported!");
    }
  }, MatchRule = class extends Rule {
    _match;
    captures;
    _cachedCompiledPatterns;
    constructor($location, id, name, match, captures) {
      super($location, id, name, null), this._match = new RegExpSource(match, this.id), this.captures = captures, this._cachedCompiledPatterns = null;
    }
    dispose() {
      this._cachedCompiledPatterns && (this._cachedCompiledPatterns.dispose(), this._cachedCompiledPatterns = null);
    }
    get debugMatchRegExp() {
      return `${this._match.source}`;
    }
    collectPatterns(grammar, out) {
      out.push(this._match);
    }
    compile(grammar, endRegexSource) {
      return this._getCachedCompiledPatterns(grammar).compile(grammar);
    }
    compileAG(grammar, endRegexSource, allowA, allowG) {
      return this._getCachedCompiledPatterns(grammar).compileAG(grammar, allowA, allowG);
    }
    _getCachedCompiledPatterns(grammar) {
      return this._cachedCompiledPatterns || (this._cachedCompiledPatterns = new RegExpSourceList(), this.collectPatterns(grammar, this._cachedCompiledPatterns)), this._cachedCompiledPatterns;
    }
  }, IncludeOnlyRule = class extends Rule {
    hasMissingPatterns;
    patterns;
    _cachedCompiledPatterns;
    constructor($location, id, name, contentName, patterns) {
      super($location, id, name, contentName), this.patterns = patterns.patterns, this.hasMissingPatterns = patterns.hasMissingPatterns, this._cachedCompiledPatterns = null;
    }
    dispose() {
      this._cachedCompiledPatterns && (this._cachedCompiledPatterns.dispose(), this._cachedCompiledPatterns = null);
    }
    collectPatterns(grammar, out) {
      for (let pattern of this.patterns)
        grammar.getRule(pattern).collectPatterns(grammar, out);
    }
    compile(grammar, endRegexSource) {
      return this._getCachedCompiledPatterns(grammar).compile(grammar);
    }
    compileAG(grammar, endRegexSource, allowA, allowG) {
      return this._getCachedCompiledPatterns(grammar).compileAG(grammar, allowA, allowG);
    }
    _getCachedCompiledPatterns(grammar) {
      return this._cachedCompiledPatterns || (this._cachedCompiledPatterns = new RegExpSourceList(), this.collectPatterns(grammar, this._cachedCompiledPatterns)), this._cachedCompiledPatterns;
    }
  }, BeginEndRule = class extends Rule {
    _begin;
    beginCaptures;
    _end;
    endHasBackReferences;
    endCaptures;
    applyEndPatternLast;
    hasMissingPatterns;
    patterns;
    _cachedCompiledPatterns;
    constructor($location, id, name, contentName, begin, beginCaptures, end, endCaptures, applyEndPatternLast, patterns) {
      super($location, id, name, contentName), this._begin = new RegExpSource(begin, this.id), this.beginCaptures = beginCaptures, this._end = new RegExpSource(end || "\uFFFF", -1), this.endHasBackReferences = this._end.hasBackReferences, this.endCaptures = endCaptures, this.applyEndPatternLast = applyEndPatternLast || !1, this.patterns = patterns.patterns, this.hasMissingPatterns = patterns.hasMissingPatterns, this._cachedCompiledPatterns = null;
    }
    dispose() {
      this._cachedCompiledPatterns && (this._cachedCompiledPatterns.dispose(), this._cachedCompiledPatterns = null);
    }
    get debugBeginRegExp() {
      return `${this._begin.source}`;
    }
    get debugEndRegExp() {
      return `${this._end.source}`;
    }
    getEndWithResolvedBackReferences(lineText, captureIndices) {
      return this._end.resolveBackReferences(lineText, captureIndices);
    }
    collectPatterns(grammar, out) {
      out.push(this._begin);
    }
    compile(grammar, endRegexSource) {
      return this._getCachedCompiledPatterns(grammar, endRegexSource).compile(grammar);
    }
    compileAG(grammar, endRegexSource, allowA, allowG) {
      return this._getCachedCompiledPatterns(grammar, endRegexSource).compileAG(grammar, allowA, allowG);
    }
    _getCachedCompiledPatterns(grammar, endRegexSource) {
      if (!this._cachedCompiledPatterns) {
        this._cachedCompiledPatterns = new RegExpSourceList();
        for (let pattern of this.patterns)
          grammar.getRule(pattern).collectPatterns(grammar, this._cachedCompiledPatterns);
        this.applyEndPatternLast ? this._cachedCompiledPatterns.push(this._end.hasBackReferences ? this._end.clone() : this._end) : this._cachedCompiledPatterns.unshift(this._end.hasBackReferences ? this._end.clone() : this._end);
      }
      return this._end.hasBackReferences && (this.applyEndPatternLast ? this._cachedCompiledPatterns.setSource(this._cachedCompiledPatterns.length() - 1, endRegexSource) : this._cachedCompiledPatterns.setSource(0, endRegexSource)), this._cachedCompiledPatterns;
    }
  }, BeginWhileRule = class extends Rule {
    _begin;
    beginCaptures;
    whileCaptures;
    _while;
    whileHasBackReferences;
    hasMissingPatterns;
    patterns;
    _cachedCompiledPatterns;
    _cachedCompiledWhilePatterns;
    constructor($location, id, name, contentName, begin, beginCaptures, _while, whileCaptures, patterns) {
      super($location, id, name, contentName), this._begin = new RegExpSource(begin, this.id), this.beginCaptures = beginCaptures, this.whileCaptures = whileCaptures, this._while = new RegExpSource(_while, whileRuleId), this.whileHasBackReferences = this._while.hasBackReferences, this.patterns = patterns.patterns, this.hasMissingPatterns = patterns.hasMissingPatterns, this._cachedCompiledPatterns = null, this._cachedCompiledWhilePatterns = null;
    }
    dispose() {
      this._cachedCompiledPatterns && (this._cachedCompiledPatterns.dispose(), this._cachedCompiledPatterns = null), this._cachedCompiledWhilePatterns && (this._cachedCompiledWhilePatterns.dispose(), this._cachedCompiledWhilePatterns = null);
    }
    get debugBeginRegExp() {
      return `${this._begin.source}`;
    }
    get debugWhileRegExp() {
      return `${this._while.source}`;
    }
    getWhileWithResolvedBackReferences(lineText, captureIndices) {
      return this._while.resolveBackReferences(lineText, captureIndices);
    }
    collectPatterns(grammar, out) {
      out.push(this._begin);
    }
    compile(grammar, endRegexSource) {
      return this._getCachedCompiledPatterns(grammar).compile(grammar);
    }
    compileAG(grammar, endRegexSource, allowA, allowG) {
      return this._getCachedCompiledPatterns(grammar).compileAG(grammar, allowA, allowG);
    }
    _getCachedCompiledPatterns(grammar) {
      if (!this._cachedCompiledPatterns) {
        this._cachedCompiledPatterns = new RegExpSourceList();
        for (let pattern of this.patterns)
          grammar.getRule(pattern).collectPatterns(grammar, this._cachedCompiledPatterns);
      }
      return this._cachedCompiledPatterns;
    }
    compileWhile(grammar, endRegexSource) {
      return this._getCachedCompiledWhilePatterns(grammar, endRegexSource).compile(grammar);
    }
    compileWhileAG(grammar, endRegexSource, allowA, allowG) {
      return this._getCachedCompiledWhilePatterns(grammar, endRegexSource).compileAG(grammar, allowA, allowG);
    }
    _getCachedCompiledWhilePatterns(grammar, endRegexSource) {
      return this._cachedCompiledWhilePatterns || (this._cachedCompiledWhilePatterns = new RegExpSourceList(), this._cachedCompiledWhilePatterns.push(this._while.hasBackReferences ? this._while.clone() : this._while)), this._while.hasBackReferences && this._cachedCompiledWhilePatterns.setSource(0, endRegexSource || "\uFFFF"), this._cachedCompiledWhilePatterns;
    }
  }, RuleFactory = class _RuleFactory {
    static createCaptureRule(helper, $location, name, contentName, retokenizeCapturedWithRuleId) {
      return helper.registerRule((id) => new CaptureRule($location, id, name, contentName, retokenizeCapturedWithRuleId));
    }
    static getCompiledRuleId(desc, helper, repository) {
      return desc.id || helper.registerRule((id) => {
        if (desc.id = id, desc.match)
          return new MatchRule(desc.$vscodeTextmateLocation, desc.id, desc.name, desc.match, _RuleFactory._compileCaptures(desc.captures, helper, repository));
        if (typeof desc.begin > "u") {
          desc.repository && (repository = mergeObjects({}, repository, desc.repository));
          let patterns = desc.patterns;
          return typeof patterns > "u" && desc.include && (patterns = [{ include: desc.include }]), new IncludeOnlyRule(desc.$vscodeTextmateLocation, desc.id, desc.name, desc.contentName, _RuleFactory._compilePatterns(patterns, helper, repository));
        }
        return desc.while ? new BeginWhileRule(desc.$vscodeTextmateLocation, desc.id, desc.name, desc.contentName, desc.begin, _RuleFactory._compileCaptures(desc.beginCaptures || desc.captures, helper, repository), desc.while, _RuleFactory._compileCaptures(desc.whileCaptures || desc.captures, helper, repository), _RuleFactory._compilePatterns(desc.patterns, helper, repository)) : new BeginEndRule(desc.$vscodeTextmateLocation, desc.id, desc.name, desc.contentName, desc.begin, _RuleFactory._compileCaptures(desc.beginCaptures || desc.captures, helper, repository), desc.end, _RuleFactory._compileCaptures(desc.endCaptures || desc.captures, helper, repository), desc.applyEndPatternLast, _RuleFactory._compilePatterns(desc.patterns, helper, repository));
      }), desc.id;
    }
    static _compileCaptures(captures, helper, repository) {
      let r3 = [];
      if (captures) {
        let maximumCaptureId = 0;
        for (let captureId in captures) {
          if (captureId === "$vscodeTextmateLocation")
            continue;
          let numericCaptureId = parseInt(captureId, 10);
          numericCaptureId > maximumCaptureId && (maximumCaptureId = numericCaptureId);
        }
        for (let i2 = 0; i2 <= maximumCaptureId; i2++)
          r3[i2] = null;
        for (let captureId in captures) {
          if (captureId === "$vscodeTextmateLocation")
            continue;
          let numericCaptureId = parseInt(captureId, 10), retokenizeCapturedWithRuleId = 0;
          captures[captureId].patterns && (retokenizeCapturedWithRuleId = _RuleFactory.getCompiledRuleId(captures[captureId], helper, repository)), r3[numericCaptureId] = _RuleFactory.createCaptureRule(helper, captures[captureId].$vscodeTextmateLocation, captures[captureId].name, captures[captureId].contentName, retokenizeCapturedWithRuleId);
        }
      }
      return r3;
    }
    static _compilePatterns(patterns, helper, repository) {
      let r3 = [];
      if (patterns)
        for (let i2 = 0, len = patterns.length; i2 < len; i2++) {
          let pattern = patterns[i2], ruleId = -1;
          if (pattern.include) {
            let reference = parseInclude(pattern.include);
            switch (reference.kind) {
              case 0:
              case 1:
                ruleId = _RuleFactory.getCompiledRuleId(repository[pattern.include], helper, repository);
                break;
              case 2:
                let localIncludedRule = repository[reference.ruleName];
                localIncludedRule && (ruleId = _RuleFactory.getCompiledRuleId(localIncludedRule, helper, repository));
                break;
              case 3:
              case 4:
                let externalGrammarName = reference.scopeName, externalGrammarInclude = reference.kind === 4 ? reference.ruleName : null, externalGrammar = helper.getExternalGrammar(externalGrammarName, repository);
                if (externalGrammar)
                  if (externalGrammarInclude) {
                    let externalIncludedRule = externalGrammar.repository[externalGrammarInclude];
                    externalIncludedRule && (ruleId = _RuleFactory.getCompiledRuleId(externalIncludedRule, helper, externalGrammar.repository));
                  } else
                    ruleId = _RuleFactory.getCompiledRuleId(externalGrammar.repository.$self, helper, externalGrammar.repository);
                break;
            }
          } else
            ruleId = _RuleFactory.getCompiledRuleId(pattern, helper, repository);
          if (ruleId !== -1) {
            let rule = helper.getRule(ruleId), skipRule = !1;
            if ((rule instanceof IncludeOnlyRule || rule instanceof BeginEndRule || rule instanceof BeginWhileRule) && rule.hasMissingPatterns && rule.patterns.length === 0 && (skipRule = !0), skipRule)
              continue;
            r3.push(ruleId);
          }
        }
      return {
        patterns: r3,
        hasMissingPatterns: (patterns ? patterns.length : 0) !== r3.length
      };
    }
  }, RegExpSource = class _RegExpSource {
    source;
    ruleId;
    hasAnchor;
    hasBackReferences;
    _anchorCache;
    constructor(regExpSource, ruleId) {
      if (regExpSource) {
        let len = regExpSource.length, lastPushedPos = 0, output = [], hasAnchor = !1;
        for (let pos = 0; pos < len; pos++)
          if (regExpSource.charAt(pos) === "\\" && pos + 1 < len) {
            let nextCh = regExpSource.charAt(pos + 1);
            nextCh === "z" ? (output.push(regExpSource.substring(lastPushedPos, pos)), output.push("$(?!\\n)(?<!\\n)"), lastPushedPos = pos + 2) : (nextCh === "A" || nextCh === "G") && (hasAnchor = !0), pos++;
          }
        this.hasAnchor = hasAnchor, lastPushedPos === 0 ? this.source = regExpSource : (output.push(regExpSource.substring(lastPushedPos, len)), this.source = output.join(""));
      } else
        this.hasAnchor = !1, this.source = regExpSource;
      this.hasAnchor ? this._anchorCache = this._buildAnchorCache() : this._anchorCache = null, this.ruleId = ruleId, this.hasBackReferences = HAS_BACK_REFERENCES.test(this.source);
    }
    clone() {
      return new _RegExpSource(this.source, this.ruleId);
    }
    setSource(newSource) {
      this.source !== newSource && (this.source = newSource, this.hasAnchor && (this._anchorCache = this._buildAnchorCache()));
    }
    resolveBackReferences(lineText, captureIndices) {
      let capturedValues = captureIndices.map((capture) => lineText.substring(capture.start, capture.end));
      return BACK_REFERENCING_END.lastIndex = 0, this.source.replace(BACK_REFERENCING_END, (match, g1) => escapeRegExpCharacters(capturedValues[parseInt(g1, 10)] || ""));
    }
    _buildAnchorCache() {
      let A0_G0_result = [], A0_G1_result = [], A1_G0_result = [], A1_G1_result = [], pos, len, ch, nextCh;
      for (pos = 0, len = this.source.length; pos < len; pos++)
        ch = this.source.charAt(pos), A0_G0_result[pos] = ch, A0_G1_result[pos] = ch, A1_G0_result[pos] = ch, A1_G1_result[pos] = ch, ch === "\\" && pos + 1 < len && (nextCh = this.source.charAt(pos + 1), nextCh === "A" ? (A0_G0_result[pos + 1] = "\uFFFF", A0_G1_result[pos + 1] = "\uFFFF", A1_G0_result[pos + 1] = "A", A1_G1_result[pos + 1] = "A") : nextCh === "G" ? (A0_G0_result[pos + 1] = "\uFFFF", A0_G1_result[pos + 1] = "G", A1_G0_result[pos + 1] = "\uFFFF", A1_G1_result[pos + 1] = "G") : (A0_G0_result[pos + 1] = nextCh, A0_G1_result[pos + 1] = nextCh, A1_G0_result[pos + 1] = nextCh, A1_G1_result[pos + 1] = nextCh), pos++);
      return {
        A0_G0: A0_G0_result.join(""),
        A0_G1: A0_G1_result.join(""),
        A1_G0: A1_G0_result.join(""),
        A1_G1: A1_G1_result.join("")
      };
    }
    resolveAnchors(allowA, allowG) {
      return !this.hasAnchor || !this._anchorCache ? this.source : allowA ? allowG ? this._anchorCache.A1_G1 : this._anchorCache.A1_G0 : allowG ? this._anchorCache.A0_G1 : this._anchorCache.A0_G0;
    }
  }, RegExpSourceList = class {
    _items;
    _hasAnchors;
    _cached;
    _anchorCache;
    constructor() {
      this._items = [], this._hasAnchors = !1, this._cached = null, this._anchorCache = {
        A0_G0: null,
        A0_G1: null,
        A1_G0: null,
        A1_G1: null
      };
    }
    dispose() {
      this._disposeCaches();
    }
    _disposeCaches() {
      this._cached && (this._cached.dispose(), this._cached = null), this._anchorCache.A0_G0 && (this._anchorCache.A0_G0.dispose(), this._anchorCache.A0_G0 = null), this._anchorCache.A0_G1 && (this._anchorCache.A0_G1.dispose(), this._anchorCache.A0_G1 = null), this._anchorCache.A1_G0 && (this._anchorCache.A1_G0.dispose(), this._anchorCache.A1_G0 = null), this._anchorCache.A1_G1 && (this._anchorCache.A1_G1.dispose(), this._anchorCache.A1_G1 = null);
    }
    push(item) {
      this._items.push(item), this._hasAnchors = this._hasAnchors || item.hasAnchor;
    }
    unshift(item) {
      this._items.unshift(item), this._hasAnchors = this._hasAnchors || item.hasAnchor;
    }
    length() {
      return this._items.length;
    }
    setSource(index, newSource) {
      this._items[index].source !== newSource && (this._disposeCaches(), this._items[index].setSource(newSource));
    }
    compile(onigLib) {
      if (!this._cached) {
        let regExps = this._items.map((e3) => e3.source);
        this._cached = new CompiledRule(onigLib, regExps, this._items.map((e3) => e3.ruleId));
      }
      return this._cached;
    }
    compileAG(onigLib, allowA, allowG) {
      return this._hasAnchors ? allowA ? allowG ? (this._anchorCache.A1_G1 || (this._anchorCache.A1_G1 = this._resolveAnchors(onigLib, allowA, allowG)), this._anchorCache.A1_G1) : (this._anchorCache.A1_G0 || (this._anchorCache.A1_G0 = this._resolveAnchors(onigLib, allowA, allowG)), this._anchorCache.A1_G0) : allowG ? (this._anchorCache.A0_G1 || (this._anchorCache.A0_G1 = this._resolveAnchors(onigLib, allowA, allowG)), this._anchorCache.A0_G1) : (this._anchorCache.A0_G0 || (this._anchorCache.A0_G0 = this._resolveAnchors(onigLib, allowA, allowG)), this._anchorCache.A0_G0) : this.compile(onigLib);
    }
    _resolveAnchors(onigLib, allowA, allowG) {
      let regExps = this._items.map((e3) => e3.resolveAnchors(allowA, allowG));
      return new CompiledRule(onigLib, regExps, this._items.map((e3) => e3.ruleId));
    }
  }, CompiledRule = class {
    regExps;
    rules;
    scanner;
    constructor(onigLib, regExps, rules) {
      this.regExps = regExps, this.rules = rules, this.scanner = onigLib.createOnigScanner(regExps);
    }
    dispose() {
      typeof this.scanner.dispose == "function" && this.scanner.dispose();
    }
    toString() {
      let r3 = [];
      for (let i2 = 0, len = this.rules.length; i2 < len; i2++)
        r3.push("   - " + this.rules[i2] + ": " + this.regExps[i2]);
      return r3.join(`
`);
    }
    findNextMatchSync(string, startPosition, options) {
      let result = this.scanner.findNextMatchSync(string, startPosition, options);
      return result ? {
        ruleId: this.rules[result.index],
        captureIndices: result.captureIndices
      } : null;
    }
  }, Theme = class {
    _colorMap;
    _defaults;
    _root;
    static createFromRawTheme(source, colorMap) {
      return this.createFromParsedTheme(parseTheme(source), colorMap);
    }
    static createFromParsedTheme(source, colorMap) {
      return resolveParsedThemeRules(source, colorMap);
    }
    _cachedMatchRoot = new CachedFn((scopeName) => this._root.match(scopeName));
    constructor(_colorMap, _defaults, _root) {
      this._colorMap = _colorMap, this._defaults = _defaults, this._root = _root;
    }
    getColorMap() {
      return this._colorMap.getColorMap();
    }
    getDefaults() {
      return this._defaults;
    }
    match(scopePath) {
      if (scopePath === null)
        return this._defaults;
      let scopeName = scopePath.scopeName, effectiveRule = this._cachedMatchRoot.get(scopeName).find((v) => _scopePathMatchesParentScopes(scopePath.parent, v.parentScopes));
      return effectiveRule ? new StyleAttributes(effectiveRule.fontStyle, effectiveRule.foreground, effectiveRule.background) : null;
    }
  }, ScopeStack = class _ScopeStack {
    parent;
    scopeName;
    static push(path, scopeNames) {
      for (let name of scopeNames)
        path = new _ScopeStack(path, name);
      return path;
    }
    static from(...segments) {
      let result = null;
      for (let i2 = 0; i2 < segments.length; i2++)
        result = new _ScopeStack(result, segments[i2]);
      return result;
    }
    constructor(parent, scopeName) {
      this.parent = parent, this.scopeName = scopeName;
    }
    push(scopeName) {
      return new _ScopeStack(this, scopeName);
    }
    getSegments() {
      let item = this, result = [];
      for (; item; )
        result.push(item.scopeName), item = item.parent;
      return result.reverse(), result;
    }
    toString() {
      return this.getSegments().join(" ");
    }
    extends(other) {
      return this === other ? !0 : this.parent === null ? !1 : this.parent.extends(other);
    }
    getExtensionIfDefined(base) {
      let result = [], item = this;
      for (; item && item !== base; )
        result.push(item.scopeName), item = item.parent;
      return item === base ? result.reverse() : void 0;
    }
  };
  function _scopePathMatchesParentScopes(scopePath, parentScopes) {
    if (parentScopes === null)
      return !0;
    let index = 0, scopePattern = parentScopes[index];
    for (; scopePath; ) {
      if (_matchesScope(scopePath.scopeName, scopePattern)) {
        if (index++, index === parentScopes.length)
          return !0;
        scopePattern = parentScopes[index];
      }
      scopePath = scopePath.parent;
    }
    return !1;
  }
  function _matchesScope(scopeName, scopePattern) {
    return scopePattern === scopeName || scopeName.startsWith(scopePattern) && scopeName[scopePattern.length] === ".";
  }
  var StyleAttributes = class {
    fontStyle;
    foregroundId;
    backgroundId;
    constructor(fontStyle, foregroundId, backgroundId) {
      this.fontStyle = fontStyle, this.foregroundId = foregroundId, this.backgroundId = backgroundId;
    }
  };
  function parseTheme(source) {
    if (!source)
      return [];
    if (!source.settings || !Array.isArray(source.settings))
      return [];
    let settings = source.settings, result = [], resultLen = 0;
    for (let i2 = 0, len = settings.length; i2 < len; i2++) {
      let entry = settings[i2];
      if (!entry.settings)
        continue;
      let scopes;
      if (typeof entry.scope == "string") {
        let _scope = entry.scope;
        _scope = _scope.replace(/^[,]+/, ""), _scope = _scope.replace(/[,]+$/, ""), scopes = _scope.split(",");
      } else Array.isArray(entry.scope) ? scopes = entry.scope : scopes = [""];
      let fontStyle = -1;
      if (typeof entry.settings.fontStyle == "string") {
        fontStyle = 0;
        let segments = entry.settings.fontStyle.split(" ");
        for (let j = 0, lenJ = segments.length; j < lenJ; j++)
          switch (segments[j]) {
            case "italic":
              fontStyle = fontStyle | 1;
              break;
            case "bold":
              fontStyle = fontStyle | 2;
              break;
            case "underline":
              fontStyle = fontStyle | 4;
              break;
            case "strikethrough":
              fontStyle = fontStyle | 8;
              break;
          }
      }
      let foreground = null;
      typeof entry.settings.foreground == "string" && isValidHexColor(entry.settings.foreground) && (foreground = entry.settings.foreground);
      let background = null;
      typeof entry.settings.background == "string" && isValidHexColor(entry.settings.background) && (background = entry.settings.background);
      for (let j = 0, lenJ = scopes.length; j < lenJ; j++) {
        let segments = scopes[j].trim().split(" "), scope = segments[segments.length - 1], parentScopes = null;
        segments.length > 1 && (parentScopes = segments.slice(0, segments.length - 1), parentScopes.reverse()), result[resultLen++] = new ParsedThemeRule(scope, parentScopes, i2, fontStyle, foreground, background);
      }
    }
    return result;
  }
  var ParsedThemeRule = class {
    scope;
    parentScopes;
    index;
    fontStyle;
    foreground;
    background;
    constructor(scope, parentScopes, index, fontStyle, foreground, background) {
      this.scope = scope, this.parentScopes = parentScopes, this.index = index, this.fontStyle = fontStyle, this.foreground = foreground, this.background = background;
    }
  };
  function resolveParsedThemeRules(parsedThemeRules, _colorMap) {
    parsedThemeRules.sort((a, b) => {
      let r3 = strcmp(a.scope, b.scope);
      return r3 !== 0 || (r3 = strArrCmp(a.parentScopes, b.parentScopes), r3 !== 0) ? r3 : a.index - b.index;
    });
    let defaultFontStyle = 0, defaultForeground = "#000000", defaultBackground = "#ffffff";
    for (; parsedThemeRules.length >= 1 && parsedThemeRules[0].scope === ""; ) {
      let incomingDefaults = parsedThemeRules.shift();
      incomingDefaults.fontStyle !== -1 && (defaultFontStyle = incomingDefaults.fontStyle), incomingDefaults.foreground !== null && (defaultForeground = incomingDefaults.foreground), incomingDefaults.background !== null && (defaultBackground = incomingDefaults.background);
    }
    let colorMap = new ColorMap(_colorMap), defaults = new StyleAttributes(defaultFontStyle, colorMap.getId(defaultForeground), colorMap.getId(defaultBackground)), root2 = new ThemeTrieElement(new ThemeTrieElementRule(0, null, -1, 0, 0), []);
    for (let i2 = 0, len = parsedThemeRules.length; i2 < len; i2++) {
      let rule = parsedThemeRules[i2];
      root2.insert(0, rule.scope, rule.parentScopes, rule.fontStyle, colorMap.getId(rule.foreground), colorMap.getId(rule.background));
    }
    return new Theme(colorMap, defaults, root2);
  }
  var ColorMap = class {
    _isFrozen;
    _lastColorId;
    _id2color;
    _color2id;
    constructor(_colorMap) {
      if (this._lastColorId = 0, this._id2color = [], this._color2id = /* @__PURE__ */ Object.create(null), Array.isArray(_colorMap)) {
        this._isFrozen = !0;
        for (let i2 = 0, len = _colorMap.length; i2 < len; i2++)
          this._color2id[_colorMap[i2]] = i2, this._id2color[i2] = _colorMap[i2];
      } else
        this._isFrozen = !1;
    }
    getId(color) {
      if (color === null)
        return 0;
      color = color.toUpperCase();
      let value = this._color2id[color];
      if (value)
        return value;
      if (this._isFrozen)
        throw new Error(`Missing color in color map - ${color}`);
      return value = ++this._lastColorId, this._color2id[color] = value, this._id2color[value] = color, value;
    }
    getColorMap() {
      return this._id2color.slice(0);
    }
  }, ThemeTrieElementRule = class _ThemeTrieElementRule {
    scopeDepth;
    parentScopes;
    fontStyle;
    foreground;
    background;
    constructor(scopeDepth, parentScopes, fontStyle, foreground, background) {
      this.scopeDepth = scopeDepth, this.parentScopes = parentScopes, this.fontStyle = fontStyle, this.foreground = foreground, this.background = background;
    }
    clone() {
      return new _ThemeTrieElementRule(this.scopeDepth, this.parentScopes, this.fontStyle, this.foreground, this.background);
    }
    static cloneArr(arr) {
      let r3 = [];
      for (let i2 = 0, len = arr.length; i2 < len; i2++)
        r3[i2] = arr[i2].clone();
      return r3;
    }
    acceptOverwrite(scopeDepth, fontStyle, foreground, background) {
      this.scopeDepth > scopeDepth ? console.log("how did this happen?") : this.scopeDepth = scopeDepth, fontStyle !== -1 && (this.fontStyle = fontStyle), foreground !== 0 && (this.foreground = foreground), background !== 0 && (this.background = background);
    }
  }, ThemeTrieElement = class _ThemeTrieElement {
    _mainRule;
    _children;
    _rulesWithParentScopes;
    constructor(_mainRule, rulesWithParentScopes = [], _children = {}) {
      this._mainRule = _mainRule, this._children = _children, this._rulesWithParentScopes = rulesWithParentScopes;
    }
    static _sortBySpecificity(arr) {
      return arr.length === 1 || arr.sort(this._cmpBySpecificity), arr;
    }
    static _cmpBySpecificity(a, b) {
      if (a.scopeDepth === b.scopeDepth) {
        let aParentScopes = a.parentScopes, bParentScopes = b.parentScopes, aParentScopesLen = aParentScopes === null ? 0 : aParentScopes.length, bParentScopesLen = bParentScopes === null ? 0 : bParentScopes.length;
        if (aParentScopesLen === bParentScopesLen)
          for (let i2 = 0; i2 < aParentScopesLen; i2++) {
            let aLen = aParentScopes[i2].length, bLen = bParentScopes[i2].length;
            if (aLen !== bLen)
              return bLen - aLen;
          }
        return bParentScopesLen - aParentScopesLen;
      }
      return b.scopeDepth - a.scopeDepth;
    }
    match(scope) {
      if (scope === "")
        return _ThemeTrieElement._sortBySpecificity([].concat(this._mainRule).concat(this._rulesWithParentScopes));
      let dotIndex = scope.indexOf("."), head2, tail;
      return dotIndex === -1 ? (head2 = scope, tail = "") : (head2 = scope.substring(0, dotIndex), tail = scope.substring(dotIndex + 1)), this._children.hasOwnProperty(head2) ? this._children[head2].match(tail) : _ThemeTrieElement._sortBySpecificity([].concat(this._mainRule).concat(this._rulesWithParentScopes));
    }
    insert(scopeDepth, scope, parentScopes, fontStyle, foreground, background) {
      if (scope === "") {
        this._doInsertHere(scopeDepth, parentScopes, fontStyle, foreground, background);
        return;
      }
      let dotIndex = scope.indexOf("."), head2, tail;
      dotIndex === -1 ? (head2 = scope, tail = "") : (head2 = scope.substring(0, dotIndex), tail = scope.substring(dotIndex + 1));
      let child;
      this._children.hasOwnProperty(head2) ? child = this._children[head2] : (child = new _ThemeTrieElement(this._mainRule.clone(), ThemeTrieElementRule.cloneArr(this._rulesWithParentScopes)), this._children[head2] = child), child.insert(scopeDepth + 1, tail, parentScopes, fontStyle, foreground, background);
    }
    _doInsertHere(scopeDepth, parentScopes, fontStyle, foreground, background) {
      if (parentScopes === null) {
        this._mainRule.acceptOverwrite(scopeDepth, fontStyle, foreground, background);
        return;
      }
      for (let i2 = 0, len = this._rulesWithParentScopes.length; i2 < len; i2++) {
        let rule = this._rulesWithParentScopes[i2];
        if (strArrCmp(rule.parentScopes, parentScopes) === 0) {
          rule.acceptOverwrite(scopeDepth, fontStyle, foreground, background);
          return;
        }
      }
      fontStyle === -1 && (fontStyle = this._mainRule.fontStyle), foreground === 0 && (foreground = this._mainRule.foreground), background === 0 && (background = this._mainRule.background), this._rulesWithParentScopes.push(new ThemeTrieElementRule(scopeDepth, parentScopes, fontStyle, foreground, background));
    }
  }, BasicScopeAttributes = class {
    languageId;
    tokenType;
    constructor(languageId, tokenType) {
      this.languageId = languageId, this.tokenType = tokenType;
    }
  }, BasicScopeAttributesProvider = class _BasicScopeAttributesProvider {
    _defaultAttributes;
    _embeddedLanguagesMatcher;
    constructor(initialLanguageId, embeddedLanguages) {
      this._defaultAttributes = new BasicScopeAttributes(
        initialLanguageId,
        8
        /* OptionalStandardTokenType.NotSet */
      ), this._embeddedLanguagesMatcher = new ScopeMatcher(Object.entries(embeddedLanguages || {}));
    }
    getDefaultAttributes() {
      return this._defaultAttributes;
    }
    getBasicScopeAttributes(scopeName) {
      return scopeName === null ? _BasicScopeAttributesProvider._NULL_SCOPE_METADATA : this._getBasicScopeAttributes.get(scopeName);
    }
    static _NULL_SCOPE_METADATA = new BasicScopeAttributes(0, 0);
    _getBasicScopeAttributes = new CachedFn((scopeName) => {
      let languageId = this._scopeToLanguage(scopeName), standardTokenType = this._toStandardTokenType(scopeName);
      return new BasicScopeAttributes(languageId, standardTokenType);
    });
    /**
     * Given a produced TM scope, return the language that token describes or null if unknown.
     * e.g. source.html => html, source.css.embedded.html => css, punctuation.definition.tag.html => null
     */
    _scopeToLanguage(scope) {
      return this._embeddedLanguagesMatcher.match(scope) || 0;
    }
    _toStandardTokenType(scopeName) {
      let m = scopeName.match(_BasicScopeAttributesProvider.STANDARD_TOKEN_TYPE_REGEXP);
      if (!m)
        return 8;
      switch (m[1]) {
        case "comment":
          return 1;
        case "string":
          return 2;
        case "regex":
          return 3;
        case "meta.embedded":
          return 0;
      }
      throw new Error("Unexpected match for standard token type!");
    }
    static STANDARD_TOKEN_TYPE_REGEXP = /\b(comment|string|regex|meta\.embedded)\b/;
  }, ScopeMatcher = class {
    values;
    scopesRegExp;
    constructor(values) {
      if (values.length === 0)
        this.values = null, this.scopesRegExp = null;
      else {
        this.values = new Map(values);
        let escapedScopes = values.map(([scopeName, value]) => escapeRegExpCharacters(scopeName));
        escapedScopes.sort(), escapedScopes.reverse(), this.scopesRegExp = new RegExp(`^((${escapedScopes.join(")|(")}))($|\\.)`, "");
      }
    }
    match(scope) {
      if (!this.scopesRegExp)
        return;
      let m = scope.match(this.scopesRegExp);
      if (m)
        return this.values.get(m[1]);
    }
  }, TokenizeStringResult = class {
    stack;
    stoppedEarly;
    constructor(stack, stoppedEarly) {
      this.stack = stack, this.stoppedEarly = stoppedEarly;
    }
  };
  function _tokenizeString(grammar, lineText, isFirstLine, linePos, stack, lineTokens, checkWhileConditions, timeLimit) {
    let lineLength = lineText.content.length, STOP = !1, anchorPosition = -1;
    if (checkWhileConditions) {
      let whileCheckResult = _checkWhileConditions(grammar, lineText, isFirstLine, linePos, stack, lineTokens);
      stack = whileCheckResult.stack, linePos = whileCheckResult.linePos, isFirstLine = whileCheckResult.isFirstLine, anchorPosition = whileCheckResult.anchorPosition;
    }
    let startTime = Date.now();
    for (; !STOP; ) {
      if (timeLimit !== 0 && Date.now() - startTime > timeLimit)
        return new TokenizeStringResult(stack, !0);
      scanNext();
    }
    return new TokenizeStringResult(stack, !1);
    function scanNext() {
      let r3 = matchRuleOrInjections(grammar, lineText, isFirstLine, linePos, stack, anchorPosition);
      if (!r3) {
        lineTokens.produce(stack, lineLength), STOP = !0;
        return;
      }
      let captureIndices = r3.captureIndices, matchedRuleId = r3.matchedRuleId, hasAdvanced = captureIndices && captureIndices.length > 0 ? captureIndices[0].end > linePos : !1;
      if (matchedRuleId === endRuleId) {
        let poppedRule = stack.getRule(grammar);
        lineTokens.produce(stack, captureIndices[0].start), stack = stack.withContentNameScopesList(stack.nameScopesList), handleCaptures(grammar, lineText, isFirstLine, stack, lineTokens, poppedRule.endCaptures, captureIndices), lineTokens.produce(stack, captureIndices[0].end);
        let popped = stack;
        if (stack = stack.parent, anchorPosition = popped.getAnchorPos(), !hasAdvanced && popped.getEnterPos() === linePos) {
          stack = popped, lineTokens.produce(stack, lineLength), STOP = !0;
          return;
        }
      } else {
        let _rule = grammar.getRule(matchedRuleId);
        lineTokens.produce(stack, captureIndices[0].start);
        let beforePush = stack, scopeName = _rule.getName(lineText.content, captureIndices), nameScopesList = stack.contentNameScopesList.pushAttributed(scopeName, grammar);
        if (stack = stack.push(matchedRuleId, linePos, anchorPosition, captureIndices[0].end === lineLength, null, nameScopesList, nameScopesList), _rule instanceof BeginEndRule) {
          let pushedRule = _rule;
          handleCaptures(grammar, lineText, isFirstLine, stack, lineTokens, pushedRule.beginCaptures, captureIndices), lineTokens.produce(stack, captureIndices[0].end), anchorPosition = captureIndices[0].end;
          let contentName = pushedRule.getContentName(lineText.content, captureIndices), contentNameScopesList = nameScopesList.pushAttributed(contentName, grammar);
          if (stack = stack.withContentNameScopesList(contentNameScopesList), pushedRule.endHasBackReferences && (stack = stack.withEndRule(pushedRule.getEndWithResolvedBackReferences(lineText.content, captureIndices))), !hasAdvanced && beforePush.hasSameRuleAs(stack)) {
            stack = stack.pop(), lineTokens.produce(stack, lineLength), STOP = !0;
            return;
          }
        } else if (_rule instanceof BeginWhileRule) {
          let pushedRule = _rule;
          handleCaptures(grammar, lineText, isFirstLine, stack, lineTokens, pushedRule.beginCaptures, captureIndices), lineTokens.produce(stack, captureIndices[0].end), anchorPosition = captureIndices[0].end;
          let contentName = pushedRule.getContentName(lineText.content, captureIndices), contentNameScopesList = nameScopesList.pushAttributed(contentName, grammar);
          if (stack = stack.withContentNameScopesList(contentNameScopesList), pushedRule.whileHasBackReferences && (stack = stack.withEndRule(pushedRule.getWhileWithResolvedBackReferences(lineText.content, captureIndices))), !hasAdvanced && beforePush.hasSameRuleAs(stack)) {
            stack = stack.pop(), lineTokens.produce(stack, lineLength), STOP = !0;
            return;
          }
        } else if (handleCaptures(grammar, lineText, isFirstLine, stack, lineTokens, _rule.captures, captureIndices), lineTokens.produce(stack, captureIndices[0].end), stack = stack.pop(), !hasAdvanced) {
          stack = stack.safePop(), lineTokens.produce(stack, lineLength), STOP = !0;
          return;
        }
      }
      captureIndices[0].end > linePos && (linePos = captureIndices[0].end, isFirstLine = !1);
    }
  }
  function _checkWhileConditions(grammar, lineText, isFirstLine, linePos, stack, lineTokens) {
    let anchorPosition = stack.beginRuleCapturedEOL ? 0 : -1, whileRules = [];
    for (let node = stack; node; node = node.pop()) {
      let nodeRule = node.getRule(grammar);
      nodeRule instanceof BeginWhileRule && whileRules.push({
        rule: nodeRule,
        stack: node
      });
    }
    for (let whileRule = whileRules.pop(); whileRule; whileRule = whileRules.pop()) {
      let { ruleScanner, findOptions } = prepareRuleWhileSearch(whileRule.rule, grammar, whileRule.stack.endRule, isFirstLine, linePos === anchorPosition), r3 = ruleScanner.findNextMatchSync(lineText, linePos, findOptions);
      if (r3) {
        if (r3.ruleId !== whileRuleId) {
          stack = whileRule.stack.pop();
          break;
        }
        r3.captureIndices && r3.captureIndices.length && (lineTokens.produce(whileRule.stack, r3.captureIndices[0].start), handleCaptures(grammar, lineText, isFirstLine, whileRule.stack, lineTokens, whileRule.rule.whileCaptures, r3.captureIndices), lineTokens.produce(whileRule.stack, r3.captureIndices[0].end), anchorPosition = r3.captureIndices[0].end, r3.captureIndices[0].end > linePos && (linePos = r3.captureIndices[0].end, isFirstLine = !1));
      } else {
        stack = whileRule.stack.pop();
        break;
      }
    }
    return { stack, linePos, anchorPosition, isFirstLine };
  }
  function matchRuleOrInjections(grammar, lineText, isFirstLine, linePos, stack, anchorPosition) {
    let matchResult = matchRule(grammar, lineText, isFirstLine, linePos, stack, anchorPosition), injections = grammar.getInjections();
    if (injections.length === 0)
      return matchResult;
    let injectionResult = matchInjections(injections, grammar, lineText, isFirstLine, linePos, stack, anchorPosition);
    if (!injectionResult)
      return matchResult;
    if (!matchResult)
      return injectionResult;
    let matchResultScore = matchResult.captureIndices[0].start, injectionResultScore = injectionResult.captureIndices[0].start;
    return injectionResultScore < matchResultScore || injectionResult.priorityMatch && injectionResultScore === matchResultScore ? injectionResult : matchResult;
  }
  function matchRule(grammar, lineText, isFirstLine, linePos, stack, anchorPosition) {
    let rule = stack.getRule(grammar), { ruleScanner, findOptions } = prepareRuleSearch(rule, grammar, stack.endRule, isFirstLine, linePos === anchorPosition), r3 = ruleScanner.findNextMatchSync(lineText, linePos, findOptions);
    return r3 ? {
      captureIndices: r3.captureIndices,
      matchedRuleId: r3.ruleId
    } : null;
  }
  function matchInjections(injections, grammar, lineText, isFirstLine, linePos, stack, anchorPosition) {
    let bestMatchRating = Number.MAX_VALUE, bestMatchCaptureIndices = null, bestMatchRuleId, bestMatchResultPriority = 0, scopes = stack.contentNameScopesList.getScopeNames();
    for (let i2 = 0, len = injections.length; i2 < len; i2++) {
      let injection = injections[i2];
      if (!injection.matcher(scopes))
        continue;
      let rule = grammar.getRule(injection.ruleId), { ruleScanner, findOptions } = prepareRuleSearch(rule, grammar, null, isFirstLine, linePos === anchorPosition), matchResult = ruleScanner.findNextMatchSync(lineText, linePos, findOptions);
      if (!matchResult)
        continue;
      let matchRating = matchResult.captureIndices[0].start;
      if (!(matchRating >= bestMatchRating) && (bestMatchRating = matchRating, bestMatchCaptureIndices = matchResult.captureIndices, bestMatchRuleId = matchResult.ruleId, bestMatchResultPriority = injection.priority, bestMatchRating === linePos))
        break;
    }
    return bestMatchCaptureIndices ? {
      priorityMatch: bestMatchResultPriority === -1,
      captureIndices: bestMatchCaptureIndices,
      matchedRuleId: bestMatchRuleId
    } : null;
  }
  function prepareRuleSearch(rule, grammar, endRegexSource, allowA, allowG) {
    return {
      ruleScanner: rule.compileAG(grammar, endRegexSource, allowA, allowG),
      findOptions: 0
      /* FindOption.None */
    };
  }
  function prepareRuleWhileSearch(rule, grammar, endRegexSource, allowA, allowG) {
    return {
      ruleScanner: rule.compileWhileAG(grammar, endRegexSource, allowA, allowG),
      findOptions: 0
      /* FindOption.None */
    };
  }
  function handleCaptures(grammar, lineText, isFirstLine, stack, lineTokens, captures, captureIndices) {
    if (captures.length === 0)
      return;
    let lineTextContent = lineText.content, len = Math.min(captures.length, captureIndices.length), localStack = [], maxEnd = captureIndices[0].end;
    for (let i2 = 0; i2 < len; i2++) {
      let captureRule = captures[i2];
      if (captureRule === null)
        continue;
      let captureIndex = captureIndices[i2];
      if (captureIndex.length === 0)
        continue;
      if (captureIndex.start > maxEnd)
        break;
      for (; localStack.length > 0 && localStack[localStack.length - 1].endPos <= captureIndex.start; )
        lineTokens.produceFromScopes(localStack[localStack.length - 1].scopes, localStack[localStack.length - 1].endPos), localStack.pop();
      if (localStack.length > 0 ? lineTokens.produceFromScopes(localStack[localStack.length - 1].scopes, captureIndex.start) : lineTokens.produce(stack, captureIndex.start), captureRule.retokenizeCapturedWithRuleId) {
        let scopeName = captureRule.getName(lineTextContent, captureIndices), nameScopesList = stack.contentNameScopesList.pushAttributed(scopeName, grammar), contentName = captureRule.getContentName(lineTextContent, captureIndices), contentNameScopesList = nameScopesList.pushAttributed(contentName, grammar), stackClone = stack.push(captureRule.retokenizeCapturedWithRuleId, captureIndex.start, -1, !1, null, nameScopesList, contentNameScopesList), onigSubStr = grammar.createOnigString(lineTextContent.substring(0, captureIndex.end));
        _tokenizeString(
          grammar,
          onigSubStr,
          isFirstLine && captureIndex.start === 0,
          captureIndex.start,
          stackClone,
          lineTokens,
          !1,
          /* no time limit */
          0
        ), disposeOnigString(onigSubStr);
        continue;
      }
      let captureRuleScopeName = captureRule.getName(lineTextContent, captureIndices);
      if (captureRuleScopeName !== null) {
        let captureRuleScopesList = (localStack.length > 0 ? localStack[localStack.length - 1].scopes : stack.contentNameScopesList).pushAttributed(captureRuleScopeName, grammar);
        localStack.push(new LocalStackElement(captureRuleScopesList, captureIndex.end));
      }
    }
    for (; localStack.length > 0; )
      lineTokens.produceFromScopes(localStack[localStack.length - 1].scopes, localStack[localStack.length - 1].endPos), localStack.pop();
  }
  var LocalStackElement = class {
    scopes;
    endPos;
    constructor(scopes, endPos) {
      this.scopes = scopes, this.endPos = endPos;
    }
  };
  function createGrammar(scopeName, grammar, initialLanguage, embeddedLanguages, tokenTypes, balancedBracketSelectors, grammarRepository, onigLib) {
    return new Grammar(scopeName, grammar, initialLanguage, embeddedLanguages, tokenTypes, balancedBracketSelectors, grammarRepository, onigLib);
  }
  function collectInjections(result, selector, rule, ruleFactoryHelper, grammar) {
    let matchers = createMatchers(selector, nameMatcher), ruleId = RuleFactory.getCompiledRuleId(rule, ruleFactoryHelper, grammar.repository);
    for (let matcher of matchers)
      result.push({
        debugSelector: selector,
        matcher: matcher.matcher,
        ruleId,
        grammar,
        priority: matcher.priority
      });
  }
  function nameMatcher(identifers, scopes) {
    if (scopes.length < identifers.length)
      return !1;
    let lastIndex = 0;
    return identifers.every((identifier) => {
      for (let i2 = lastIndex; i2 < scopes.length; i2++)
        if (scopesAreMatching(scopes[i2], identifier))
          return lastIndex = i2 + 1, !0;
      return !1;
    });
  }
  function scopesAreMatching(thisScopeName, scopeName) {
    if (!thisScopeName)
      return !1;
    if (thisScopeName === scopeName)
      return !0;
    let len = scopeName.length;
    return thisScopeName.length > len && thisScopeName.substr(0, len) === scopeName && thisScopeName[len] === ".";
  }
  var Grammar = class {
    _rootScopeName;
    balancedBracketSelectors;
    _onigLib;
    _rootId;
    _lastRuleId;
    _ruleId2desc;
    _includedGrammars;
    _grammarRepository;
    _grammar;
    _injections;
    _basicScopeAttributesProvider;
    _tokenTypeMatchers;
    get themeProvider() {
      return this._grammarRepository;
    }
    constructor(_rootScopeName, grammar, initialLanguage, embeddedLanguages, tokenTypes, balancedBracketSelectors, grammarRepository, _onigLib) {
      if (this._rootScopeName = _rootScopeName, this.balancedBracketSelectors = balancedBracketSelectors, this._onigLib = _onigLib, this._basicScopeAttributesProvider = new BasicScopeAttributesProvider(initialLanguage, embeddedLanguages), this._rootId = -1, this._lastRuleId = 0, this._ruleId2desc = [null], this._includedGrammars = {}, this._grammarRepository = grammarRepository, this._grammar = initGrammar(grammar, null), this._injections = null, this._tokenTypeMatchers = [], tokenTypes)
        for (let selector of Object.keys(tokenTypes)) {
          let matchers = createMatchers(selector, nameMatcher);
          for (let matcher of matchers)
            this._tokenTypeMatchers.push({
              matcher: matcher.matcher,
              type: tokenTypes[selector]
            });
        }
    }
    dispose() {
      for (let rule of this._ruleId2desc)
        rule && rule.dispose();
    }
    createOnigScanner(sources) {
      return this._onigLib.createOnigScanner(sources);
    }
    createOnigString(sources) {
      return this._onigLib.createOnigString(sources);
    }
    getMetadataForScope(scope) {
      return this._basicScopeAttributesProvider.getBasicScopeAttributes(scope);
    }
    _collectInjections() {
      let grammarRepository = {
        lookup: (scopeName2) => scopeName2 === this._rootScopeName ? this._grammar : this.getExternalGrammar(scopeName2),
        injections: (scopeName2) => this._grammarRepository.injections(scopeName2)
      }, result = [], scopeName = this._rootScopeName, grammar = grammarRepository.lookup(scopeName);
      if (grammar) {
        let rawInjections = grammar.injections;
        if (rawInjections)
          for (let expression in rawInjections)
            collectInjections(result, expression, rawInjections[expression], this, grammar);
        let injectionScopeNames = this._grammarRepository.injections(scopeName);
        injectionScopeNames && injectionScopeNames.forEach((injectionScopeName) => {
          let injectionGrammar = this.getExternalGrammar(injectionScopeName);
          if (injectionGrammar) {
            let selector = injectionGrammar.injectionSelector;
            selector && collectInjections(result, selector, injectionGrammar, this, injectionGrammar);
          }
        });
      }
      return result.sort((i1, i2) => i1.priority - i2.priority), result;
    }
    getInjections() {
      return this._injections === null && (this._injections = this._collectInjections()), this._injections;
    }
    registerRule(factory) {
      let id = ++this._lastRuleId, result = factory(id);
      return this._ruleId2desc[id] = result, result;
    }
    getRule(ruleId) {
      return this._ruleId2desc[ruleId];
    }
    getExternalGrammar(scopeName, repository) {
      if (this._includedGrammars[scopeName])
        return this._includedGrammars[scopeName];
      if (this._grammarRepository) {
        let rawIncludedGrammar = this._grammarRepository.lookup(scopeName);
        if (rawIncludedGrammar)
          return this._includedGrammars[scopeName] = initGrammar(rawIncludedGrammar, repository && repository.$base), this._includedGrammars[scopeName];
      }
    }
    tokenizeLine(lineText, prevState, timeLimit = 0) {
      let r3 = this._tokenize(lineText, prevState, !1, timeLimit);
      return {
        tokens: r3.lineTokens.getResult(r3.ruleStack, r3.lineLength),
        ruleStack: r3.ruleStack,
        stoppedEarly: r3.stoppedEarly
      };
    }
    tokenizeLine2(lineText, prevState, timeLimit = 0) {
      let r3 = this._tokenize(lineText, prevState, !0, timeLimit);
      return {
        tokens: r3.lineTokens.getBinaryResult(r3.ruleStack, r3.lineLength),
        ruleStack: r3.ruleStack,
        stoppedEarly: r3.stoppedEarly
      };
    }
    _tokenize(lineText, prevState, emitBinaryTokens, timeLimit) {
      this._rootId === -1 && (this._rootId = RuleFactory.getCompiledRuleId(this._grammar.repository.$self, this, this._grammar.repository), this.getInjections());
      let isFirstLine;
      if (!prevState || prevState === StateStackImpl.NULL) {
        isFirstLine = !0;
        let rawDefaultMetadata = this._basicScopeAttributesProvider.getDefaultAttributes(), defaultStyle = this.themeProvider.getDefaults(), defaultMetadata = EncodedTokenAttributes.set(0, rawDefaultMetadata.languageId, rawDefaultMetadata.tokenType, null, defaultStyle.fontStyle, defaultStyle.foregroundId, defaultStyle.backgroundId), rootScopeName = this.getRule(this._rootId).getName(null, null), scopeList;
        rootScopeName ? scopeList = AttributedScopeStack.createRootAndLookUpScopeName(rootScopeName, defaultMetadata, this) : scopeList = AttributedScopeStack.createRoot("unknown", defaultMetadata), prevState = new StateStackImpl(null, this._rootId, -1, -1, !1, null, scopeList, scopeList);
      } else
        isFirstLine = !1, prevState.reset();
      lineText = lineText + `
`;
      let onigLineText = this.createOnigString(lineText), lineLength = onigLineText.content.length, lineTokens = new LineTokens(emitBinaryTokens, lineText, this._tokenTypeMatchers, this.balancedBracketSelectors), r3 = _tokenizeString(this, onigLineText, isFirstLine, 0, prevState, lineTokens, !0, timeLimit);
      return disposeOnigString(onigLineText), {
        lineLength,
        lineTokens,
        ruleStack: r3.stack,
        stoppedEarly: r3.stoppedEarly
      };
    }
  };
  function initGrammar(grammar, base) {
    return grammar = clone(grammar), grammar.repository = grammar.repository || {}, grammar.repository.$self = {
      $vscodeTextmateLocation: grammar.$vscodeTextmateLocation,
      patterns: grammar.patterns,
      name: grammar.scopeName
    }, grammar.repository.$base = base || grammar.repository.$self, grammar;
  }
  var AttributedScopeStack = class _AttributedScopeStack {
    parent;
    scopePath;
    tokenAttributes;
    static fromExtension(namesScopeList, contentNameScopesList) {
      let current = namesScopeList, scopeNames = namesScopeList?.scopePath ?? null;
      for (let frame of contentNameScopesList)
        scopeNames = ScopeStack.push(scopeNames, frame.scopeNames), current = new _AttributedScopeStack(current, scopeNames, frame.encodedTokenAttributes);
      return current;
    }
    static createRoot(scopeName, tokenAttributes) {
      return new _AttributedScopeStack(null, new ScopeStack(null, scopeName), tokenAttributes);
    }
    static createRootAndLookUpScopeName(scopeName, tokenAttributes, grammar) {
      let rawRootMetadata = grammar.getMetadataForScope(scopeName), scopePath = new ScopeStack(null, scopeName), rootStyle = grammar.themeProvider.themeMatch(scopePath), resolvedTokenAttributes = _AttributedScopeStack.mergeAttributes(tokenAttributes, rawRootMetadata, rootStyle);
      return new _AttributedScopeStack(null, scopePath, resolvedTokenAttributes);
    }
    get scopeName() {
      return this.scopePath.scopeName;
    }
    /**
     * Invariant:
     * ```
     * if (parent && !scopePath.extends(parent.scopePath)) {
     * 	throw new Error();
     * }
     * ```
     */
    constructor(parent, scopePath, tokenAttributes) {
      this.parent = parent, this.scopePath = scopePath, this.tokenAttributes = tokenAttributes;
    }
    toString() {
      return this.getScopeNames().join(" ");
    }
    equals(other) {
      return _AttributedScopeStack.equals(this, other);
    }
    static equals(a, b) {
      do {
        if (a === b || !a && !b)
          return !0;
        if (!a || !b || a.scopeName !== b.scopeName || a.tokenAttributes !== b.tokenAttributes)
          return !1;
        a = a.parent, b = b.parent;
      } while (!0);
    }
    static mergeAttributes(existingTokenAttributes, basicScopeAttributes, styleAttributes) {
      let fontStyle = -1, foreground = 0, background = 0;
      return styleAttributes !== null && (fontStyle = styleAttributes.fontStyle, foreground = styleAttributes.foregroundId, background = styleAttributes.backgroundId), EncodedTokenAttributes.set(existingTokenAttributes, basicScopeAttributes.languageId, basicScopeAttributes.tokenType, null, fontStyle, foreground, background);
    }
    pushAttributed(scopePath, grammar) {
      if (scopePath === null)
        return this;
      if (scopePath.indexOf(" ") === -1)
        return _AttributedScopeStack._pushAttributed(this, scopePath, grammar);
      let scopes = scopePath.split(/ /g), result = this;
      for (let scope of scopes)
        result = _AttributedScopeStack._pushAttributed(result, scope, grammar);
      return result;
    }
    static _pushAttributed(target, scopeName, grammar) {
      let rawMetadata = grammar.getMetadataForScope(scopeName), newPath = target.scopePath.push(scopeName), scopeThemeMatchResult = grammar.themeProvider.themeMatch(newPath), metadata = _AttributedScopeStack.mergeAttributes(target.tokenAttributes, rawMetadata, scopeThemeMatchResult);
      return new _AttributedScopeStack(target, newPath, metadata);
    }
    getScopeNames() {
      return this.scopePath.getSegments();
    }
    getExtensionIfDefined(base) {
      let result = [], self = this;
      for (; self && self !== base; )
        result.push({
          encodedTokenAttributes: self.tokenAttributes,
          scopeNames: self.scopePath.getExtensionIfDefined(self.parent?.scopePath ?? null)
        }), self = self.parent;
      return self === base ? result.reverse() : void 0;
    }
  }, StateStackImpl = class _StateStackImpl {
    parent;
    ruleId;
    beginRuleCapturedEOL;
    endRule;
    nameScopesList;
    contentNameScopesList;
    _stackElementBrand = void 0;
    // TODO remove me
    static NULL = new _StateStackImpl(null, 0, 0, 0, !1, null, null, null);
    /**
     * The position on the current line where this state was pushed.
     * This is relevant only while tokenizing a line, to detect endless loops.
     * Its value is meaningless across lines.
     */
    _enterPos;
    /**
     * The captured anchor position when this stack element was pushed.
     * This is relevant only while tokenizing a line, to restore the anchor position when popping.
     * Its value is meaningless across lines.
     */
    _anchorPos;
    /**
     * The depth of the stack.
     */
    depth;
    /**
     * Invariant:
     * ```
     * if (contentNameScopesList !== nameScopesList && contentNameScopesList?.parent !== nameScopesList) {
     * 	throw new Error();
     * }
     * if (this.parent && !nameScopesList.extends(this.parent.contentNameScopesList)) {
     * 	throw new Error();
     * }
     * ```
     */
    constructor(parent, ruleId, enterPos, anchorPos, beginRuleCapturedEOL, endRule, nameScopesList, contentNameScopesList) {
      this.parent = parent, this.ruleId = ruleId, this.beginRuleCapturedEOL = beginRuleCapturedEOL, this.endRule = endRule, this.nameScopesList = nameScopesList, this.contentNameScopesList = contentNameScopesList, this.depth = this.parent ? this.parent.depth + 1 : 1, this._enterPos = enterPos, this._anchorPos = anchorPos;
    }
    equals(other) {
      return other === null ? !1 : _StateStackImpl._equals(this, other);
    }
    static _equals(a, b) {
      return a === b ? !0 : this._structuralEquals(a, b) ? AttributedScopeStack.equals(a.contentNameScopesList, b.contentNameScopesList) : !1;
    }
    /**
     * A structural equals check. Does not take into account `scopes`.
     */
    static _structuralEquals(a, b) {
      do {
        if (a === b || !a && !b)
          return !0;
        if (!a || !b || a.depth !== b.depth || a.ruleId !== b.ruleId || a.endRule !== b.endRule)
          return !1;
        a = a.parent, b = b.parent;
      } while (!0);
    }
    clone() {
      return this;
    }
    static _reset(el) {
      for (; el; )
        el._enterPos = -1, el._anchorPos = -1, el = el.parent;
    }
    reset() {
      _StateStackImpl._reset(this);
    }
    pop() {
      return this.parent;
    }
    safePop() {
      return this.parent ? this.parent : this;
    }
    push(ruleId, enterPos, anchorPos, beginRuleCapturedEOL, endRule, nameScopesList, contentNameScopesList) {
      return new _StateStackImpl(this, ruleId, enterPos, anchorPos, beginRuleCapturedEOL, endRule, nameScopesList, contentNameScopesList);
    }
    getEnterPos() {
      return this._enterPos;
    }
    getAnchorPos() {
      return this._anchorPos;
    }
    getRule(grammar) {
      return grammar.getRule(this.ruleId);
    }
    toString() {
      let r3 = [];
      return this._writeString(r3, 0), "[" + r3.join(",") + "]";
    }
    _writeString(res, outIndex) {
      return this.parent && (outIndex = this.parent._writeString(res, outIndex)), res[outIndex++] = `(${this.ruleId}, ${this.nameScopesList?.toString()}, ${this.contentNameScopesList?.toString()})`, outIndex;
    }
    withContentNameScopesList(contentNameScopeStack) {
      return this.contentNameScopesList === contentNameScopeStack ? this : this.parent.push(this.ruleId, this._enterPos, this._anchorPos, this.beginRuleCapturedEOL, this.endRule, this.nameScopesList, contentNameScopeStack);
    }
    withEndRule(endRule) {
      return this.endRule === endRule ? this : new _StateStackImpl(this.parent, this.ruleId, this._enterPos, this._anchorPos, this.beginRuleCapturedEOL, endRule, this.nameScopesList, this.contentNameScopesList);
    }
    // Used to warn of endless loops
    hasSameRuleAs(other) {
      let el = this;
      for (; el && el._enterPos === other._enterPos; ) {
        if (el.ruleId === other.ruleId)
          return !0;
        el = el.parent;
      }
      return !1;
    }
    toStateStackFrame() {
      return {
        ruleId: this.ruleId,
        beginRuleCapturedEOL: this.beginRuleCapturedEOL,
        endRule: this.endRule,
        nameScopesList: this.nameScopesList?.getExtensionIfDefined(this.parent?.nameScopesList ?? null) ?? [],
        contentNameScopesList: this.contentNameScopesList?.getExtensionIfDefined(this.nameScopesList) ?? []
      };
    }
    static pushFrame(self, frame) {
      let namesScopeList = AttributedScopeStack.fromExtension(self?.nameScopesList ?? null, frame.nameScopesList);
      return new _StateStackImpl(self, frame.ruleId, frame.enterPos ?? -1, frame.anchorPos ?? -1, frame.beginRuleCapturedEOL, frame.endRule, namesScopeList, AttributedScopeStack.fromExtension(namesScopeList, frame.contentNameScopesList));
    }
  }, BalancedBracketSelectors = class {
    balancedBracketScopes;
    unbalancedBracketScopes;
    allowAny = !1;
    constructor(balancedBracketScopes, unbalancedBracketScopes) {
      this.balancedBracketScopes = balancedBracketScopes.flatMap((selector) => selector === "*" ? (this.allowAny = !0, []) : createMatchers(selector, nameMatcher).map((m) => m.matcher)), this.unbalancedBracketScopes = unbalancedBracketScopes.flatMap((selector) => createMatchers(selector, nameMatcher).map((m) => m.matcher));
    }
    get matchesAlways() {
      return this.allowAny && this.unbalancedBracketScopes.length === 0;
    }
    get matchesNever() {
      return this.balancedBracketScopes.length === 0 && !this.allowAny;
    }
    match(scopes) {
      for (let excluder of this.unbalancedBracketScopes)
        if (excluder(scopes))
          return !1;
      for (let includer of this.balancedBracketScopes)
        if (includer(scopes))
          return !0;
      return this.allowAny;
    }
  }, LineTokens = class {
    balancedBracketSelectors;
    _emitBinaryTokens;
    /**
     * defined only if `false`.
     */
    _lineText;
    /**
     * used only if `_emitBinaryTokens` is false.
     */
    _tokens;
    /**
     * used only if `_emitBinaryTokens` is true.
     */
    _binaryTokens;
    _lastTokenEndIndex;
    _tokenTypeOverrides;
    constructor(emitBinaryTokens, lineText, tokenTypeOverrides, balancedBracketSelectors) {
      this.balancedBracketSelectors = balancedBracketSelectors, this._emitBinaryTokens = emitBinaryTokens, this._tokenTypeOverrides = tokenTypeOverrides, this._lineText = null, this._tokens = [], this._binaryTokens = [], this._lastTokenEndIndex = 0;
    }
    produce(stack, endIndex) {
      this.produceFromScopes(stack.contentNameScopesList, endIndex);
    }
    produceFromScopes(scopesList, endIndex) {
      if (this._lastTokenEndIndex >= endIndex)
        return;
      if (this._emitBinaryTokens) {
        let metadata = scopesList?.tokenAttributes ?? 0, containsBalancedBrackets = !1;
        if (this.balancedBracketSelectors?.matchesAlways && (containsBalancedBrackets = !0), this._tokenTypeOverrides.length > 0 || this.balancedBracketSelectors && !this.balancedBracketSelectors.matchesAlways && !this.balancedBracketSelectors.matchesNever) {
          let scopes2 = scopesList?.getScopeNames() ?? [];
          for (let tokenType of this._tokenTypeOverrides)
            tokenType.matcher(scopes2) && (metadata = EncodedTokenAttributes.set(metadata, 0, tokenType.type, null, -1, 0, 0));
          this.balancedBracketSelectors && (containsBalancedBrackets = this.balancedBracketSelectors.match(scopes2));
        }
        if (containsBalancedBrackets && (metadata = EncodedTokenAttributes.set(metadata, 0, 8, containsBalancedBrackets, -1, 0, 0)), this._binaryTokens.length > 0 && this._binaryTokens[this._binaryTokens.length - 1] === metadata) {
          this._lastTokenEndIndex = endIndex;
          return;
        }
        this._binaryTokens.push(this._lastTokenEndIndex), this._binaryTokens.push(metadata), this._lastTokenEndIndex = endIndex;
        return;
      }
      let scopes = scopesList?.getScopeNames() ?? [];
      this._tokens.push({
        startIndex: this._lastTokenEndIndex,
        endIndex,
        // value: lineText.substring(lastTokenEndIndex, endIndex),
        scopes
      }), this._lastTokenEndIndex = endIndex;
    }
    getResult(stack, lineLength) {
      return this._tokens.length > 0 && this._tokens[this._tokens.length - 1].startIndex === lineLength - 1 && this._tokens.pop(), this._tokens.length === 0 && (this._lastTokenEndIndex = -1, this.produce(stack, lineLength), this._tokens[this._tokens.length - 1].startIndex = 0), this._tokens;
    }
    getBinaryResult(stack, lineLength) {
      this._binaryTokens.length > 0 && this._binaryTokens[this._binaryTokens.length - 2] === lineLength - 1 && (this._binaryTokens.pop(), this._binaryTokens.pop()), this._binaryTokens.length === 0 && (this._lastTokenEndIndex = -1, this.produce(stack, lineLength), this._binaryTokens[this._binaryTokens.length - 2] = 0);
      let result = new Uint32Array(this._binaryTokens.length);
      for (let i2 = 0, len = this._binaryTokens.length; i2 < len; i2++)
        result[i2] = this._binaryTokens[i2];
      return result;
    }
  }, SyncRegistry = class {
    _onigLibPromise;
    _grammars = /* @__PURE__ */ new Map();
    _rawGrammars = /* @__PURE__ */ new Map();
    _injectionGrammars = /* @__PURE__ */ new Map();
    _theme;
    constructor(theme, _onigLibPromise) {
      this._onigLibPromise = _onigLibPromise, this._theme = theme;
    }
    dispose() {
      for (let grammar of this._grammars.values())
        grammar.dispose();
    }
    setTheme(theme) {
      this._theme = theme;
    }
    getColorMap() {
      return this._theme.getColorMap();
    }
    /**
     * Add `grammar` to registry and return a list of referenced scope names
     */
    addGrammar(grammar, injectionScopeNames) {
      this._rawGrammars.set(grammar.scopeName, grammar), injectionScopeNames && this._injectionGrammars.set(grammar.scopeName, injectionScopeNames);
    }
    /**
     * Lookup a raw grammar.
     */
    lookup(scopeName) {
      return this._rawGrammars.get(scopeName);
    }
    /**
     * Returns the injections for the given grammar
     */
    injections(targetScope) {
      return this._injectionGrammars.get(targetScope);
    }
    /**
     * Get the default theme settings
     */
    getDefaults() {
      return this._theme.getDefaults();
    }
    /**
     * Match a scope in the theme.
     */
    themeMatch(scopePath) {
      return this._theme.match(scopePath);
    }
    /**
     * Lookup a grammar.
     */
    async grammarForScopeName(scopeName, initialLanguage, embeddedLanguages, tokenTypes, balancedBracketSelectors) {
      if (!this._grammars.has(scopeName)) {
        let rawGrammar = this._rawGrammars.get(scopeName);
        if (!rawGrammar)
          return null;
        this._grammars.set(scopeName, createGrammar(scopeName, rawGrammar, initialLanguage, embeddedLanguages, tokenTypes, balancedBracketSelectors, this, await this._onigLibPromise));
      }
      return this._grammars.get(scopeName);
    }
  }, Registry$1 = class {
    _options;
    _syncRegistry;
    _ensureGrammarCache;
    constructor(options) {
      this._options = options, this._syncRegistry = new SyncRegistry(Theme.createFromRawTheme(options.theme, options.colorMap), options.onigLib), this._ensureGrammarCache = /* @__PURE__ */ new Map();
    }
    dispose() {
      this._syncRegistry.dispose();
    }
    /**
     * Change the theme. Once called, no previous `ruleStack` should be used anymore.
     */
    setTheme(theme, colorMap) {
      this._syncRegistry.setTheme(Theme.createFromRawTheme(theme, colorMap));
    }
    /**
     * Returns a lookup array for color ids.
     */
    getColorMap() {
      return this._syncRegistry.getColorMap();
    }
    /**
     * Load the grammar for `scopeName` and all referenced included grammars asynchronously.
     * Please do not use language id 0.
     */
    loadGrammarWithEmbeddedLanguages(initialScopeName, initialLanguage, embeddedLanguages) {
      return this.loadGrammarWithConfiguration(initialScopeName, initialLanguage, { embeddedLanguages });
    }
    /**
     * Load the grammar for `scopeName` and all referenced included grammars asynchronously.
     * Please do not use language id 0.
     */
    loadGrammarWithConfiguration(initialScopeName, initialLanguage, configuration) {
      return this._loadGrammar(initialScopeName, initialLanguage, configuration.embeddedLanguages, configuration.tokenTypes, new BalancedBracketSelectors(configuration.balancedBracketSelectors || [], configuration.unbalancedBracketSelectors || []));
    }
    /**
     * Load the grammar for `scopeName` and all referenced included grammars asynchronously.
     */
    loadGrammar(initialScopeName) {
      return this._loadGrammar(initialScopeName, 0, null, null, null);
    }
    async _loadGrammar(initialScopeName, initialLanguage, embeddedLanguages, tokenTypes, balancedBracketSelectors) {
      let dependencyProcessor = new ScopeDependencyProcessor(this._syncRegistry, initialScopeName);
      for (; dependencyProcessor.Q.length > 0; )
        await Promise.all(dependencyProcessor.Q.map((request) => this._loadSingleGrammar(request.scopeName))), dependencyProcessor.processQueue();
      return this._grammarForScopeName(initialScopeName, initialLanguage, embeddedLanguages, tokenTypes, balancedBracketSelectors);
    }
    async _loadSingleGrammar(scopeName) {
      return this._ensureGrammarCache.has(scopeName) || this._ensureGrammarCache.set(scopeName, this._doLoadSingleGrammar(scopeName)), this._ensureGrammarCache.get(scopeName);
    }
    async _doLoadSingleGrammar(scopeName) {
      let grammar = await this._options.loadGrammar(scopeName);
      if (grammar) {
        let injections = typeof this._options.getInjections == "function" ? this._options.getInjections(scopeName) : void 0;
        this._syncRegistry.addGrammar(grammar, injections);
      }
    }
    /**
     * Adds a rawGrammar.
     */
    async addGrammar(rawGrammar, injections = [], initialLanguage = 0, embeddedLanguages = null) {
      return this._syncRegistry.addGrammar(rawGrammar, injections), await this._grammarForScopeName(rawGrammar.scopeName, initialLanguage, embeddedLanguages);
    }
    /**
     * Get the grammar for `scopeName`. The grammar must first be created via `loadGrammar` or `addGrammar`.
     */
    _grammarForScopeName(scopeName, initialLanguage = 0, embeddedLanguages = null, tokenTypes = null, balancedBracketSelectors = null) {
      return this._syncRegistry.grammarForScopeName(scopeName, initialLanguage, embeddedLanguages, tokenTypes, balancedBracketSelectors);
    }
  }, INITIAL = StateStackImpl.NULL, MetadataConsts = {
    LANGUAGEID_MASK: 255,
    TOKEN_TYPE_MASK: 768,
    BALANCED_BRACKETS_MASK: 1024,
    FONT_STYLE_MASK: 14336,
    FOREGROUND_MASK: 8372224,
    BACKGROUND_MASK: 4286578688,
    LANGUAGEID_OFFSET: 0,
    TOKEN_TYPE_OFFSET: 8,
    BALANCED_BRACKETS_OFFSET: 10,
    FONT_STYLE_OFFSET: 11,
    FOREGROUND_OFFSET: 15,
    BACKGROUND_OFFSET: 24
  }, StackElementMetadata = class _StackElementMetadata {
    static toBinaryStr(metadata) {
      let r3 = metadata.toString(2);
      for (; r3.length < 32; )
        r3 = `0${r3}`;
      return r3;
    }
    // public static printMetadata(metadata: number): void {
    //   const languageId = StackElementMetadata.getLanguageId(metadata)
    //   const tokenType = StackElementMetadata.getTokenType(metadata)
    //   const fontStyle = StackElementMetadata.getFontStyle(metadata)
    //   const foreground = StackElementMetadata.getForeground(metadata)
    //   const background = StackElementMetadata.getBackground(metadata)
    //   console.log({
    //     languageId,
    //     tokenType,
    //     fontStyle,
    //     foreground,
    //     background,
    //   })
    // }
    static getLanguageId(metadata) {
      return (metadata & MetadataConsts.LANGUAGEID_MASK) >>> MetadataConsts.LANGUAGEID_OFFSET;
    }
    static getTokenType(metadata) {
      return (metadata & MetadataConsts.TOKEN_TYPE_MASK) >>> MetadataConsts.TOKEN_TYPE_OFFSET;
    }
    static getFontStyle(metadata) {
      return (metadata & MetadataConsts.FONT_STYLE_MASK) >>> MetadataConsts.FONT_STYLE_OFFSET;
    }
    static getForeground(metadata) {
      return (metadata & MetadataConsts.FOREGROUND_MASK) >>> MetadataConsts.FOREGROUND_OFFSET;
    }
    static getBackground(metadata) {
      return (metadata & MetadataConsts.BACKGROUND_MASK) >>> MetadataConsts.BACKGROUND_OFFSET;
    }
    static containsBalancedBrackets(metadata) {
      return (metadata & MetadataConsts.BALANCED_BRACKETS_MASK) !== 0;
    }
    static set(metadata, languageId, tokenType, fontStyle, foreground, background) {
      let _languageId = _StackElementMetadata.getLanguageId(metadata), _tokenType = _StackElementMetadata.getTokenType(metadata), _fontStyle = _StackElementMetadata.getFontStyle(metadata), _foreground = _StackElementMetadata.getForeground(metadata), _background = _StackElementMetadata.getBackground(metadata), _containsBalancedBracketsBit = _StackElementMetadata.containsBalancedBrackets(metadata) ? 1 : 0;
      return languageId !== 0 && (_languageId = languageId), tokenType !== 0 && (_tokenType = tokenType === 8 ? 0 : tokenType), fontStyle !== FontStyle.NotSet && (_fontStyle = fontStyle), foreground !== 0 && (_foreground = foreground), background !== 0 && (_background = background), (_languageId << MetadataConsts.LANGUAGEID_OFFSET | _tokenType << MetadataConsts.TOKEN_TYPE_OFFSET | _fontStyle << MetadataConsts.FONT_STYLE_OFFSET | _containsBalancedBracketsBit << MetadataConsts.BALANCED_BRACKETS_OFFSET | _foreground << MetadataConsts.FOREGROUND_OFFSET | _background << MetadataConsts.BACKGROUND_OFFSET) >>> 0;
    }
  };

  // node_modules/@shikijs/core/dist/index.mjs
  function splitLines(code, preserveEnding = !1) {
    let parts = code.split(/(\r?\n)/g), index = 0, lines = [];
    for (let i2 = 0; i2 < parts.length; i2 += 2) {
      let line = preserveEnding ? parts[i2] + (parts[i2 + 1] || "") : parts[i2];
      lines.push([line, index]), index += parts[i2].length, index += parts[i2 + 1]?.length || 0;
    }
    return lines;
  }
  function isPlainLang(lang3) {
    return !lang3 || ["plaintext", "txt", "text", "plain"].includes(lang3);
  }
  function isSpecialLang(lang3) {
    return lang3 === "ansi" || isPlainLang(lang3);
  }
  function isNoneTheme(theme) {
    return theme === "none";
  }
  function isSpecialTheme(theme) {
    return isNoneTheme(theme);
  }
  function addClassToHast(node, className) {
    if (!className)
      return node;
    node.properties ||= {}, node.properties.class ||= [], typeof node.properties.class == "string" && (node.properties.class = node.properties.class.split(/\s+/g)), Array.isArray(node.properties.class) || (node.properties.class = []);
    let targets = Array.isArray(className) ? className : className.split(/\s+/g);
    for (let c of targets)
      c && !node.properties.class.includes(c) && node.properties.class.push(c);
    return node;
  }
  function splitToken(token, offsets) {
    let lastOffset = 0, tokens = [];
    for (let offset of offsets)
      offset > lastOffset && tokens.push({
        ...token,
        content: token.content.slice(lastOffset, offset),
        offset: token.offset + lastOffset
      }), lastOffset = offset;
    return lastOffset < token.content.length && tokens.push({
      ...token,
      content: token.content.slice(lastOffset),
      offset: token.offset + lastOffset
    }), tokens;
  }
  function splitTokens(tokens, breakpoints) {
    let sorted = Array.from(breakpoints instanceof Set ? breakpoints : new Set(breakpoints)).sort((a, b) => a - b);
    return sorted.length ? tokens.map((line) => line.flatMap((token) => {
      let breakpointsInToken = sorted.filter((i2) => token.offset < i2 && i2 < token.offset + token.content.length).map((i2) => i2 - token.offset).sort((a, b) => a - b);
      return breakpointsInToken.length ? splitToken(token, breakpointsInToken) : token;
    })) : tokens;
  }
  function resolveColorReplacements(theme, options) {
    let replacements = typeof theme == "string" ? {} : { ...theme.colorReplacements }, themeName = typeof theme == "string" ? theme : theme.name;
    for (let [key2, value] of Object.entries(options?.colorReplacements || {}))
      typeof value == "string" ? replacements[key2] = value : key2 === themeName && Object.assign(replacements, value);
    return replacements;
  }
  function applyColorReplacements(color, replacements) {
    return color && (replacements?.[color?.toLowerCase()] || color);
  }
  function getTokenStyleObject(token) {
    let styles = {};
    return token.color && (styles.color = token.color), token.bgColor && (styles["background-color"] = token.bgColor), token.fontStyle && (token.fontStyle & FontStyle.Italic && (styles["font-style"] = "italic"), token.fontStyle & FontStyle.Bold && (styles["font-weight"] = "bold"), token.fontStyle & FontStyle.Underline && (styles["text-decoration"] = "underline")), styles;
  }
  function stringifyTokenStyle(token) {
    return Object.entries(token).map(([key2, value]) => `${key2}:${value}`).join(";");
  }
  function createPositionConverter(code) {
    let lines = splitLines(code, !0).map(([line]) => line);
    function indexToPos(index) {
      if (index === code.length)
        return {
          line: lines.length - 1,
          character: lines[lines.length - 1].length
        };
      let character = index, line = 0;
      for (let lineText of lines) {
        if (character < lineText.length)
          break;
        character -= lineText.length, line++;
      }
      return { line, character };
    }
    function posToIndex(line, character) {
      let index = 0;
      for (let i2 = 0; i2 < line; i2++)
        index += lines[i2].length;
      return index += character, index;
    }
    return {
      lines,
      indexToPos,
      posToIndex
    };
  }
  var namedColors = [
    "black",
    "red",
    "green",
    "yellow",
    "blue",
    "magenta",
    "cyan",
    "white",
    "brightBlack",
    "brightRed",
    "brightGreen",
    "brightYellow",
    "brightBlue",
    "brightMagenta",
    "brightCyan",
    "brightWhite"
  ], decorations = {
    1: "bold",
    2: "dim",
    3: "italic",
    4: "underline",
    7: "reverse",
    9: "strikethrough"
  };
  function findSequence(value, position) {
    let nextEscape = value.indexOf("\x1B[", position);
    if (nextEscape !== -1) {
      let nextClose = value.indexOf("m", nextEscape);
      return {
        sequence: value.substring(nextEscape + 2, nextClose).split(";"),
        startPosition: nextEscape,
        position: nextClose + 1
      };
    }
    return {
      position: value.length
    };
  }
  function parseColor(sequence, index) {
    let offset = 1, colorMode = sequence[index + offset++], color;
    if (colorMode === "2") {
      let rgb = [
        sequence[index + offset++],
        sequence[index + offset++],
        sequence[index + offset]
      ].map((x) => Number.parseInt(x));
      rgb.length === 3 && !rgb.some((x) => Number.isNaN(x)) && (color = {
        type: "rgb",
        rgb
      });
    } else if (colorMode === "5") {
      let colorIndex = Number.parseInt(sequence[index + offset]);
      Number.isNaN(colorIndex) || (color = { type: "table", index: Number(colorIndex) });
    }
    return [offset, color];
  }
  function parseSequence(sequence) {
    let commands = [];
    for (let i2 = 0; i2 < sequence.length; i2++) {
      let code = sequence[i2], codeInt = Number.parseInt(code);
      if (!Number.isNaN(codeInt))
        if (codeInt === 0)
          commands.push({ type: "resetAll" });
        else if (codeInt <= 9)
          decorations[codeInt] && commands.push({
            type: "setDecoration",
            value: decorations[codeInt]
          });
        else if (codeInt <= 29) {
          let decoration = decorations[codeInt - 20];
          decoration && commands.push({
            type: "resetDecoration",
            value: decoration
          });
        } else if (codeInt <= 37)
          commands.push({
            type: "setForegroundColor",
            value: { type: "named", name: namedColors[codeInt - 30] }
          });
        else if (codeInt === 38) {
          let [offset, color] = parseColor(sequence, i2);
          color && commands.push({
            type: "setForegroundColor",
            value: color
          }), i2 += offset;
        } else if (codeInt === 39)
          commands.push({
            type: "resetForegroundColor"
          });
        else if (codeInt <= 47)
          commands.push({
            type: "setBackgroundColor",
            value: { type: "named", name: namedColors[codeInt - 40] }
          });
        else if (codeInt === 48) {
          let [offset, color] = parseColor(sequence, i2);
          color && commands.push({
            type: "setBackgroundColor",
            value: color
          }), i2 += offset;
        } else codeInt === 49 ? commands.push({
          type: "resetBackgroundColor"
        }) : codeInt >= 90 && codeInt <= 97 ? commands.push({
          type: "setForegroundColor",
          value: { type: "named", name: namedColors[codeInt - 90 + 8] }
        }) : codeInt >= 100 && codeInt <= 107 && commands.push({
          type: "setBackgroundColor",
          value: { type: "named", name: namedColors[codeInt - 100 + 8] }
        });
    }
    return commands;
  }
  function createAnsiSequenceParser() {
    let foreground = null, background = null, decorations2 = /* @__PURE__ */ new Set();
    return {
      parse(value) {
        let tokens = [], position = 0;
        do {
          let findResult = findSequence(value, position), text2 = findResult.sequence ? value.substring(position, findResult.startPosition) : value.substring(position);
          if (text2.length > 0 && tokens.push({
            value: text2,
            foreground,
            background,
            decorations: new Set(decorations2)
          }), findResult.sequence) {
            let commands = parseSequence(findResult.sequence);
            for (let styleToken of commands)
              styleToken.type === "resetAll" ? (foreground = null, background = null, decorations2.clear()) : styleToken.type === "resetForegroundColor" ? foreground = null : styleToken.type === "resetBackgroundColor" ? background = null : styleToken.type === "resetDecoration" && decorations2.delete(styleToken.value);
            for (let styleToken of commands)
              styleToken.type === "setForegroundColor" ? foreground = styleToken.value : styleToken.type === "setBackgroundColor" ? background = styleToken.value : styleToken.type === "setDecoration" && decorations2.add(styleToken.value);
          }
          position = findResult.position;
        } while (position < value.length);
        return tokens;
      }
    };
  }
  var defaultNamedColorsMap = {
    black: "#000000",
    red: "#bb0000",
    green: "#00bb00",
    yellow: "#bbbb00",
    blue: "#0000bb",
    magenta: "#ff00ff",
    cyan: "#00bbbb",
    white: "#eeeeee",
    brightBlack: "#555555",
    brightRed: "#ff5555",
    brightGreen: "#00ff00",
    brightYellow: "#ffff55",
    brightBlue: "#5555ff",
    brightMagenta: "#ff55ff",
    brightCyan: "#55ffff",
    brightWhite: "#ffffff"
  };
  function createColorPalette(namedColorsMap = defaultNamedColorsMap) {
    function namedColor(name) {
      return namedColorsMap[name];
    }
    function rgbColor(rgb) {
      return `#${rgb.map((x) => Math.max(0, Math.min(x, 255)).toString(16).padStart(2, "0")).join("")}`;
    }
    let colorTable;
    function getColorTable() {
      if (colorTable)
        return colorTable;
      colorTable = [];
      for (let i2 = 0; i2 < namedColors.length; i2++)
        colorTable.push(namedColor(namedColors[i2]));
      let levels = [0, 95, 135, 175, 215, 255];
      for (let r3 = 0; r3 < 6; r3++)
        for (let g = 0; g < 6; g++)
          for (let b = 0; b < 6; b++)
            colorTable.push(rgbColor([levels[r3], levels[g], levels[b]]));
      let level = 8;
      for (let i2 = 0; i2 < 24; i2++, level += 10)
        colorTable.push(rgbColor([level, level, level]));
      return colorTable;
    }
    function tableColor(index) {
      return getColorTable()[index];
    }
    function value(color) {
      switch (color.type) {
        case "named":
          return namedColor(color.name);
        case "rgb":
          return rgbColor(color.rgb);
        case "table":
          return tableColor(color.index);
      }
    }
    return {
      value
    };
  }
  function tokenizeAnsiWithTheme(theme, fileContents, options) {
    let colorReplacements = resolveColorReplacements(theme, options), lines = splitLines(fileContents), colorPalette = createColorPalette(Object.fromEntries(namedColors.map((name) => [
      name,
      theme.colors?.[`terminal.ansi${name[0].toUpperCase()}${name.substring(1)}`]
    ]))), parser = createAnsiSequenceParser();
    return lines.map((line) => parser.parse(line[0]).map((token) => {
      let color, bgColor;
      token.decorations.has("reverse") ? (color = token.background ? colorPalette.value(token.background) : theme.bg, bgColor = token.foreground ? colorPalette.value(token.foreground) : theme.fg) : (color = token.foreground ? colorPalette.value(token.foreground) : theme.fg, bgColor = token.background ? colorPalette.value(token.background) : void 0), color = applyColorReplacements(color, colorReplacements), bgColor = applyColorReplacements(bgColor, colorReplacements), token.decorations.has("dim") && (color = dimColor(color));
      let fontStyle = FontStyle.None;
      return token.decorations.has("bold") && (fontStyle |= FontStyle.Bold), token.decorations.has("italic") && (fontStyle |= FontStyle.Italic), token.decorations.has("underline") && (fontStyle |= FontStyle.Underline), {
        content: token.value,
        offset: line[1],
        // TODO: more accurate offset? might need to fork ansi-sequence-parser
        color,
        bgColor,
        fontStyle
      };
    }));
  }
  function dimColor(color) {
    let hexMatch = color.match(/#([0-9a-f]{3})([0-9a-f]{3})?([0-9a-f]{2})?/);
    if (hexMatch)
      if (hexMatch[3]) {
        let alpha = Math.round(Number.parseInt(hexMatch[3], 16) / 2).toString(16).padStart(2, "0");
        return `#${hexMatch[1]}${hexMatch[2]}${alpha}`;
      } else return hexMatch[2] ? `#${hexMatch[1]}${hexMatch[2]}80` : `#${Array.from(hexMatch[1]).map((x) => `${x}${x}`).join("")}80`;
    let cssVarMatch = color.match(/var\((--[\w-]+-ansi-[\w-]+)\)/);
    return cssVarMatch ? `var(${cssVarMatch[1]}-dim)` : color;
  }
  var ShikiError = class extends Error {
    constructor(message) {
      super(message), this.name = "ShikiError";
    }
  }, GrammarState = class _GrammarState {
    _stack;
    lang;
    theme;
    /**
     * Static method to create a initial grammar state.
     */
    static initial(lang3, theme) {
      return new _GrammarState(INITIAL, lang3, theme);
    }
    constructor(_stack, lang3, theme) {
      this._stack = _stack, this.lang = lang3, this.theme = theme;
    }
    get scopes() {
      return getScopes(this._stack);
    }
    toJSON() {
      return {
        lang: this.lang,
        theme: this.theme,
        scopes: this.scopes
      };
    }
  };
  function getScopes(stack) {
    let scopes = [], visited = /* @__PURE__ */ new Set();
    function pushScope(stack2) {
      if (visited.has(stack2))
        return;
      visited.add(stack2);
      let name = stack2?.nameScopesList?.scopeName;
      name && scopes.push(name), stack2.parent && pushScope(stack2.parent);
    }
    return pushScope(stack), scopes;
  }
  function getGrammarStack(state) {
    if (!(state instanceof GrammarState))
      throw new ShikiError("Invalid grammar state");
    return state._stack;
  }
  function codeToTokensBase(internal, code, options = {}) {
    let { lang: lang3 = "text", theme: themeName = internal.getLoadedThemes()[0] } = options;
    if (isPlainLang(lang3) || isNoneTheme(themeName))
      return splitLines(code).map((line) => [{ content: line[0], offset: line[1] }]);
    let { theme, colorMap } = internal.setTheme(themeName);
    if (lang3 === "ansi")
      return tokenizeAnsiWithTheme(theme, code, options);
    let _grammar = internal.getLanguage(lang3);
    if (options.grammarState) {
      if (options.grammarState.lang !== _grammar.name)
        throw new ShikiError(`Grammar state language "${options.grammarState.lang}" does not match highlight language "${_grammar.name}"`);
      if (options.grammarState.theme !== themeName)
        throw new ShikiError(`Grammar state theme "${options.grammarState.theme}" does not match highlight theme "${themeName}"`);
    }
    return tokenizeWithTheme(code, _grammar, theme, colorMap, options);
  }
  function getLastGrammarState(internal, code, options = {}) {
    let { lang: lang3 = "text", theme: themeName = internal.getLoadedThemes()[0] } = options;
    if (isPlainLang(lang3) || isNoneTheme(themeName))
      throw new ShikiError("Plain language does not have grammar state");
    if (lang3 === "ansi")
      throw new ShikiError("ANSI language does not have grammar state");
    let { theme, colorMap } = internal.setTheme(themeName), _grammar = internal.getLanguage(lang3);
    return new GrammarState(_tokenizeWithTheme(code, _grammar, theme, colorMap, options).stateStack, _grammar.name, theme.name);
  }
  function tokenizeWithTheme(code, grammar, theme, colorMap, options) {
    return _tokenizeWithTheme(code, grammar, theme, colorMap, options).tokens;
  }
  function _tokenizeWithTheme(code, grammar, theme, colorMap, options) {
    let colorReplacements = resolveColorReplacements(theme, options), { tokenizeMaxLineLength = 0, tokenizeTimeLimit = 500 } = options, lines = splitLines(code), stateStack = options.grammarState ? getGrammarStack(options.grammarState) : options.grammarContextCode != null ? _tokenizeWithTheme(options.grammarContextCode, grammar, theme, colorMap, {
      ...options,
      grammarState: void 0,
      grammarContextCode: void 0
    }).stateStack : INITIAL, actual = [], final = [];
    for (let i2 = 0, len = lines.length; i2 < len; i2++) {
      let [line, lineOffset] = lines[i2];
      if (line === "") {
        actual = [], final.push([]);
        continue;
      }
      if (tokenizeMaxLineLength > 0 && line.length >= tokenizeMaxLineLength) {
        actual = [], final.push([{
          content: line,
          offset: lineOffset,
          color: "",
          fontStyle: 0
        }]);
        continue;
      }
      let resultWithScopes, tokensWithScopes, tokensWithScopesIndex;
      options.includeExplanation && (resultWithScopes = grammar.tokenizeLine(line, stateStack), tokensWithScopes = resultWithScopes.tokens, tokensWithScopesIndex = 0);
      let result = grammar.tokenizeLine2(line, stateStack, tokenizeTimeLimit), tokensLength = result.tokens.length / 2;
      for (let j = 0; j < tokensLength; j++) {
        let startIndex = result.tokens[2 * j], nextStartIndex = j + 1 < tokensLength ? result.tokens[2 * j + 2] : line.length;
        if (startIndex === nextStartIndex)
          continue;
        let metadata = result.tokens[2 * j + 1], color = applyColorReplacements(colorMap[StackElementMetadata.getForeground(metadata)], colorReplacements), fontStyle = StackElementMetadata.getFontStyle(metadata), token = {
          content: line.substring(startIndex, nextStartIndex),
          offset: lineOffset + startIndex,
          color,
          fontStyle
        };
        if (options.includeExplanation) {
          let themeSettingsSelectors = [];
          if (options.includeExplanation !== "scopeName")
            for (let setting of theme.settings) {
              let selectors;
              switch (typeof setting.scope) {
                case "string":
                  selectors = setting.scope.split(/,/).map((scope) => scope.trim());
                  break;
                case "object":
                  selectors = setting.scope;
                  break;
                default:
                  continue;
              }
              themeSettingsSelectors.push({
                settings: setting,
                selectors: selectors.map((selector) => selector.split(/ /))
              });
            }
          token.explanation = [];
          let offset = 0;
          for (; startIndex + offset < nextStartIndex; ) {
            let tokenWithScopes = tokensWithScopes[tokensWithScopesIndex], tokenWithScopesText = line.substring(tokenWithScopes.startIndex, tokenWithScopes.endIndex);
            offset += tokenWithScopesText.length, token.explanation.push({
              content: tokenWithScopesText,
              scopes: options.includeExplanation === "scopeName" ? explainThemeScopesNameOnly(tokenWithScopes.scopes) : explainThemeScopesFull(themeSettingsSelectors, tokenWithScopes.scopes)
            }), tokensWithScopesIndex += 1;
          }
        }
        actual.push(token);
      }
      final.push(actual), actual = [], stateStack = result.ruleStack;
    }
    return {
      tokens: final,
      stateStack
    };
  }
  function explainThemeScopesNameOnly(scopes) {
    return scopes.map((scope) => ({ scopeName: scope }));
  }
  function explainThemeScopesFull(themeSelectors, scopes) {
    let result = [];
    for (let i2 = 0, len = scopes.length; i2 < len; i2++) {
      let scope = scopes[i2];
      result[i2] = {
        scopeName: scope,
        themeMatches: explainThemeScope(themeSelectors, scope, scopes.slice(0, i2))
      };
    }
    return result;
  }
  function matchesOne(selector, scope) {
    return selector === scope || scope.substring(0, selector.length) === selector && scope[selector.length] === ".";
  }
  function matches(selectors, scope, parentScopes) {
    if (!matchesOne(selectors[selectors.length - 1], scope))
      return !1;
    let selectorParentIndex = selectors.length - 2, parentIndex = parentScopes.length - 1;
    for (; selectorParentIndex >= 0 && parentIndex >= 0; )
      matchesOne(selectors[selectorParentIndex], parentScopes[parentIndex]) && (selectorParentIndex -= 1), parentIndex -= 1;
    return selectorParentIndex === -1;
  }
  function explainThemeScope(themeSettingsSelectors, scope, parentScopes) {
    let result = [];
    for (let { selectors, settings } of themeSettingsSelectors)
      for (let selectorPieces of selectors)
        if (matches(selectorPieces, scope, parentScopes)) {
          result.push(settings);
          break;
        }
    return result;
  }
  function codeToTokensWithThemes(internal, code, options) {
    let themes = Object.entries(options.themes).filter((i2) => i2[1]).map((i2) => ({ color: i2[0], theme: i2[1] })), tokens = syncThemesTokenization(...themes.map((t3) => codeToTokensBase(internal, code, {
      ...options,
      theme: t3.theme
    })));
    return tokens[0].map((line, lineIdx) => line.map((_token, tokenIdx) => {
      let mergedToken = {
        content: _token.content,
        variants: {},
        offset: _token.offset
      };
      return "includeExplanation" in options && options.includeExplanation && (mergedToken.explanation = _token.explanation), tokens.forEach((t3, themeIdx) => {
        let { content: _, explanation: __, offset: ___, ...styles } = t3[lineIdx][tokenIdx];
        mergedToken.variants[themes[themeIdx].color] = styles;
      }), mergedToken;
    }));
  }
  function syncThemesTokenization(...themes) {
    let outThemes = themes.map(() => []), count = themes.length;
    for (let i2 = 0; i2 < themes[0].length; i2++) {
      let lines = themes.map((t3) => t3[i2]), outLines = outThemes.map(() => []);
      outThemes.forEach((t3, i3) => t3.push(outLines[i3]));
      let indexes = lines.map(() => 0), current = lines.map((l2) => l2[0]);
      for (; current.every((t3) => t3); ) {
        let minLength = Math.min(...current.map((t3) => t3.content.length));
        for (let n2 = 0; n2 < count; n2++) {
          let token = current[n2];
          token.content.length === minLength ? (outLines[n2].push(token), indexes[n2] += 1, current[n2] = lines[n2][indexes[n2]]) : (outLines[n2].push({
            ...token,
            content: token.content.slice(0, minLength)
          }), current[n2] = {
            ...token,
            content: token.content.slice(minLength),
            offset: token.offset + minLength
          });
        }
      }
    }
    return outThemes;
  }
  function codeToTokens(internal, code, options) {
    let bg, fg, tokens, themeName, rootStyle;
    if ("themes" in options) {
      let { defaultColor = "light", cssVariablePrefix = "--shiki-" } = options, themes = Object.entries(options.themes).filter((i2) => i2[1]).map((i2) => ({ color: i2[0], theme: i2[1] })).sort((a, b) => a.color === defaultColor ? -1 : b.color === defaultColor ? 1 : 0);
      if (themes.length === 0)
        throw new ShikiError("`themes` option must not be empty");
      let themeTokens = codeToTokensWithThemes(internal, code, options);
      if (defaultColor && !themes.find((t3) => t3.color === defaultColor))
        throw new ShikiError(`\`themes\` option must contain the defaultColor key \`${defaultColor}\``);
      let themeRegs = themes.map((t3) => internal.getTheme(t3.theme)), themesOrder = themes.map((t3) => t3.color);
      tokens = themeTokens.map((line) => line.map((token) => mergeToken(token, themesOrder, cssVariablePrefix, defaultColor)));
      let themeColorReplacements = themes.map((t3) => resolveColorReplacements(t3.theme, options));
      fg = themes.map((t3, idx) => (idx === 0 && defaultColor ? "" : `${cssVariablePrefix + t3.color}:`) + (applyColorReplacements(themeRegs[idx].fg, themeColorReplacements[idx]) || "inherit")).join(";"), bg = themes.map((t3, idx) => (idx === 0 && defaultColor ? "" : `${cssVariablePrefix + t3.color}-bg:`) + (applyColorReplacements(themeRegs[idx].bg, themeColorReplacements[idx]) || "inherit")).join(";"), themeName = `shiki-themes ${themeRegs.map((t3) => t3.name).join(" ")}`, rootStyle = defaultColor ? void 0 : [fg, bg].join(";");
    } else if ("theme" in options) {
      let colorReplacements = resolveColorReplacements(options.theme, options);
      tokens = codeToTokensBase(internal, code, options);
      let _theme = internal.getTheme(options.theme);
      bg = applyColorReplacements(_theme.bg, colorReplacements), fg = applyColorReplacements(_theme.fg, colorReplacements), themeName = _theme.name;
    } else
      throw new ShikiError("Invalid options, either `theme` or `themes` must be provided");
    return {
      tokens,
      fg,
      bg,
      themeName,
      rootStyle
    };
  }
  function mergeToken(merged, variantsOrder, cssVariablePrefix, defaultColor) {
    let token = {
      content: merged.content,
      explanation: merged.explanation,
      offset: merged.offset
    }, styles = variantsOrder.map((t3) => getTokenStyleObject(merged.variants[t3])), styleKeys = new Set(styles.flatMap((t3) => Object.keys(t3))), mergedStyles = styles.reduce((acc, cur, idx) => {
      for (let key2 of styleKeys) {
        let value = cur[key2] || "inherit";
        if (idx === 0 && defaultColor)
          acc[key2] = value;
        else {
          let keyName = key2 === "color" ? "" : key2 === "background-color" ? "-bg" : `-${key2}`, varKey = cssVariablePrefix + variantsOrder[idx] + (key2 === "color" ? "" : keyName);
          acc[key2] ? acc[key2] += `;${varKey}:${value}` : acc[key2] = `${varKey}:${value}`;
        }
      }
      return acc;
    }, {});
    return token.htmlStyle = defaultColor ? stringifyTokenStyle(mergedStyles) : Object.values(mergedStyles).join(";"), token;
  }
  function transformerDecorations() {
    let map = /* @__PURE__ */ new WeakMap();
    function getContext(shiki) {
      if (!map.has(shiki.meta)) {
        let normalizePosition = function(p2) {
          if (typeof p2 == "number") {
            if (p2 < 0 || p2 > shiki.source.length)
              throw new ShikiError(`Invalid decoration offset: ${p2}. Code length: ${shiki.source.length}`);
            return {
              ...converter.indexToPos(p2),
              offset: p2
            };
          } else {
            let line = converter.lines[p2.line];
            if (line === void 0)
              throw new ShikiError(`Invalid decoration position ${JSON.stringify(p2)}. Lines length: ${converter.lines.length}`);
            if (p2.character < 0 || p2.character > line.length)
              throw new ShikiError(`Invalid decoration position ${JSON.stringify(p2)}. Line ${p2.line} length: ${line.length}`);
            return {
              ...p2,
              offset: converter.posToIndex(p2.line, p2.character)
            };
          }
        }, converter = createPositionConverter(shiki.source), decorations2 = (shiki.options.decorations || []).map((d) => ({
          ...d,
          start: normalizePosition(d.start),
          end: normalizePosition(d.end)
        }));
        verifyIntersections(decorations2), map.set(shiki.meta, {
          decorations: decorations2,
          converter,
          source: shiki.source
        });
      }
      return map.get(shiki.meta);
    }
    return {
      name: "shiki:decorations",
      tokens(tokens) {
        if (!this.options.decorations?.length)
          return;
        let breakpoints = getContext(this).decorations.flatMap((d) => [d.start.offset, d.end.offset]);
        return splitTokens(tokens, breakpoints);
      },
      code(codeEl) {
        if (!this.options.decorations?.length)
          return;
        let ctx = getContext(this), lines = Array.from(codeEl.children).filter((i2) => i2.type === "element" && i2.tagName === "span");
        if (lines.length !== ctx.converter.lines.length)
          throw new ShikiError(`Number of lines in code element (${lines.length}) does not match the number of lines in the source (${ctx.converter.lines.length}). Failed to apply decorations.`);
        function applyLineSection(line, start, end, decoration) {
          let lineEl = lines[line], text2 = "", startIndex = -1, endIndex = -1;
          if (start === 0 && (startIndex = 0), end === 0 && (endIndex = 0), end === Number.POSITIVE_INFINITY && (endIndex = lineEl.children.length), startIndex === -1 || endIndex === -1)
            for (let i2 = 0; i2 < lineEl.children.length; i2++)
              text2 += stringify$2(lineEl.children[i2]), startIndex === -1 && text2.length === start && (startIndex = i2 + 1), endIndex === -1 && text2.length === end && (endIndex = i2 + 1);
          if (startIndex === -1)
            throw new ShikiError(`Failed to find start index for decoration ${JSON.stringify(decoration.start)}`);
          if (endIndex === -1)
            throw new ShikiError(`Failed to find end index for decoration ${JSON.stringify(decoration.end)}`);
          let children = lineEl.children.slice(startIndex, endIndex);
          if (!decoration.alwaysWrap && children.length === lineEl.children.length)
            applyDecoration(lineEl, decoration, "line");
          else if (!decoration.alwaysWrap && children.length === 1 && children[0].type === "element")
            applyDecoration(children[0], decoration, "token");
          else {
            let wrapper = {
              type: "element",
              tagName: "span",
              properties: {},
              children
            };
            applyDecoration(wrapper, decoration, "wrapper"), lineEl.children.splice(startIndex, children.length, wrapper);
          }
        }
        function applyLine(line, decoration) {
          lines[line] = applyDecoration(lines[line], decoration, "line");
        }
        function applyDecoration(el, decoration, type) {
          let properties = decoration.properties || {}, transform = decoration.transform || ((i2) => i2);
          return el.tagName = decoration.tagName || "span", el.properties = {
            ...el.properties,
            ...properties,
            class: el.properties.class
          }, decoration.properties?.class && addClassToHast(el, decoration.properties.class), el = transform(el, type) || el, el;
        }
        let lineApplies = [], sorted = ctx.decorations.sort((a, b) => b.start.offset - a.start.offset);
        for (let decoration of sorted) {
          let { start, end } = decoration;
          if (start.line === end.line)
            applyLineSection(start.line, start.character, end.character, decoration);
          else if (start.line < end.line) {
            applyLineSection(start.line, start.character, Number.POSITIVE_INFINITY, decoration);
            for (let i2 = start.line + 1; i2 < end.line; i2++)
              lineApplies.unshift(() => applyLine(i2, decoration));
            applyLineSection(end.line, 0, end.character, decoration);
          }
        }
        lineApplies.forEach((i2) => i2());
      }
    };
  }
  function verifyIntersections(items) {
    for (let i2 = 0; i2 < items.length; i2++) {
      let foo = items[i2];
      if (foo.start.offset > foo.end.offset)
        throw new ShikiError(`Invalid decoration range: ${JSON.stringify(foo.start)} - ${JSON.stringify(foo.end)}`);
      for (let j = i2 + 1; j < items.length; j++) {
        let bar = items[j], isFooHasBarStart = foo.start.offset < bar.start.offset && bar.start.offset < foo.end.offset, isFooHasBarEnd = foo.start.offset < bar.end.offset && bar.end.offset < foo.end.offset, isBarHasFooStart = bar.start.offset < foo.start.offset && foo.start.offset < bar.end.offset, isBarHasFooEnd = bar.start.offset < foo.end.offset && foo.end.offset < bar.end.offset;
        if (isFooHasBarStart || isFooHasBarEnd || isBarHasFooStart || isBarHasFooEnd) {
          if (isFooHasBarEnd && isFooHasBarEnd || isBarHasFooStart && isBarHasFooEnd)
            continue;
          throw new ShikiError(`Decorations ${JSON.stringify(foo.start)} and ${JSON.stringify(bar.start)} intersect.`);
        }
      }
    }
  }
  function stringify$2(el) {
    return el.type === "text" ? el.value : el.type === "element" ? el.children.map(stringify$2).join("") : "";
  }
  var builtInTransformers = [
    /* @__PURE__ */ transformerDecorations()
  ];
  function getTransformers(options) {
    return [
      ...options.transformers || [],
      ...builtInTransformers
    ];
  }
  function codeToHast(internal, code, options, transformerContext = {
    meta: {},
    options,
    codeToHast: (_code, _options) => codeToHast(internal, _code, _options),
    codeToTokens: (_code, _options) => codeToTokens(internal, _code, _options)
  }) {
    let input = code;
    for (let transformer of getTransformers(options))
      input = transformer.preprocess?.call(transformerContext, input, options) || input;
    let { tokens, fg, bg, themeName, rootStyle } = codeToTokens(internal, input, options), { mergeWhitespaces = !0 } = options;
    mergeWhitespaces === !0 ? tokens = mergeWhitespaceTokens(tokens) : mergeWhitespaces === "never" && (tokens = splitWhitespaceTokens(tokens));
    let contextSource = {
      ...transformerContext,
      get source() {
        return input;
      }
    };
    for (let transformer of getTransformers(options))
      tokens = transformer.tokens?.call(contextSource, tokens) || tokens;
    return tokensToHast(tokens, {
      ...options,
      fg,
      bg,
      themeName,
      rootStyle
    }, contextSource);
  }
  function tokensToHast(tokens, options, transformerContext) {
    let transformers = getTransformers(options), lines = [], root2 = {
      type: "root",
      children: []
    }, { structure = "classic" } = options, preNode = {
      type: "element",
      tagName: "pre",
      properties: {
        class: `shiki ${options.themeName || ""}`,
        style: options.rootStyle || `background-color:${options.bg};color:${options.fg}`,
        tabindex: "0",
        ...Object.fromEntries(Array.from(Object.entries(options.meta || {})).filter(([key2]) => !key2.startsWith("_")))
      },
      children: []
    }, codeNode = {
      type: "element",
      tagName: "code",
      properties: {},
      children: lines
    }, lineNodes = [], context = {
      ...transformerContext,
      structure,
      addClassToHast,
      get source() {
        return transformerContext.source;
      },
      get tokens() {
        return tokens;
      },
      get options() {
        return options;
      },
      get root() {
        return root2;
      },
      get pre() {
        return preNode;
      },
      get code() {
        return codeNode;
      },
      get lines() {
        return lineNodes;
      }
    };
    if (tokens.forEach((line, idx) => {
      idx && (structure === "inline" ? root2.children.push({ type: "element", tagName: "br", properties: {}, children: [] }) : structure === "classic" && lines.push({ type: "text", value: `
` }));
      let lineNode = {
        type: "element",
        tagName: "span",
        properties: { class: "line" },
        children: []
      }, col = 0;
      for (let token of line) {
        let tokenNode = {
          type: "element",
          tagName: "span",
          properties: {},
          children: [{ type: "text", value: token.content }]
        }, style = token.htmlStyle || stringifyTokenStyle(getTokenStyleObject(token));
        style && (tokenNode.properties.style = style);
        for (let transformer of transformers)
          tokenNode = transformer?.span?.call(context, tokenNode, idx + 1, col, lineNode) || tokenNode;
        structure === "inline" ? root2.children.push(tokenNode) : structure === "classic" && lineNode.children.push(tokenNode), col += token.content.length;
      }
      if (structure === "classic") {
        for (let transformer of transformers)
          lineNode = transformer?.line?.call(context, lineNode, idx + 1) || lineNode;
        lineNodes.push(lineNode), lines.push(lineNode);
      }
    }), structure === "classic") {
      for (let transformer of transformers)
        codeNode = transformer?.code?.call(context, codeNode) || codeNode;
      preNode.children.push(codeNode);
      for (let transformer of transformers)
        preNode = transformer?.pre?.call(context, preNode) || preNode;
      root2.children.push(preNode);
    }
    let result = root2;
    for (let transformer of transformers)
      result = transformer?.root?.call(context, result) || result;
    return result;
  }
  function mergeWhitespaceTokens(tokens) {
    return tokens.map((line) => {
      let newLine = [], carryOnContent = "", firstOffset = 0;
      return line.forEach((token, idx) => {
        let couldMerge = !(token.fontStyle && token.fontStyle & FontStyle.Underline);
        couldMerge && token.content.match(/^\s+$/) && line[idx + 1] ? (firstOffset || (firstOffset = token.offset), carryOnContent += token.content) : carryOnContent ? (couldMerge ? newLine.push({
          ...token,
          offset: firstOffset,
          content: carryOnContent + token.content
        }) : newLine.push({
          content: carryOnContent,
          offset: firstOffset
        }, token), firstOffset = 0, carryOnContent = "") : newLine.push(token);
      }), newLine;
    });
  }
  function splitWhitespaceTokens(tokens) {
    return tokens.map((line) => line.flatMap((token) => {
      if (token.content.match(/^\s+$/))
        return token;
      let match = token.content.match(/^(\s*)(.*?)(\s*)$/);
      if (!match)
        return token;
      let [, leading, content, trailing] = match;
      if (!leading && !trailing)
        return token;
      let expanded = [{
        ...token,
        offset: token.offset + leading.length,
        content
      }];
      return leading && expanded.unshift({
        content: leading,
        offset: token.offset
      }), trailing && expanded.push({
        content: trailing,
        offset: token.offset + leading.length + content.length
      }), expanded;
    }));
  }
  var htmlVoidElements = [
    "area",
    "base",
    "basefont",
    "bgsound",
    "br",
    "col",
    "command",
    "embed",
    "frame",
    "hr",
    "image",
    "img",
    "input",
    "keygen",
    "link",
    "meta",
    "param",
    "source",
    "track",
    "wbr"
  ], Schema = class {
    /**
     * @constructor
     * @param {Properties} property
     * @param {Normal} normal
     * @param {string} [space]
     */
    constructor(property, normal, space) {
      this.property = property, this.normal = normal, space && (this.space = space);
    }
  };
  Schema.prototype.property = {};
  Schema.prototype.normal = {};
  Schema.prototype.space = null;
  function merge(definitions, space) {
    let property = {}, normal = {}, index = -1;
    for (; ++index < definitions.length; )
      Object.assign(property, definitions[index].property), Object.assign(normal, definitions[index].normal);
    return new Schema(property, normal, space);
  }
  function normalize(value) {
    return value.toLowerCase();
  }
  var Info = class {
    /**
     * @constructor
     * @param {string} property
     * @param {string} attribute
     */
    constructor(property, attribute) {
      this.property = property, this.attribute = attribute;
    }
  };
  Info.prototype.space = null;
  Info.prototype.boolean = !1;
  Info.prototype.booleanish = !1;
  Info.prototype.overloadedBoolean = !1;
  Info.prototype.number = !1;
  Info.prototype.commaSeparated = !1;
  Info.prototype.spaceSeparated = !1;
  Info.prototype.commaOrSpaceSeparated = !1;
  Info.prototype.mustUseProperty = !1;
  Info.prototype.defined = !1;
  var powers = 0, boolean = increment(), booleanish = increment(), overloadedBoolean = increment(), number = increment(), spaceSeparated = increment(), commaSeparated = increment(), commaOrSpaceSeparated = increment();
  function increment() {
    return 2 ** ++powers;
  }
  var types = /* @__PURE__ */ Object.freeze({
    __proto__: null,
    boolean,
    booleanish,
    commaOrSpaceSeparated,
    commaSeparated,
    number,
    overloadedBoolean,
    spaceSeparated
  }), checks = Object.keys(types), DefinedInfo = class extends Info {
    /**
     * @constructor
     * @param {string} property
     * @param {string} attribute
     * @param {number|null} [mask]
     * @param {string} [space]
     */
    constructor(property, attribute, mask, space) {
      let index = -1;
      if (super(property, attribute), mark(this, "space", space), typeof mask == "number")
        for (; ++index < checks.length; ) {
          let check = checks[index];
          mark(this, checks[index], (mask & types[check]) === types[check]);
        }
    }
  };
  DefinedInfo.prototype.defined = !0;
  function mark(values, key2, value) {
    value && (values[key2] = value);
  }
  var own$3 = {}.hasOwnProperty;
  function create(definition) {
    let property = {}, normal = {}, prop;
    for (prop in definition.properties)
      if (own$3.call(definition.properties, prop)) {
        let value = definition.properties[prop], info = new DefinedInfo(
          prop,
          definition.transform(definition.attributes || {}, prop),
          value,
          definition.space
        );
        definition.mustUseProperty && definition.mustUseProperty.includes(prop) && (info.mustUseProperty = !0), property[prop] = info, normal[normalize(prop)] = prop, normal[normalize(info.attribute)] = prop;
      }
    return new Schema(property, normal, definition.space);
  }
  var xlink = create({
    space: "xlink",
    transform(_, prop) {
      return "xlink:" + prop.slice(5).toLowerCase();
    },
    properties: {
      xLinkActuate: null,
      xLinkArcRole: null,
      xLinkHref: null,
      xLinkRole: null,
      xLinkShow: null,
      xLinkTitle: null,
      xLinkType: null
    }
  }), xml = create({
    space: "xml",
    transform(_, prop) {
      return "xml:" + prop.slice(3).toLowerCase();
    },
    properties: { xmlLang: null, xmlBase: null, xmlSpace: null }
  });
  function caseSensitiveTransform(attributes, attribute) {
    return attribute in attributes ? attributes[attribute] : attribute;
  }
  function caseInsensitiveTransform(attributes, property) {
    return caseSensitiveTransform(attributes, property.toLowerCase());
  }
  var xmlns = create({
    space: "xmlns",
    attributes: { xmlnsxlink: "xmlns:xlink" },
    transform: caseInsensitiveTransform,
    properties: { xmlns: null, xmlnsXLink: null }
  }), aria = create({
    transform(_, prop) {
      return prop === "role" ? prop : "aria-" + prop.slice(4).toLowerCase();
    },
    properties: {
      ariaActiveDescendant: null,
      ariaAtomic: booleanish,
      ariaAutoComplete: null,
      ariaBusy: booleanish,
      ariaChecked: booleanish,
      ariaColCount: number,
      ariaColIndex: number,
      ariaColSpan: number,
      ariaControls: spaceSeparated,
      ariaCurrent: null,
      ariaDescribedBy: spaceSeparated,
      ariaDetails: null,
      ariaDisabled: booleanish,
      ariaDropEffect: spaceSeparated,
      ariaErrorMessage: null,
      ariaExpanded: booleanish,
      ariaFlowTo: spaceSeparated,
      ariaGrabbed: booleanish,
      ariaHasPopup: null,
      ariaHidden: booleanish,
      ariaInvalid: null,
      ariaKeyShortcuts: null,
      ariaLabel: null,
      ariaLabelledBy: spaceSeparated,
      ariaLevel: number,
      ariaLive: null,
      ariaModal: booleanish,
      ariaMultiLine: booleanish,
      ariaMultiSelectable: booleanish,
      ariaOrientation: null,
      ariaOwns: spaceSeparated,
      ariaPlaceholder: null,
      ariaPosInSet: number,
      ariaPressed: booleanish,
      ariaReadOnly: booleanish,
      ariaRelevant: null,
      ariaRequired: booleanish,
      ariaRoleDescription: spaceSeparated,
      ariaRowCount: number,
      ariaRowIndex: number,
      ariaRowSpan: number,
      ariaSelected: booleanish,
      ariaSetSize: number,
      ariaSort: null,
      ariaValueMax: number,
      ariaValueMin: number,
      ariaValueNow: number,
      ariaValueText: null,
      role: null
    }
  }), html$3 = create({
    space: "html",
    attributes: {
      acceptcharset: "accept-charset",
      classname: "class",
      htmlfor: "for",
      httpequiv: "http-equiv"
    },
    transform: caseInsensitiveTransform,
    mustUseProperty: ["checked", "multiple", "muted", "selected"],
    properties: {
      // Standard Properties.
      abbr: null,
      accept: commaSeparated,
      acceptCharset: spaceSeparated,
      accessKey: spaceSeparated,
      action: null,
      allow: null,
      allowFullScreen: boolean,
      allowPaymentRequest: boolean,
      allowUserMedia: boolean,
      alt: null,
      as: null,
      async: boolean,
      autoCapitalize: null,
      autoComplete: spaceSeparated,
      autoFocus: boolean,
      autoPlay: boolean,
      blocking: spaceSeparated,
      capture: null,
      charSet: null,
      checked: boolean,
      cite: null,
      className: spaceSeparated,
      cols: number,
      colSpan: null,
      content: null,
      contentEditable: booleanish,
      controls: boolean,
      controlsList: spaceSeparated,
      coords: number | commaSeparated,
      crossOrigin: null,
      data: null,
      dateTime: null,
      decoding: null,
      default: boolean,
      defer: boolean,
      dir: null,
      dirName: null,
      disabled: boolean,
      download: overloadedBoolean,
      draggable: booleanish,
      encType: null,
      enterKeyHint: null,
      fetchPriority: null,
      form: null,
      formAction: null,
      formEncType: null,
      formMethod: null,
      formNoValidate: boolean,
      formTarget: null,
      headers: spaceSeparated,
      height: number,
      hidden: boolean,
      high: number,
      href: null,
      hrefLang: null,
      htmlFor: spaceSeparated,
      httpEquiv: spaceSeparated,
      id: null,
      imageSizes: null,
      imageSrcSet: null,
      inert: boolean,
      inputMode: null,
      integrity: null,
      is: null,
      isMap: boolean,
      itemId: null,
      itemProp: spaceSeparated,
      itemRef: spaceSeparated,
      itemScope: boolean,
      itemType: spaceSeparated,
      kind: null,
      label: null,
      lang: null,
      language: null,
      list: null,
      loading: null,
      loop: boolean,
      low: number,
      manifest: null,
      max: null,
      maxLength: number,
      media: null,
      method: null,
      min: null,
      minLength: number,
      multiple: boolean,
      muted: boolean,
      name: null,
      nonce: null,
      noModule: boolean,
      noValidate: boolean,
      onAbort: null,
      onAfterPrint: null,
      onAuxClick: null,
      onBeforeMatch: null,
      onBeforePrint: null,
      onBeforeToggle: null,
      onBeforeUnload: null,
      onBlur: null,
      onCancel: null,
      onCanPlay: null,
      onCanPlayThrough: null,
      onChange: null,
      onClick: null,
      onClose: null,
      onContextLost: null,
      onContextMenu: null,
      onContextRestored: null,
      onCopy: null,
      onCueChange: null,
      onCut: null,
      onDblClick: null,
      onDrag: null,
      onDragEnd: null,
      onDragEnter: null,
      onDragExit: null,
      onDragLeave: null,
      onDragOver: null,
      onDragStart: null,
      onDrop: null,
      onDurationChange: null,
      onEmptied: null,
      onEnded: null,
      onError: null,
      onFocus: null,
      onFormData: null,
      onHashChange: null,
      onInput: null,
      onInvalid: null,
      onKeyDown: null,
      onKeyPress: null,
      onKeyUp: null,
      onLanguageChange: null,
      onLoad: null,
      onLoadedData: null,
      onLoadedMetadata: null,
      onLoadEnd: null,
      onLoadStart: null,
      onMessage: null,
      onMessageError: null,
      onMouseDown: null,
      onMouseEnter: null,
      onMouseLeave: null,
      onMouseMove: null,
      onMouseOut: null,
      onMouseOver: null,
      onMouseUp: null,
      onOffline: null,
      onOnline: null,
      onPageHide: null,
      onPageShow: null,
      onPaste: null,
      onPause: null,
      onPlay: null,
      onPlaying: null,
      onPopState: null,
      onProgress: null,
      onRateChange: null,
      onRejectionHandled: null,
      onReset: null,
      onResize: null,
      onScroll: null,
      onScrollEnd: null,
      onSecurityPolicyViolation: null,
      onSeeked: null,
      onSeeking: null,
      onSelect: null,
      onSlotChange: null,
      onStalled: null,
      onStorage: null,
      onSubmit: null,
      onSuspend: null,
      onTimeUpdate: null,
      onToggle: null,
      onUnhandledRejection: null,
      onUnload: null,
      onVolumeChange: null,
      onWaiting: null,
      onWheel: null,
      open: boolean,
      optimum: number,
      pattern: null,
      ping: spaceSeparated,
      placeholder: null,
      playsInline: boolean,
      popover: null,
      popoverTarget: null,
      popoverTargetAction: null,
      poster: null,
      preload: null,
      readOnly: boolean,
      referrerPolicy: null,
      rel: spaceSeparated,
      required: boolean,
      reversed: boolean,
      rows: number,
      rowSpan: number,
      sandbox: spaceSeparated,
      scope: null,
      scoped: boolean,
      seamless: boolean,
      selected: boolean,
      shadowRootDelegatesFocus: boolean,
      shadowRootMode: null,
      shape: null,
      size: number,
      sizes: null,
      slot: null,
      span: number,
      spellCheck: booleanish,
      src: null,
      srcDoc: null,
      srcLang: null,
      srcSet: null,
      start: number,
      step: null,
      style: null,
      tabIndex: number,
      target: null,
      title: null,
      translate: null,
      type: null,
      typeMustMatch: boolean,
      useMap: null,
      value: booleanish,
      width: number,
      wrap: null,
      // Legacy.
      // See: https://html.spec.whatwg.org/#other-elements,-attributes-and-apis
      align: null,
      // Several. Use CSS `text-align` instead,
      aLink: null,
      // `<body>`. Use CSS `a:active {color}` instead
      archive: spaceSeparated,
      // `<object>`. List of URIs to archives
      axis: null,
      // `<td>` and `<th>`. Use `scope` on `<th>`
      background: null,
      // `<body>`. Use CSS `background-image` instead
      bgColor: null,
      // `<body>` and table elements. Use CSS `background-color` instead
      border: number,
      // `<table>`. Use CSS `border-width` instead,
      borderColor: null,
      // `<table>`. Use CSS `border-color` instead,
      bottomMargin: number,
      // `<body>`
      cellPadding: null,
      // `<table>`
      cellSpacing: null,
      // `<table>`
      char: null,
      // Several table elements. When `align=char`, sets the character to align on
      charOff: null,
      // Several table elements. When `char`, offsets the alignment
      classId: null,
      // `<object>`
      clear: null,
      // `<br>`. Use CSS `clear` instead
      code: null,
      // `<object>`
      codeBase: null,
      // `<object>`
      codeType: null,
      // `<object>`
      color: null,
      // `<font>` and `<hr>`. Use CSS instead
      compact: boolean,
      // Lists. Use CSS to reduce space between items instead
      declare: boolean,
      // `<object>`
      event: null,
      // `<script>`
      face: null,
      // `<font>`. Use CSS instead
      frame: null,
      // `<table>`
      frameBorder: null,
      // `<iframe>`. Use CSS `border` instead
      hSpace: number,
      // `<img>` and `<object>`
      leftMargin: number,
      // `<body>`
      link: null,
      // `<body>`. Use CSS `a:link {color: *}` instead
      longDesc: null,
      // `<frame>`, `<iframe>`, and `<img>`. Use an `<a>`
      lowSrc: null,
      // `<img>`. Use a `<picture>`
      marginHeight: number,
      // `<body>`
      marginWidth: number,
      // `<body>`
      noResize: boolean,
      // `<frame>`
      noHref: boolean,
      // `<area>`. Use no href instead of an explicit `nohref`
      noShade: boolean,
      // `<hr>`. Use background-color and height instead of borders
      noWrap: boolean,
      // `<td>` and `<th>`
      object: null,
      // `<applet>`
      profile: null,
      // `<head>`
      prompt: null,
      // `<isindex>`
      rev: null,
      // `<link>`
      rightMargin: number,
      // `<body>`
      rules: null,
      // `<table>`
      scheme: null,
      // `<meta>`
      scrolling: booleanish,
      // `<frame>`. Use overflow in the child context
      standby: null,
      // `<object>`
      summary: null,
      // `<table>`
      text: null,
      // `<body>`. Use CSS `color` instead
      topMargin: number,
      // `<body>`
      valueType: null,
      // `<param>`
      version: null,
      // `<html>`. Use a doctype.
      vAlign: null,
      // Several. Use CSS `vertical-align` instead
      vLink: null,
      // `<body>`. Use CSS `a:visited {color}` instead
      vSpace: number,
      // `<img>` and `<object>`
      // Non-standard Properties.
      allowTransparency: null,
      autoCorrect: null,
      autoSave: null,
      disablePictureInPicture: boolean,
      disableRemotePlayback: boolean,
      prefix: null,
      property: null,
      results: number,
      security: null,
      unselectable: null
    }
  }), svg$1 = create({
    space: "svg",
    attributes: {
      accentHeight: "accent-height",
      alignmentBaseline: "alignment-baseline",
      arabicForm: "arabic-form",
      baselineShift: "baseline-shift",
      capHeight: "cap-height",
      className: "class",
      clipPath: "clip-path",
      clipRule: "clip-rule",
      colorInterpolation: "color-interpolation",
      colorInterpolationFilters: "color-interpolation-filters",
      colorProfile: "color-profile",
      colorRendering: "color-rendering",
      crossOrigin: "crossorigin",
      dataType: "datatype",
      dominantBaseline: "dominant-baseline",
      enableBackground: "enable-background",
      fillOpacity: "fill-opacity",
      fillRule: "fill-rule",
      floodColor: "flood-color",
      floodOpacity: "flood-opacity",
      fontFamily: "font-family",
      fontSize: "font-size",
      fontSizeAdjust: "font-size-adjust",
      fontStretch: "font-stretch",
      fontStyle: "font-style",
      fontVariant: "font-variant",
      fontWeight: "font-weight",
      glyphName: "glyph-name",
      glyphOrientationHorizontal: "glyph-orientation-horizontal",
      glyphOrientationVertical: "glyph-orientation-vertical",
      hrefLang: "hreflang",
      horizAdvX: "horiz-adv-x",
      horizOriginX: "horiz-origin-x",
      horizOriginY: "horiz-origin-y",
      imageRendering: "image-rendering",
      letterSpacing: "letter-spacing",
      lightingColor: "lighting-color",
      markerEnd: "marker-end",
      markerMid: "marker-mid",
      markerStart: "marker-start",
      navDown: "nav-down",
      navDownLeft: "nav-down-left",
      navDownRight: "nav-down-right",
      navLeft: "nav-left",
      navNext: "nav-next",
      navPrev: "nav-prev",
      navRight: "nav-right",
      navUp: "nav-up",
      navUpLeft: "nav-up-left",
      navUpRight: "nav-up-right",
      onAbort: "onabort",
      onActivate: "onactivate",
      onAfterPrint: "onafterprint",
      onBeforePrint: "onbeforeprint",
      onBegin: "onbegin",
      onCancel: "oncancel",
      onCanPlay: "oncanplay",
      onCanPlayThrough: "oncanplaythrough",
      onChange: "onchange",
      onClick: "onclick",
      onClose: "onclose",
      onCopy: "oncopy",
      onCueChange: "oncuechange",
      onCut: "oncut",
      onDblClick: "ondblclick",
      onDrag: "ondrag",
      onDragEnd: "ondragend",
      onDragEnter: "ondragenter",
      onDragExit: "ondragexit",
      onDragLeave: "ondragleave",
      onDragOver: "ondragover",
      onDragStart: "ondragstart",
      onDrop: "ondrop",
      onDurationChange: "ondurationchange",
      onEmptied: "onemptied",
      onEnd: "onend",
      onEnded: "onended",
      onError: "onerror",
      onFocus: "onfocus",
      onFocusIn: "onfocusin",
      onFocusOut: "onfocusout",
      onHashChange: "onhashchange",
      onInput: "oninput",
      onInvalid: "oninvalid",
      onKeyDown: "onkeydown",
      onKeyPress: "onkeypress",
      onKeyUp: "onkeyup",
      onLoad: "onload",
      onLoadedData: "onloadeddata",
      onLoadedMetadata: "onloadedmetadata",
      onLoadStart: "onloadstart",
      onMessage: "onmessage",
      onMouseDown: "onmousedown",
      onMouseEnter: "onmouseenter",
      onMouseLeave: "onmouseleave",
      onMouseMove: "onmousemove",
      onMouseOut: "onmouseout",
      onMouseOver: "onmouseover",
      onMouseUp: "onmouseup",
      onMouseWheel: "onmousewheel",
      onOffline: "onoffline",
      onOnline: "ononline",
      onPageHide: "onpagehide",
      onPageShow: "onpageshow",
      onPaste: "onpaste",
      onPause: "onpause",
      onPlay: "onplay",
      onPlaying: "onplaying",
      onPopState: "onpopstate",
      onProgress: "onprogress",
      onRateChange: "onratechange",
      onRepeat: "onrepeat",
      onReset: "onreset",
      onResize: "onresize",
      onScroll: "onscroll",
      onSeeked: "onseeked",
      onSeeking: "onseeking",
      onSelect: "onselect",
      onShow: "onshow",
      onStalled: "onstalled",
      onStorage: "onstorage",
      onSubmit: "onsubmit",
      onSuspend: "onsuspend",
      onTimeUpdate: "ontimeupdate",
      onToggle: "ontoggle",
      onUnload: "onunload",
      onVolumeChange: "onvolumechange",
      onWaiting: "onwaiting",
      onZoom: "onzoom",
      overlinePosition: "overline-position",
      overlineThickness: "overline-thickness",
      paintOrder: "paint-order",
      panose1: "panose-1",
      pointerEvents: "pointer-events",
      referrerPolicy: "referrerpolicy",
      renderingIntent: "rendering-intent",
      shapeRendering: "shape-rendering",
      stopColor: "stop-color",
      stopOpacity: "stop-opacity",
      strikethroughPosition: "strikethrough-position",
      strikethroughThickness: "strikethrough-thickness",
      strokeDashArray: "stroke-dasharray",
      strokeDashOffset: "stroke-dashoffset",
      strokeLineCap: "stroke-linecap",
      strokeLineJoin: "stroke-linejoin",
      strokeMiterLimit: "stroke-miterlimit",
      strokeOpacity: "stroke-opacity",
      strokeWidth: "stroke-width",
      tabIndex: "tabindex",
      textAnchor: "text-anchor",
      textDecoration: "text-decoration",
      textRendering: "text-rendering",
      transformOrigin: "transform-origin",
      typeOf: "typeof",
      underlinePosition: "underline-position",
      underlineThickness: "underline-thickness",
      unicodeBidi: "unicode-bidi",
      unicodeRange: "unicode-range",
      unitsPerEm: "units-per-em",
      vAlphabetic: "v-alphabetic",
      vHanging: "v-hanging",
      vIdeographic: "v-ideographic",
      vMathematical: "v-mathematical",
      vectorEffect: "vector-effect",
      vertAdvY: "vert-adv-y",
      vertOriginX: "vert-origin-x",
      vertOriginY: "vert-origin-y",
      wordSpacing: "word-spacing",
      writingMode: "writing-mode",
      xHeight: "x-height",
      // These were camelcased in Tiny. Now lowercased in SVG 2
      playbackOrder: "playbackorder",
      timelineBegin: "timelinebegin"
    },
    transform: caseSensitiveTransform,
    properties: {
      about: commaOrSpaceSeparated,
      accentHeight: number,
      accumulate: null,
      additive: null,
      alignmentBaseline: null,
      alphabetic: number,
      amplitude: number,
      arabicForm: null,
      ascent: number,
      attributeName: null,
      attributeType: null,
      azimuth: number,
      bandwidth: null,
      baselineShift: null,
      baseFrequency: null,
      baseProfile: null,
      bbox: null,
      begin: null,
      bias: number,
      by: null,
      calcMode: null,
      capHeight: number,
      className: spaceSeparated,
      clip: null,
      clipPath: null,
      clipPathUnits: null,
      clipRule: null,
      color: null,
      colorInterpolation: null,
      colorInterpolationFilters: null,
      colorProfile: null,
      colorRendering: null,
      content: null,
      contentScriptType: null,
      contentStyleType: null,
      crossOrigin: null,
      cursor: null,
      cx: null,
      cy: null,
      d: null,
      dataType: null,
      defaultAction: null,
      descent: number,
      diffuseConstant: number,
      direction: null,
      display: null,
      dur: null,
      divisor: number,
      dominantBaseline: null,
      download: boolean,
      dx: null,
      dy: null,
      edgeMode: null,
      editable: null,
      elevation: number,
      enableBackground: null,
      end: null,
      event: null,
      exponent: number,
      externalResourcesRequired: null,
      fill: null,
      fillOpacity: number,
      fillRule: null,
      filter: null,
      filterRes: null,
      filterUnits: null,
      floodColor: null,
      floodOpacity: null,
      focusable: null,
      focusHighlight: null,
      fontFamily: null,
      fontSize: null,
      fontSizeAdjust: null,
      fontStretch: null,
      fontStyle: null,
      fontVariant: null,
      fontWeight: null,
      format: null,
      fr: null,
      from: null,
      fx: null,
      fy: null,
      g1: commaSeparated,
      g2: commaSeparated,
      glyphName: commaSeparated,
      glyphOrientationHorizontal: null,
      glyphOrientationVertical: null,
      glyphRef: null,
      gradientTransform: null,
      gradientUnits: null,
      handler: null,
      hanging: number,
      hatchContentUnits: null,
      hatchUnits: null,
      height: null,
      href: null,
      hrefLang: null,
      horizAdvX: number,
      horizOriginX: number,
      horizOriginY: number,
      id: null,
      ideographic: number,
      imageRendering: null,
      initialVisibility: null,
      in: null,
      in2: null,
      intercept: number,
      k: number,
      k1: number,
      k2: number,
      k3: number,
      k4: number,
      kernelMatrix: commaOrSpaceSeparated,
      kernelUnitLength: null,
      keyPoints: null,
      // SEMI_COLON_SEPARATED
      keySplines: null,
      // SEMI_COLON_SEPARATED
      keyTimes: null,
      // SEMI_COLON_SEPARATED
      kerning: null,
      lang: null,
      lengthAdjust: null,
      letterSpacing: null,
      lightingColor: null,
      limitingConeAngle: number,
      local: null,
      markerEnd: null,
      markerMid: null,
      markerStart: null,
      markerHeight: null,
      markerUnits: null,
      markerWidth: null,
      mask: null,
      maskContentUnits: null,
      maskUnits: null,
      mathematical: null,
      max: null,
      media: null,
      mediaCharacterEncoding: null,
      mediaContentEncodings: null,
      mediaSize: number,
      mediaTime: null,
      method: null,
      min: null,
      mode: null,
      name: null,
      navDown: null,
      navDownLeft: null,
      navDownRight: null,
      navLeft: null,
      navNext: null,
      navPrev: null,
      navRight: null,
      navUp: null,
      navUpLeft: null,
      navUpRight: null,
      numOctaves: null,
      observer: null,
      offset: null,
      onAbort: null,
      onActivate: null,
      onAfterPrint: null,
      onBeforePrint: null,
      onBegin: null,
      onCancel: null,
      onCanPlay: null,
      onCanPlayThrough: null,
      onChange: null,
      onClick: null,
      onClose: null,
      onCopy: null,
      onCueChange: null,
      onCut: null,
      onDblClick: null,
      onDrag: null,
      onDragEnd: null,
      onDragEnter: null,
      onDragExit: null,
      onDragLeave: null,
      onDragOver: null,
      onDragStart: null,
      onDrop: null,
      onDurationChange: null,
      onEmptied: null,
      onEnd: null,
      onEnded: null,
      onError: null,
      onFocus: null,
      onFocusIn: null,
      onFocusOut: null,
      onHashChange: null,
      onInput: null,
      onInvalid: null,
      onKeyDown: null,
      onKeyPress: null,
      onKeyUp: null,
      onLoad: null,
      onLoadedData: null,
      onLoadedMetadata: null,
      onLoadStart: null,
      onMessage: null,
      onMouseDown: null,
      onMouseEnter: null,
      onMouseLeave: null,
      onMouseMove: null,
      onMouseOut: null,
      onMouseOver: null,
      onMouseUp: null,
      onMouseWheel: null,
      onOffline: null,
      onOnline: null,
      onPageHide: null,
      onPageShow: null,
      onPaste: null,
      onPause: null,
      onPlay: null,
      onPlaying: null,
      onPopState: null,
      onProgress: null,
      onRateChange: null,
      onRepeat: null,
      onReset: null,
      onResize: null,
      onScroll: null,
      onSeeked: null,
      onSeeking: null,
      onSelect: null,
      onShow: null,
      onStalled: null,
      onStorage: null,
      onSubmit: null,
      onSuspend: null,
      onTimeUpdate: null,
      onToggle: null,
      onUnload: null,
      onVolumeChange: null,
      onWaiting: null,
      onZoom: null,
      opacity: null,
      operator: null,
      order: null,
      orient: null,
      orientation: null,
      origin: null,
      overflow: null,
      overlay: null,
      overlinePosition: number,
      overlineThickness: number,
      paintOrder: null,
      panose1: null,
      path: null,
      pathLength: number,
      patternContentUnits: null,
      patternTransform: null,
      patternUnits: null,
      phase: null,
      ping: spaceSeparated,
      pitch: null,
      playbackOrder: null,
      pointerEvents: null,
      points: null,
      pointsAtX: number,
      pointsAtY: number,
      pointsAtZ: number,
      preserveAlpha: null,
      preserveAspectRatio: null,
      primitiveUnits: null,
      propagate: null,
      property: commaOrSpaceSeparated,
      r: null,
      radius: null,
      referrerPolicy: null,
      refX: null,
      refY: null,
      rel: commaOrSpaceSeparated,
      rev: commaOrSpaceSeparated,
      renderingIntent: null,
      repeatCount: null,
      repeatDur: null,
      requiredExtensions: commaOrSpaceSeparated,
      requiredFeatures: commaOrSpaceSeparated,
      requiredFonts: commaOrSpaceSeparated,
      requiredFormats: commaOrSpaceSeparated,
      resource: null,
      restart: null,
      result: null,
      rotate: null,
      rx: null,
      ry: null,
      scale: null,
      seed: null,
      shapeRendering: null,
      side: null,
      slope: null,
      snapshotTime: null,
      specularConstant: number,
      specularExponent: number,
      spreadMethod: null,
      spacing: null,
      startOffset: null,
      stdDeviation: null,
      stemh: null,
      stemv: null,
      stitchTiles: null,
      stopColor: null,
      stopOpacity: null,
      strikethroughPosition: number,
      strikethroughThickness: number,
      string: null,
      stroke: null,
      strokeDashArray: commaOrSpaceSeparated,
      strokeDashOffset: null,
      strokeLineCap: null,
      strokeLineJoin: null,
      strokeMiterLimit: number,
      strokeOpacity: number,
      strokeWidth: null,
      style: null,
      surfaceScale: number,
      syncBehavior: null,
      syncBehaviorDefault: null,
      syncMaster: null,
      syncTolerance: null,
      syncToleranceDefault: null,
      systemLanguage: commaOrSpaceSeparated,
      tabIndex: number,
      tableValues: null,
      target: null,
      targetX: number,
      targetY: number,
      textAnchor: null,
      textDecoration: null,
      textRendering: null,
      textLength: null,
      timelineBegin: null,
      title: null,
      transformBehavior: null,
      type: null,
      typeOf: commaOrSpaceSeparated,
      to: null,
      transform: null,
      transformOrigin: null,
      u1: null,
      u2: null,
      underlinePosition: number,
      underlineThickness: number,
      unicode: null,
      unicodeBidi: null,
      unicodeRange: null,
      unitsPerEm: number,
      values: null,
      vAlphabetic: number,
      vMathematical: number,
      vectorEffect: null,
      vHanging: number,
      vIdeographic: number,
      version: null,
      vertAdvY: number,
      vertOriginX: number,
      vertOriginY: number,
      viewBox: null,
      viewTarget: null,
      visibility: null,
      width: null,
      widths: null,
      wordSpacing: null,
      writingMode: null,
      x: null,
      x1: null,
      x2: null,
      xChannelSelector: null,
      xHeight: number,
      y: null,
      y1: null,
      y2: null,
      yChannelSelector: null,
      z: null,
      zoomAndPan: null
    }
  }), valid = /^data[-\w.:]+$/i, dash = /-[a-z]/g, cap = /[A-Z]/g;
  function find(schema, value) {
    let normal = normalize(value), prop = value, Type = Info;
    if (normal in schema.normal)
      return schema.property[schema.normal[normal]];
    if (normal.length > 4 && normal.slice(0, 4) === "data" && valid.test(value)) {
      if (value.charAt(4) === "-") {
        let rest = value.slice(5).replace(dash, camelcase);
        prop = "data" + rest.charAt(0).toUpperCase() + rest.slice(1);
      } else {
        let rest = value.slice(4);
        if (!dash.test(rest)) {
          let dashes = rest.replace(cap, kebab);
          dashes.charAt(0) !== "-" && (dashes = "-" + dashes), value = "data" + dashes;
        }
      }
      Type = DefinedInfo;
    }
    return new Type(prop, value);
  }
  function kebab($0) {
    return "-" + $0.toLowerCase();
  }
  function camelcase($0) {
    return $0.charAt(1).toUpperCase();
  }
  var html$2 = merge([xml, xlink, xmlns, aria, html$3], "html"), svg = merge([xml, xlink, xmlns, aria, svg$1], "svg"), own$2 = {}.hasOwnProperty;
  function zwitch(key2, options) {
    let settings = options || {};
    function one2(value, ...parameters) {
      let fn = one2.invalid, handlers = one2.handlers;
      if (value && own$2.call(value, key2)) {
        let id = String(value[key2]);
        fn = own$2.call(handlers, id) ? handlers[id] : one2.unknown;
      }
      if (fn)
        return fn.call(this, value, ...parameters);
    }
    return one2.handlers = settings.handlers || {}, one2.invalid = settings.invalid, one2.unknown = settings.unknown, one2;
  }
  function core(value, options) {
    if (value = value.replace(
      options.subset ? charactersToExpression(options.subset) : /["&'<>`]/g,
      basic
    ), options.subset || options.escapeOnly)
      return value;
    return value.replace(/[\uD800-\uDBFF][\uDC00-\uDFFF]/g, surrogate).replace(
      // eslint-disable-next-line no-control-regex, unicorn/no-hex-escape
      /[\x01-\t\v\f\x0E-\x1F\x7F\x81\x8D\x8F\x90\x9D\xA0-\uFFFF]/g,
      basic
    );
    function surrogate(pair, index, all2) {
      return options.format(
        (pair.charCodeAt(0) - 55296) * 1024 + pair.charCodeAt(1) - 56320 + 65536,
        all2.charCodeAt(index + 2),
        options
      );
    }
    function basic(character, index, all2) {
      return options.format(
        character.charCodeAt(0),
        all2.charCodeAt(index + 1),
        options
      );
    }
  }
  function charactersToExpression(subset) {
    let groups = [], index = -1;
    for (; ++index < subset.length; )
      groups.push(subset[index].replace(/[|\\{}()[\]^$+*?.]/g, "\\$&"));
    return new RegExp("(?:" + groups.join("|") + ")", "g");
  }
  function toHexadecimal(code, next, omit) {
    let value = "&#x" + code.toString(16).toUpperCase();
    return omit && next && !/[\dA-Fa-f]/.test(String.fromCharCode(next)) ? value : value + ";";
  }
  function toDecimal(code, next, omit) {
    let value = "&#" + String(code);
    return omit && next && !/\d/.test(String.fromCharCode(next)) ? value : value + ";";
  }
  var characterEntitiesLegacy = [
    "AElig",
    "AMP",
    "Aacute",
    "Acirc",
    "Agrave",
    "Aring",
    "Atilde",
    "Auml",
    "COPY",
    "Ccedil",
    "ETH",
    "Eacute",
    "Ecirc",
    "Egrave",
    "Euml",
    "GT",
    "Iacute",
    "Icirc",
    "Igrave",
    "Iuml",
    "LT",
    "Ntilde",
    "Oacute",
    "Ocirc",
    "Ograve",
    "Oslash",
    "Otilde",
    "Ouml",
    "QUOT",
    "REG",
    "THORN",
    "Uacute",
    "Ucirc",
    "Ugrave",
    "Uuml",
    "Yacute",
    "aacute",
    "acirc",
    "acute",
    "aelig",
    "agrave",
    "amp",
    "aring",
    "atilde",
    "auml",
    "brvbar",
    "ccedil",
    "cedil",
    "cent",
    "copy",
    "curren",
    "deg",
    "divide",
    "eacute",
    "ecirc",
    "egrave",
    "eth",
    "euml",
    "frac12",
    "frac14",
    "frac34",
    "gt",
    "iacute",
    "icirc",
    "iexcl",
    "igrave",
    "iquest",
    "iuml",
    "laquo",
    "lt",
    "macr",
    "micro",
    "middot",
    "nbsp",
    "not",
    "ntilde",
    "oacute",
    "ocirc",
    "ograve",
    "ordf",
    "ordm",
    "oslash",
    "otilde",
    "ouml",
    "para",
    "plusmn",
    "pound",
    "quot",
    "raquo",
    "reg",
    "sect",
    "shy",
    "sup1",
    "sup2",
    "sup3",
    "szlig",
    "thorn",
    "times",
    "uacute",
    "ucirc",
    "ugrave",
    "uml",
    "uuml",
    "yacute",
    "yen",
    "yuml"
  ], characterEntitiesHtml4 = {
    nbsp: "\xA0",
    iexcl: "\xA1",
    cent: "\xA2",
    pound: "\xA3",
    curren: "\xA4",
    yen: "\xA5",
    brvbar: "\xA6",
    sect: "\xA7",
    uml: "\xA8",
    copy: "\xA9",
    ordf: "\xAA",
    laquo: "\xAB",
    not: "\xAC",
    shy: "\xAD",
    reg: "\xAE",
    macr: "\xAF",
    deg: "\xB0",
    plusmn: "\xB1",
    sup2: "\xB2",
    sup3: "\xB3",
    acute: "\xB4",
    micro: "\xB5",
    para: "\xB6",
    middot: "\xB7",
    cedil: "\xB8",
    sup1: "\xB9",
    ordm: "\xBA",
    raquo: "\xBB",
    frac14: "\xBC",
    frac12: "\xBD",
    frac34: "\xBE",
    iquest: "\xBF",
    Agrave: "\xC0",
    Aacute: "\xC1",
    Acirc: "\xC2",
    Atilde: "\xC3",
    Auml: "\xC4",
    Aring: "\xC5",
    AElig: "\xC6",
    Ccedil: "\xC7",
    Egrave: "\xC8",
    Eacute: "\xC9",
    Ecirc: "\xCA",
    Euml: "\xCB",
    Igrave: "\xCC",
    Iacute: "\xCD",
    Icirc: "\xCE",
    Iuml: "\xCF",
    ETH: "\xD0",
    Ntilde: "\xD1",
    Ograve: "\xD2",
    Oacute: "\xD3",
    Ocirc: "\xD4",
    Otilde: "\xD5",
    Ouml: "\xD6",
    times: "\xD7",
    Oslash: "\xD8",
    Ugrave: "\xD9",
    Uacute: "\xDA",
    Ucirc: "\xDB",
    Uuml: "\xDC",
    Yacute: "\xDD",
    THORN: "\xDE",
    szlig: "\xDF",
    agrave: "\xE0",
    aacute: "\xE1",
    acirc: "\xE2",
    atilde: "\xE3",
    auml: "\xE4",
    aring: "\xE5",
    aelig: "\xE6",
    ccedil: "\xE7",
    egrave: "\xE8",
    eacute: "\xE9",
    ecirc: "\xEA",
    euml: "\xEB",
    igrave: "\xEC",
    iacute: "\xED",
    icirc: "\xEE",
    iuml: "\xEF",
    eth: "\xF0",
    ntilde: "\xF1",
    ograve: "\xF2",
    oacute: "\xF3",
    ocirc: "\xF4",
    otilde: "\xF5",
    ouml: "\xF6",
    divide: "\xF7",
    oslash: "\xF8",
    ugrave: "\xF9",
    uacute: "\xFA",
    ucirc: "\xFB",
    uuml: "\xFC",
    yacute: "\xFD",
    thorn: "\xFE",
    yuml: "\xFF",
    fnof: "\u0192",
    Alpha: "\u0391",
    Beta: "\u0392",
    Gamma: "\u0393",
    Delta: "\u0394",
    Epsilon: "\u0395",
    Zeta: "\u0396",
    Eta: "\u0397",
    Theta: "\u0398",
    Iota: "\u0399",
    Kappa: "\u039A",
    Lambda: "\u039B",
    Mu: "\u039C",
    Nu: "\u039D",
    Xi: "\u039E",
    Omicron: "\u039F",
    Pi: "\u03A0",
    Rho: "\u03A1",
    Sigma: "\u03A3",
    Tau: "\u03A4",
    Upsilon: "\u03A5",
    Phi: "\u03A6",
    Chi: "\u03A7",
    Psi: "\u03A8",
    Omega: "\u03A9",
    alpha: "\u03B1",
    beta: "\u03B2",
    gamma: "\u03B3",
    delta: "\u03B4",
    epsilon: "\u03B5",
    zeta: "\u03B6",
    eta: "\u03B7",
    theta: "\u03B8",
    iota: "\u03B9",
    kappa: "\u03BA",
    lambda: "\u03BB",
    mu: "\u03BC",
    nu: "\u03BD",
    xi: "\u03BE",
    omicron: "\u03BF",
    pi: "\u03C0",
    rho: "\u03C1",
    sigmaf: "\u03C2",
    sigma: "\u03C3",
    tau: "\u03C4",
    upsilon: "\u03C5",
    phi: "\u03C6",
    chi: "\u03C7",
    psi: "\u03C8",
    omega: "\u03C9",
    thetasym: "\u03D1",
    upsih: "\u03D2",
    piv: "\u03D6",
    bull: "\u2022",
    hellip: "\u2026",
    prime: "\u2032",
    Prime: "\u2033",
    oline: "\u203E",
    frasl: "\u2044",
    weierp: "\u2118",
    image: "\u2111",
    real: "\u211C",
    trade: "\u2122",
    alefsym: "\u2135",
    larr: "\u2190",
    uarr: "\u2191",
    rarr: "\u2192",
    darr: "\u2193",
    harr: "\u2194",
    crarr: "\u21B5",
    lArr: "\u21D0",
    uArr: "\u21D1",
    rArr: "\u21D2",
    dArr: "\u21D3",
    hArr: "\u21D4",
    forall: "\u2200",
    part: "\u2202",
    exist: "\u2203",
    empty: "\u2205",
    nabla: "\u2207",
    isin: "\u2208",
    notin: "\u2209",
    ni: "\u220B",
    prod: "\u220F",
    sum: "\u2211",
    minus: "\u2212",
    lowast: "\u2217",
    radic: "\u221A",
    prop: "\u221D",
    infin: "\u221E",
    ang: "\u2220",
    and: "\u2227",
    or: "\u2228",
    cap: "\u2229",
    cup: "\u222A",
    int: "\u222B",
    there4: "\u2234",
    sim: "\u223C",
    cong: "\u2245",
    asymp: "\u2248",
    ne: "\u2260",
    equiv: "\u2261",
    le: "\u2264",
    ge: "\u2265",
    sub: "\u2282",
    sup: "\u2283",
    nsub: "\u2284",
    sube: "\u2286",
    supe: "\u2287",
    oplus: "\u2295",
    otimes: "\u2297",
    perp: "\u22A5",
    sdot: "\u22C5",
    lceil: "\u2308",
    rceil: "\u2309",
    lfloor: "\u230A",
    rfloor: "\u230B",
    lang: "\u2329",
    rang: "\u232A",
    loz: "\u25CA",
    spades: "\u2660",
    clubs: "\u2663",
    hearts: "\u2665",
    diams: "\u2666",
    quot: '"',
    amp: "&",
    lt: "<",
    gt: ">",
    OElig: "\u0152",
    oelig: "\u0153",
    Scaron: "\u0160",
    scaron: "\u0161",
    Yuml: "\u0178",
    circ: "\u02C6",
    tilde: "\u02DC",
    ensp: "\u2002",
    emsp: "\u2003",
    thinsp: "\u2009",
    zwnj: "\u200C",
    zwj: "\u200D",
    lrm: "\u200E",
    rlm: "\u200F",
    ndash: "\u2013",
    mdash: "\u2014",
    lsquo: "\u2018",
    rsquo: "\u2019",
    sbquo: "\u201A",
    ldquo: "\u201C",
    rdquo: "\u201D",
    bdquo: "\u201E",
    dagger: "\u2020",
    Dagger: "\u2021",
    permil: "\u2030",
    lsaquo: "\u2039",
    rsaquo: "\u203A",
    euro: "\u20AC"
  }, dangerous = [
    "cent",
    "copy",
    "divide",
    "gt",
    "lt",
    "not",
    "para",
    "times"
  ], own$1 = {}.hasOwnProperty, characters = {}, key;
  for (key in characterEntitiesHtml4)
    own$1.call(characterEntitiesHtml4, key) && (characters[characterEntitiesHtml4[key]] = key);
  function toNamed(code, next, omit, attribute) {
    let character = String.fromCharCode(code);
    if (own$1.call(characters, character)) {
      let name = characters[character], value = "&" + name;
      return omit && characterEntitiesLegacy.includes(name) && !dangerous.includes(name) && (!attribute || next && next !== 61 && /[^\da-z]/i.test(String.fromCharCode(next))) ? value : value + ";";
    }
    return "";
  }
  function formatSmart(code, next, options) {
    let numeric = toHexadecimal(code, next, options.omitOptionalSemicolons), named;
    if ((options.useNamedReferences || options.useShortestReferences) && (named = toNamed(
      code,
      next,
      options.omitOptionalSemicolons,
      options.attribute
    )), (options.useShortestReferences || !named) && options.useShortestReferences) {
      let decimal = toDecimal(code, next, options.omitOptionalSemicolons);
      decimal.length < numeric.length && (numeric = decimal);
    }
    return named && (!options.useShortestReferences || named.length < numeric.length) ? named : numeric;
  }
  function stringifyEntities(value, options) {
    return core(value, Object.assign({ format: formatSmart }, options));
  }
  var htmlCommentRegex = /^>|^->|<!--|-->|--!>|<!-$/g, bogusCommentEntitySubset = [">"], commentEntitySubset = ["<", ">"];
  function comment(node, _1, _2, state) {
    return state.settings.bogusComments ? "<?" + stringifyEntities(
      node.value,
      Object.assign({}, state.settings.characterReferences, {
        subset: bogusCommentEntitySubset
      })
    ) + ">" : "<!--" + node.value.replace(htmlCommentRegex, encode) + "-->";
    function encode($0) {
      return stringifyEntities(
        $0,
        Object.assign({}, state.settings.characterReferences, {
          subset: commentEntitySubset
        })
      );
    }
  }
  function doctype(_1, _2, _3, state) {
    return "<!" + (state.settings.upperDoctype ? "DOCTYPE" : "doctype") + (state.settings.tightDoctype ? "" : " ") + "html>";
  }
  function ccount(value, character) {
    let source = String(value);
    if (typeof character != "string")
      throw new TypeError("Expected character");
    let count = 0, index = source.indexOf(character);
    for (; index !== -1; )
      count++, index = source.indexOf(character, index + character.length);
    return count;
  }
  function stringify$1(values, options) {
    let settings = options || {};
    return (values[values.length - 1] === "" ? [...values, ""] : values).join(
      (settings.padRight ? " " : "") + "," + (settings.padLeft === !1 ? "" : " ")
    ).trim();
  }
  function stringify(values) {
    return values.join(" ").trim();
  }
  var re = /[ \t\n\f\r]/g;
  function whitespace(thing) {
    return typeof thing == "object" ? thing.type === "text" ? empty(thing.value) : !1 : empty(thing);
  }
  function empty(value) {
    return value.replace(re, "") === "";
  }
  var siblingAfter = siblings(1), siblingBefore = siblings(-1), emptyChildren$1 = [];
  function siblings(increment2) {
    return sibling;
    function sibling(parent, index, includeWhitespace) {
      let siblings2 = parent ? parent.children : emptyChildren$1, offset = (index || 0) + increment2, next = siblings2[offset];
      if (!includeWhitespace)
        for (; next && whitespace(next); )
          offset += increment2, next = siblings2[offset];
      return next;
    }
  }
  var own = {}.hasOwnProperty;
  function omission(handlers) {
    return omit;
    function omit(node, index, parent) {
      return own.call(handlers, node.tagName) && handlers[node.tagName](node, index, parent);
    }
  }
  var closing = omission({
    body: body$1,
    caption: headOrColgroupOrCaption,
    colgroup: headOrColgroupOrCaption,
    dd,
    dt,
    head: headOrColgroupOrCaption,
    html: html$1,
    li,
    optgroup,
    option,
    p,
    rp: rubyElement,
    rt: rubyElement,
    tbody: tbody$1,
    td: cells,
    tfoot,
    th: cells,
    thead,
    tr
  });
  function headOrColgroupOrCaption(_, index, parent) {
    let next = siblingAfter(parent, index, !0);
    return !next || next.type !== "comment" && !(next.type === "text" && whitespace(next.value.charAt(0)));
  }
  function html$1(_, index, parent) {
    let next = siblingAfter(parent, index);
    return !next || next.type !== "comment";
  }
  function body$1(_, index, parent) {
    let next = siblingAfter(parent, index);
    return !next || next.type !== "comment";
  }
  function p(_, index, parent) {
    let next = siblingAfter(parent, index);
    return next ? next.type === "element" && (next.tagName === "address" || next.tagName === "article" || next.tagName === "aside" || next.tagName === "blockquote" || next.tagName === "details" || next.tagName === "div" || next.tagName === "dl" || next.tagName === "fieldset" || next.tagName === "figcaption" || next.tagName === "figure" || next.tagName === "footer" || next.tagName === "form" || next.tagName === "h1" || next.tagName === "h2" || next.tagName === "h3" || next.tagName === "h4" || next.tagName === "h5" || next.tagName === "h6" || next.tagName === "header" || next.tagName === "hgroup" || next.tagName === "hr" || next.tagName === "main" || next.tagName === "menu" || next.tagName === "nav" || next.tagName === "ol" || next.tagName === "p" || next.tagName === "pre" || next.tagName === "section" || next.tagName === "table" || next.tagName === "ul") : !parent || // Confusing parent.
    !(parent.type === "element" && (parent.tagName === "a" || parent.tagName === "audio" || parent.tagName === "del" || parent.tagName === "ins" || parent.tagName === "map" || parent.tagName === "noscript" || parent.tagName === "video"));
  }
  function li(_, index, parent) {
    let next = siblingAfter(parent, index);
    return !next || next.type === "element" && next.tagName === "li";
  }
  function dt(_, index, parent) {
    let next = siblingAfter(parent, index);
    return !!(next && next.type === "element" && (next.tagName === "dt" || next.tagName === "dd"));
  }
  function dd(_, index, parent) {
    let next = siblingAfter(parent, index);
    return !next || next.type === "element" && (next.tagName === "dt" || next.tagName === "dd");
  }
  function rubyElement(_, index, parent) {
    let next = siblingAfter(parent, index);
    return !next || next.type === "element" && (next.tagName === "rp" || next.tagName === "rt");
  }
  function optgroup(_, index, parent) {
    let next = siblingAfter(parent, index);
    return !next || next.type === "element" && next.tagName === "optgroup";
  }
  function option(_, index, parent) {
    let next = siblingAfter(parent, index);
    return !next || next.type === "element" && (next.tagName === "option" || next.tagName === "optgroup");
  }
  function thead(_, index, parent) {
    let next = siblingAfter(parent, index);
    return !!(next && next.type === "element" && (next.tagName === "tbody" || next.tagName === "tfoot"));
  }
  function tbody$1(_, index, parent) {
    let next = siblingAfter(parent, index);
    return !next || next.type === "element" && (next.tagName === "tbody" || next.tagName === "tfoot");
  }
  function tfoot(_, index, parent) {
    return !siblingAfter(parent, index);
  }
  function tr(_, index, parent) {
    let next = siblingAfter(parent, index);
    return !next || next.type === "element" && next.tagName === "tr";
  }
  function cells(_, index, parent) {
    let next = siblingAfter(parent, index);
    return !next || next.type === "element" && (next.tagName === "td" || next.tagName === "th");
  }
  var opening = omission({
    body,
    colgroup,
    head,
    html,
    tbody
  });
  function html(node) {
    let head2 = siblingAfter(node, -1);
    return !head2 || head2.type !== "comment";
  }
  function head(node) {
    let children = node.children, seen = [], index = -1;
    for (; ++index < children.length; ) {
      let child = children[index];
      if (child.type === "element" && (child.tagName === "title" || child.tagName === "base")) {
        if (seen.includes(child.tagName)) return !1;
        seen.push(child.tagName);
      }
    }
    return children.length > 0;
  }
  function body(node) {
    let head2 = siblingAfter(node, -1, !0);
    return !head2 || head2.type !== "comment" && !(head2.type === "text" && whitespace(head2.value.charAt(0))) && !(head2.type === "element" && (head2.tagName === "meta" || head2.tagName === "link" || head2.tagName === "script" || head2.tagName === "style" || head2.tagName === "template"));
  }
  function colgroup(node, index, parent) {
    let previous = siblingBefore(parent, index), head2 = siblingAfter(node, -1, !0);
    return parent && previous && previous.type === "element" && previous.tagName === "colgroup" && closing(previous, parent.children.indexOf(previous), parent) ? !1 : !!(head2 && head2.type === "element" && head2.tagName === "col");
  }
  function tbody(node, index, parent) {
    let previous = siblingBefore(parent, index), head2 = siblingAfter(node, -1);
    return parent && previous && previous.type === "element" && (previous.tagName === "thead" || previous.tagName === "tbody") && closing(previous, parent.children.indexOf(previous), parent) ? !1 : !!(head2 && head2.type === "element" && head2.tagName === "tr");
  }
  var constants = {
    // See: <https://html.spec.whatwg.org/#attribute-name-state>.
    name: [
      [`	
\f\r &/=>`.split(""), `	
\f\r "&'/=>\``.split("")],
      [`\0	
\f\r "&'/<=>`.split(""), `\0	
\f\r "&'/<=>\``.split("")]
    ],
    // See: <https://html.spec.whatwg.org/#attribute-value-(unquoted)-state>.
    unquoted: [
      [`	
\f\r &>`.split(""), `\0	
\f\r "&'<=>\``.split("")],
      [`\0	
\f\r "&'<=>\``.split(""), `\0	
\f\r "&'<=>\``.split("")]
    ],
    // See: <https://html.spec.whatwg.org/#attribute-value-(single-quoted)-state>.
    single: [
      ["&'".split(""), "\"&'`".split("")],
      ["\0&'".split(""), "\0\"&'`".split("")]
    ],
    // See: <https://html.spec.whatwg.org/#attribute-value-(double-quoted)-state>.
    double: [
      ['"&'.split(""), "\"&'`".split("")],
      ['\0"&'.split(""), "\0\"&'`".split("")]
    ]
  };
  function element(node, index, parent, state) {
    let schema = state.schema, omit = schema.space === "svg" ? !1 : state.settings.omitOptionalTags, selfClosing = schema.space === "svg" ? state.settings.closeEmptyElements : state.settings.voids.includes(node.tagName.toLowerCase()), parts = [], last;
    schema.space === "html" && node.tagName === "svg" && (state.schema = svg);
    let attributes = serializeAttributes(state, node.properties), content = state.all(
      schema.space === "html" && node.tagName === "template" ? node.content : node
    );
    return state.schema = schema, content && (selfClosing = !1), (attributes || !omit || !opening(node, index, parent)) && (parts.push("<", node.tagName, attributes ? " " + attributes : ""), selfClosing && (schema.space === "svg" || state.settings.closeSelfClosing) && (last = attributes.charAt(attributes.length - 1), (!state.settings.tightSelfClosing || last === "/" || last && last !== '"' && last !== "'") && parts.push(" "), parts.push("/")), parts.push(">")), parts.push(content), !selfClosing && (!omit || !closing(node, index, parent)) && parts.push("</" + node.tagName + ">"), parts.join("");
  }
  function serializeAttributes(state, properties) {
    let values = [], index = -1, key2;
    if (properties) {
      for (key2 in properties)
        if (properties[key2] !== null && properties[key2] !== void 0) {
          let value = serializeAttribute(state, key2, properties[key2]);
          value && values.push(value);
        }
    }
    for (; ++index < values.length; ) {
      let last = state.settings.tightAttributes ? values[index].charAt(values[index].length - 1) : void 0;
      index !== values.length - 1 && last !== '"' && last !== "'" && (values[index] += " ");
    }
    return values.join("");
  }
  function serializeAttribute(state, key2, value) {
    let info = find(state.schema, key2), x = state.settings.allowParseErrors && state.schema.space === "html" ? 0 : 1, y = state.settings.allowDangerousCharacters ? 0 : 1, quote = state.quote, result;
    if (info.overloadedBoolean && (value === info.attribute || value === "") ? value = !0 : (info.boolean || info.overloadedBoolean && typeof value != "string") && (value = !!value), value == null || value === !1 || typeof value == "number" && Number.isNaN(value))
      return "";
    let name = stringifyEntities(
      info.attribute,
      Object.assign({}, state.settings.characterReferences, {
        // Always encode without parse errors in non-HTML.
        subset: constants.name[x][y]
      })
    );
    return value === !0 || (value = Array.isArray(value) ? (info.commaSeparated ? stringify$1 : stringify)(value, {
      padLeft: !state.settings.tightCommaSeparatedLists
    }) : String(value), state.settings.collapseEmptyAttributes && !value) ? name : (state.settings.preferUnquoted && (result = stringifyEntities(
      value,
      Object.assign({}, state.settings.characterReferences, {
        attribute: !0,
        subset: constants.unquoted[x][y]
      })
    )), result !== value && (state.settings.quoteSmart && ccount(value, quote) > ccount(value, state.alternative) && (quote = state.alternative), result = quote + stringifyEntities(
      value,
      Object.assign({}, state.settings.characterReferences, {
        // Always encode without parse errors in non-HTML.
        subset: (quote === "'" ? constants.single : constants.double)[x][y],
        attribute: !0
      })
    ) + quote), name + (result && "=" + result));
  }
  var textEntitySubset = ["<", "&"];
  function text(node, _, parent, state) {
    return parent && parent.type === "element" && (parent.tagName === "script" || parent.tagName === "style") ? node.value : stringifyEntities(
      node.value,
      Object.assign({}, state.settings.characterReferences, {
        subset: textEntitySubset
      })
    );
  }
  function raw(node, index, parent, state) {
    return state.settings.allowDangerousHtml ? node.value : text(node, index, parent, state);
  }
  function root(node, _1, _2, state) {
    return state.all(node);
  }
  var handle = zwitch("type", {
    invalid,
    unknown,
    handlers: { comment, doctype, element, raw, root, text }
  });
  function invalid(node) {
    throw new Error("Expected node, not `" + node + "`");
  }
  function unknown(node_) {
    let node = (
      /** @type {Nodes} */
      node_
    );
    throw new Error("Cannot compile unknown node `" + node.type + "`");
  }
  var emptyOptions = {}, emptyCharacterReferences = {}, emptyChildren = [];
  function toHtml(tree, options) {
    let options_ = options || emptyOptions, quote = options_.quote || '"', alternative = quote === '"' ? "'" : '"';
    if (quote !== '"' && quote !== "'")
      throw new Error("Invalid quote `" + quote + "`, expected `'` or `\"`");
    return {
      one,
      all,
      settings: {
        omitOptionalTags: options_.omitOptionalTags || !1,
        allowParseErrors: options_.allowParseErrors || !1,
        allowDangerousCharacters: options_.allowDangerousCharacters || !1,
        quoteSmart: options_.quoteSmart || !1,
        preferUnquoted: options_.preferUnquoted || !1,
        tightAttributes: options_.tightAttributes || !1,
        upperDoctype: options_.upperDoctype || !1,
        tightDoctype: options_.tightDoctype || !1,
        bogusComments: options_.bogusComments || !1,
        tightCommaSeparatedLists: options_.tightCommaSeparatedLists || !1,
        tightSelfClosing: options_.tightSelfClosing || !1,
        collapseEmptyAttributes: options_.collapseEmptyAttributes || !1,
        allowDangerousHtml: options_.allowDangerousHtml || !1,
        voids: options_.voids || htmlVoidElements,
        characterReferences: options_.characterReferences || emptyCharacterReferences,
        closeSelfClosing: options_.closeSelfClosing || !1,
        closeEmptyElements: options_.closeEmptyElements || !1
      },
      schema: options_.space === "svg" ? svg : html$2,
      quote,
      alternative
    }.one(
      Array.isArray(tree) ? { type: "root", children: tree } : tree,
      void 0,
      void 0
    );
  }
  function one(node, index, parent) {
    return handle(node, index, parent, this);
  }
  function all(parent) {
    let results = [], children = parent && parent.children || emptyChildren, index = -1;
    for (; ++index < children.length; )
      results[index] = this.one(children[index], index, parent);
    return results.join("");
  }
  function codeToHtml(internal, code, options) {
    let context = {
      meta: {},
      options,
      codeToHast: (_code, _options) => codeToHast(internal, _code, _options),
      codeToTokens: (_code, _options) => codeToTokens(internal, _code, _options)
    }, result = toHtml(codeToHast(internal, code, options, context));
    for (let transformer of getTransformers(options))
      result = transformer.postprocess?.call(context, result, options) || result;
    return result;
  }
  var VSCODE_FALLBACK_EDITOR_FG = { light: "#333333", dark: "#bbbbbb" }, VSCODE_FALLBACK_EDITOR_BG = { light: "#fffffe", dark: "#1e1e1e" }, RESOLVED_KEY = "__shiki_resolved";
  function normalizeTheme(rawTheme) {
    if (rawTheme?.[RESOLVED_KEY])
      return rawTheme;
    let theme = {
      ...rawTheme
    };
    theme.tokenColors && !theme.settings && (theme.settings = theme.tokenColors, delete theme.tokenColors), theme.type ||= "dark", theme.colorReplacements = { ...theme.colorReplacements }, theme.settings ||= [];
    let { bg, fg } = theme;
    if (!bg || !fg) {
      let globalSetting = theme.settings ? theme.settings.find((s2) => !s2.name && !s2.scope) : void 0;
      globalSetting?.settings?.foreground && (fg = globalSetting.settings.foreground), globalSetting?.settings?.background && (bg = globalSetting.settings.background), !fg && theme?.colors?.["editor.foreground"] && (fg = theme.colors["editor.foreground"]), !bg && theme?.colors?.["editor.background"] && (bg = theme.colors["editor.background"]), fg || (fg = theme.type === "light" ? VSCODE_FALLBACK_EDITOR_FG.light : VSCODE_FALLBACK_EDITOR_FG.dark), bg || (bg = theme.type === "light" ? VSCODE_FALLBACK_EDITOR_BG.light : VSCODE_FALLBACK_EDITOR_BG.dark), theme.fg = fg, theme.bg = bg;
    }
    theme.settings[0] && theme.settings[0].settings && !theme.settings[0].scope || theme.settings.unshift({
      settings: {
        foreground: theme.fg,
        background: theme.bg
      }
    });
    let replacementCount = 0, replacementMap = /* @__PURE__ */ new Map();
    function getReplacementColor(value) {
      if (replacementMap.has(value))
        return replacementMap.get(value);
      replacementCount += 1;
      let hex = `#${replacementCount.toString(16).padStart(8, "0").toLowerCase()}`;
      return theme.colorReplacements?.[`#${hex}`] ? getReplacementColor(value) : (replacementMap.set(value, hex), hex);
    }
    theme.settings = theme.settings.map((setting) => {
      let replaceFg = setting.settings?.foreground && !setting.settings.foreground.startsWith("#"), replaceBg = setting.settings?.background && !setting.settings.background.startsWith("#");
      if (!replaceFg && !replaceBg)
        return setting;
      let clone2 = {
        ...setting,
        settings: {
          ...setting.settings
        }
      };
      if (replaceFg) {
        let replacement = getReplacementColor(setting.settings.foreground);
        theme.colorReplacements[replacement] = setting.settings.foreground, clone2.settings.foreground = replacement;
      }
      if (replaceBg) {
        let replacement = getReplacementColor(setting.settings.background);
        theme.colorReplacements[replacement] = setting.settings.background, clone2.settings.background = replacement;
      }
      return clone2;
    });
    for (let key2 of Object.keys(theme.colors || {}))
      if ((key2 === "editor.foreground" || key2 === "editor.background" || key2.startsWith("terminal.ansi")) && !theme.colors[key2]?.startsWith("#")) {
        let replacement = getReplacementColor(theme.colors[key2]);
        theme.colorReplacements[replacement] = theme.colors[key2], theme.colors[key2] = replacement;
      }
    return Object.defineProperty(theme, RESOLVED_KEY, {
      enumerable: !1,
      writable: !1,
      value: !0
    }), theme;
  }
  var Registry2 = class extends Registry$1 {
    _resolver;
    _themes;
    _langs;
    _alias;
    _resolvedThemes = /* @__PURE__ */ new Map();
    _resolvedGrammars = /* @__PURE__ */ new Map();
    _langMap = /* @__PURE__ */ new Map();
    _langGraph = /* @__PURE__ */ new Map();
    _textmateThemeCache = /* @__PURE__ */ new WeakMap();
    _loadedThemesCache = null;
    _loadedLanguagesCache = null;
    constructor(_resolver, _themes, _langs, _alias = {}) {
      super(_resolver), this._resolver = _resolver, this._themes = _themes, this._langs = _langs, this._alias = _alias, _themes.forEach((t3) => this.loadTheme(t3)), _langs.forEach((l2) => this.loadLanguage(l2));
    }
    getTheme(theme) {
      return typeof theme == "string" ? this._resolvedThemes.get(theme) : this.loadTheme(theme);
    }
    loadTheme(theme) {
      let _theme = normalizeTheme(theme);
      return _theme.name && (this._resolvedThemes.set(_theme.name, _theme), this._loadedThemesCache = null), _theme;
    }
    getLoadedThemes() {
      return this._loadedThemesCache || (this._loadedThemesCache = [...this._resolvedThemes.keys()]), this._loadedThemesCache;
    }
    // Override and re-implement this method to cache the textmate themes as `TextMateTheme.createFromRawTheme`
    // is expensive. Themes can switch often especially for dual-theme support.
    //
    // The parent class also accepts `colorMap` as the second parameter, but since we don't use that,
    // we omit here so it's easier to cache the themes.
    setTheme(theme) {
      let textmateTheme = this._textmateThemeCache.get(theme);
      textmateTheme || (textmateTheme = Theme.createFromRawTheme(theme), this._textmateThemeCache.set(theme, textmateTheme)), this._syncRegistry.setTheme(textmateTheme);
    }
    getGrammar(name) {
      if (this._alias[name]) {
        let resolved = /* @__PURE__ */ new Set([name]);
        for (; this._alias[name]; ) {
          if (name = this._alias[name], resolved.has(name))
            throw new ShikiError(`Circular alias \`${Array.from(resolved).join(" -> ")} -> ${name}\``);
          resolved.add(name);
        }
      }
      return this._resolvedGrammars.get(name);
    }
    async loadLanguage(lang3) {
      if (this.getGrammar(lang3.name))
        return;
      let embeddedLazilyBy = new Set([...this._langMap.values()].filter((i2) => i2.embeddedLangsLazy?.includes(lang3.name)));
      this._resolver.addLanguage(lang3);
      let grammarConfig = {
        balancedBracketSelectors: lang3.balancedBracketSelectors || ["*"],
        unbalancedBracketSelectors: lang3.unbalancedBracketSelectors || []
      };
      this._syncRegistry._rawGrammars.set(lang3.scopeName, lang3);
      let g = await this.loadGrammarWithConfiguration(lang3.scopeName, 1, grammarConfig);
      if (g.name = lang3.name, this._resolvedGrammars.set(lang3.name, g), lang3.aliases && lang3.aliases.forEach((alias) => {
        this._alias[alias] = lang3.name;
      }), this._loadedLanguagesCache = null, embeddedLazilyBy.size)
        for (let e3 of embeddedLazilyBy)
          this._resolvedGrammars.delete(e3.name), this._loadedLanguagesCache = null, this._syncRegistry?._injectionGrammars?.delete(e3.scopeName), this._syncRegistry?._grammars?.delete(e3.scopeName), await this.loadLanguage(this._langMap.get(e3.name));
    }
    async init() {
      this._themes.map((t3) => this.loadTheme(t3)), await this.loadLanguages(this._langs);
    }
    dispose() {
      super.dispose(), this._resolvedThemes.clear(), this._resolvedGrammars.clear(), this._langMap.clear(), this._langGraph.clear(), this._loadedThemesCache = null;
    }
    async loadLanguages(langs) {
      for (let lang3 of langs)
        this.resolveEmbeddedLanguages(lang3);
      let langsGraphArray = Array.from(this._langGraph.entries()), missingLangs = langsGraphArray.filter(([_, lang3]) => !lang3);
      if (missingLangs.length) {
        let dependents = langsGraphArray.filter(([_, lang3]) => lang3 && lang3.embeddedLangs?.some((l2) => missingLangs.map(([name]) => name).includes(l2))).filter((lang3) => !missingLangs.includes(lang3));
        throw new ShikiError(`Missing languages ${missingLangs.map(([name]) => `\`${name}\``).join(", ")}, required by ${dependents.map(([name]) => `\`${name}\``).join(", ")}`);
      }
      for (let [_, lang3] of langsGraphArray)
        this._resolver.addLanguage(lang3);
      for (let [_, lang3] of langsGraphArray)
        await this.loadLanguage(lang3);
    }
    getLoadedLanguages() {
      return this._loadedLanguagesCache || (this._loadedLanguagesCache = [
        .../* @__PURE__ */ new Set([...this._resolvedGrammars.keys(), ...Object.keys(this._alias)])
      ]), this._loadedLanguagesCache;
    }
    resolveEmbeddedLanguages(lang3) {
      if (this._langMap.set(lang3.name, lang3), this._langGraph.set(lang3.name, lang3), lang3.embeddedLangs)
        for (let embeddedLang of lang3.embeddedLangs)
          this._langGraph.set(embeddedLang, this._langMap.get(embeddedLang));
    }
  }, Resolver = class {
    _langs = /* @__PURE__ */ new Map();
    _scopeToLang = /* @__PURE__ */ new Map();
    _injections = /* @__PURE__ */ new Map();
    _onigLibPromise;
    constructor(onigLibPromise, langs) {
      this._onigLibPromise = onigLibPromise.then((engine) => ({
        createOnigScanner: (patterns) => engine.createScanner(patterns),
        createOnigString: (s2) => engine.createString(s2)
      })), langs.forEach((i2) => this.addLanguage(i2));
    }
    get onigLib() {
      return this._onigLibPromise;
    }
    getLangRegistration(langIdOrAlias) {
      return this._langs.get(langIdOrAlias);
    }
    async loadGrammar(scopeName) {
      return this._scopeToLang.get(scopeName);
    }
    addLanguage(l2) {
      this._langs.set(l2.name, l2), l2.aliases && l2.aliases.forEach((a) => {
        this._langs.set(a, l2);
      }), this._scopeToLang.set(l2.scopeName, l2), l2.injectTo && l2.injectTo.forEach((i2) => {
        this._injections.get(i2) || this._injections.set(i2, []), this._injections.get(i2).push(l2.scopeName);
      });
    }
    getInjections(scopeName) {
      let scopeParts = scopeName.split("."), injections = [];
      for (let i2 = 1; i2 <= scopeParts.length; i2++) {
        let subScopeName = scopeParts.slice(0, i2).join(".");
        injections = [...injections, ...this._injections.get(subScopeName) || []];
      }
      return injections;
    }
  };
  function getHeapMax() {
    return 2147483648;
  }
  function _emscripten_get_now() {
    return typeof performance < "u" ? performance.now() : Date.now();
  }
  var alignUp = (x, multiple) => x + (multiple - x % multiple) % multiple;
  async function main(init) {
    let wasmMemory, buffer, binding = {};
    function updateGlobalBufferAndViews(buf) {
      buffer = buf, binding.HEAPU8 = new Uint8Array(buf), binding.HEAPU32 = new Uint32Array(buf);
    }
    function _emscripten_memcpy_big(dest, src, num) {
      binding.HEAPU8.copyWithin(dest, src, src + num);
    }
    function emscripten_realloc_buffer(size) {
      try {
        return wasmMemory.grow(size - buffer.byteLength + 65535 >>> 16), updateGlobalBufferAndViews(wasmMemory.buffer), 1;
      } catch {
      }
    }
    function _emscripten_resize_heap(requestedSize) {
      let oldSize = binding.HEAPU8.length;
      requestedSize = requestedSize >>> 0;
      let maxHeapSize = getHeapMax();
      if (requestedSize > maxHeapSize)
        return !1;
      for (let cutDown = 1; cutDown <= 4; cutDown *= 2) {
        let overGrownHeapSize = oldSize * (1 + 0.2 / cutDown);
        overGrownHeapSize = Math.min(overGrownHeapSize, requestedSize + 100663296);
        let newSize = Math.min(maxHeapSize, alignUp(Math.max(requestedSize, overGrownHeapSize), 65536));
        if (emscripten_realloc_buffer(newSize))
          return !0;
      }
      return !1;
    }
    let UTF8Decoder = typeof TextDecoder < "u" ? new TextDecoder("utf8") : void 0;
    function UTF8ArrayToString(heapOrArray, idx, maxBytesToRead = 1024) {
      let endIdx = idx + maxBytesToRead, endPtr = idx;
      for (; heapOrArray[endPtr] && !(endPtr >= endIdx); )
        ++endPtr;
      if (endPtr - idx > 16 && heapOrArray.buffer && UTF8Decoder)
        return UTF8Decoder.decode(heapOrArray.subarray(idx, endPtr));
      let str = "";
      for (; idx < endPtr; ) {
        let u0 = heapOrArray[idx++];
        if (!(u0 & 128)) {
          str += String.fromCharCode(u0);
          continue;
        }
        let u1 = heapOrArray[idx++] & 63;
        if ((u0 & 224) === 192) {
          str += String.fromCharCode((u0 & 31) << 6 | u1);
          continue;
        }
        let u2 = heapOrArray[idx++] & 63;
        if ((u0 & 240) === 224 ? u0 = (u0 & 15) << 12 | u1 << 6 | u2 : u0 = (u0 & 7) << 18 | u1 << 12 | u2 << 6 | heapOrArray[idx++] & 63, u0 < 65536)
          str += String.fromCharCode(u0);
        else {
          let ch = u0 - 65536;
          str += String.fromCharCode(55296 | ch >> 10, 56320 | ch & 1023);
        }
      }
      return str;
    }
    function UTF8ToString(ptr, maxBytesToRead) {
      return ptr ? UTF8ArrayToString(binding.HEAPU8, ptr, maxBytesToRead) : "";
    }
    let asmLibraryArg = {
      emscripten_get_now: _emscripten_get_now,
      emscripten_memcpy_big: _emscripten_memcpy_big,
      emscripten_resize_heap: _emscripten_resize_heap,
      fd_write: () => 0
    };
    async function createWasm() {
      let exports = await init({
        env: asmLibraryArg,
        wasi_snapshot_preview1: asmLibraryArg
      });
      wasmMemory = exports.memory, updateGlobalBufferAndViews(wasmMemory.buffer), Object.assign(binding, exports), binding.UTF8ToString = UTF8ToString;
    }
    return await createWasm(), binding;
  }
  var onigBinding = null;
  function throwLastOnigError(onigBinding2) {
    throw new ShikiError(onigBinding2.UTF8ToString(onigBinding2.getLastOnigError()));
  }
  var UtfString = class _UtfString {
    static _utf8ByteLength(str) {
      let result = 0;
      for (let i2 = 0, len = str.length; i2 < len; i2++) {
        let charCode = str.charCodeAt(i2), codepoint = charCode, wasSurrogatePair = !1;
        if (charCode >= 55296 && charCode <= 56319 && i2 + 1 < len) {
          let nextCharCode = str.charCodeAt(i2 + 1);
          nextCharCode >= 56320 && nextCharCode <= 57343 && (codepoint = (charCode - 55296 << 10) + 65536 | nextCharCode - 56320, wasSurrogatePair = !0);
        }
        codepoint <= 127 ? result += 1 : codepoint <= 2047 ? result += 2 : codepoint <= 65535 ? result += 3 : result += 4, wasSurrogatePair && i2++;
      }
      return result;
    }
    utf16Length;
    utf8Length;
    utf16Value;
    utf8Value;
    utf16OffsetToUtf8;
    utf8OffsetToUtf16;
    constructor(str) {
      let utf16Length = str.length, utf8Length = _UtfString._utf8ByteLength(str), computeIndicesMapping = utf8Length !== utf16Length, utf16OffsetToUtf8 = computeIndicesMapping ? new Uint32Array(utf16Length + 1) : null;
      computeIndicesMapping && (utf16OffsetToUtf8[utf16Length] = utf8Length);
      let utf8OffsetToUtf16 = computeIndicesMapping ? new Uint32Array(utf8Length + 1) : null;
      computeIndicesMapping && (utf8OffsetToUtf16[utf8Length] = utf16Length);
      let utf8Value = new Uint8Array(utf8Length), i8 = 0;
      for (let i16 = 0; i16 < utf16Length; i16++) {
        let charCode = str.charCodeAt(i16), codePoint = charCode, wasSurrogatePair = !1;
        if (charCode >= 55296 && charCode <= 56319 && i16 + 1 < utf16Length) {
          let nextCharCode = str.charCodeAt(i16 + 1);
          nextCharCode >= 56320 && nextCharCode <= 57343 && (codePoint = (charCode - 55296 << 10) + 65536 | nextCharCode - 56320, wasSurrogatePair = !0);
        }
        computeIndicesMapping && (utf16OffsetToUtf8[i16] = i8, wasSurrogatePair && (utf16OffsetToUtf8[i16 + 1] = i8), codePoint <= 127 ? utf8OffsetToUtf16[i8 + 0] = i16 : codePoint <= 2047 ? (utf8OffsetToUtf16[i8 + 0] = i16, utf8OffsetToUtf16[i8 + 1] = i16) : codePoint <= 65535 ? (utf8OffsetToUtf16[i8 + 0] = i16, utf8OffsetToUtf16[i8 + 1] = i16, utf8OffsetToUtf16[i8 + 2] = i16) : (utf8OffsetToUtf16[i8 + 0] = i16, utf8OffsetToUtf16[i8 + 1] = i16, utf8OffsetToUtf16[i8 + 2] = i16, utf8OffsetToUtf16[i8 + 3] = i16)), codePoint <= 127 ? utf8Value[i8++] = codePoint : codePoint <= 2047 ? (utf8Value[i8++] = 192 | (codePoint & 1984) >>> 6, utf8Value[i8++] = 128 | (codePoint & 63) >>> 0) : codePoint <= 65535 ? (utf8Value[i8++] = 224 | (codePoint & 61440) >>> 12, utf8Value[i8++] = 128 | (codePoint & 4032) >>> 6, utf8Value[i8++] = 128 | (codePoint & 63) >>> 0) : (utf8Value[i8++] = 240 | (codePoint & 1835008) >>> 18, utf8Value[i8++] = 128 | (codePoint & 258048) >>> 12, utf8Value[i8++] = 128 | (codePoint & 4032) >>> 6, utf8Value[i8++] = 128 | (codePoint & 63) >>> 0), wasSurrogatePair && i16++;
      }
      this.utf16Length = utf16Length, this.utf8Length = utf8Length, this.utf16Value = str, this.utf8Value = utf8Value, this.utf16OffsetToUtf8 = utf16OffsetToUtf8, this.utf8OffsetToUtf16 = utf8OffsetToUtf16;
    }
    createString(onigBinding2) {
      let result = onigBinding2.omalloc(this.utf8Length);
      return onigBinding2.HEAPU8.set(this.utf8Value, result), result;
    }
  }, OnigString = class _OnigString {
    static LAST_ID = 0;
    static _sharedPtr = 0;
    // a pointer to a string of 10000 bytes
    static _sharedPtrInUse = !1;
    id = ++_OnigString.LAST_ID;
    _onigBinding;
    content;
    utf16Length;
    utf8Length;
    utf16OffsetToUtf8;
    utf8OffsetToUtf16;
    ptr;
    constructor(str) {
      if (!onigBinding)
        throw new ShikiError("Must invoke loadWasm first.");
      this._onigBinding = onigBinding, this.content = str;
      let utfString = new UtfString(str);
      this.utf16Length = utfString.utf16Length, this.utf8Length = utfString.utf8Length, this.utf16OffsetToUtf8 = utfString.utf16OffsetToUtf8, this.utf8OffsetToUtf16 = utfString.utf8OffsetToUtf16, this.utf8Length < 1e4 && !_OnigString._sharedPtrInUse ? (_OnigString._sharedPtr || (_OnigString._sharedPtr = onigBinding.omalloc(1e4)), _OnigString._sharedPtrInUse = !0, onigBinding.HEAPU8.set(utfString.utf8Value, _OnigString._sharedPtr), this.ptr = _OnigString._sharedPtr) : this.ptr = utfString.createString(onigBinding);
    }
    convertUtf8OffsetToUtf16(utf8Offset) {
      return this.utf8OffsetToUtf16 ? utf8Offset < 0 ? 0 : utf8Offset > this.utf8Length ? this.utf16Length : this.utf8OffsetToUtf16[utf8Offset] : utf8Offset;
    }
    convertUtf16OffsetToUtf8(utf16Offset) {
      return this.utf16OffsetToUtf8 ? utf16Offset < 0 ? 0 : utf16Offset > this.utf16Length ? this.utf8Length : this.utf16OffsetToUtf8[utf16Offset] : utf16Offset;
    }
    dispose() {
      this.ptr === _OnigString._sharedPtr ? _OnigString._sharedPtrInUse = !1 : this._onigBinding.ofree(this.ptr);
    }
  }, OnigScanner = class {
    _onigBinding;
    _ptr;
    constructor(patterns) {
      if (!onigBinding)
        throw new ShikiError("Must invoke loadWasm first.");
      let strPtrsArr = [], strLenArr = [];
      for (let i2 = 0, len = patterns.length; i2 < len; i2++) {
        let utfString = new UtfString(patterns[i2]);
        strPtrsArr[i2] = utfString.createString(onigBinding), strLenArr[i2] = utfString.utf8Length;
      }
      let strPtrsPtr = onigBinding.omalloc(4 * patterns.length);
      onigBinding.HEAPU32.set(strPtrsArr, strPtrsPtr / 4);
      let strLenPtr = onigBinding.omalloc(4 * patterns.length);
      onigBinding.HEAPU32.set(strLenArr, strLenPtr / 4);
      let scannerPtr = onigBinding.createOnigScanner(strPtrsPtr, strLenPtr, patterns.length);
      for (let i2 = 0, len = patterns.length; i2 < len; i2++)
        onigBinding.ofree(strPtrsArr[i2]);
      onigBinding.ofree(strLenPtr), onigBinding.ofree(strPtrsPtr), scannerPtr === 0 && throwLastOnigError(onigBinding), this._onigBinding = onigBinding, this._ptr = scannerPtr;
    }
    dispose() {
      this._onigBinding.freeOnigScanner(this._ptr);
    }
    findNextMatchSync(string, startPosition, arg) {
      let options = 0;
      if (typeof arg == "number" && (options = arg), typeof string == "string") {
        string = new OnigString(string);
        let result = this._findNextMatchSync(string, startPosition, !1, options);
        return string.dispose(), result;
      }
      return this._findNextMatchSync(string, startPosition, !1, options);
    }
    _findNextMatchSync(string, startPosition, debugCall, options) {
      let onigBinding2 = this._onigBinding, resultPtr = onigBinding2.findNextOnigScannerMatch(this._ptr, string.id, string.ptr, string.utf8Length, string.convertUtf16OffsetToUtf8(startPosition), options);
      if (resultPtr === 0)
        return null;
      let HEAPU32 = onigBinding2.HEAPU32, offset = resultPtr / 4, index = HEAPU32[offset++], count = HEAPU32[offset++], captureIndices = [];
      for (let i2 = 0; i2 < count; i2++) {
        let beg = string.convertUtf8OffsetToUtf16(HEAPU32[offset++]), end = string.convertUtf8OffsetToUtf16(HEAPU32[offset++]);
        captureIndices[i2] = {
          start: beg,
          end,
          length: end - beg
        };
      }
      return {
        index,
        captureIndices
      };
    }
  };
  function isInstantiatorOptionsObject(dataOrOptions) {
    return typeof dataOrOptions.instantiator == "function";
  }
  function isInstantiatorModule(dataOrOptions) {
    return typeof dataOrOptions.default == "function";
  }
  function isDataOptionsObject(dataOrOptions) {
    return typeof dataOrOptions.data < "u";
  }
  function isResponse(dataOrOptions) {
    return typeof Response < "u" && dataOrOptions instanceof Response;
  }
  function isArrayBuffer(data) {
    return typeof ArrayBuffer < "u" && (data instanceof ArrayBuffer || ArrayBuffer.isView(data)) || typeof Buffer < "u" && Buffer.isBuffer?.(data) || typeof SharedArrayBuffer < "u" && data instanceof SharedArrayBuffer || typeof Uint32Array < "u" && data instanceof Uint32Array;
  }
  var initPromise;
  function loadWasm(options) {
    if (initPromise)
      return initPromise;
    async function _load() {
      onigBinding = await main(async (info) => {
        let instance = options;
        return instance = await instance, typeof instance == "function" && (instance = await instance(info)), typeof instance == "function" && (instance = await instance(info)), isInstantiatorOptionsObject(instance) ? instance = await instance.instantiator(info) : isInstantiatorModule(instance) ? instance = await instance.default(info) : (isDataOptionsObject(instance) && (instance = instance.data), isResponse(instance) ? typeof WebAssembly.instantiateStreaming == "function" ? instance = await _makeResponseStreamingLoader(instance)(info) : instance = await _makeResponseNonStreamingLoader(instance)(info) : isArrayBuffer(instance) ? instance = await _makeArrayBufferLoader(instance)(info) : instance instanceof WebAssembly.Module ? instance = await _makeArrayBufferLoader(instance)(info) : "default" in instance && instance.default instanceof WebAssembly.Module && (instance = await _makeArrayBufferLoader(instance.default)(info))), "instance" in instance && (instance = instance.instance), "exports" in instance && (instance = instance.exports), instance;
      });
    }
    return initPromise = _load(), initPromise;
  }
  function _makeArrayBufferLoader(data) {
    return (importObject) => WebAssembly.instantiate(data, importObject);
  }
  function _makeResponseStreamingLoader(data) {
    return (importObject) => WebAssembly.instantiateStreaming(data, importObject);
  }
  function _makeResponseNonStreamingLoader(data) {
    return async (importObject) => {
      let arrayBuffer = await data.arrayBuffer();
      return WebAssembly.instantiate(arrayBuffer, importObject);
    };
  }
  async function createWasmOnigEngine(options) {
    return options && await loadWasm(options), {
      createScanner(patterns) {
        return new OnigScanner(patterns);
      },
      createString(s2) {
        return new OnigString(s2);
      }
    };
  }
  var _defaultWasmLoader;
  var instancesCount = 0;
  async function createShikiInternal(options = {}) {
    instancesCount += 1, options.warnings !== !1 && instancesCount >= 10 && instancesCount % 10 === 0 && console.warn(`[Shiki] ${instancesCount} instances have been created. Shiki is supposed to be used as a singleton, consider refactoring your code to cache your highlighter instance; Or call \`highlighter.dispose()\` to release unused instances.`);
    let isDisposed = !1;
    async function normalizeGetter(p2) {
      return Promise.resolve(typeof p2 == "function" ? p2() : p2).then((r3) => r3.default || r3);
    }
    async function resolveLangs(langs2) {
      return Array.from(new Set((await Promise.all(langs2.filter((l2) => !isSpecialLang(l2)).map(async (lang3) => await normalizeGetter(lang3).then((r3) => Array.isArray(r3) ? r3 : [r3])))).flat()));
    }
    let [themes, langs] = await Promise.all([
      Promise.all((options.themes || []).map(normalizeGetter)).then((r3) => r3.map(normalizeTheme)),
      resolveLangs(options.langs || [])
    ]), resolver = new Resolver(Promise.resolve(options.engine || createWasmOnigEngine(options.loadWasm || _defaultWasmLoader)), langs), _registry = new Registry2(resolver, themes, langs, options.langAlias);
    await _registry.init();
    let _lastTheme;
    function getLanguage(name) {
      ensureNotDisposed();
      let _lang = _registry.getGrammar(typeof name == "string" ? name : name.name);
      if (!_lang)
        throw new ShikiError(`Language \`${name}\` not found, you may need to load it first`);
      return _lang;
    }
    function getTheme(name) {
      if (name === "none")
        return { bg: "", fg: "", name: "none", settings: [], type: "dark" };
      ensureNotDisposed();
      let _theme = _registry.getTheme(name);
      if (!_theme)
        throw new ShikiError(`Theme \`${name}\` not found, you may need to load it first`);
      return _theme;
    }
    function setTheme(name) {
      ensureNotDisposed();
      let theme = getTheme(name);
      _lastTheme !== name && (_registry.setTheme(theme), _lastTheme = name);
      let colorMap = _registry.getColorMap();
      return {
        theme,
        colorMap
      };
    }
    function getLoadedThemes() {
      return ensureNotDisposed(), _registry.getLoadedThemes();
    }
    function getLoadedLanguages() {
      return ensureNotDisposed(), _registry.getLoadedLanguages();
    }
    async function loadLanguage(...langs2) {
      ensureNotDisposed(), await _registry.loadLanguages(await resolveLangs(langs2));
    }
    async function loadTheme(...themes2) {
      ensureNotDisposed(), await Promise.all(themes2.map(async (theme) => isSpecialTheme(theme) ? null : _registry.loadTheme(await normalizeGetter(theme))));
    }
    function ensureNotDisposed() {
      if (isDisposed)
        throw new ShikiError("Shiki instance has been disposed");
    }
    function dispose() {
      isDisposed || (isDisposed = !0, _registry.dispose(), instancesCount -= 1);
    }
    return {
      setTheme,
      getTheme,
      getLanguage,
      getLoadedThemes,
      getLoadedLanguages,
      loadLanguage,
      loadTheme,
      dispose,
      [Symbol.dispose]: dispose
    };
  }
  async function createHighlighterCore(options = {}) {
    let internal = await createShikiInternal(options);
    return {
      getLastGrammarState: (code, options2) => getLastGrammarState(internal, code, options2),
      codeToTokensBase: (code, options2) => codeToTokensBase(internal, code, options2),
      codeToTokensWithThemes: (code, options2) => codeToTokensWithThemes(internal, code, options2),
      codeToTokens: (code, options2) => codeToTokens(internal, code, options2),
      codeToHast: (code, options2) => codeToHast(internal, code, options2),
      codeToHtml: (code, options2) => codeToHtml(internal, code, options2),
      ...internal,
      getInternalContext: () => internal
    };
  }

  // src/grammar.ts
  var lang = {
    // @ts-ignore
    $schema: "https://raw.githubusercontent.com/martinring/tmlanguage/master/tmlanguage.json",
    fileTypes: ["prompt"],
    name: "prompt",
    patterns: [
      {
        match: "[,]",
        name: "comma"
      },
      {
        match: "AND",
        name: "and"
      },
      {
        match: "BREAK",
        name: "break"
      },
      {
        captures: {
          0: {
            name: "model-bracket"
          },
          1: {
            name: "model-type"
          },
          2: {
            name: "model-name"
          },
          3: {
            name: "number"
          }
        },
        match: "<([^:]+):([^:]+):([^>]+)>"
      },
      {
        match: "[<|>]",
        name: "model-bracket"
      },
      {
        match: "[(|)|\\[|\\]|{|}\\\\]",
        name: "bracket"
      },
      {
        match: ":\\d*\\.?\\d+|:\\.\\d+",
        name: "number"
      },
      {
        match: "[:|]",
        name: "func"
      },
      {
        match: "__.*__",
        name: "wildcards"
      },
      {
        match: "#.*?$",
        name: "comment"
      }
    ],
    scopeName: "source.prompt"
  }, prompt = [lang];

  // node_modules/@shikijs/core/dist/wasm-inlined.mjs

  // src/highlighter.ts
  var colorBackground = "#1e1e1e", theme_config_other_name = "material-theme", other_syntax_lang = "javascript", cacheHighlighter;
  async function initHighlighter() {
    let highlighter = cacheHighlighter;
    return highlighter || (highlighter = await createHighlighterCore({
      langs: [
        prompt,
        //() => import('shiki/langs/json5.mjs'),
        () => Promise.resolve().then(() => (init_javascript(), javascript_exports))
      ],
      themes: [
        themeConfig(!0),
        themeConfig(!1),
        () => themeConfigOther()
      ],
      loadWasm: getWasmInstance
    }), cacheHighlighter = highlighter, highlighter);
  }
  function themeConfig(isDarkMode) {
    let type = isDarkMode ? "dark" : "light", colorYellow = "#FFEF5C", colorOrange = "#FFCB47", colorVolcano = "#FF9480", colorGreen = "#C4F042", colorBlue = "#8ae8ff", colorPurple = "#EDC7EE";
    return {
      colors: {
        "editor.foreground": colorGreen
      },
      name: type,
      tokenColors: [
        {
          scope: "comma",
          settings: {
            foreground: "#DDDDDD"
          }
        },
        {
          scope: ["and", "break"],
          settings: {
            foreground: colorBlue
          }
        },
        {
          scope: "bracket",
          settings: {
            foreground: colorPurple
          }
        },
        {
          scope: "model-type",
          settings: {
            fontStyle: "italic",
            foreground: colorVolcano
          }
        },
        {
          scope: "model-name",
          settings: {
            foreground: colorOrange
          }
        },
        {
          scope: "model-bracket",
          settings: {
            foreground: colorPurple
          }
        },
        {
          scope: "number",
          settings: {
            foreground: colorPurple
          }
        },
        {
          scope: "func",
          settings: {
            foreground: colorPurple
          }
        },
        {
          scope: "wildcards",
          settings: {
            foreground: colorYellow
          }
        },
        {
          scope: "comment",
          settings: {
            foreground: "#6a737d"
          }
        }
      ],
      type
    };
  }
  async function themeConfigOther() {
    let base = await Promise.resolve().then(() => (init_material_theme(), material_theme_exports)).then((m) => m.default ?? m);
    return base = {
      ...base,
      name: theme_config_other_name,
      bg: colorBackground,
      colors: {
        ...base.colors,
        "editor.background": colorBackground
      },
      tokenColors: [
        {
          settings: {
            background: colorBackground,
            foreground: "#EEFFFF"
          }
        },
        ...base.tokenColors.slice(1)
      ],
      colorReplacements: {
        "#263238": colorBackground
      }
    }, base;
  }
  async function syntaxHighlighter(code, opts = {}, key2) {
    let highlighter = await initHighlighter(), lang3 = opts.syntaxLang ?? "prompt", theme = opts.syntaxTheme ?? lang3 === "prompt" ? "dark" : theme_config_other_name;
    return highlighter.codeToHtml(code, {
      lang: lang3,
      theme,
      mergeWhitespaces: !0,
      transformers: [
        {
          code(node) {
            node.properties.id = "lobe_highlighter";
          },
          pre(node) {
            node.properties.id = "shiki_infotext_highlighter";
          }
        }
      ]
    });
  }

  // src/row-config.ts
  var RowConfigMap = /* @__PURE__ */ new Map(), RowConfigMapRegExp = /* @__PURE__ */ new Map();
  [
    "Positive Prompt",
    "Negative Prompt"
  ].forEach((key2) => RowConfigMap.set(key2, {
    full: !0,
    syntaxHighlighter: !0
  }));
  [
    "sv_prompt",
    "Template",
    "Template Generated",
    "Wildcard Prompt"
  ].forEach((key2) => RowConfigMap.set(key2, {
    full: !0,
    syntaxHighlighter: !0,
    decode: !0
  }));
  [
    "Template Generated Grid"
    //'Dynamic Prompts',
  ].forEach((key2) => RowConfigMap.set(key2, {
    full: !0,
    decode: !0,
    async syntaxHighlighter(ls) {
      return ls = await Promise.all([ls].flat().map((value) => syntaxHighlighter(value))), ls.join('<hr class="shiki_infotext_hr"/>');
    },
    formatFn(value, key3) {
      return value;
    }
  }));
  [
    "TI hashes",
    "Lora hashes"
  ].forEach((key2) => RowConfigMap.set(key2, {
    decode: decodeHashs,
    disableEscapeHTML: !0
  }));
  [
    "Model hash",
    "Model",
    "VAE hash",
    "VAE",
    "ADetailer model"
  ].forEach((key2) => RowConfigMap.set(key2, {
    decode: simpleSearch,
    disableEscapeHTML: !0
  }));
  [
    /^ADetailer model \d+\w*$/
  ].forEach((key2) => RowConfigMapRegExp.set(key2, {
    decode: simpleSearch,
    disableEscapeHTML: !0
  }));
  [
    "Hashes",
    "Civitai resources",
    "Civitai metadata",
    "Dynamic Prompts"
  ].forEach((key2) => RowConfigMap.set(key2, {
    decode: !0,
    syntaxHighlighter: !0,
    syntaxLang: other_syntax_lang,
    formatFn(value, key3) {
      return JSON.stringify(value);
    }
  }));
  function simpleSearch(value) {
    return `<span>${value}</span> ${_search(value)}`;
  }
  function _search(query, text2 = "&#x1F50E;") {
    return `<a href="${`https://civitai.com/search/models?sortBy=models_v9&query=${query}`}" target="_blank">${text2}</a>`;
  }
  function decodeHashs(input) {
    let list = [];
    for (let [key2, value] of parseFromRawInfoGenerator(JSON.parse(input)))
      list.push(`<div>${_search(key2, "&#x1F50D;")} <span>${key2}</span>: <span>${value}</span> ${_search(value)}</div>`);
    return list.join("");
  }
  function mergeMapRegExp() {
    let ls = [];
    for (let re3 of RowConfigMapRegExp.keys())
      ls.push(re3.source);
    let re2 = ls.length ? new RegExp(ls.join("|")) : null;
    return logger.debug("RowConfigMapRegExpCached", re2), re2;
  }
  var RowConfigMapRegExpCached = mergeMapRegExp();

  // src/layout.tsx
  function _addRowCoreOptions(key2, value, infoData) {
    let opts = RowConfigMap.get(key2);
    if (!opts && RowConfigMapRegExpCached?.test(key2)) {
      for (let [re2, value2] of RowConfigMapRegExp.entries())
        if (re2.test(key2)) {
          opts = value2;
          break;
        }
    }
    return opts ??= {}, opts;
  }
  async function _addRowCore(key2, value, infoData, opts) {
    if (typeof value == "string" && value?.length) {
      let doEscapeHTML = !opts.disableEscapeHTML;
      if (opts.decode)
        if (opts.decode === !0)
          try {
            value = JSON.parse(value);
          } catch (e3) {
            logger.error(e3);
          }
        else
          value = await opts.decode(value, key2);
      opts.formatFn && (value = await opts.formatFn(value, key2)), opts.syntaxHighlighter && (doEscapeHTML = !1, value = await (opts.syntaxHighlighter === !0 ? syntaxHighlighter : opts.syntaxHighlighter)(value, opts, key2)), doEscapeHTML && (value = escapeHTML(value));
    }
    return {
      key: key2,
      value,
      opts
    };
  }
  async function addRow(key2, value, infoData) {
    let opts = _addRowCoreOptions(key2, value, infoData);
    ({ key: key2, value } = await _addRowCore(key2, value, infoData, opts));
    let sx = opts.full ? "_full" : "", html2 = `<div class="${CLASS_PREFIX}row">`;
    return html2 += `<div class="${CLASS_PREFIX}label_div ${CLASS_PREFIX}label${sx}" data-key="${escapeHTML(key2)}">${key2}</div>`, html2 += `<div class="${CLASS_PREFIX}value_div ${CLASS_PREFIX}value${sx} bilingual__trans_ignore_deep" data-syntaxLang="${opts.syntaxLang}">${value}</div>`, html2 += "</div>", html2;
  }
  function escapeHTML(html2) {
    return html2.replace(/[&<>"']/g, (c) => `&#${c.charCodeAt(0)};`);
  }
  function switchBtn(elem) {
    let btn = document.createElement("button");
    btn.className = `${CLASS_PREFIX}show_hide_btn`, btn.classList.add("lg"), btn.classList.add("secondary"), btn.classList.add("gradio-button"), btn.classList.add("tool"), btn.innerText = "\u1368", btn.addEventListener("click", () => {
      elem.style.display = elem.style.display === "none" ? "block" : "none";
    });
    let div = document.createElement("div");
    return div.className = `${CLASS_PREFIX}show_hide_div`, div.classList.add("bilingual__trans_ignore_deep"), div.append(btn), div;
  }
  async function renderLayout(infoData) {
    let html2 = "";
    html2 += `<div class="${CLASS_PREFIX}main">`, infoData.prompt?.length && (html2 += await addRow("Positive Prompt", infoData.prompt, infoData)), infoData.negative_prompt?.length && (html2 += await addRow("Negative Prompt", infoData.negative_prompt, infoData));
    for (let [key2, value] of Object.entries(infoData.config))
      html2 += await addRow(key2, value, infoData);
    return html2 += "</div>", html2;
  }

  // src/render.ts
  async function renderInfo(parentId, isElem, opts) {
    let inputArgv = {
      parentId,
      isElem,
      opts
    };
    logger.debug("renderInfo:inputArgv", inputArgv);
    let app = gradioApp(), elem;
    if (typeof parentId == "string" && (parentId = app.querySelector(parentId)), isElem && (elem = parentId, parentId = elem?.parentNode), !parentId) {
      logger.info("target not exists", inputArgv.parentId, inputArgv);
      return;
    }
    elem ??= parentId.querySelector(".infotext");
    let infotext, isInput = elem.matches("textarea, input");
    isInput ? infotext = elem.value : infotext = elem.innerText, infotext = infotext?.replace(/^\s+|\s+$/g, "");
    let html2 = "";
    if (infotext?.length) {
      let options = {
        ...opts,
        isIncludePrompts: opts?.isIncludePrompts ?? !0
      }, {
        prompt: prompt2,
        negative_prompt,
        ...config
      } = parseFromRawInfo(infotext, options);
      logger.debug("parseFromRawInfo", {
        prompt: prompt2,
        negative_prompt,
        config,
        options
      }), html2 = await renderLayout({
        prompt: prompt2,
        negative_prompt,
        config
      });
    }
    let target = parentId.querySelector(`.${CLASS_PREFIX}root`);
    if (target)
      target.innerHTML = html2;
    else {
      elem.insertAdjacentHTML("afterend", `<div class="prose gradio-html ${CLASS_PREFIX}root">${html2}</div>`), target = parentId.querySelector(`.${CLASS_PREFIX}root`);
      let btn = switchBtn(elem);
      target.parentNode.insertBefore(btn, target), logger.debug("switchBtn", {
        parentId,
        elem,
        target,
        btn
      });
    }
    return html2.length ? (changeDisplay(elem, !1), changeDisplay(target, !0)) : (changeDisplay(elem, !0), changeDisplay(target, !1)), {
      parentId,
      elem,
      target,
      html: html2,
      isInput
    };
  }
  function changeDisplay(elem, show) {
    let display = elem.style.display?.toLowerCase();
    if (typeof elem.dataset.originalDisplay > "u") {
      let value = getComputedStyle(elem).display?.toLowerCase();
      (!value?.length || value === "none") && (value = "block"), elem.dataset.originalDisplay = value;
    }
    show && ![elem.dataset.originalDisplay, "block"].includes(display) ? elem.style.display = elem.dataset.originalDisplay : !show && display !== "none" && (elem.style.display = "none");
  }

  // src/style.scss
  var style_default = `.shiki_infotext_root {
  max-height: 46.5em;
  overflow-y: auto;
  margin-bottom: 20px !important;
}
.shiki_infotext_root, .shiki_infotext_root .infotext, .shiki_infotext_root #tab_pnginfo .html-log.prose, .shiki_infotext_root #html_info_x_extras.prose, .shiki_infotext_root #html_info_extras.prose, .shiki_infotext_root #html_info_replacer.prose {
  transition: 0.15s;
}
.shiki_infotext_root hr.shiki_infotext_hr, .prose .shiki_infotext_root hr.shiki_infotext_hr {
  margin: var(--spacing-md);
  border-top-style: dashed;
  opacity: 0.5;
}
.shiki_infotext_show_hide_div {
  text-align: right;
  padding: 10px;
}
.shiki_infotext_show_hide_div .shiki_infotext_show_hide_btn {
  border: var(--button-border-width) solid var(--button-secondary-border-color);
  background: var(--button-secondary-background-fill);
  color: var(--button-secondary-text-color);
  position: sticky;
  top: 0;
  right: 0;
}

.shiki_infotext_main {
  display: flex;
  flex-direction: column;
  padding: 5px;
}
.shiki_infotext_main .shiki_infotext_row {
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 5px;
}
.shiki_infotext_main .shiki_infotext_row:hover .shiki_infotext_label_div, .shiki_infotext_main .shiki_infotext_row .shiki_infotext_label_full {
  background: var(--button-primary-background-fill-hover);
  color: var(--button-primary-text-color);
  border-color: var(--button-primary-border-color);
}
.shiki_infotext_main .shiki_infotext_row:hover .shiki_infotext_value {
  box-shadow: var(--input-shadow-focus);
  border-color: var(--color-accent);
}
.shiki_infotext_main .shiki_infotext_row .shiki_infotext_label, .shiki_infotext_main .shiki_infotext_row .shiki_infotext_value {
  margin: 0px 2px;
}
.shiki_infotext_main .shiki_infotext_row .shiki_infotext_label_full, .shiki_infotext_main .shiki_infotext_row .shiki_infotext_value_full {
  width: 100%;
}
.shiki_infotext_main .shiki_infotext_row .shiki_infotext_value {
  padding-left: 5px;
}
.shiki_infotext_main .shiki_infotext_row .shiki_infotext_value > #shiki_infotext_highlighter {
  padding: 5px;
}
.shiki_infotext_main .shiki_infotext_row .shiki_infotext_value #shiki_infotext_highlighter, .shiki_infotext_main .shiki_infotext_row .shiki_infotext_value #lobe_highlighter {
  white-space: pre-wrap;
  border-radius: 8px;
  margin: auto;
}
.shiki_infotext_main .shiki_infotext_row .shiki_infotext_value:has(> pre) {
  padding-left: 0;
}
.shiki_infotext_main .shiki_infotext_row .shiki_infotext_value_full > pre {
  padding: 10px 5px;
}
.shiki_infotext_main .shiki_infotext_row .shiki_infotext_value_full, .shiki_infotext_main .shiki_infotext_row .shiki_infotext_value_full pre, .shiki_infotext_main .shiki_infotext_row .shiki_infotext_value_full #shiki_infotext_highlighter, .shiki_infotext_main .shiki_infotext_row .shiki_infotext_value_full #lobe_highlighter {
  white-space: pre-wrap;
}
.shiki_infotext_main .shiki_infotext_row .shiki_infotext_label {
  flex: 1 0 auto;
  /*white-space: nowrap;*/
  min-width: 300px;
}
.shiki_infotext_main .shiki_infotext_row .shiki_infotext_value {
  flex: 4 1 auto;
  word-wrap: break-word;
  min-width: 0;
  margin: auto 2px;
  border: 1px solid var(--block-border-color);
  border-radius: 8px;
}
.shiki_infotext_main .shiki_infotext_row .shiki_infotext_label_div {
  border-radius: 3px;
  background: var(--button-secondary-background-fill);
}
.shiki_infotext_main .shiki_infotext_row .shiki_infotext_label_div, .shiki_infotext_main .shiki_infotext_row .shiki_infotext_label_div .shiki_infotext_value_div {
  padding: 3px 5px;
  min-height: 24px;
}
.shiki_infotext_main .shiki_infotext_row .shiki_infotext_label_div[data-key=Model], .shiki_infotext_main .shiki_infotext_row .shiki_infotext_label_div[data-key="TI hashes"], .shiki_infotext_main .shiki_infotext_row .shiki_infotext_label_div[data-key="Lora hashes"], .shiki_infotext_main .shiki_infotext_row .shiki_infotext_label_div[data-key=Hashes], .shiki_infotext_main .shiki_infotext_row .shiki_infotext_label_div[data-key="Civitai resources"] {
  background: linear-gradient(to bottom right, #860087, #860087);
}

.infotext .pending:hover {
  opacity: 1;
}

#img2img_results, #txt2img_results, #extras_results {
  padding-bottom: 100px;
}
/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VSb290IjoiL2hvbWUvcnVubmVyL3dvcmsvc2Qtd2VidWktcG5naW5mby1iZWF1dGlmeS9zZC13ZWJ1aS1wbmdpbmZvLWJlYXV0aWZ5L3NyYyIsInNvdXJjZXMiOlsic3R5bGUuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUVDO0VBQ0E7RUFDQTs7QUFFQTtFQUVDOztBQUdEO0VBRUM7RUFDQTtFQUNBOztBQVNGO0VBRUM7RUFDQTs7QUFFQTtFQUVDO0VBQ0E7RUFDQTtFQUVBO0VBQ0E7RUFDQTs7O0FBS0Y7RUFFQztFQUNBO0VBQ0E7O0FBRUE7RUFFQztFQUNBO0VBQ0E7O0FBRUE7RUFFQztFQUNBO0VBQ0E7O0FBR0Q7RUFFQztFQUNBOztBQUdEO0VBRUM7O0FBR0Q7RUFFQzs7QUFHRDtFQWNDOztBQVpBO0VBRUM7O0FBR0Q7RUFFQztFQUNBO0VBQ0E7O0FBS0Q7RUFFQzs7QUFNRDtFQUVDOztBQUdEO0VBRUM7O0FBSUY7RUFFQztBQUNBO0VBQ0E7O0FBR0Q7RUFFQztFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7O0FBR0Q7RUFFQztFQUNBOztBQUVBO0VBRUM7RUFDQTs7QUFHRDtFQUVDOzs7QUFNSjtFQUVDOzs7QUFHRDtFQUVDIiwic291cmNlc0NvbnRlbnQiOlsiLnNoaWtpX2luZm90ZXh0X3Jvb3Rcbntcblx0bWF4LWhlaWdodDogNDYuNWVtO1xuXHRvdmVyZmxvdy15OiBhdXRvO1xuXHRtYXJnaW4tYm90dG9tOiAyMHB4ICFpbXBvcnRhbnQ7XG5cblx0JiwgLmluZm90ZXh0LCAjdGFiX3BuZ2luZm8gLmh0bWwtbG9nLnByb3NlLCAjaHRtbF9pbmZvX3hfZXh0cmFzLnByb3NlLCAjaHRtbF9pbmZvX2V4dHJhcy5wcm9zZSwgI2h0bWxfaW5mb19yZXBsYWNlci5wcm9zZVxuXHR7XG5cdFx0dHJhbnNpdGlvbjogLjE1cztcblx0fVxuXG5cdGhyLnNoaWtpX2luZm90ZXh0X2hyXG5cdHtcblx0XHRtYXJnaW46IHZhcigtLXNwYWNpbmctbWQpO1xuXHRcdGJvcmRlci10b3Atc3R5bGU6IGRhc2hlZDtcblx0XHRvcGFjaXR5OiAwLjU7XG5cblx0XHRAYXQtcm9vdCAucHJvc2UgJlxuXHRcdHtcblx0XHRcdEBleHRlbmQgLnNoaWtpX2luZm90ZXh0X2hyO1xuXHRcdH1cblx0fVxufVxuXG4uc2hpa2lfaW5mb3RleHRfc2hvd19oaWRlX2Rpdlxue1xuXHR0ZXh0LWFsaWduOiByaWdodDtcblx0cGFkZGluZzogMTBweDtcblxuXHQuc2hpa2lfaW5mb3RleHRfc2hvd19oaWRlX2J0blxuXHR7XG5cdFx0Ym9yZGVyOiB2YXIoLS1idXR0b24tYm9yZGVyLXdpZHRoKSBzb2xpZCB2YXIoLS1idXR0b24tc2Vjb25kYXJ5LWJvcmRlci1jb2xvcik7XG5cdFx0YmFja2dyb3VuZDogdmFyKC0tYnV0dG9uLXNlY29uZGFyeS1iYWNrZ3JvdW5kLWZpbGwpO1xuXHRcdGNvbG9yOiB2YXIoLS1idXR0b24tc2Vjb25kYXJ5LXRleHQtY29sb3IpO1xuXG5cdFx0cG9zaXRpb246IHN0aWNreTtcblx0XHR0b3A6IDA7XG5cdFx0cmlnaHQ6IDA7XG5cdH1cblxufVxuXG4uc2hpa2lfaW5mb3RleHRfbWFpblxue1xuXHRkaXNwbGF5OiBmbGV4O1xuXHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuXHRwYWRkaW5nOiA1cHg7XG5cblx0LnNoaWtpX2luZm90ZXh0X3Jvd1xuXHR7XG5cdFx0ZGlzcGxheTogZmxleDtcblx0XHRmbGV4LXdyYXA6IHdyYXA7XG5cdFx0bWFyZ2luLWJvdHRvbTogNXB4O1xuXG5cdFx0Jjpob3ZlciAuc2hpa2lfaW5mb3RleHRfbGFiZWxfZGl2LCAuc2hpa2lfaW5mb3RleHRfbGFiZWxfZnVsbFxuXHRcdHtcblx0XHRcdGJhY2tncm91bmQ6IHZhcigtLWJ1dHRvbi1wcmltYXJ5LWJhY2tncm91bmQtZmlsbC1ob3Zlcik7XG5cdFx0XHRjb2xvcjogdmFyKC0tYnV0dG9uLXByaW1hcnktdGV4dC1jb2xvcik7XG5cdFx0XHRib3JkZXItY29sb3I6IHZhcigtLWJ1dHRvbi1wcmltYXJ5LWJvcmRlci1jb2xvcik7XG5cdFx0fVxuXG5cdFx0Jjpob3ZlciAuc2hpa2lfaW5mb3RleHRfdmFsdWVcblx0XHR7XG5cdFx0XHRib3gtc2hhZG93OiB2YXIoLS1pbnB1dC1zaGFkb3ctZm9jdXMpO1xuXHRcdFx0Ym9yZGVyLWNvbG9yOiB2YXIoLS1jb2xvci1hY2NlbnQpO1xuXHRcdH1cblxuXHRcdC5zaGlraV9pbmZvdGV4dF9sYWJlbCwgLnNoaWtpX2luZm90ZXh0X3ZhbHVlXG5cdFx0e1xuXHRcdFx0bWFyZ2luOiAwcHggMnB4O1xuXHRcdH1cblxuXHRcdC5zaGlraV9pbmZvdGV4dF9sYWJlbF9mdWxsLCAuc2hpa2lfaW5mb3RleHRfdmFsdWVfZnVsbFxuXHRcdHtcblx0XHRcdHdpZHRoOiAxMDAlO1xuXHRcdH1cblxuXHRcdC5zaGlraV9pbmZvdGV4dF92YWx1ZVxuXHRcdHtcblx0XHRcdD4gI3NoaWtpX2luZm90ZXh0X2hpZ2hsaWdodGVyXG5cdFx0XHR7XG5cdFx0XHRcdHBhZGRpbmc6IDVweDtcblx0XHRcdH1cblxuXHRcdFx0I3NoaWtpX2luZm90ZXh0X2hpZ2hsaWdodGVyLCAjbG9iZV9oaWdobGlnaHRlclxuXHRcdFx0e1xuXHRcdFx0XHR3aGl0ZS1zcGFjZTogcHJlLXdyYXA7XG5cdFx0XHRcdGJvcmRlci1yYWRpdXM6IDhweDtcblx0XHRcdFx0bWFyZ2luOiBhdXRvO1xuXHRcdFx0fVxuXG5cdFx0XHRwYWRkaW5nLWxlZnQ6IDVweDtcblxuXHRcdFx0JjpoYXMoPiBwcmUpXG5cdFx0XHR7XG5cdFx0XHRcdHBhZGRpbmctbGVmdDogMDtcblx0XHRcdH1cblx0XHR9XG5cblx0XHQuc2hpa2lfaW5mb3RleHRfdmFsdWVfZnVsbFxuXHRcdHtcblx0XHRcdD4gcHJlXG5cdFx0XHR7XG5cdFx0XHRcdHBhZGRpbmc6IDEwcHggNXB4O1xuXHRcdFx0fVxuXG5cdFx0XHQmLCBwcmUsICNzaGlraV9pbmZvdGV4dF9oaWdobGlnaHRlciwgI2xvYmVfaGlnaGxpZ2h0ZXJcblx0XHRcdHtcblx0XHRcdFx0d2hpdGUtc3BhY2U6IHByZS13cmFwO1xuXHRcdFx0fVxuXHRcdH1cblxuXHRcdC5zaGlraV9pbmZvdGV4dF9sYWJlbFxuXHRcdHtcblx0XHRcdGZsZXg6IDEgMCBhdXRvO1xuXHRcdFx0Lyp3aGl0ZS1zcGFjZTogbm93cmFwOyovXG5cdFx0XHRtaW4td2lkdGg6IDMwMHB4O1xuXHRcdH1cblxuXHRcdC5zaGlraV9pbmZvdGV4dF92YWx1ZVxuXHRcdHtcblx0XHRcdGZsZXg6IDQgMSBhdXRvO1xuXHRcdFx0d29yZC13cmFwOiBicmVhay13b3JkO1xuXHRcdFx0bWluLXdpZHRoOiAwO1xuXHRcdFx0bWFyZ2luOiBhdXRvIDJweDtcblx0XHRcdGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWJsb2NrLWJvcmRlci1jb2xvcik7XG5cdFx0XHRib3JkZXItcmFkaXVzOiA4cHg7XG5cdFx0fVxuXG5cdFx0LnNoaWtpX2luZm90ZXh0X2xhYmVsX2RpdlxuXHRcdHtcblx0XHRcdGJvcmRlci1yYWRpdXM6IDNweDtcblx0XHRcdGJhY2tncm91bmQ6IHZhcigtLWJ1dHRvbi1zZWNvbmRhcnktYmFja2dyb3VuZC1maWxsKTtcblxuXHRcdFx0JiwgLnNoaWtpX2luZm90ZXh0X3ZhbHVlX2RpdlxuXHRcdFx0e1xuXHRcdFx0XHRwYWRkaW5nOiAzcHggNXB4O1xuXHRcdFx0XHRtaW4taGVpZ2h0OiAyNHB4O1xuXHRcdFx0fVxuXG5cdFx0XHQmW2RhdGEta2V5PVwiTW9kZWxcIl0sICZbZGF0YS1rZXk9XCJUSSBoYXNoZXNcIl0sICZbZGF0YS1rZXk9XCJMb3JhIGhhc2hlc1wiXSwgJltkYXRhLWtleT1cIkhhc2hlc1wiXSwgJltkYXRhLWtleT1cIkNpdml0YWkgcmVzb3VyY2VzXCJdXG5cdFx0XHR7XG5cdFx0XHRcdGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byBib3R0b20gcmlnaHQsICM4NjAwODcsICM4NjAwODcpO1xuXHRcdFx0fVxuXHRcdH1cblx0fVxufVxuXG4uaW5mb3RleHQgLnBlbmRpbmc6aG92ZXJcbntcblx0b3BhY2l0eTogMTtcbn1cblxuI2ltZzJpbWdfcmVzdWx0cywgI3R4dDJpbWdfcmVzdWx0cywgI2V4dHJhc19yZXN1bHRzXG57XG5cdHBhZGRpbmctYm90dG9tOiAxMDBweDtcbn1cbiJdfQ== */`;

  // src/style.ts
  function initStyle() {
    let $styleEL = document.getElementById("sd-webui-pnginfo-beautify-style");
    return $styleEL || ($styleEL = document.createElement("style"), gradioApp().appendChild($styleEL)), $styleEL.id = "sd-webui-pnginfo-beautify-style", $styleEL.type = "text/css", $styleEL.styleSheet ? $styleEL.styleSheet.cssText = style_default : $styleEL.innerHTML = style_default, $styleEL;
  }

  // src/observer.ts
  function observerObserve(target, observer, cacheInfo) {
    if (cacheInfo.isInput) {
      let fn = function(evt, ...argv) {
        logger.debug(evt, argv);
      };
      logger.debug("try watch input value", target, cacheInfo), observer.observe(target, {
        //characterData: true,
        //childList: true,
        //subtree: true,
        attributes: !0
        //attributeFilter: ['title', 'placeholder'],
      }), target.addEventListener("input", fn), target.addEventListener("change", fn);
    } else
      observer.observe(target, {
        //characterData: true,
        childList: !0
        //subtree: true,
        //attributes: true,
        //attributeFilter: ['title', 'placeholder'],
      });
  }

  // src/index.mts
  typeof onUiLoaded > "u" && (onUiLoaded = (fn) => document.addEventListener("DOMContentLoaded", fn));
  function onUiLoadedLazy(cb) {
    return (typeof onUiLoadedReady == "function" && onUiLoadedReady || typeof onUiLoaded == "function" && onUiLoaded || ((cb2) => document.addEventListener("DOMContentLoaded", cb2)))(cb);
  }
  onUiLoadedLazy(async () => {
    initStyle();
    let app = gradioApp(), observer = new MutationObserver(async (mutationsList, observer2) => {
      for (let mutation of mutationsList) {
        let elem = mutation.target;
        logger.info("observer:mutation", {
          type: mutation.type,
          id: elem?.id,
          elem,
          mutation,
          _beautifyOpts: elem._beautifyOpts
        }, mutation.type === "attributes" && {
          attributeName: mutation.attributeName,
          attributeValue: elem[mutation.attributeName]
        }), await renderInfo(mutation.target, !0, elem._beautifyOpts).catch((e3) => logger.error(e3));
      }
    }), temp = [];
    for (let parentId of tabs) {
      let isElem, opts;
      Array.isArray(parentId) && ([parentId, isElem, opts] = parentId), await renderInfo(parentId, isElem, opts).then((map) => {
        if (!map)
          return;
        let {
          html: html2,
          ...ret
        } = map, tempOpts = {
          ...ret,
          isElem,
          opts
        };
        return temp.push(tempOpts), ret.elem._beautifyOpts = opts, observerObserve(ret.elem, observer, tempOpts);
      }).catch((e3) => logger.error({
        parentId,
        isElem,
        opts
      }, e3));
    }
    logger.info("onUiLoaded", temp);
  });
})();
//# sourceMappingURL=sd-webui-pnginfo-beautify.js.map