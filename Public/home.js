const menu = document.querySelector('.menu')
const navbar = document.querySelector('#navbar')
const cancel = document.querySelector('.cancel')

menu.addEventListener('click', ()=>{
    event.preventDefault();
    navbar.style.display='block'
     cancel.style.display='block'
     menu.style.display = 'none'

})
cancel.addEventListener('click', ()=>{
    event.preventDefault();
    navbar.style.display='none'
     cancel.style.display='none'
     menu.style.display = 'block'

})