const container = document.querySelector('#container')
const resetButton = document.querySelector('#reset')

function createPanels(numPanels){
    let panelList = []
    for(let i = 0; i < numPanels; i++) {
        let panel = document.createElement('div')
        panel.classList.add('panel')
        panelList.push(panel)
    }
    return panelList
}

function addDivsToContainer(divList,container){
    divList.forEach(div => container.appendChild(div))
}

function resizeContainer(container,length){
    container.style.gridTemplateColumns = `repeat(${length},1fr)`
    container.style.gridTemplateRows =  `repeat(${length},1fr)`
}

function addEvents(){
    let panelList = document.querySelectorAll('.panel')
    panelList.forEach(panel => {
        panel.addEventListener('mouseover', (e) => {
            e.target.classList.add('drawnOn')
        })
    })
}

function newGame(length) {
    resizeContainer(container,length)
    let startPanels = createPanels(length * length)
    addDivsToContainer(startPanels, container)
    addEvents()
}

function reset(){
    let panelList = document.querySelectorAll('.panel')
    panelList.forEach(panel => {
        panel.classList.remove('drawnOn')
    })
    let newSize = prompt('What should the length now be')
    newGame(newSize)
}

resetButton.addEventListener('click',reset)

window.onload = () => newGame(16)