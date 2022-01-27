'use strict'

const MINE = '&#128163';
const FLAG = '&#128681';
const SAD = '&#128531';
const HAPPY = '&#128512';
const HEART = '&#10084';
const BROKEN_HEART = '&#128148';
const HINT = '&#128161';
const WINN = '&#129321';


var gGame = {
    isOn: false, shownCount: 0, markedCount: 0, secsPassed: 0,
    userChoseLevel: false
}
var gLevel = { SIZE: 4, MINES: 2, }
var gBoard


function initGame() {
    gBoard = buildBoard()
    renderBoard(gBoard, '.board-container')
}


function userChoseLevel(level) {
    gGame.isOn = true;
    gGame.userChoseLevel = true;
    switch (level) {
        case 'Easy':
            gLevel.SIZE = 4;
            gLevel.MINES = 2;
            gGame.livesLeft = 2;
            break;

        case 'Medium':
            gLevel.SIZE = 8;
            gLevel.MINES = 12;
            break;
        case 'Hard':
            gLevel.SIZE = 12;
            gLevel.MINES = 30;
            break;
    }
     initGame();
}


