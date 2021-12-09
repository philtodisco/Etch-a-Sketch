const gridContainer = document.querySelector('#grid-container')
let gridSize = 256

for(i = 0; i < gridSize; i++) {
    const grid = document.createElement('div');
    grid.textContent = '.';
    gridContainer.appendChild(grid);
}



