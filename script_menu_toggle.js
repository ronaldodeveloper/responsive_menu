/*
=====================  MENU BURGER  ===========================*
*/

var btn = document.querySelector('.menu_icon') 
btn.addEventListener('click', clicar) 

var iconTop = document.querySelector('.menu_icon_top')
var iconCenter = document.querySelector('.menu_icon_center')
var iconBottom = document.querySelector('.menu_icon_bottom')

function clicar() { 
    var menuItems = document.querySelector('.menu_items')
    btn.classList.toggle('menu_icon_open') 
    menuItems.classList.toggle('menu_items_open')  
    iconTop.classList.toggle('icon_top_open')
    iconCenter.classList.toggle('icon_center_open')
    iconBottom.classList.toggle('icon_bottom_open')
}
