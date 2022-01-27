'use strict'

function buildBoard() {
    var board = []
    var SIZE = gLevel.SIZE
    for (var i = 0; i < SIZE; i++) {
        board.push([])
        for (var j = 0; j < SIZE; j++) {
            var cell = { minesAroundCount: 0, isShown: false, isMine: false, isMarked: false }
            board[i][j] = cell
        }
    }
    return board
}

function renderBoard(board, selector) {

    var strHTML = '<table border="0"><tbody>';
    for (var i = 0; i < board.length; i++) {
        strHTML += '<tr>';
        for (var j = 0; j < board[0].length; j++) {
            var cell = ' ';
            var className = `cell cell${i}-${j}`;
            strHTML += `<td onmousedown="cellClicked(${i},${j},event,this)" class=" ${className}"> ${cell} </td>`;
        }
        strHTML += '</tr>'
    }
    strHTML += '</tbody></table>';
    var elContainer = document.querySelector(selector);
    elContainer.innerHTML = strHTML;
}


function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}


