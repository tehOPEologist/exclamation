const resolve = require('path').resolve;
const webpack = require('webpack');
const HtmlPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const OfflinePlugin = require('offline-plugin');
const PwaManifest = require('webpack-pwa-manifest');

module.exports = {
    entry: [
        resolve(__dirname, 'src')
    ],
    output: {
        filename: 'bundle.js',
        path: resolve(__dirname, 'dist')
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
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: [
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
                })
            },
            {
                test: /\.svg$/,
                loader: 'raw-loader'
            }
        ]
    },
    devtool: 'source-map',
    context: __dirname,
    target: 'web',
    plugins: [
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify('production')
        }),
        new HtmlPlugin({
            template: resolve(__dirname, 'src', 'index.ejs'),
            minify: {
                removeComments: true,
                collapseWhitespace: true
            }
        }),
        new HtmlPlugin({
            filename: '200.html',
            template: resolve(__dirname, 'src', 'index.ejs'),
            minify: {
                removeComments: true,
                collapseWhitespace: true
            }
        }),
        new webpack.NoEmitOnErrorsPlugin(),
        new webpack.optimize.UglifyJsPlugin({
            sourceMap: true
        }),
        new ExtractTextPlugin({
            allChunks: true,
            filename: 'styles.css'
        }),
        new PwaManifest({
            name: 'Woot!',
            short_name: 'Woot!',
            description: 'Find great deals on tablets, laptops, speakers, headphones, home theater equipment, and much more. Daily deals site featuring discounts for electronics, computers, home, tools, garden, sport, accessories, kids, shirts, and wine.',
            background_color: '#fff',
            theme_color: '#669510',
            icons: [
                {
                    src: resolve(__dirname, 'src', 'images', 'favicon.png'),
                    size: '200x200'
                }
            ]
        }),
        new OfflinePlugin()
    ]
};
