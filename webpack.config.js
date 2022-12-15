const webpack = require('webpack');

module.exports = {
    plugins:[
        new webpack.DefinePlugin({
            "process.env.isAdmin": process.env.isAdmin
        })
    ]
};



