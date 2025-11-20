const gridContainer = document.getElementById('gridContainer')
const containerWidth = getComputedStyle(document.getElementById('gridContainer'), null).width
const containerHeight = getComputedStyle(document.getElementById('gridContainer'), null).height

const grid = document.querySelectorAll('#grid')
const button = document.querySelectorAll('#button')

function createDiv(num) {
    for (let i = 0; i<(num**2); i++) {
        const div = document.createElement('div')
        div.style.boxSizing = 'border-box'
        div.style.width = (parseInt(containerWidth)-6)/num + 'px'
        div.style.height =  (parseInt(containerHeight)-6)/num + 'px'
        div.style.border = ('1px, solid, rgb(196, 211, 224)');
        div.id = 'grid'
        div.addEventListener('mouseenter', mouseHover)
        div.addEventListener('mouseout', mouseHover)
        gridContainer.appendChild(div)
    }
}

function mouseHover(event) {
    const target = event.currentTarget.classList.toggle('hover');
}

function newBtn(event) {
    const target = event.target.id.toLowerCase();
    if (target === 'new') {
        while (true) {
            number = parseInt(prompt('Insert the grid\'s side size'))
            if (number <= 64 && number >= 1) {
                gridContainer.textContent = ''
                createDiv(number)
                break
            }
            else if (number > 64) {
                alert('Number\'s too big! (max is 64). Try Again.')
                continue
            }
        }
    }
}

button.forEach(pressed => {
    pressed.addEventListener('click', newBtn)
})