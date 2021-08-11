var battleship = new Game;
Game.initGame();

document.addEventListener('DOMContentLoaded', function() {
	var gridBtns = document.getElementsByClassName('grid_btn');
	var playerGrid = document.getElementById('player_grid');
	var opponentGrid = document.getElementById('opponent_grid');
	var restartBtn = document.getElementById('restart_btn');
	var messageBoxElement = document.getElementById('message_box');

	window.onerror = function(error) {
		MessageBox.addMsg('<strong>Error:</strong> ' + error, true);
	}

	Graphics.unBlockRestartBtn(restartBtn, false);


	var messageBox = new MessageBox(messageBoxElement);
	Graphics.loadGrids(playerGrid, opponentGrid, Game.gridSize);


	if (Game.turn === 'opponent') {
		MessageBox.addMsg('The opponent starts.');
		Opponent.shootCell();
		Game.switchTurn();
		Graphics.updateGrid('player', playerGrid);
	} else {
		MessageBox.addMsg('You start!');
	}

	for (var i = 0; i < gridBtns.length; i++) {
		gridBtns[i].addEventListener('click', function() {
			if (Game.hasStarted) {
				if (this.getAttribute('data-type') === 'opponent') {
					if (Game.turn === 'player') {
						Player.shootCell(this.getAttribute('data-w'), this.getAttribute('data-h'));
						Graphics.updateGrid('opponent', opponentGrid);
						if (Opponent.numBoatsAlive === 0) {
							Game.endGame('player');
							var win = new Audio('win.wav');
							setTimeout(() => {
								win.play();
							}, 1000);
						} else {
							Game.switchTurn();
							Opponent.shootCell();
							Graphics.updateGrid('player', playerGrid);
							if (Player.numBoatsAlive === 0) {
								Game.endGame('opponent');
								var lose = new Audio('lose.wav');
								setTimeout(() => {
									lose.play();
								}, 1000);
							}
							Game.switchTurn();
						}
					} else {
						throw 'It is not your turn';
					}
				} else {
					throw 'data-type attribute must be equal to opponent';
				}
			} else {
				throw 'Game has already ended';
			}
		});
	}


// 	restartBtn.addEventListener('click', function() {
// 		if (!Game.hasStarted) {
// 			Game.restartGame(playerGrid, opponentGrid);
// 		} else {
// 			throw 'Game has not ended';
// 		}
// 	});
// });

	restartBtn.addEventListener('click', function() {
			Game.restartGame(playerGrid, opponentGrid);
	});
});
function rollar(w, h){
	var gridBtns = document.getElementsByClassName('grid_btn');
	var playerGrid = document.getElementById('player_grid');
	var opponentGrid = document.getElementById('opponent_grid');
	var restartBtn = document.getElementById('restart_btn');
	var messageBoxElement = document.getElementById('message_box');
	for (var i = 0; i < gridBtns.length; i++) {
		if (Game.hasStarted) {
			if (gridBtns[i].getAttribute('data-type') == 'opponent') {
				if (Game.turn === 'player') {
					if(parseInt(gridBtns[i].getAttribute('data-h')) == h){
						if(parseInt(gridBtns[i].getAttribute('data-w')) == w){
							Player.shootCell(gridBtns[i].getAttribute('data-w'), gridBtns[i].getAttribute('data-h'));
							Graphics.updateGrid('opponent', opponentGrid);
							if (Opponent.numBoatsAlive === 0) {
								Game.endGame('player');
								var win = new Audio('win.wav');
								setTimeout(() => {
									win.play();
								}, 500);
							} else {
								Game.switchTurn();
								Opponent.shootCell();
								Graphics.updateGrid('player', playerGrid);
								if (Player.numBoatsAlive === 0) {
									Game.endGame('opponent');
									var lose = new Audio('lose.wav');
									setTimeout(() => {
										lose.play();
									}, 500);
								}
								Game.switchTurn();
							}
						}
					}
				} else {
					//throw 'It is not your turn';
				}
			} else {
				//throw 'data-type attribute must be equal to opponent';
			}
		} else {
			//throw 'Game has already ended';
		}
	}
}

function rollar2(w, h){
	var gridBtns = document.getElementsByClassName('grid_btn');
	var playerGrid = document.getElementById('player_grid');
	var opponentGrid = document.getElementById('opponent_grid');
	var restartBtn = document.getElementById('restart_btn');
	var messageBoxElement = document.getElementById('message_box');
	for (var i = 0; i < gridBtns.length; i++) {
		if (Game.hasStarted) {
			if (gridBtns[i].getAttribute('data-type') == 'opponent') {
				if (Game.turn === 'player') {
					if(parseInt(gridBtns[i].getAttribute('data-h')) == h){
						if(parseInt(gridBtns[i].getAttribute('data-w')) == w){
							Player.shootCell2(gridBtns[i].getAttribute('data-w'), gridBtns[i].getAttribute('data-h'));
							Graphics.updateGrid('opponent', opponentGrid);
							if (Opponent.numBoatsAlive === 0) {
								Game.endGame('player');
								var win = new Audio('win.wav');
								setTimeout(() => {
									win.play();
								}, 500);
							} else {
								Game.switchTurn();
								Opponent.shootCell2();
								Graphics.updateGrid('player', playerGrid);
								if (Player.numBoatsAlive === 0) {
									Game.endGame('opponent');
									var lose = new Audio('lose.wav');
									setTimeout(() => {
										lose.play();
									}, 500);
								}
								Game.switchTurn();
							}
						}
					}
				} else {
					//throw 'It is not your turn';
				}
			} else {
				//throw 'data-type attribute must be equal to opponent';
			}
		} else {
			//throw 'Game has already ended';
		}
	}
}


function rollar3(w, h){
	var gridBtns = document.getElementsByClassName('grid_btn');
	var playerGrid = document.getElementById('player_grid');
	var opponentGrid = document.getElementById('opponent_grid');
	var restartBtn = document.getElementById('restart_btn');
	var messageBoxElement = document.getElementById('message_box');
	for (var i = 0; i < gridBtns.length; i++) {
		if (Game.hasStarted) {
			if (gridBtns[i].getAttribute('data-type') == 'opponent') {
				if (Game.turn === 'player') {
					if(parseInt(gridBtns[i].getAttribute('data-h')) == h){
						if(parseInt(gridBtns[i].getAttribute('data-w')) == w){
							Player.shootCell3(gridBtns[i].getAttribute('data-w'), gridBtns[i].getAttribute('data-h'));
							Graphics.updateGrid('opponent', opponentGrid);
							if (Opponent.numBoatsAlive === 0) {
								Game.endGame('player');
								var win = new Audio('win.wav');
								setTimeout(() => {
									win.play();
								}, 500);
							} else {
								Game.switchTurn();
								Opponent.shootCell3();
								Graphics.updateGrid('player', playerGrid);
								if (Player.numBoatsAlive === 0) {
									Game.endGame('opponent');
									var lose = new Audio('lose.wav');
									setTimeout(() => {
										lose.play();
									}, 500);
								}
								Game.switchTurn();
							}
						}
					}
				} else {
					//throw 'It is not your turn';
				}
			} else {
				//throw 'data-type attribute must be equal to opponent';
			}
		} else {
			//throw 'Game has already ended';
		}
	}
}
