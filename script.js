
const body = document.getElementById('body');
const nav = document.getElementById('burgerNav');
const btn = document.getElementById('burgerBtn');
const navItems = document.querySelectorAll('.nav_item');

btn.addEventListener('click', () => {
    nav.classList.toggle('drop');
    body.classList.toggle('overflow');
})

navItems.forEach(elem => {
    elem.addEventListener('click', () => {
        nav.classList.toggle('drop');
        body.classList.toggle('overflow');
    })
})

nav.addEventListener('click', (event) => {
    const navList = document.querySelector('nav__list');
    if (event.target.classList.contains('nav')) {
        nav.classList.toggle('drop');
        body.classList.toggle('overflow');
    }
})