function toggleMenu() {
  var menu = document.getElementById('menu-content');
  menu.classList.toggle('show');
  var menuIcon = document.querySelector('.menu-icon');
  menuIcon.classList.toggle('active');
}

