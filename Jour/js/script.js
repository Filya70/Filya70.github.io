"use strict";
window.addEventListener('DOMContentLoaded', ()=>{
    let menu = document.querySelector('#navigation'),
        search = document.querySelector('#search-modal'),
        nav = document.querySelector('nav');
    let btnMenu = document.querySelector('.btn-burger').addEventListener('click', showMenu);
    let btnSeaerch = document.querySelector('.btn-search').addEventListener('click', showSearch);

    function showMenu () {
        if(search.classList.contains('hide')){
            menu.classList.toggle("hide");
            nav.classList.toggle('openMenu');
            document.body.classList.toggle('hideScroll');
        }else{
            menu.classList.toggle("hide");
        }
    }

    function showSearch () {
        if(menu.classList.contains('hide')){
            search.classList.toggle("hide");
            nav.classList.toggle('openMenu');
            document.body.classList.toggle('hideScroll');
        }else{
            search.classList.toggle("hide");
        }
    }
})

    
