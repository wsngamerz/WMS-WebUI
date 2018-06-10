const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");

module.exports = {
    entry: "./src/index.js",
    output: {
        path: path.join(__dirname, "/dist"),
        publicPath: "/static",
        filename: "js/main.js"
    },
    resolve: {
        extensions: [".web.js", ".mjs", ".js", ".json", ".web.jsx", ".jsx"],
        alias: {
            "react-native": "react-native-web"
        }
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: [/node_modules/],
                use: {
                    loader: "babel-loader"
                }
            },
            {
                test: /.scss$/,
                exclude: [/node_modules/],
                use: ExtractTextPlugin.extract({
                    use: [
                        "css-loader",
                        {
                            loader: "postcss-loader",
                            options: {
                                ident: "postcss",
                                plugins: loader => [
                                    require("postcss-import")({
                                        root: loader.resourcePath
                                    }),
                                    require("postcss-cssnext")({
                                        browsers: ["last 2 versions"],
                                        features: {
                                            rem: false
                                        }
                                    }),
                                    require("cssnano")()
                                ]
                            }
                        },
                        "sass-loader"
                    ]
                })
            },
            {
                test: /\.(ttf|eot|woff|woff2)$/,
                use: [
                    {
                        loader: "file-loader",
                        options: {
                            outputPath: "fonts/",
                            publicPath: "/static/fonts/"
                        }
                    }
                ]
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "./src/static/html/index.html"
        }),
        new ExtractTextPlugin({
            filename: "css/bundle.css"
        }),
        new CopyWebpackPlugin(
            [
                {
                    from: "src/static/img/*",
                    to: "img/",
                    flatten: true
                },
                {
                    from: "src/static/manifests/*",
                    to: "manifests/",
                    flatten: true
                }
            ],
            {
                copyUnmodified: true
            }
        )
    ]
};
