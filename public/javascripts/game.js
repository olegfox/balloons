var $ = require("jquery");
require('pixi.js');
require('p2');
require('phaser');

var gameProp = {
	    init: function () {
	        game.stage.backgroundColor = '#000000';
			circles = game.add.physicsGroup(Phaser.Physics.ARCADE);
			gameProp.newCircle();
	    },
	    preload: function(){

	    },
	    create: function(){
	        var that = this;
	    },
	    update: function(){
			game.physics.arcade.collide(circles);
	    },
	    render: function() {

	    },
	    newCircle: function(size) {
	    	var size = size || 64;
	    	circle = game.add.graphics(0, 0);
			circle.beginFill(0xFF3300);
			circle.drawCircle(100, 100, size);
			circle.endFill();
			sprite = circles.create(50,50, circle.generateTexture());
			sprite.anchor.set(0.5,0.5);
			sprite.inputEnabled = true;
			sprite.input.enableDrag(true);
			sprite.body.velocity.set(game.rnd.integerInRange(-200, 200), game.rnd.integerInRange(-200, 200));
			circles.setAll('body.collideWorldBounds', true);
			circles.setAll('body.bounce.x', 1);
			circles.setAll('body.bounce.y', 1);
			circle.destroy();
	    }
	},
	game = new Phaser.Game($(window).width(), $(window).height(), 'game', Phaser.AUTO, gameProp),
	circles;

$(function(){
	$(window).bind('dblclick', function() {
		var size = prompt('Введите размер окружности (px):', '');

		if (size) {
			gameProp.newCircle(parseInt(size));
		}
	});
});

