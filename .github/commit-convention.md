## Git Commit Message Convention

> This is adapted from [bluelovers's commit convention](https://github.com/bluelovers/conventional-changelog-bluelovers).

### TL;DR:

提交信息必須滿足以下正則表達式：

```js
/^(revert: )?(feat|fix|docs|style|refactor|perf|test|workflow|build|ci|chore|types|wip|dep)(\(.+\))?: .{1,50}/
```

### Changelog

後續會從 commit 信息自動生成 changelog

- feat: 新增/修改功能 (feature)。 
- fix: 修補 bug (bug fix)。
- docs: 文件 (documentation)。
- style: 格式 (不影響程式碼運行的變動 white-space, formatting, missing semi colons, etc)。
- refactor: 重構 (既不是新增功能，也不是修補 bug 的程式碼變動)。
- perf: 改善效能 (A code change that improves performance)。
- test: 增加測試 (when adding missing tests)。
- chore: 建構程序或輔助工具的變動 (maintain)。
- revert: 撤銷回覆先前的 commit 例如：revert: type(scope): subject (回覆版本：xxxx)。

#### 注意

- 如果一次修改涉及到多個類型，選擇最貼切的。
- 對於涉及到某個或多個 issue 的修改，請在提交信息中附帶 `close #1234` 格式的標註。

## Examples

### 包含描述以及頁腳有重大變更的提交說明

```conventionalcommit
feat: allow provided config object to extend other configs

BREAKING CHANGE: `extends` key in config file is now used for extending other config files
```

### 包含用以提示重大變更的 `!` 的提交說明

```conventionalcommit
feat!: send an email to the customer when a product is shipped
```

### 包含作用範圍和提示重大變更的 `!` 的提交說明

```conventionalcommit
feat(api)!: send an email to the customer when a product is shipped
```

### 包含 `!` 以及頁腳有重大變更的提交說明

```conventionalcommit
chore!: drop support for Node 6

BREAKING CHANGE: use JavaScript features not available in Node 6.
```

### 不包含正文的提交說明

```conventionalcommit
docs: correct spelling of CHANGELOG
```

### 包含作用範圍的提交說明

```conventionalcommit
feat(lang): add polish language
```

### 正文有多段落以及有多個頁腳的提交說明

```conventionalcommit
fix: prevent racing of requests

Introduce a request id and a reference to latest request. Dismiss
incoming responses other than from latest request.

Remove timeouts which were used to mitigate the racing issue but are
obsolete now.

Reviewed-by: Z
Refs: #123
```

## Reference

- https://www.conventionalcommits.org/zh-hant
