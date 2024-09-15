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
