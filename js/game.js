'use strict'

const MINE = '&#128163';
const FLAG = '&#128681';
const NORMAL = '&#128512';
const WIN = '&#129321';
const DEAD = '&#10084';
const MOVE = '😲';


var gBoard;
var gTimer;



var gGame = {
    isOn: false, firstTurn: true, shownCount: 0,
    markedCount: 0, secsPassed: 0
}

var gLevel = {
    SIZE: 4,
    MINES: 2
}

function initGame() {
    gGame.shownCount = 0;
    gGame.isOn = true;
    gGame.firstTurn = true;

    gBoard = buildBoard();
    renderBoard();
}

function boardSize(size, mines) {
    gLevel.SIZE = size;
    gLevel.MINES = mines;
    initGame();
}


function buildBoard() {
    var board = [];
    for (var i = 0; i < gLevel.SIZE; i++) {
        board[i] = [];
        for (var j = 0; j < gLevel.SIZE; j++) {
            var cell = {
                minesAroundCount: 4,
                isShown: false,
                isMine: false,
                isMarked: true
            }
            board[i][j] = cell;
        }
    }
    return board;
}

function renderBoard() {
    // setMinesNegsCount();
    var strHTML = '';
    for (var i = 0; i < gBoard.length; i++) {
        strHTML += `<tr class="board" >\n`;
        for (var j = 0; j < gBoard[0].length; j++) {
            var cell = gBoard[i][j];
            var className = '';
            if (cell.isShown) {
                className = 'cell';
                cell = cell.isMine ? MINE : cell.minesAroundCount;
            } else {
                className = 'cell';
                cell = '';
            }
            var cellID = 'cell ' + i + ',' + j;
            strHTML += `\t<td class="cell ${className}"
			onclick="cellClicked(this, ${i}, ${j})" id="${cellID}">
				${cell}
				</td>\n`;
        }
        strHTML += `</tr>\n`;
    }
    var elBoard = document.querySelector('.cells');
    elBoard.innerHTML = strHTML;
}

checkGameOver();
function checkGameOver() {
    console.log('BOARDSIZE', gLevel.SIZE);
    if (gGame.shownCount === gLevel.SIZE ** 2 - gLevel.MINES) gGame.isOn = false;
    console.log('SHOWNCOUNT', gGame.shownCount);
}
