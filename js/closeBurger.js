const btnMenu = document.getElementById('btnMenu');
const btnFullMenu = document.getElementById('fullMenu');
const btnCloseMenu = document.getElementById('closeFullMenu');

btnMenu.addEventListener('click', () => {
    btnFullMenu.style.display = 'flex';
})

btnCloseMenu.addEventListener('click', () => {
    btnFullMenu.style.display = 'none';
})

const information = document.getElementById('information');
const carte = document.getElementById('carte');
const contactez = document.getElementById('contactez');

information.addEventListener('click', () => {
    btnFullMenu.style.display = 'none';
})

carte.addEventListener('click', () => {
    btnFullMenu.style.display = 'none';
})

contactez.addEventListener('click', () => {
    btnFullMenu.style.display = 'none';
})

