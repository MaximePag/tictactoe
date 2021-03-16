let table = document.getElementById('table');
let cells = document.getElementsByClassName('cell');
var turn = 0;
table.addEventListener('click', function (event) {
    let cell = event.target;
    if (cell.classList.contains("cell") && !cell.firstChild.classList.contains('bi')) {
        console.log(cell);
        let icon = cell.firstChild;
        let turnMessage = document.getElementById("turnMessage");
        if (turn % 2 == 0) {
            icon.classList.add('bi', 'bi-x');
            turn++;
            turnMessage.innerText = 'Tour du Joueur O'
        }
        else {
            icon.classList.add('bi', 'bi-circle');
            turn++;
            turnMessage.innerText = 'Tour du Joueur X'

        }
        if (turn >= 5) {
            checkWin();
        }
        if (turn > 8) {
            for (let i = 0; i < cells.length; i++) {
                cells[i].classList.add('draw-color');
            }
            alert('Égalité');
            reset();
        }
    }
});

let winArray = [["0", "1", "2"], ["3", "4", "5"], ["6", "7", "8"], ["0", "3", "6"], ["1", "4", "7"], ["2", "5", "8"], ["0", "4", "8"], ["2", "4", "6"]];
function checkWin() {
    let timesArray = [];
    let circleArray = [];
    for (let i = 0; i < cells.length; i++) {
        if (cells[i].firstChild.classList.contains('bi-x') && timesArray.length < 5) {
            timesArray.push(cells[i].id);
            timesArray.sort();
        }
        if (cells[i].firstChild.classList.contains('bi-circle') && circleArray.length < 5) {
            circleArray.push(cells[i].id);
            circleArray.sort();
        }
    }
    for (let j = 0; j < winArray.length; j++) {
        if (timesArray.includes(winArray[j][0]) && timesArray.includes(winArray[j][1]) && timesArray.includes(winArray[j][2])) {
            cells[winArray[j][0]].classList.add('win-color');
            cells[winArray[j][1]].classList.add('win-color');
            cells[winArray[j][2]].classList.add('win-color');
            alert('Joueur X a gagné !');
            reset();
        }
        if (circleArray.includes(winArray[j][0]) && circleArray.includes(winArray[j][1]) && circleArray.includes(winArray[j][2])) {
            cells[winArray[j][0]].classList.add('win-color');
            cells[winArray[j][1]].classList.add('win-color');
            cells[winArray[j][2]].classList.add('win-color');
            alert('Joueur O a gagné !');
            reset();
        }
    }
}

function reset() {
    let cells = document.getElementsByClassName('cell');
    for (let i = 0; i < cells.length; i++) {
        cells[i].firstChild.classList.remove('bi', 'bi-x', 'bi-circle');
        cells[i].classList.remove('win-color', 'draw-color');
    }
    turn = 0;
    turnMessage.innerText = 'Tour du Joueur X'
}