module.exports = {
  root: true,
  env: {
    node: true,
    browser: true
  },
  parserOptions: {
    "ecmaVersion": "latest",
    "parser": "@typescript-eslint/parser",
    "sourceType": "module"
  },
  plugins: [
    "@typescript-eslint"
  ],
  overrides: [
    {
      files: [
        '**/?(*.)test.[jt]s?(x)'
      ],
      env: {
        jest: true
      }
    }
  ],
  rules: {
    // TS
    //  a:string => a: string
    "@typescript-eslint/type-annotation-spacing": "error",
    // str: String => str: string || curly1: {} = 1 => curly1: number = 1
    "@typescript-eslint/ban-types": "error",
    // interface test { a: string; b: number } => interface test { a: string, b: number }
    "@typescript-eslint/member-delimiter-style": [
      "error",
      {
        "multiline": {
          "delimiter": "comma",
          "requireLast": false
        },
        "singleline": {
          "delimiter": "comma",
          "requireLast": false
        }
      }
    ],

    // Override JS
    // 空2格
    "indent": "off",
    "@typescript-eslint/indent": ["error", 2],
    // 操作符空格 type Period=typeof "123" => type Period = typeof "123"
    "space-infix-ops": "off",
    "@typescript-eslint/space-infix-ops": "error",
    // 大括號前空格 interface State{} => interface State {}
    "space-before-blocks": "off",
    "@typescript-eslint/space-before-blocks": ["error", "always"],
    // function 後面要空格 
    "space-before-function-paren": "off",
    "@typescript-eslint/space-before-function-paren": ["error", "always"],
    // 去除行尾的分號
    "semi": "off",
    "@typescript-eslint/semi": ["error", "never"],
    "no-unused-vars": "off",
    "@typescript-eslint/no-unused-vars": ["error", { "argsIgnorePattern": "^_" }],
    // 禁止重複宣告變數
    "no-redeclare": "off",
    "@typescript-eslint/no-redeclare": "error",
    // if else 風格
    "brace-style": "off",
    "@typescript-eslint/brace-style": ["error", "1tbs"],
    // 物件空格 {   a:b   } => { a:b }
    "object-curly-spacing": "off",
    "@typescript-eslint/object-curly-spacing": ["error", "always"],
    // call 函数空格 fn  () => fn()
    "func-call-spacing": "off",
    "@typescript-eslint/func-call-spacing": ["error", "never"],
    // 使用單引號，字串中可以包含了一個其它引號 "a string containing "single" quotes"
    "quotes": "off",
    "@typescript-eslint/quotes": ["error", "single", { "avoidEscape": true }],
    // 逗號前后的空格  [1,     2,  3  ,4] => [1, 2, 4, 4]
    "comma-spacing": "off",
    "@typescript-eslint/comma-spacing": ["error", { "before": false, "after": true }]
  }
}
