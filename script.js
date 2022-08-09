// querySelectorAll not only select element, function also put "all panels" into a list called a node
const panels = document.querySelectorAll('.panel')

panels.forEach((panel) => {
  panel.addEventListener('click', () => {
    removeInactivePanels()
    panel.classList.add('active')
  })
})
function removeInactivePanels(){
  panels.forEach(panel => {
    panel.classList.remove('active')
  })
}
