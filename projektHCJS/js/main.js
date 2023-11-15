// let mobileHamburger = document.querySelector('.mobile-hamburger');
// let mobileHamburgers = document.getElementsByClassName('mobile-hamburger');
// console.log("🚀 ~ file: main.js:3 ~ mobileHamburgers:", mobileHamburgers)

let mobileHamburger = document.getElementsByClassName('mobile-hamburger')[0];
// console.log("🚀 ~ file: main.js:3 ~ mobileHamburger:", mobileHamburger)
let openMenuHolder = document.getElementsByClassName('open-menu-holder')[0];

// ASK: pamietaj ze toglu klasa bez kropki.kropka tylko w getElemByClassName bo styl css
mobileHamburger.addEventListener('click', () => {openMenuHolder.classList.toggle('open')});
// ASK : dlaczego dla m-close tez .open?
let mobileClose = document.getElementsByClassName('mobile-close')[0];
mobileClose.addEventListener('click', () => {openMenuHolder.classList.toggle('open')})

// mobileHamburger.addEventListener('click', () => {
// ASK: czy this moze byc stosowany w ten sposob?! ogarnij roznice z e.target
    // this.classList.toggle('.open');
// });


