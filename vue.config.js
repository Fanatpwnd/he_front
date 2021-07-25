const path = require('path');
const vueSrc = './src';

module.exports = {
    configureWebpack: {
        resolve: {
            alias: {
                '@': path.join(__dirname, vueSrc)
            }
        }
    },
    css: {
        requireModuleExtension: false,
        loaderOptions: {
            sass: {
                additionalData: `
                @import "@/scss/main.scss";
              `
            }
        },
    },
    pages: {
        app_main: {
            entry: path.join(vueSrc, 'main.js'),
            template: path.join(vueSrc, 'public/index.html'),
            filename: 'index.html',
            title: 'Index'
        }
    },
    lintOnSave: false
}