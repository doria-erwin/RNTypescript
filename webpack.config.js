const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');

const HTMLWebpackPluginConfig = new HTMLWebpackPlugin({
    template: path.resolve(__dirname, './public/index.html'),
    filename: 'index.html',
    inject: 'body',
});

module.exports = {
    entry: path.join(__dirname, 'index.web.js'),
    output: {
        filename: 'bundle.js',
        path: path.join(__dirname, '/build'),
    },
    module: {
        rules: [
            {
                test: /\.(ts|tsx|js|jsx|ttf)$/,
                include: path.resolve(__dirname, './app'),
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env', '@babel/preset-react'],
                    },
                },
            },
            {
                test: /\.ttf$/,
                loader: 'file-loader',
                options: {
                    name: '[name].[ext]',
                },
                include: [
                    path.resolve(
                        __dirname,
                        'node_modules/react-native-vector-icons/Fonts',
                    ),
                    path.resolve(__dirname, 'app/assets/fonts'),
                ],
            },
        ],
    },
    resolve: {
        alias: {
            'react-native$': 'react-native-web',
            '@storybook/react-native': '@storybook/react',
        },
    },
    plugins: [HTMLWebpackPluginConfig],
    devServer: {
        historyApiFallback: true,
        contentBase: './',
        hot: true,
    },
};
