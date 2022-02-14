module.exports = {
    root: true,
  
    env: {
      node: true
    },
  
    extends: [
      'plugin:vue/vue3-essential',
      '@vue/standard'
    ],
  
    parserOptions: {
      parser: 'babel-eslint'
    },
  
    rules: {
        "eol-last": 0,
        "no-multiple-empty-lines": ["error", { "max": 1, "maxEOF": 0 }],
      'no-unused-vars': process.env.NODE_ENV === 'production' ? 'error' : 'warn',
      'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
      'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off'
    }
  }