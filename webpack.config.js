const resolve = require('path').resolve;
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: [
        'react-hot-loader/patch',
        resolve(__dirname, 'src')
    ],
    output: {
        filename: 'bundle.js',
        path: __dirname,
        publicPath: 'http://localhost/'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: /node_modules/
            },
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    {
                        loader: 'css-loader',
                        options: {
                            modules: true,
                            localIdentName: '[local]__[hash:base64:5]',
                            sourceMap: true
                        }
                    },
                    'postcss-loader'
                ]
            }
        ]
    },
    devtool: 'source-map',
    context: __dirname,
    target: 'web',
    plugins: [
        new HtmlWebpackPlugin({
            template: resolve(__dirname, 'src', 'index.ejs')
        }),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoEmitOnErrorsPlugin(),
        new webpack.NamedModulesPlugin()
    ],
    devServer: {
        hot: true,
        port: 80
    }
};
