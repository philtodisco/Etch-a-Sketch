const gridContainer = document.querySelector('.grid-container')
const block = document.getElementsByClassName('.block')
const changeSize = document.getElementById('change-size')
let size = 50


// add blocks to create a grid using for loop
createGrid = (size) => {
    gridContainer.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    gridContainer.style.gridTemplateRows = `repeat(${size}, 1fr)`;
    
    for(i = 0; i < size * size; i++) {
        const block = document.createElement('div')
        block.classList.add('block')
        gridContainer.appendChild(block)
    }
    // change color of a block on "mouseover"
    blocks = document.querySelectorAll(".block")
    blocks.forEach((block) => {
        block.addEventListener("mouseover", (e) => {
            block.classList.add("mouseover")
        })
    })
}

changeSize.addEventListener("click", (e) => {
    blocks.forEach((block) => {
        block.classList.remove("mouseover")
    })
    size = prompt("Enter a number between 16-100")
    // prevent user from 
    if (size < 16 || size > 100 || isNaN(size)) {
        size = prompt("Enter a number between 16-100")
    }
    createGrid(size)
})



createGrid(size)




