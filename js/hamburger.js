let hamburgerMenu = document.querySelector('.mobile-nav')
let menuBtn = document.getElementById('menu-btn')
let menuCloseBtn = document.getElementById('close-btn')

menuBtn.addEventListener('click', () => {
    hamburgerMenu.style.display = 'grid'
})

menuCloseBtn.addEventListener('click', () => {
    hamburgerMenu.style.display = 'none'
})