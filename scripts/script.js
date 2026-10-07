document.addEventListener('DOMContentLoaded', () => {

  // 1. Navigation Hamburger Toggle
  const navToggle = document.getElementById('navToggle');
  const navMenu = document.getElementById('navMenu');

  if (navToggle && navMenu) {
    navToggle.addEventListener('click', () => {
      navMenu.classList.toggle('active');
    });
  }

  // 2. Contact Page Phone Number Reveal
  const contactBtn = document.getElementById('contactBtn');
  const phoneNumber = document.getElementById('phoneNumber');

  if (contactBtn && phoneNumber) {
    contactBtn.addEventListener('click', () => {
      contactBtn.style.display = 'none';
      phoneNumber.style.display = 'block';
    });
  }

});