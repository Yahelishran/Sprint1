'use strict'


function reavelCell(i, j, elCell) {
    gBoard[i][j].isShown = true
    if (gBoard[i][j].minesAroundCount !== 0) {
        elCell.innerHTML = gBoard[i][j].minesAroundCount;
        gGame.shownCount++;
    }
    elCell.classList.add('shown')

}

function cellMarked(elCell, i, j) {
    var classes = elCell.All
    //update the model
    if(gBoard[i][j].isMarked)  {
        gBoard[i][j].isMarked = false;
        renderCell(elCell, '');
        gGame.markedCount--;
    } 
    else {
        gBoard[i][j].isMarked = true;
        //update the dom
        renderCell(elCell, FLAG);
        gGame.markedCount++;
    }
}

