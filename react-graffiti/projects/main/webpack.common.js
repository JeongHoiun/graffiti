const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');
const { WebpackManifestPlugin } = require('webpack-manifest-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ESLintPlugin = require('eslint-webpack-plugin');

module.exports = {
    entry: {
        index: path.resolve(__dirname, 'src/index.tsx')
    },
    resolve: {
        extensions: ['.ts', '.tsx', '.js', '.css']
    },
    module: {
        rules: [
            {
                test: /\.ts(x?)$/,
                include: [/src/, /node_modules\/@caas/],
                use: [
                    {
                        loader: 'ts-loader',
                        options: {
                            transpileOnly: true
                        }
                    }
                ]
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            },
            {
                test: /\.(woff|woff2|ttf?)(\?v=\d+\.\d+\.\d+)?$/i,
                type: 'asset/resource'
            },
            {
                test: /\.(jpe?g|png|gif|svg)$/i,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: 'img/[name].[ext]'
                        }
                    }
                ]
            }
        ]
    },
    plugins: [
        new CopyPlugin({
            patterns: [{ from: 'public', to: '.' }]
        }),
        new CleanWebpackPlugin(),
        new ForkTsCheckerWebpackPlugin({
            typescript: {
                configOverwrite: {
                    files: ['./src', '../../node_modules/@types/graffiti']
                }
            }
        }),
        new WebpackManifestPlugin({
            fileName: 'manifest.json',
            basePath: './dist/'
        }),
        new HtmlWebpackPlugin({
            template: './public/index.ejs'
        }),
        new ESLintPlugin()
    ],
    devServer: {
        host: '127.0.0.1',
        historyApiFallback: true,
        static: './src',
        proxy: {
            '/view-data': {
                target: 'http://surecoco.com/',
                secure: false,
                changeOrigin: true
            },
            '/resource': {
                target: 'http://surecoco.com/',
                secure: false,
                changeOrigin: true
            }
        }
    }
};
