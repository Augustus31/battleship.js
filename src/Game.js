class Game {
	constructor() {
		Game.hasStarted = true;
		Game.turn = Game.whoStarts();
		Game.gridSize = 10;
		Game.numBoatTypes = 5;
		Game.numBoatsPerType = [0, 2, 2, 1, 1, 1];
		Game.numBoats = Game.getNumBoats();
		Game.extraTime = false;
	}

	static getNumBoats() {
		return Game.numBoatsPerType.reduce((a, b) => a+b);
	}

	static cellCodeToString(w, h) {
		return String.fromCharCode(parseInt(w)+65) + (parseInt(h)+1);
	}

	static stateCodeToString(code) {
		switch(code) {
			case 0:
				return 'Nothing';
			case 1:
				return 'Boat';
			case 2:
				return 'Water';
			case 3:
				return 'Touched';
			case 4:
				return 'Sunken';
			default:
				throw 'Cell code must be 0, 1, 2, 3 or 4';
		}
	}

	static randomCell() {
		return [parseInt(Math.floor(Math.random() * Game.gridSize)), parseInt(Math.floor(Math.random() * Game.gridSize))];
	}

	static whoStarts() {
		return Math.random() < 0.5 ? 'player' : 'opponent';
	}

	static switchTurn() {
		Game.turn = Game.turn === 'player' ? 'opponent' : 'player';
	}

	static shootCell(shooter, w, h) {
		var explosion = new Audio('explosion.mp3');
		var splash = new Audio('splash.wav')
		var sinking = new Audio('sinking.mp3')
		var timer = 500;
		explosion.volume = 0.1;
		splash.volume = 0.1;
		sinking.volume = 0.2;
		var cellValue = shooter === 'player' ? Opponent.grid[w][h] : Player.grid[w][h];
		if (cellValue < 2) {
			cellValue += 2;
		}
		if (shooter === 'player') {
			// console.log(w)
			// console.log(h)
			Opponent.grid[w][h] = cellValue;
		} else {
			Player.grid[w][h] = cellValue;

		}
		if (cellValue === 3) {
			var boatShot = new Boat(shooter === 'player' ? 'opponent' : 'player', 0, 'H', w, h, true);
			if (boatShot.isSunken()) {
				boatShot.sink();
				cellValue = 4
				if (shooter === 'player') {
					Opponent.numBoatsAlive--;
				} else {
					Player.numBoatsAlive--;
				}
			}
		}
		if (shooter === 'player') {
			var ntl = '';
			switch(parseInt(w)){
				case 0:
					ntl = 'a'
					break;
				case 1:
					ntl = 'b'
					break;
				case 2:
					ntl = 'c'
					break;
				case 3:
					ntl = 'd'
					break;
				case 4:
					ntl = 'e'
					break;
				case 5:
					ntl = 'f'
					break;
				case 6:
					ntl = 'g'
					break;
				case 7:
					ntl = 'h'
					break;
				case 8:
					ntl = 'i'
					break;
				case 9:
					ntl = 'j'
					break;

			}
			// console.log(w);
			// console.log(ntl);
			// console.log(h);
			var isHit = 'Missed';
			var isSunk = '';
			if(cellValue >= 3){
				isHit = 'Hit';
			}
			if(cellValue == 4){
				isSunk = ' and sunk.'
			}
			var str = ntl + (parseInt(h)+1) + ':' + isHit + isSunk;
			timer = 500;
			if(isHit == 'Missed'){
				splash.play();
			}
			else{
				if(isSunk == ' and sunk.'){
					Game.extraTime = true;
					timer = 1500;
					sinking.play()

				}
				else{
					explosion.play();
				}
			}
			setTimeout(() => {
				alanBtnInstance.playText(str);
			}, timer);



		}else{
			var ntl = '';
			switch(w){
				case 0:
					ntl = 'a'
					break;
				case 1:
					ntl = 'b'
					break;
				case 2:
					ntl = 'c'
					break;
				case 3:
					ntl = 'd'
					break;
				case 4:
					ntl = 'e'
					break;
				case 5:
					ntl = 'f'
					break;
				case 6:
					ntl = 'g'
					break;
				case 7:
					ntl = 'h'
					break;
				case 8:
					ntl = 'i'
					break;
				case 9:
					ntl = 'j'
					break;

			}
			var isHit = 'missed';
			var isSunk = '';
			if(cellValue >= 3){
				isHit = 'hit';
			}
			if(cellValue == 4){
				isSunk = ', sinking a ship.'
			}
			var str = 'Opponent shot ' + ntl + (h+1) + ' and ' + isHit + isSunk;
			if(Game.extraTime == true){
				timer = 1500;
			}

			setTimeout(() => {
				alanBtnInstance.playText(str);
			}, (timer+100));
		}
	}

	static shootCell2(shooter, w, h) {
		var explosion = new Audio('explosion.mp3');
		var splash = new Audio('splash.wav')
		var sinking = new Audio('sinking.mp3')
		var timer = 500;
		explosion.volume = 0.1;
		splash.volume = 0.1;
		sinking.volume = 0.2;
		var cellValue = shooter === 'player' ? Opponent.grid[w][h] : Player.grid[w][h];
		if (cellValue < 2) {
			cellValue += 2;
		}
		if (shooter === 'player') {
			// console.log(w)
			// console.log(h)
			Opponent.grid[w][h] = cellValue;
		} else {
			Player.grid[w][h] = cellValue;

		}
		if (cellValue === 3) {
			var boatShot = new Boat(shooter === 'player' ? 'opponent' : 'player', 0, 'H', w, h, true);
			if (boatShot.isSunken()) {
				boatShot.sink();
				cellValue = 4
				if (shooter === 'player') {
					Opponent.numBoatsAlive--;
				} else {
					Player.numBoatsAlive--;
				}
			}
		}
		if (shooter === 'player') {
			var ntl = '';
			switch(parseInt(w)){
				case 0:
					ntl = 'a'
					break;
				case 1:
					ntl = 'b'
					break;
				case 2:
					ntl = 'c'
					break;
				case 3:
					ntl = 'd'
					break;
				case 4:
					ntl = 'e'
					break;
				case 5:
					ntl = 'f'
					break;
				case 6:
					ntl = 'g'
					break;
				case 7:
					ntl = 'h'
					break;
				case 8:
					ntl = 'i'
					break;
				case 9:
					ntl = 'j'
					break;

			}
			// console.log(w);
			// console.log(ntl);
			// console.log(h);
			var isHit = 'Missed';
			var isSunk = '';
			if(cellValue >= 3){
				isHit = 'Hit';
			}
			if(cellValue == 4){
				isSunk = ' and sunk a ship.'
			}
			var str = 'You hit on ' + ntl + (parseInt(h)+1) + isSunk;
			timer = 500;
			if(isHit == 'Missed'){
				splash.play();
			}
			else{
				if(isSunk == ' and sunk a ship.'){
					Game.extraTime = true;
					timer = 1500;
					sinking.play()

				}
				else{
					explosion.play();
				}
			}
			// if(isHit == 'Hit'){
			// 	setTimeout(() => {
			// 		alanBtnInstance.playText(str);
			// 	}, timer);
			// }




		}else{
			var ntl = '';
			switch(w){
				case 0:
					ntl = 'a'
					break;
				case 1:
					ntl = 'b'
					break;
				case 2:
					ntl = 'c'
					break;
				case 3:
					ntl = 'd'
					break;
				case 4:
					ntl = 'e'
					break;
				case 5:
					ntl = 'f'
					break;
				case 6:
					ntl = 'g'
					break;
				case 7:
					ntl = 'h'
					break;
				case 8:
					ntl = 'i'
					break;
				case 9:
					ntl = 'j'
					break;

			}
			var isHit = 'missed';
			var isSunk = '';
			if(cellValue >= 3){
				isHit = 'hit';
			}
			if(cellValue == 4){
				isSunk = ', sinking a ship.'
			}
			var str = 'Opponent hit on ' + ntl + (h+1) + isSunk;
			if(Game.extraTime == true){
				timer = 1500;
			}

			// if(isHit == 'hit'){
			// 	setTimeout(() => {
			// 		alanBtnInstance.playText(str);
			// 	}, timer);
			// }
		}
	}

	static shootCell3(shooter, w, h) {
		var explosion = new Audio('explosion.mp3');
		var splash = new Audio('splash.wav')
		var sinking = new Audio('sinking.mp3')
		var timer = 500;
		explosion.volume = 0.1;
		splash.volume = 0.1;
		sinking.volume = 0.2;
		var cellValue = shooter === 'player' ? Opponent.grid[w][h] : Player.grid[w][h];
		if (cellValue < 2) {
			cellValue += 2;
		}
		if (shooter === 'player') {
			// console.log(w)
			// console.log(h)
			Opponent.grid[w][h] = cellValue;
		} else {
			Player.grid[w][h] = cellValue;

		}
		if (cellValue === 3) {
			var boatShot = new Boat(shooter === 'player' ? 'opponent' : 'player', 0, 'H', w, h, true);
			if (boatShot.isSunken()) {
				boatShot.sink();
				cellValue = 4
				if (shooter === 'player') {
					Opponent.numBoatsAlive--;
				} else {
					Player.numBoatsAlive--;
				}
			}
		}
		if (shooter === 'player') {
			var ntl = '';
			switch(parseInt(w)){
				case 0:
					ntl = 'a'
					break;
				case 1:
					ntl = 'b'
					break;
				case 2:
					ntl = 'c'
					break;
				case 3:
					ntl = 'd'
					break;
				case 4:
					ntl = 'e'
					break;
				case 5:
					ntl = 'f'
					break;
				case 6:
					ntl = 'g'
					break;
				case 7:
					ntl = 'h'
					break;
				case 8:
					ntl = 'i'
					break;
				case 9:
					ntl = 'j'
					break;

			}
			// // console.log(w);
			// // console.log(ntl);
			// // console.log(h);
			// var isHit = 'Missed';
			// var isSunk = '';
			// if(cellValue >= 3){
			// 	isHit = 'Hit';
			// }
			// if(cellValue == 4){
			// 	isSunk = ' and sunk a ship.'
			// }
			// var str = 'You hit on ' + ntl + (parseInt(h)+1) + isSunk;
			// timer = 500;
			// // if(isHit == 'Missed'){
			// // 	splash.play();
			// // }
			// // else{
			// 	if(isSunk == ' and sunk a ship.'){
			// 		Game.extraTime = true;
			// 		timer = 1500;
			// 		// sinking.play()
			//
			// 	}
			// 	else{
			// 		// explosion.play();
			// 	}
			// }
			// // if(isHit == 'Hit'){
			// // 	setTimeout(() => {
			// // 		alanBtnInstance.playText(str);
			// // 	}, timer);
			// // }




		}else{
			var ntl = '';
			switch(w){
				case 0:
					ntl = 'a'
					break;
				case 1:
					ntl = 'b'
					break;
				case 2:
					ntl = 'c'
					break;
				case 3:
					ntl = 'd'
					break;
				case 4:
					ntl = 'e'
					break;
				case 5:
					ntl = 'f'
					break;
				case 6:
					ntl = 'g'
					break;
				case 7:
					ntl = 'h'
					break;
				case 8:
					ntl = 'i'
					break;
				case 9:
					ntl = 'j'
					break;

			}
			// var isHit = 'missed';
			// var isSunk = '';
			// if(cellValue >= 3){
			// 	isHit = 'hit';
			// }
			// if(cellValue == 4){
			// 	isSunk = ', sinking a ship.'
			// }
			// var str = 'Opponent hit on ' + ntl + (h+1) + isSunk;
			// if(Game.extraTime == true){
			// 	timer = 1500;
			// }
			//
			// // if(isHit == 'hit'){
			// // 	setTimeout(() => {
			// // 		alanBtnInstance.playText(str);
			// // 	}, timer);
			// // }
		}
	}

	static setGridRandomly(gridType) {
		if (gridType !== 'player' && gridType !== 'opponent') {
			throw 'Grid must be player or opponent.';
		}
		if (gridType === 'player') {
			var grid = Player.grid;
			var boats = Player.boats;
		} else {
			var grid = Opponent.grid;
			var boats = Opponent.boats;
		}
		var stage = Game.numBoatTypes, numCellsBoat = 0, numBoatsType, i = 0, j = 0, randomCell, direction, boatID = 0;

		while (stage !== 0) {
			numBoatsType = 0;
			while (numBoatsType < Game.numBoatsPerType[stage]) {
				numCellsBoat = 0;
				i = 0;
				j = 0;
				randomCell = Game.randomCell();
				direction = Math.random() < 0.5 ? 'H' : 'V';
				var boat = new Boat(gridType, stage, direction, randomCell[0], randomCell[1], false);
				if (boat.fitsInGrid()) {
					while (numCellsBoat < stage) {
						grid[randomCell[0]+parseInt(i)][randomCell[1]+parseInt(j)] = 1;
						boats[stage-1][numBoatsType][numCellsBoat][0] = randomCell[0]+parseInt(i);
						boats[stage-1][numBoatsType][numCellsBoat][1] = randomCell[1]+parseInt(j);
						boats[stage-1][numBoatsType][-1] = direction;
						if (direction === 'H') {
							i++;
						} else {
							j++;
						}
						numCellsBoat++;
					}
					boatID++;
					numBoatsType++;
				}
			}
			stage--;
		}
		if (gridType === 'player') {
			Player.grid = grid.slice();
			Player.boats = boats.slice();
		} else {
			Opponent.grid = grid.slice();
			Opponent.boats = boats.slice();
		}
	}

	static endGame(winner) {
		MessageBox.addMsg('<b>' + winner.charAt(0).toUpperCase() + winner.slice(1) + ' won!</b>', true);
		Game.hasStarted = false;
		Graphics.unBlockCells(true);
		Graphics.unBlockRestartBtn(document.getElementById('restart_btn'), false);
	}

	static restartGame(playerGrid, opponentGrid) {
		Graphics.checkElement(playerGrid);
		Graphics.checkElement(opponentGrid);
		Game.initGame();
		Graphics.updateGrid('opponent', opponentGrid);
		Graphics.updateGrid('player', playerGrid);
		Graphics.unBlockCells(false);
		Graphics.unBlockRestartBtn(document.getElementById('restart_btn'), true);
		MessageBox.clear();
		Game.hasStarted = true;
		var restartBtn = document.getElementById('restart_btn');
		Graphics.unBlockRestartBtn(restartBtn, false);
	}

	static initGame() {
		var player = new Player;
		var opponent = new Opponent;
		var opponentAI = new OpponentAI;
		Player.placeBoats();
		Opponent.placeBoats();
	}

	static findPos(obj){
   var curleft = 0;
   var curtop = 0;

   if (obj.offsetParent) {
      do {
         curleft += obj.offsetLeft;
         curtop += obj.offsetTop;
      } while (obj = obj.offsetParent);

      return {X:curleft,Y:curtop};
   }
 }
}
