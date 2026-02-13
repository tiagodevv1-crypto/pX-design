// inicio.js
document.addEventListener('DOMContentLoaded', () => {
  const toggle = document.querySelector('.menu-toggle');
  const nav = document.querySelector('.nav-inicio');

  toggle.addEventListener('click', () => {
    nav.classList.toggle('active');
  });
});
