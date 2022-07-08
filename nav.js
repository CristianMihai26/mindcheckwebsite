const home = document.querySelector('.home');
const wrapper = document.querySelector('.wrapper');
const frontp = document.querySelector('.frontp');
const about = document.querySelector('.about');
const abt = document.querySelector('.abt');
const mail = document.querySelector('.mail');
const contact = document.querySelector('.contact');
const social = document.querySelector('.social');

frontp.onclick = function (){
   home.classList.toggle ('active');
   about.classList.remove ('active');
   contact.classList.remove ('active');
};

abt.onclick = function (){
   about.classList.toggle ('active');
   home.classList.remove ('active');
   contact.classList.remove ('active');
};

mail.onclick = function(){
    about.classList.remove ('active');
   home.classList.remove ('active');
   contact.classList.toggle ('active');
}

social.onclick = function(){
    about.classList.remove ('active');
   home.classList.remove ('active');
   contact.classList.remove ('active');
}

const list = document.querySelectorAll('.list');
function activeLink (){
    list.forEach((item) =>
    item.classList.remove('active'));
    this.classList.add('active');
}
list.forEach ((item) =>
item.addEventListener ('click',activeLink));