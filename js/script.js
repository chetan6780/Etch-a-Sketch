const grid = document.getElementById("grid");

makeRows = (rows, cols) => {
    grid.style.setProperty('--grid-rows', rows);
    grid.style.setProperty('--grid-cols', cols);
    for (c = 0; c < (rows * cols); c++) {
        let box = document.createElement("div");
        box.innerHTML = (" ");
        grid.appendChild(box).className = "grid-item";
    };
};

// makeRows(16, 16);
makeRows(32, 32);
// makeRows(64, 64);
// makeRows(256, 256);
// makeRows(10, 10);
// pointer button
// heart effect
/* #color-btn{} */
/* #rainbow-btn{} */
/* #eraser-btn{} */
/* #clear-btn{} */