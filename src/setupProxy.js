const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
    app.use(
        '/Info.json',
        createProxyMiddleware({
            target: 'http://demo.cfn.org.mx',
            secure: false,
            cookieDomainRewrite: '',
            logLevel: 'debug',
            changeOrigin: true
        })
    );
    // app.use(
    //     '/ServerMail/index.js',
    //     createProxyMiddleware({
    //         target: 'http://demo.cfn.org.mx',
    //         secure: false,
    //         cookieDomainRewrite: '',
    //         logLevel: 'debug',
    //         changeOrigin: true
    //     })
    // );
    // app.use(
    //     '/send_mail',
    //     createProxyMiddleware({
    //         target: 'http://localhost:4000',
    //         secure: false,
    //         cookieDomainRewrite: '',
    //         logLevel: 'debug',
    //         changeOrigin: true
    //     })
    // );
    // app.use(
    //     `/embed/${props.Video}`,
    //     createProxyMiddleware({
    //         target: 'https://www.youtube.com',
    //         secure: false,
    //         cookieDomainRewrite: '',
    //         logLevel: 'debug',
    //         changeOrigin: true
    //     })
    // );
    // app.listen(3000);
    // app.use(
    //     '/demo/Info.json',
    //     createProxyMiddleware({
    //         target: 'https://cfn.org.mx',
    //         secure: false,
    //         changeOrigin: true
    //     })
    // );
};