const path = require('path');
const custom = require('../webpack.config.js');
const CopyWebpackPlugin = require("copy-webpack-plugin");

module.exports = async ({ config }) => {
    // fonts
    config.plugins.push(
        new CopyWebpackPlugin({
            patterns: [{
                from: path.resolve(__dirname, '../app/assets/fonts'),
                to: 'static/fonts'
            }, {
                from: path.resolve(__dirname, '../node_modules/react-native-vector-icons/Fonts'),
                to: 'static/fonts'
            }]
        }),
    );
    custom.module.rules.push({
        test: /\.ttf$/,
        loader: 'url-loader',
        include: path.resolve(
            __dirname,
            '../node_modules/react-native-vector-icons/Feather.js',
        ),
    },
    );

    custom.module.rules.push({
        test: /\.ttf$/,
        loader: 'url-loader',
        include: path.resolve(__dirname, '../', "node_modules/react-native-vector-icons"),
    });

    custom.module.rules.push({
        test: /\.(ts|tsx|js|jsx)$/,
        loader: require.resolve('babel-loader'),
        options: {
            presets: [require.resolve('babel-preset-react-app')],
        },
    });

    custom.module.rules.push({
        test: /\.js$/,
        loader: 'url-loader',
        include: path.resolve(
            __dirname,
            '../node_modules/react-native-fast-image/dist/index.js',
        ),
    },
    );

    custom.resolve.fallback = {
        fs: false,
        child_process: false,
        net: false,
    };

    return {
        ...config,
        resolve: {
            alias: { ...config.resolve.alias, ...custom.resolve.alias },
            extensions: ['.ts', '.tsx', '.js', '.jsx', '.json', '.ttf'],
        },
        module: { ...config.module, rules: custom.module.rules },
    }
}