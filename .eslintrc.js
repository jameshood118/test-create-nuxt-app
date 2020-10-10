module.exports = {
  root: true,
  env: {
    browser: true,
    es2020: true,
    node: true,
  },
  parserOptions: {
    parser: 'babel-eslint',
  },
  extends: [
    '@nuxtjs',
    'plugin:vue/essential',
    '@vue/prettier',
    'plugin:nuxt/essential',
  ],
  plugins: ['prettier'],
  // add your custom rules here
  rules: {},
}
