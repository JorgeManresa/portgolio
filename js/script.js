let menu = document.querySelector('#menu-btn');
let header = document.querySelector('.header');
let themeToggler = document.querySelector('#theme-toggler');

menu.onclick = () =>{
    menu.classList.toggle('fa-times');
    header.classList.toggle('active');
}

themeToggler.onclick = () => {
    themeToggler.classList.toggle('fa-sun');

    if(themeToggler.classList.contains('fa-sun')){
        document.body.classList.add('active');
    }else{
        document.body.classList.remove('active');
    }
}

/* ocultar menu al hacer click en uno de los botones de la navbar */

let home = document.querySelector('#btnHome');
let about = document.querySelector('#btnAbout');
let services = document.querySelector('#btnServices');
let portfolio = document.querySelector('#btnPortfolio');
let contact = document.querySelector('#btnContact');

home.onclick = () =>{
    menu.classList.toggle('fa-times');
    header.classList.toggle('active');
}

about.onclick = () =>{
    menu.classList.toggle('fa-times');
    header.classList.toggle('active');
}

services.onclick = () =>{
    menu.classList.toggle('fa-times');
    header.classList.toggle('active');
}

portfolio.onclick = () =>{
    menu.classList.toggle('fa-times');
    header.classList.toggle('active');
}

contact.onclick = () =>{
    menu.classList.toggle('fa-times');
    header.classList.toggle('active');
}


/* texto girando en la foto del usuario*/
let text = document.querySelector('.text p')

text.innerHTML = text.innerHTML.split("").map(
    (char, i) =>
    `<span style="transform:rotate(${i * 8}deg)">${char}</span>`
).join("")



/* el swiper slider */
/*
const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  
    // And if we need scrollbar
    scrollbar: {
      el: '.swiper-scrollbar',
    },
  });

  */

  var swiper = new Swiper(".mySwiper", {
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: "auto",
    coverflowEffect: {
      rotate: 50,
      stretch: 0,
      depth: 100,
      modifier: 1,
      slideShadows: true,
    },
    pagination: {
      el: ".swiper-pagination",
    },

        // Navigation arrows
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
          },
        
          // And if we need scrollbar
          scrollbar: {
            el: '.swiper-scrollbar',
          },
  });