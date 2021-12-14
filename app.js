const gridContainer = document.querySelector('.grid-container')
const gridItem = document.getElementsByClassName('.grid')
let squaresPerSide = 16
let grideSize2 = Math.pow(squaresPerSide, 2)

// add blocks using for loop
for(i = 0; i < grideSize2; i++) {
    //
    const grid = document.createElement('div');
    grid.classList.add('grid')
    grid.textContent = ' ';
    gridContainer.style = `grid-template-columns: repeat(${squaresPerSide}, 25px [col-start]);`
    gridContainer.appendChild(grid);
    grid.addEventListener('mouseover', () => {
        grid.style.backgroundColor = 'gray'
    }) 
}










