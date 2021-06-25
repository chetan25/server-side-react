const path = require('path');

module.exports = {
    // tell webapck that the bundle is for node
    target: 'node',
    entry: './src/server.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'build')
    },
    // run bable on every file
    module: {
        rules: [
            {
                test: /\.js?$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
                options: {
                    presets: [
                        'react',
                        'stage-0',
                        ['env', { targets: { browsers: ['last 2 versions'] }}]
                    ]
                }
            }
        ]
    }    
}