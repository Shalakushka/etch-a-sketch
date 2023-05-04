const DEFAULT_SIZE = 16;

let currentColor = "#444444"
const board = document.querySelector(".board")

function setEraser() {
    currentColor = "#FFFFFF"
}

function setColor() {
    currentColor = document.getElementById("color-pick").value
}

function clearBoard() {
    let cells = document.querySelectorAll(".cell");
    for (let i = 0; cells[i]; i++)
        cells[i].style.backgroundColor = "white";
}

// Stolen part from michalosman github project
let mouseDown = false
document.body.onmousedown = () => (mouseDown = true)
document.body.onmouseup = () => (mouseDown = false)

function changeColor(e) {
    if (e.type === 'mouseover' && !mouseDown) return
    e.target.style.backgroundColor = currentColor
}
// -------------------------------------------

function setBoardSize(size) {
    board.innerHTML = "";
    board.style.gridTemplateColumns = `repeat(${size}, 1fr)`
    board.style.gridTemplateRows = `repeat(${size}, 1fr)`

    for (let i = 0; i < (size * size); i++) {
        const div = document.createElement("div");
        div.className = "cell";
        // Stolen part from michalosman github project
        div.addEventListener('mouseover', changeColor)
        div.addEventListener('mousedown', changeColor)
        // -------------------------------------------
        board.appendChild(div);
    }
}

function changeResolution() {
    setBoardSize(document.getElementById("resolution-selector").value)
}

function initBoard() {
    setBoardSize(DEFAULT_SIZE);
}

window.onload = initBoard;