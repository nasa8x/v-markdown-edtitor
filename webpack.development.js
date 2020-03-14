var path = require('path');
var webpack = require('webpack');

var HtmlWebpackPlugin = require('html-webpack-plugin');
var HtmlWebpackExternalsPlugin = require('html-webpack-externals-plugin');

var { VueLoaderPlugin } = require('vue-loader')
var nodeExternals = require('webpack-node-externals');
var MiniCssExtractPlugin = require("mini-css-extract-plugin");
var CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = function (env) {
    return [

        {

            mode: 'development',
            target: 'web',
            devtool: '#source-map',
            entry: {
                'index': './src/index.js',

            },
            output: {
                // libraryTarget: 'commonjs2',
                // libraryTarget: 'commonjs',
                libraryTarget: 'umd',
                path: path.join(__dirname, './dist'),
                filename: '[name].js',

            },
            module: {
                rules: [


                    {
                        test: /\.vue$/,
                        loader: 'vue-loader',
                        options: {
                            loaders: {
                                //presets: ['es2015', "stage-2"],
                                // Since sass-loader (weirdly) has SCSS as its default parse mode, we map
                                // the "scss" and "sass" values for the lang attribute to the right configs here.
                                // other preprocessors should work out of the box, no loader config like this nessessary.
                                'scss': 'vue-style-loader!css-loader!sass-loader',
                                'sass': 'vue-style-loader!css-loader!sass-loader?indentedSyntax'
                            },
                            // other vue-loader options go here
                        }
                    },


                    {
                        test: /\.js$/,
                        loader: 'babel-loader',
                        //exclude: /node_modules/
                    },
                    {
                        test: /\.s?[ac]ss$/,
                        use: [
                            MiniCssExtractPlugin.loader,
                            'css-loader',

                            'sass-loader',
                            {
                                loader: 'postcss-loader',
                                options: {
                                    plugins: () => [require('autoprefixer')],
                                }
                            }
                        ],
                    },

                    {
                        test: /\.less$/,
                        use: [
                            'vue-style-loader',
                            'css-loader',
                            'less-loader'
                        ]
                    },


                ]
            },
            //externals: [/^(?!\.|\/).+/i,],
            externals: [nodeExternals()],
            plugins: [
                new webpack.DefinePlugin({
                    'process.env': { NODE_ENV: JSON.stringify(process.env.NODE_ENV || "development") }
                }),
                new MiniCssExtractPlugin({
                    filename: '[name].css',
                    allChunks: true
                }),


                new VueLoaderPlugin(),
            ]
        },

        {

            mode: 'development',
            target: 'web',
            devtool: '#source-map',
            entry: {
                'v-markdown-editor': './src/index.js',

            },
            output: {
                // libraryTarget: 'commonjs2',
                // libraryTarget: 'commonjs',
                libraryTarget: 'umd',
                path: path.join(__dirname, './dist'),
                filename: '[name].js',

            },
            module: {
                rules: [


                    {
                        test: /\.vue$/,
                        loader: 'vue-loader',
                        options: {
                            loaders: {
                                //presets: ['es2015', "stage-2"],
                                // Since sass-loader (weirdly) has SCSS as its default parse mode, we map
                                // the "scss" and "sass" values for the lang attribute to the right configs here.
                                // other preprocessors should work out of the box, no loader config like this nessessary.
                                'scss': 'vue-style-loader!css-loader!sass-loader',
                                'sass': 'vue-style-loader!css-loader!sass-loader?indentedSyntax'
                            },
                            // other vue-loader options go here
                        }
                    },


                    {
                        test: /\.js$/,
                        loader: 'babel-loader',
                        //exclude: /node_modules/
                    },
                    {
                        test: /\.s?[ac]ss$/,
                        use: [
                            MiniCssExtractPlugin.loader,
                            'css-loader',

                            'sass-loader',
                            {
                                loader: 'postcss-loader',
                                options: {
                                    plugins: () => [require('autoprefixer')],
                                }
                            }
                        ],
                    },

                    {
                        test: /\.less$/,
                        use: [
                            'vue-style-loader',
                            'css-loader',
                            'less-loader'
                        ]
                    },


                ]
            },
            //externals: [/^(?!\.|\/).+/i,],
            // externals: [nodeExternals()],
            plugins: [

                new webpack.DefinePlugin({
                    'process.env': { NODE_ENV: JSON.stringify(process.env.NODE_ENV || "development") }
                }),
                new MiniCssExtractPlugin({
                    filename: '[name].css',
                    allChunks: true
                }),
                new VueLoaderPlugin(),
            ]
        },

        {
            mode: 'development',
            target: 'web',
            entry: {
                'www': './www/app.js',
                // 'www/a': './src/adv/app.js',
                // 'www/c': './src/cpanel/app.js',
                //'admin': './src/admin/app.js',          

            },
            output: {
                path: path.join(__dirname, './dist'),
                //filename: '[name].[hash:8].js',
                filename: '[name]/js/app.js',
                publicPath: '../',
                //chunkFilename: '[name]-chunk.js',
                //sourceMapFilename: '[name].map'
            },
            module: {
                rules: [
                    {
                        test: /\.vue$/,
                        loader: 'vue-loader',
                        options: {
                            loaders: {
                                //presets: ['es2015', "stage-2"],
                                // Since sass-loader (weirdly) has SCSS as its default parse mode, we map
                                // the "scss" and "sass" values for the lang attribute to the right configs here.
                                // other preprocessors should work out of the box, no loader config like this nessessary.
                                'scss': 'vue-style-loader!css-loader!sass-loader',
                                'sass': 'vue-style-loader!css-loader!sass-loader?indentedSyntax'
                            },
                            // other vue-loader options go here
                        }
                    },

                    {
                        test: /\.js$/,
                        loader: 'babel-loader',
                        exclude: file => (
                            /node_modules/.test(file) &&
                            !/\.vue\.js/.test(file)
                        )
                    },

                    {
                        test: /\.s?[ac]ss$/,
                        use: [
                            MiniCssExtractPlugin.loader,
                            'css-loader',

                            'sass-loader',
                            {
                                loader: 'postcss-loader',
                                options: {
                                    plugins: () => [require('autoprefixer')],



                                }
                            }
                        ],
                    },

                    {
                        test: /\.less$/,
                        use: [
                            'vue-style-loader',
                            'css-loader',
                            'less-loader'
                        ]
                    },

                    {
                        test: /\.(png|jpg|gif|svg|eot|ttf|woff|woff2)$/,
                        loader: 'url-loader',
                        options: {
                            limit: 10000,
                            name: '[name].[ext]?[hash]'
                        }
                    }
                ]
            },



            devtool: '#source-map',
            // optimization:{
            //   splitChunks:{chunks: "all"}
            // },

            plugins: [
                new webpack.DefinePlugin({
                    "process.env.NODE_ENV": JSON.stringify(
                        process.env.NODE_ENV || "development"
                    ),
                    "process.env.VUE_ENV": '"client"'
                }),



                new HtmlWebpackPlugin({
                    filename: 'www/index.html',
                    template: 'www/index.html',
                    hash: true,
                    chunks: ['www'],
                    minify: {
                        collapseWhitespace: true,
                        //preserveLineBreaks: true,                    
                        //removeComments: true,
                        collapseBooleanAttributes: true,
                        removeEmptyAttributes: true
                    }

                }),



                new HtmlWebpackExternalsPlugin({
                    // hash: true,
                    externals: [
                        // {
                        //     module: 'jquery',
                        //     entry: 'https://cdn.jsdelivr.net/npm/jquery@3.4.1/dist/jquery.slim.min.js',
                        //     global: 'jQuery'
                        // },
                        // {
                        //     module: 'Popper',
                        //     entry: 'https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.1/umd/popper.min.js'
                        // },
                        // {
                        //     module: 'boostrap',
                        //     entry: 'https://cdn.jsdelivr.net/npm/bootstrap@4.4.1/dist/js/bootstrap.min.js'
                        // },
                        {
                            module: 'vue',
                            global: 'Vue',
                            entry: 'https://cdn.jsdelivr.net/npm/vue@2.6.11/dist/vue.min.js'
                        },
                        // {
                        //     module: 'vue-router',
                        //     global: 'VueRouter',
                        //     entry: 'https://cdnjs.cloudflare.com/ajax/libs/vue-router/3.0.1/vue-router.min.js'
                        // },

                        // {
                        //     module: 'vuex',
                        //     global: 'Vuex',
                        //     entry: 'https://cdnjs.cloudflare.com/ajax/libs/vuex/3.0.1/vuex.min.js'
                        // },
                        // {
                        //     module: 'axios',
                        //     global: 'axios',
                        //     entry: 'https://cdnjs.cloudflare.com/ajax/libs/axios/0.18.0/axios.min.js'
                        // },
                        // {
                        //     module: 'lodash',
                        //     global: '_',
                        //     entry: 'https://cdnjs.cloudflare.com/ajax/libs/lodash.js/4.17.10/lodash.min.js'
                        // },

                        // {
                        //     module: 'moment',
                        //     global: 'moment',
                        //     entry: 'https://cdnjs.cloudflare.com/ajax/libs/moment.js/2.22.2/moment.min.js'
                        // },

                        // {
                        //     module: 'v-markdown-editor',

                        //     entry: 'http://127.0.0.1:5500/dist/v-markdown-editor.min.js'
                        // },



                        // {

                        //     module: 'remark',
                        //     entry: [
                        //         '//l.allcdn.org/remark/v4.1/bootstrap.min.css',
                        //         '//l.allcdn.org/remark/v4.1/bootstrap-extend.min.css',
                        //         '//l.allcdn.org/remark/v4.1/iconbar/site.min.css',
                        //         // '//l.allcdn.org/remark/v4.1/skins/green.min.css'
                        //     ],

                        // },

                        {

                            module: 'bootstrap',
                            entry: [
                                // 'https://cdn.jsdelivr.net/npm/bootstrap@4.4.1/dist/css/bootstrap.min.css',
                                'https://cdn.jsdelivr.net/npm/morioh@1.0.8/dist/css/morioh.min.css',
                                // '//l.allcdn.org/remark/v4.1/skins/green.min.css'
                            ],

                        },


                        {
                            module: 'fonts',
                            entry: [
                                'https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free@5.12.1/css/all.min.css',
                                // 'https://cdn.jsdelivr.net/npm/@mdi/font@5.0.45/css/materialdesignicons.min.css'
                            ],
                        },



                    ]
                }),

                new MiniCssExtractPlugin({
                    filename: '[name]/css/app.css',
                    allChunks: true
                }),


                new VueLoaderPlugin(),

                new webpack.optimize.LimitChunkCountPlugin({
                    maxChunks: 1,
                }),

            ],


        },
        ///----------------------------



    ]
}
