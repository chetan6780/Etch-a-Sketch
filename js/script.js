const grid = document.getElementById("grid");
const gridRange = document.getElementById("range-input");
const span = document.getElementsByClassName("span");

makeRows = (rows, cols) => {
    grid.style.setProperty('--grid-rows', rows);
    grid.style.setProperty('--grid-cols', cols);
    for (c = 0; c < (rows * cols); c++) {
        let box = document.createElement("div");
        box.className = "grid-item";
        grid.appendChild(box);
    };
};

colorChange = (e) => {
    console.log(e.target.style);
}
clearGrid = () => {
    grid.innerHTML = ''
}

gridRange.onmousemove = () => {
    let n = gridRange.value;
    clearGrid();
    span[0].innerHTML = n;
    span[1].innerHTML = n;
    makeRows(n, n);
};

gridItem.onmouseover = () => {
    console.log(gridItem.style);
}


window.onload = () => {
    // const n = prompt("Enter number between 1 and 100");
    console.log(gridRange);
    makeRows(16, 16);
    let gridItem = document.getElementsByClassName("grid-item")
    console.log(gridItem);

}
// makeRows(16, 16);
// makeRows(32, 32);
// makeRows(n, n);
// makeRows(64, 64);
// makeRows(256, 256);
// makeRows(10, 10);
// pointer button
// heart effect
/* #color-btn{} */
/* #rainbow-btn{} */
/* #eraser-btn{} */
/* #clear-btn{} */