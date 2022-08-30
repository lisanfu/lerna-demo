module.exports = {
    root: true, //让eslint不要往父级去继续查找配置
    rules: {
        semi: 'error',
        'no-console': ['error', { allow: ['log'] }]
    },

    env: {
        es6: true,
        node: true,
        browser: true
    }
};