const gridContainer = document.querySelector('.grid-container')
const block = document.getElementsByClassName('.block')
let blocksPerSide = 16
let gridSizeSquared = Math.pow(blocksPerSide, 2)

// add blocks using for loop
createGrid = () => {
    for(i = 0; i < gridSizeSquared; i++) {
        const block = document.createElement('div');
        block.classList.add('block')
        block.textContent = ' ';
        gridContainer.style = `grid-template-columns: repeat(${blocksPerSide}, 25px [col-start]);`
        gridContainer.appendChild(block);
        block.addEventListener('mouseover', () => {
            block.style.backgroundColor = 'gray'
        }) 
    }
}


createGrid()





