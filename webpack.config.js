const path = require('path');

module.exports = {
    entry: "./resources/js/app.js",
    module: {
        "rules": [
            { test: /\.s?css$/, use: ["style-loader", "css-loader", "sass-loader"] },
            { test: /\.(js)$/, use: ["babel-loader"] },
        ],
    },
    output: {
        path: path.resolve(__dirname, "public/css"),
        filename: "app.min.js"
    }
};