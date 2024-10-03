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

    const sections = document.querySelectorAll('.section');

    const options = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target); 
            }
        });
    }, options);

    sections.forEach(section => {
        observer.observe(section);
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
  
function addHingeAnimation(event) {
  const element = event.target;
  element.classList.add('animate__animated', 'animate__hinge');
}

const skillsIcons = document.querySelectorAll('.skills-icons');
skillsIcons.forEach(icon => {
  icon.addEventListener('click', addHingeAnimation);
});
