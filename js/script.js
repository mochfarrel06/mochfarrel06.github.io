// Scroll navbar
function scrollNavbar() {
  const navbar = document.getElementById('navbar');

  if (this.scrollY >= 100) {
    navbar.classList.add('scroll-navbar');
  } else {
    navbar.classList.remove('scroll-navbar');
  }
}

window.addEventListener('scroll', scrollNavbar);

// Menu mobile
const hamburger = document.querySelector('.hamburger');
const navbar = document.getElementById('menu');

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('active');
  navbar.classList.toggle('active');
});

document.querySelectorAll('.nav-link').forEach((n) =>
  n.addEventListener('click', () => {
    hamburger.classList.remove('active');
    navbar.classList.remove('active');
  })
);

// Menu portfolio
let mixer = mixitup('.portfolio-container', {
  selectors: {
    target: '.portfolio-card',
  },
  animation: {
    duration: 300,
  },
});
