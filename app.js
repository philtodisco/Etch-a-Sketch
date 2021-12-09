const gridContainer = document.querySelector('.grid-container')
let gridSize = 256

for(i = 0; i < gridSize; i++) {
    const grid = document.createElement('div');
    grid.classList.add('grid')
    grid.textContent = ' ';
    gridContainer.appendChild(grid);
}



