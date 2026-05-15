$(document).ready(function () {
  // Initialize AOS (Animate On Scroll)
  AOS.init({
    duration: 800,
    easing: 'ease-in-out',
    once: true,
    offset: 100
  });

  // Initialize Materialize ScrollSpy
  $(".scrollspy").scrollSpy();

  // Initialize Materialize SideNav
  $(".button-collapse").sideNav({
    menuWidth: 190, // Default is 240
    edge: "left", // Choose the horizontal origin
    closeOnClick: true // Closes side-nav on <a> clicks
  });

  // Initialize Typed.js
  if (document.querySelector('.typing')) {
    new Typed('.typing', {
      strings: ["Frontend Developer", "Software Engineer", "Problem Solver"],
      loop: true,
      typeSpeed: 80,
      backSpeed: 40
    });
  }
});
