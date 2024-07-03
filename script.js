// empty file, no JS needed.

const sun = document.querySelector('.fa-sun')
const moon = document.querySelector('.fa-moon')
const body = document.querySelector('body')

moon.addEventListener('click', () =>{
    body.className = 'classChangeColor';
}) 

sun.addEventListener('click' ,()=>{
    body.classList.remove('classChangeColor')
} )