function openNav() {
    const navbar = document.getElementById("myNav");
    navbar.classList.add("show");
    navbar.classList.remove("hide");
    document.querySelector(".openbtn").classList.add("hidden");
}

function closeNav() {
    const navbar = document.getElementById("myNav");
    navbar.classList.add("hide");
    navbar.classList.remove("show");
    document.querySelector(".openbtn").classList.remove("hidden");
}

// Adding smooth scroll effect
document.querySelectorAll('.navbar .menu a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);

        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 60, // Offset for sticky navbar
                behavior: 'smooth'
            });
        }

        // Close the menu when a link is clicked
        closeNav();
    });
});

// Adding active class on scroll
window.addEventListener('scroll', function () {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.navbar .menu a');

    let current = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        if (pageYOffset >= sectionTop - 60) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').includes(current)) {
            link.classList.add('active');
        }
    });
});

document.addEventListener('DOMContentLoaded', function () {
    const fadeElements = document.querySelectorAll('.fade-in-up');

    const observerOptions = {
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
    }, observerOptions);

    fadeElements.forEach(element => {
        observer.observe(element);
    });
});
