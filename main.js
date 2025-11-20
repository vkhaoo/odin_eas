const containerWidth = getComputedStyle(document.getElementById('gridContainer'), null).width
const containerHeight = getComputedStyle(document.getElementById('gridContainer'), null).height

function createDiv(num) {
    for (let i = 0; i<(num**2); i++) {
        const div = document.createElement('div')
        div.style.boxSizing = 'border-box'
        div.style.width = (parseInt(containerWidth)-6)/num + 'px'
        div.style.height =  (parseInt(containerHeight)-6)/num + 'px'
        div.style.border = ('1px, solid, rgb(196, 211, 224)');
        div.id = 'grid'
        gridContainer.appendChild(div)
    }
}

function mouseHover(event) {
    const target = event.currentTarget.classList.toggle('hover');
    console.log(`The mouse is hovering ${target}`)
}

createDiv(4)

const grid = document.querySelectorAll('#grid')

grid.forEach(pressed => {
    pressed.addEventListener('mouseenter', mouseHover)
})

grid.forEach(pressed => {
    pressed.addEventListener('mouseout', mouseHover)
})