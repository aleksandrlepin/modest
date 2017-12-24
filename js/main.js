'use strict';

let headerMenu = document.querySelector('.header__menu ul');
headerMenu.addEventListener('click', setActive);

function setActive(event) {
    event = event || window.event;

    if (event.target.tagName === 'A') {
        let currentActive =  document.querySelector('.menu__link.active');
        currentActive.classList.remove('active');
        event.target.classList.add('active');
    };
};
