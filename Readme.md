# eslint-config-104z

## Install

- 專案內 **dependencies** 都含有 [Requirements](#Requirements) 相關 eslint 套件 (如有缺少請依項目手動增加)

```
npm install --save-dev git+https://github.com/104corp/eslint-config-104z.git
```

- 環境未有全部 eslint 相關套件

```
npm install --save-dev eslint@^6.7.2 babel-eslint@^10.1.0 eslint-plugin-promise@^4.2.1 eslint-plugin-import@^2.20.2 eslint-plugin-node@^11.1.0 eslint-plugin-standard@^4.0.0 eslint-plugin-vue@^6.2.2 @vue/cli-plugin-eslint@~4.5.0 @vue/eslint-config-standard@^5.1.2 git+https://github.com/104corp/eslint-config-104z.git
```

## Usage

```js
// .eslintrc.js

{
 extends: [
    '@104corp/eslint-config-104z'
  ],
}
```

## Requirements

```js
{
    "@vue/cli-plugin-eslint": "~4.5.0",
    "@vue/eslint-config-standard": "^5.1.2",
    "babel-eslint": "^10.1.0",
    "eslint": "^6.7.2",
    "eslint-plugin-import": "^2.20.2",
    "eslint-plugin-node": "^11.1.0",
    "eslint-plugin-promise": "^4.2.1",
    "eslint-plugin-standard": "^4.0.0",
    "eslint-plugin-vue": "^6.2.2"
}
```
