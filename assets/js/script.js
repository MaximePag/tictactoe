let table = document.getElementById('table');
var turn = 0;
table.addEventListener('click', function (event) {
    let cell = event.target;
    let icon = cell.firstChild;
    let turnMessage = document.getElementById("turnMessage");
    if (turn % 2 == 0) {
        icon.classList.add('fas', 'fa-times');
        turn++;
        turnMessage.innerText = 'Tour du Joueur O'
    }
    else {
        icon.classList.add('far', 'fa-circle');
        turn++;
        turnMessage.innerText = 'Tour du Joueur X'

    }
    if (turn >= 5) {
        checkWin();
    }
    if (turn > 8) {
        alert('Égalité');
        reset();
    }
});

let winArray = [["0", "1", "2"], ["3", "4", "5"], ["6", "7", "8"], ["0", "3", "6"], ["1", "4", "7"], ["2", "5", "8"], ["0", "4", "8"], ["2", "4", "6"]];
function checkWin() {
    let timesArray = [];
    let circleArray = [];
    let cells = document.getElementsByClassName('cell');
    for (let i = 0; i < cells.length; i++) {
        if (cells[i].firstChild.classList.contains('fa-times') && timesArray.length < 5) {
            timesArray.push(cells[i].id);
            timesArray.sort();
        }
        if (cells[i].firstChild.classList.contains('fa-circle') && circleArray.length < 5) {
            circleArray.push(cells[i].id);
            circleArray.sort();
        }
    }
    for (let j = 0; j < winArray.length; j++) {
        if (timesArray.includes(winArray[j][0]) && timesArray.includes(winArray[j][1]) && timesArray.includes(winArray[j][2])) {
            alert('Joueur X a gagné !');
            reset();
        }
        if (circleArray.includes(winArray[j][0]) && circleArray.includes(winArray[j][1]) && circleArray.includes(winArray[j][2])) {
            alert('Joueur O a gagné !');
            reset();
        }
    }
}

function reset() {
    let cells = document.getElementsByClassName('cell');
    for (let i = 0; i < cells.length; i++) {
        cells[i].firstChild.classList.remove('fas', 'far', 'fa-times', 'fa-circle');
    }
    turn = 0;
    turnMessage.innerText = 'Tour du Joueur X'
}