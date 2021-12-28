const gridContainer = document.querySelector('.grid-container')
const block = document.getElementsByClassName('.block')
let defaultSize = 50
let changeSize = prompt

// add blocks to create a grid using for loop
createGrid = (defaultSize) => {
    gridContainer.style.gridTemplateColumns = `repeat(${defaultSize}, 1fr)`;
    gridContainer.style.gridTemplateRows = `repeat(${defaultSize}, 1fr)`;
    
    for(i = 0; i < defaultSize * defaultSize; i++) {
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

changeSize = ()



createGrid(defaultSize)




