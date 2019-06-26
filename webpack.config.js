const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CleanWebpackPlugin = require("clean-webpack-plugin");

module.exports = {
    mode: "development",
    entry: `${__dirname}/src/index.js`,
    output: {
        path: path.resolve(__dirname, "./dist"),
        publicPath: "/js/",
        chunkFilename: "[name].bundle.[hash].js",
        filename: `[name].bundle.js`
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                loader: "babel-loader",
                exclude: /node_modules/,
            },
            {
                test: /\.css$/,
                use: [
                    {
                        loader: "style-loader"
                    },
                    {
                        loader: "css-loader"
                    }
                ]
            },
            {
                test: /\.(png|gif|jpg)$/,
                use: [
                    {
                        loader: "file-loader",
                        options: {
                            name: "images/[name].[ext]"
                        }
                    }
                ]
            },
            {
                test: /\.tsx?$/,
                exclude: /node_modules/,
                use: [
                    {
                        loader: "ts-loader"
                    }
                ]
            }
        ]
    },
    plugins: [
        new CleanWebpackPlugin([
            `${__dirname}/dist/*`
        ], {
            root: __dirname,
            exclude: [],
            verbose: false
        }),
        new HtmlWebpackPlugin({
            title: "babel-test",
            template: "./template.html",
            filename: "./index.html"
        })
    ]
};
