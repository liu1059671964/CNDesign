const { override, fixBabelImports, addWebpackAlias } = require('customize-cra');
const path = require('path')

module.exports = override(
    fixBabelImports('import', {
        libraryName: 'antd-mobile',
        style: 'css',
    }),

    addWebpackAlias({
        'components': path.resolve(__dirname, './src/components/'),
        'images': path.resolve(__dirname, './src/lib/images/'),
        'pages': path.resolve(__dirname, './src/pages/'),
        'utils': path.resolve(__dirname, './src/utils/')
    })
);