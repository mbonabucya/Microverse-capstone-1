const hamburger = document.querySelector('#menu');
const navmenu = document.querySelector('.mobile-menu');
const closeMenu = document.querySelector('#closeMenu');
function show() {
  navmenu.style.visibility = 'visible';
  navmenu.style.top = '0';
  navmenu.style.left = '0';
  navmenu.style.position = 'fixed';
  navmenu.style.width = '100%';
  navmenu.style.height = '100vh';
}
function close() {
  navmenu.style.top = '-100%';
}
hamburger.addEventListener('click', show);
closeMenu.addEventListener('click', close);