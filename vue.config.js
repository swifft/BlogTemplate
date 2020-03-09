module.exports = {
    devServer: {
        open: true,
        host: 'localhost',
        port: 8081,
        https: false,
        hotOnly: false,
        proxy: { // 配置跨域
            '/v1': {
                target: 'http://localhost:100/v1/',
                ws: true,
                changOrigin: true,
                pathRewrite: {
                    '^/v1': ''
                }
            }
        },
        before: app => { }
    }
}
