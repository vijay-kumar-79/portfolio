function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}


document.addEventListener('DOMContentLoaded', init);
function init() {
  const sr = ScrollReveal({
    reset: true,
    distance: '60px',
    duration: 1200,
    delay: 100,
    origin: 'top'
  });

  let query = window.matchMedia("(max-width: 600px)");
  if (query.matches) {
    sr.reveal('.logo', { origin: 'left' });
    sr.reveal('.hamburger-menu', { origin: 'right' });
    sr.reveal('.section__text', { origin: 'bottom' });
    sr.reveal('.avatar', { delay: 400, origin: 'top' });
    sr.reveal('.section-heading');
    // sr.reveal('#about .section-heading',{origin:'bottom'});
    sr.reveal('.about-pic', { delay: 400 });
    sr.reveal('#about .details-container', { origin: 'bottom' });
    sr.reveal('.details-container');
    sr.reveal('.text-container', { origin: 'bottom' });
    sr.reveal('#experience .details-container', { origin: 'bottom' });
    sr.reveal('#projects .know-me', { origin: 'left' });
    sr.reveal('.contact-info-upper-container', { origin: 'bottom' });
    sr.reveal('footer');
    sr.reveal('.arrow', { origin: 'right', delay: 500 });
    sr.reveal('.nav-links li', { delay: 300, interval: 200 });
    sr.reveal('.project-details', { delay: 300, origin: 'bottom' });
  }
  else {
    sr.reveal('.logo', { origin: 'left' });
    sr.reveal('.section__text', { origin: 'right' });
    sr.reveal('.avatar', { delay: 400, origin: 'left' });
    sr.reveal('.section-heading');
    sr.reveal('.about-pic', { delay: 400, origin: 'left' });
    sr.reveal('.details-container');
    sr.reveal('.text-container', { origin: 'bottom' });
    sr.reveal('#experience .details-container', { origin: 'bottom' });
    sr.reveal('#projects .know-me', { origin: 'left' });
    sr.reveal('.contact-info-upper-container', { origin: 'bottom' });
    sr.reveal('footer');
    sr.reveal('.arrow', { origin: 'right', delay: 500 });
    sr.reveal('.nav-links li', { delay: 300, interval: 200, origin: 'right' });
    sr.reveal('.project-details', { delay: 300, origin: 'bottom' });
  }
}

