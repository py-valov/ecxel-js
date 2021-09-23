module.exports = {
    parser: '@babel/eslint-parser',
    parserOptions: {
        babelOptions: {
            configFile: './src/babel.config.json',
        }
    },
    env: {
        browser: true,
        node: true,
        es6: true
    },
    extends: ['eslint:recommended', 'google'],
    rules: {
        'semi': 'off',
        'indent': 'off',
        'linebreak-style': 'off',
        'comma-dangle': 'off',
        'eol-last': 'off'
    }
}

