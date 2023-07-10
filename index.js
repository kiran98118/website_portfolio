// Smooth scrolling for anchor links
const anchorLinks = document.querySelectorAll('a[href^="#"]');
for (let anchor of anchorLinks) {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      window.scrollTo({
        top: target.offsetTop,
        behavior: 'smooth'
      });
    }
  });
}

// Activate current nav link based on the section in view
      const sections = document.querySelectorAll('section');
      const navLinks = document.querySelectorAll('.nav-links a');

      window.addEventListener('scroll', function () {
         const currentSection = Array.from(sections).findIndex((section) => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            return window.pageYOffset >= sectionTop - sectionHeight / 3;
         });

         navLinks.forEach(function (link) {
            link.classList.remove('active');
         });

         if (currentSection !== -1) {
            navLinks[currentSection].classList.add('active');
         }
      });



  // Add 'active' class to corresponding nav link
  navLinks.forEach(function (navLink) {
    navLink.classList.remove('active');
    if (navLink.getAttribute('href') === `#${currentSection}`) {
      navLink.classList.add('active');
    }
  });
});

// Download CV functionality
const downloadCVButton = document.querySelector('.downloadcv');
downloadCVButton.addEventListener('click', function () {
  const resumeURL = 'myresume.pdf';
  window.open(resumeURL);
});

const navToggle = document.querySelector('.nav__toggle');
const navMenu = document.querySelector('.nav__menu');
navToggle.addEventListener('click', function () {
   navMenu.classList.toggle('nav__menu--active');
});

