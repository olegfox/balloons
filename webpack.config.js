var path = require('path');
var webpack = require('webpack');

var phaserModule = path.join(__dirname, '/node_modules/phaser/');
var phaser = path.join(phaserModule, 'build/custom/phaser-split.js'),
  pixi = path.join(phaserModule, 'build/custom/pixi.js'),
  p2 = path.join(phaserModule, 'build/custom/p2.js');

module.exports =
{
    entry: './public/javascripts/game.js',
    output: {
        path: './public/javascripts/',
        publicPath: 'public/javascripts',
        filename: 'build.js'
    },
    module: {
        loaders: [
            { test: /pixi.js/, loader: "script" },
            { test: /phaser-split.js/, loader: "script" },
            { test: /p2.js/, loader: "script" },
            {
                test: /\.scss$/,
                loaders: [ 'style', 'css', 'sass' ]
            }
        ]
    },
    resolve: {
        alias: {
            'phaser': phaser,
            'pixi.js': pixi,
            'p2': p2,
        }
    },
    watch: true
}