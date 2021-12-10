const gridContainer = document.querySelector('.grid-container')
const gridItem = document.getElementsByClassName('.grid')
let gridSize = 16
let grideSize2 = Math.pow(gridSize, 2)

for(i = 0; i < grideSize2; i++) {
    const grid = document.createElement('div');
    grid.classList.add('grid')
    grid.textContent = ' ';
    gridContainer.appendChild(grid);
    grid.addEventListener('mouseover', () => {
        grid.style.backgroundColor = 'gray'
    })
}

// gridItem.forEach((grid) => {
//     grid.addEventListener('mouseover', () => {
//         alert('ok')
//     })
// })





