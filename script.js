const navShow = document.querySelector('.nav')
const menuIcon = document.querySelector('.menu-icon')
const closeIcon = document.querySelector('.close-icon')
const dropMenuOne = document.querySelector('.drop-menu-button.one')
const dropMenuTwo = document.querySelector('.drop-menu-button.two')
const subNavOne = document.querySelector('.sub-nav.one')
const subNavTwo = document.querySelector('.sub-nav.two')
const overlay = document.querySelector('.overlay')

menuIcon.addEventListener('click', (e) => {
  navShow.classList.add('show')
  overlay.classList.add('show-overlay')
})

closeIcon.addEventListener('click', (e) => {
  navShow.classList.remove('show')
  overlay.classList.remove('show-overlay')
})

dropMenuOne.addEventListener('click', e => {
  subNavOne.classList.toggle('drop-menu')
  dropMenuOne.classList.toggle('toggled')
})

dropMenuTwo.addEventListener('click', (e) => {
  subNavTwo.classList.toggle('drop-menu')
  dropMenuTwo.classList.toggle('toggled')
})
