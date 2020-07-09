//jshint esversion:6

const path = require('path');

module.exports = {
    entry: './src/app.js',
    output: {
        path: __dirname,
        publicPath: '/',
        filename: 'bundle.js'
    },
    module: {
        rules : [{
            loader : 'babel-loader',
            test : /\.js$/,
            exclude : /node_modules/
        },{
            test: /\.s?css$/,
            use: [
                'style-loader',
                'css-loader',
                'sass-loader'
            ],
        },
    ],
    },
    devtool: 'cheap-module-eval-source-map',
    devServer : {
        contentBase : path.join(__dirname , 'public')
    }
    
};