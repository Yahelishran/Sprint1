'use strict'

function setMinesNegsCount() {
    for (var i = 0; i < gBoard.length; i++) {
        for (var j = 0; j < gBoard[i].length; j++) {
            gBoard[i][j].minesAroundCount = countNeighbors(i, j);
        }
    }
    console.log(gBoard);
}

function addMinesRandom(minesAmount) {
	console.log(emptyCells());
	var arrEmptyCells = emptyCells();
	for (var i = 0; i < minesAmount; i++) {
		var Idx = getRandomIntInclusive(0, arrEmptyCells.length - 1);
		var location = arrEmptyCells[Idx];
		//update model -
		gBoard[location.i][location.j].isMine = true;
		// 	//update DOM -
		// var elCell = document.getElementById('cell ' + location.i + ',' + location.j);
		// console.log('ELCELL', elCell);
		arrEmptyCells.splice(Idx, 1);
	}
	console.log('GBOARD', gBoard);
}