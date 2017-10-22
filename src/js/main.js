'use strict';
// $('.menu__link').click(function () {
//     $('.menu__link.active').removeClass('active');
//     $(this).addClass('active')
// })

let menuLink = document.querySelectorAll('.menu__link');
menuLink.forEach(function (item, i, menuLink){
    item.addEventListener('click', rmAddActive);
});

function rmAddActive () {
    document.querySelector('.menu__link.active').classList.remove('active');
    this.classList.add('active');
};
