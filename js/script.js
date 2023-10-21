function toggleMenu() {
  const menuIcon = document.querySelector('.menu-icon');
  menuIcon.classList.toggle('active');
  
  const menuContent = document.querySelector('.menu-content');
  menuContent.classList.toggle('show');
}
