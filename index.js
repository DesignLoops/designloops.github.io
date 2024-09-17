document.addEventListener('DOMContentLoaded', () => {
    const menuIcon = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');
    const navbar = document.querySelector('.navbar');
    const logoImg = document.getElementById('logo-img');

    menuIcon.addEventListener('click', () => {
        menuIcon.classList.toggle('active');
        navLinks.classList.toggle('active');
    });

    window.addEventListener('scroll', () => {
        const scrollY = window.scrollY;
        const sections = document.querySelectorAll('section');

        let currentSection = null;

        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;
            const sectionBottom = sectionTop + sectionHeight;

            if (scrollY >= sectionTop && scrollY < sectionBottom) {
                currentSection = section;
            }
        });

        if (currentSection) {
            if (currentSection.classList.contains('light-background')) {
                navbar.classList.add('light');
                navbar.classList.remove('dark');
                changeLogo('logo1.png'); // Light background logo
            } else if (currentSection.classList.contains('dark-background')) {
                navbar.classList.add('dark');
                navbar.classList.remove('light');
                changeLogo('logo2.png'); // Dark background logo
            }
        }
    });

    function changeLogo(newSrc) {
        if (logoImg.src.indexOf(newSrc) === -1) {
            logoImg.style.opacity = 0;
            
            setTimeout(() => {
                logoImg.src = newSrc;

                setTimeout(() => {
                    logoImg.style.opacity = 1;
                }, 1);
            }, 100);
        }
    }
});

window.addEventListener('load', function() {
    let loadingScreen = document.getElementById('loading-screen');
    
    // Add a delay to ensure content is fully loaded before fading out
    setTimeout(function() {
      loadingScreen.style.opacity = '0';
      // Wait for the opacity transition to finish before hiding
      setTimeout(function() {
        loadingScreen.style.display = 'none';
      }, 1000); // Match the duration of the opacity transition
    }, 500); // Adjust this delay if needed
  });
  
  document.addEventListener('DOMContentLoaded', function() {
    const cards = document.querySelectorAll('.card-hidden');

    function handleScroll() {
        cards.forEach(card => {
            const cardTop = card.getBoundingClientRect().top;
            const viewportHeight = window.innerHeight;

            if (cardTop < viewportHeight - 100) { // Adjust the 100 value as needed
                card.classList.add('card-visible');
            } else {
                card.classList.remove('card-visible');
            }
        });
    }

    // Initial check
    handleScroll();

    // Add scroll event listener
    window.addEventListener('scroll', handleScroll);
});
