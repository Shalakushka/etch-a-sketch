const board = document.querySelector(".board");

function createCells(nb, size) {
    for (let i = 0; i < nb; i++) {
        let cell = document.createElement("div");
        cell.className = "cell";
        cell.style.cssText = `height: ${size}px; width: ${size}px;`
        board.appendChild(cell);
    }
}

function changeCellColor(e) {
    e.target.style.backgroundColor = "black";
}

createCells(256, 32);
let cells = document.querySelectorAll(".cell");
for (let i = 0; i < cells.length; i++) {
    cells[i].addEventListener("mouseenter", (e) => changeCellColor(e));
}

