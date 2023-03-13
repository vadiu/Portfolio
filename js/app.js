const menu = document.querySelector('.menu');
const hamburger = document.querySelector('.hamburger');


hamburger.addEventListener('click', function() {
    menu.classList.add('active')
})

const close = document.querySelector('.menu__close');

close.addEventListener('click', function() {
    menu.classList.remove('active');

})

const overlay = document.querySelector('.menu__overlay');


overlay.addEventListener('click', function () {
    menu.classList.remove('active');
})


const counter = document.querySelectorAll('.scales__counter');

const line = document.querySelectorAll('.scales__span');


counter.forEach((item,i) => {
    line[i].style.width = item.innerHTML
})

