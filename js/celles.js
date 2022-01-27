'use strict'

function cellClicked(elCell, i, j) {
	var cell = gBoard[i][j];

	// make sure first turn isn't a bomb - TODO--------
	if (gGame.firstTurn) {
		cell.isMine = false;
		// cell.innerHTML !== MINE;
		elCell.innerHTML = cell.minesAroundCount;

		addMinesRandom(gLevel.MINES);
		setMinesNegsCount();

		gGame.firstTurn = false;
		cellClicked(elCell, i, j);
	}

	if (cell.isMine) {
		elCell.innerHTML = MINE;
		cell.isMarked = true;
	} else {
		elCell.innerHTML = cell.minesAroundCount;
	}
	gGame.shownCount++;
	console.log('Cell clicked: ', elCell, i, j);
	console.log('gGameShownCount', gGame.shownCount);
}

function emptyCells() {
	var emptyArr = [];
	for (var i = 0; i < gBoard.length; i++) {
		for (var j = 0; j < gBoard[0].length; j++) {
			var currCell = gBoard[i][j];
			if (!currCell.isMine) {
				emptyArr.push({ i, j });
			}
		}
	}
	return emptyArr;
}

function cellMarked(elCell) {}