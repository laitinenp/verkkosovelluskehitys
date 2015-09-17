function Game(id, height, width) {
	this.id = id;
	this.height = height;
	this.width = width;
	this.worm = new Worm(id, height, width);
}

Game.prototype = {
	
	constructor: Game,
	
	start: function () {
			console.log("startGame");
			this.initBoard();
			this.worm.init();
			this.worm.draw();
	},

	initBoard: function () {
		
		console.log("initGameBoard");
		
		var gameboard = '<table id="gameboard">';
		
		for ( var l = 0; l < this.height ; l++ ) {
			gameboard += '<tr>';
			for (var r = 0; r < this.width; r++ ) {
				var id = (r + (l * this.height));
				var grid = '<td id"' + id + '" title="' + id + '"></td>';
				gameboard += grid;
			}
			gameboard += '</tr>';
		}
		gameboard += '</table>';
		
		document.getElementById(this.id).innerHTML = gameboard;
	}
}

function Worm(id, height, width) {
	this.color = 'blue';
	this.id = id;
	this.height = height;
	this.width = width;
	this.length = 3;
	this.position = [];
	this.startposition = 3 * this.width + 2;
}

Worm.prototype = {
	constructor: Worm,
	init: function() {
		for (var i=0; i<this.length; i++) {
			this.position.push(this.startposition+i);
		}
	},
	draw: function() {	
		console.log(this.position);
		for (var i=0; i<this.length; i++) {
			document.getElementById(this.position[i]).style.backgroundColor = color;
		}
	}
}