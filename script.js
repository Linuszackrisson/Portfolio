const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", mobileMenu);

function mobileMenu() {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
}



const navLink = document.querySelectorAll(".nav-link");

navLink.forEach(n => n.addEventListener("click", closeMenu));

function closeMenu() {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
}

document.addEventListener('DOMContentLoaded', function() {
    // Hantera klick på länkar
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();
  
        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);
  
        if (targetElement) {
          targetElement.scrollIntoView({
            behavior: 'smooth'
          });
        }
      });
    });
  });

  window.addEventListener('scroll', () => {
    const element = document.querySelector('.about-img');
    const positionFromTop = element.getBoundingClientRect().top;
  
    if (positionFromTop - window.innerHeight < 0) {
      element.classList.add('animate__animated', 'animate__fadeInLeft');
    }
  });
  
  window.addEventListener('scroll', () => {
    const element = document.querySelector('.about-text');
    const positionFromTop = element.getBoundingClientRect().top;
  
    if (positionFromTop - window.innerHeight < 0) {
      element.classList.add('animate__animated', 'animate__fadeInRight');
    }
  });
  
// Funktion för att lägga till animate__hinge klassen på .skills-icons
function addHingeAnimation(event) {
  const element = event.target;
  element.classList.add('animate__animated', 'animate__hinge');
}

// Händelselyssnare för klickhändelsen på .skills-icons
const skillsIcons = document.querySelectorAll('.skills-icons');
skillsIcons.forEach(icon => {
  icon.addEventListener('click', addHingeAnimation);
});
