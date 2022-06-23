const hamburger = document.querySelector('.hamberger');
const navLinks = document.querySelector('.navItems');
const links = document.querySelectorAll('.navItems .Items');

hamburger.addEventListener('click', () => {
  navLinks.classList.toggle('open');
  hamburger.classList.toggle('open');
  links.forEach((link) => {
    link.classList.toggle('fade');
  });
});
