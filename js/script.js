const grid = document.getElementById("grid");
const gridRange = document.getElementById("range-input");
const span = document.getElementsByClassName("span");
const colorInput = document.getElementById("color-input");
const randomBtn = document.getElementById("random-btn");
const rainbowBtn = document.getElementById("rainbow-btn");
const toggleGrid = document.getElementById("toggle-grid");
const eraserBtn = document.getElementById("eraser-btn");
const clearBtn = document.getElementById("clear-btn");
let btn = document.getElementsByClassName("btn");

let CURRENT_COLOR = "#FFFFFF";
let CURRENT_SIZE = "32";
let CURRENT_MODE = "color";
let TOGGLE_GRID = true;
let PEN_ACTIVE = false;

// Create the grid
makeGrid = (rows, cols) => {
    grid.innerHTML = '';
    grid.style.setProperty('--grid-rows', rows);
    grid.style.setProperty('--grid-cols', cols);
    for (c = 0; c < (rows * cols); c++) {
        let box = document.createElement("div");
        box.className = "grid-item";
        if (TOGGLE_GRID) { box.style.border = "0px"; }
        box.addEventListener("mouseover", changeColor);
        grid.appendChild(box);
    };
};

// Change the color of the box
changeColor = (e) => {
    if (PEN_ACTIVE === true)
        if (CURRENT_MODE === 'rainbow') {
            e.target.style.backgroundColor = getRandomColor();
        } else if (CURRENT_MODE === 'color') {
            e.target.style.backgroundColor = colorInput.value;
        } else if (CURRENT_MODE === 'random') {
            e.target.style.backgroundColor = CURRENT_COLOR;
        } else {
            e.target.style.backgroundColor = "#FFFFFF";
        }
};

// Remove active class from buttons
removeActive = () => {
    for (let i = 1; i < btn.length - 1; i++) {
        btn[i].classList.remove("active");
    }
}

// Returns => random color
getRandomColor = () => {
    const randomR = Math.floor(Math.random() * 256);
    const randomG = Math.floor(Math.random() * 256);
    const randomB = Math.floor(Math.random() * 256);
    let randomColor = `rgb(${randomR}, ${randomG}, ${randomB})`;
    return randomColor;
}

/* ----------------------------- Range input effects ----------------------------- */
// changes the value of the span element
gridRange.onmousemove = () => {
    CURRENT_SIZE = gridRange.value;
    span[0].innerHTML = CURRENT_SIZE;
    span[1].innerHTML = CURRENT_SIZE;
};

// Changes the size of grid
gridRange.onchange = () => {
    CURRENT_SIZE = gridRange.value;
    makeGrid(CURRENT_SIZE, CURRENT_SIZE);
};

// Toggle the pen
grid.onclick = (e) => {
    PEN_ACTIVE = !PEN_ACTIVE; // Toggle pen
}

/* ------------------------------- Button effects ------------------------------- */
colorInput.onchange = () => {
    CURRENT_MODE = "color";
    removeActive();
}
randomBtn.onclick = () => {
    CURRENT_MODE = "random";
    CURRENT_COLOR = getRandomColor();
    removeActive();
    randomBtn.className = "btn active";
}
eraserBtn.onclick = () => {
    CURRENT_MODE = "eraser";
    removeActive();
    eraserBtn.className = "btn active";
}
rainbowBtn.onclick = () => {
    CURRENT_MODE = "rainbow";
    removeActive();
    rainbowBtn.className = "btn active";
}
toggleGrid.onclick = (e) => {
    removeActive();
    if (TOGGLE_GRID) {
        TOGGLE_GRID = false;
        makeGrid(CURRENT_SIZE, CURRENT_SIZE);
    } else {
        TOGGLE_GRID = true;
        makeGrid(CURRENT_SIZE, CURRENT_SIZE);
    }
    toggleGrid.className = "btn active";
}
clearBtn.onclick = () => {
    removeActive();
    makeGrid(CURRENT_SIZE, CURRENT_SIZE);
}
/* ------------------------------- Button effects ------------------------------- */

window.onload = () => {
    makeGrid(CURRENT_SIZE, CURRENT_SIZE);
}
