console.clear()
const box = document.querySelector('.box')
const buttonToggleRotate = document.querySelector('.rotation')
const buttonToggleBg = document.querySelector('.background')
const buttonToggleRadius = document.querySelector('.radius')

buttonToggleRotate.addEventListener('click', () => {
  box.classList.toggle('toggle-rotation')
})

buttonToggleBg.addEventListener('click', () => {
  box.classList.toggle('toggle-background')
})

buttonToggleRadius.addEventListener('click', () => {
  box.classList.toggle('toggle-radius')
})
