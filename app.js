// const gridContainer = document.querySelector('.grid-container')
// const block = document.getElementsByClassName('.block')
// let blocksPerSide = 16
// let gridSizeSquared = Math.pow(blocksPerSide, 2)

// // add blocks using for loop
// createGrid = () => {
//     for(i = 0; i < gridSizeSquared; i++) {
//         const block = document.createElement('div');
//         block.classList.add('block')
//         block.textContent = ' ';
//         gridContainer.style = `grid-template-columns: repeat(${blocksPerSide}, 25px [col-start]);`
//         gridContainer.appendChild(block);
//         block.addEventListener('mouseover', () => {
//             block.style.backgroundColor = 'gray'
//         }) 
//     }
// }


// createGrid()

const gridContainer = document.querySelector('.grid-container')
const block = document.getElementsByClassName('.block')
let size = 50
// let gridSizeSquared = Math.pow(blocksPerSide, 2)

// add blocks using for loop
createGrid = (size) => {
    gridContainer.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    gridContainer.style.gridTemplateRows = `repeat(${size}, 1fr)`;
    
    for(i = 0; i < size * size; i++) {
        const block = document.createElement('div')
        block.classList.add('block')
        gridContainer.appendChild(block)
    }
    blocks = document.querySelectorAll(".block")
    blocks.forEach((block) => {
        block.addEventListener("mouseover", (e) => {
            block.classList.add("mouseover")
        })
    })
}

createGrid(size)




