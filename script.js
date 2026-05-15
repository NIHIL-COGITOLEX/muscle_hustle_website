// ================================
// NAVBAR BACKGROUND ON SCROLL
// ================================

const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', () => {

    if (window.scrollY > 50) {

        navbar.style.background = "rgba(0,0,0,0.92)";
        navbar.style.padding = "15px 8%";
        navbar.style.boxShadow = "0 5px 30px rgba(0,0,0,0.4)";

    } else {

        navbar.style.background = "rgba(0,0,0,0.45)";
        navbar.style.padding = "20px 8%";
        navbar.style.boxShadow = "none";
    }

});


// ================================
// SCROLL REVEAL ANIMATION
// ================================

const revealElements = document.querySelectorAll(
    '.membership-card, .transformation-card, .trainer-card, .testimonial-card, .google-review-box, .why-us-image, .why-us-content, .location-info, .map-box'
);

const revealOnScroll = () => {

    const windowHeight = window.innerHeight;

    revealElements.forEach((element) => {

        const elementTop = element.getBoundingClientRect().top;

        if (elementTop < windowHeight - 100) {

            element.classList.add('active-reveal');

        }

    });

};

window.addEventListener('scroll', revealOnScroll);

revealOnScroll();


// ================================
// HERO TEXT ANIMATION
// ================================

window.addEventListener('load', () => {

    const heroTitle = document.querySelector('.hero-content h1');
    const heroText = document.querySelector('.hero-content p');
    const heroButtons = document.querySelector('.hero-buttons');
    const heroStats = document.querySelector('.hero-stats');

    heroTitle.classList.add('animate-hero-title');

    setTimeout(() => {
        heroText.classList.add('animate-hero-text');
    }, 300);

    setTimeout(() => {
        heroButtons.classList.add('animate-hero-buttons');
    }, 600);

    setTimeout(() => {
        heroStats.classList.add('animate-hero-stats');
    }, 900);

});


// ================================
// PARALLAX HERO EFFECT
// ================================

const heroVideo = document.querySelector('.hero-video');

window.addEventListener('scroll', () => {

    let scrollPosition = window.pageYOffset;

    heroVideo.style.transform = `translateY(${scrollPosition * 0.25}px) scale(1.1)`;

});


// ================================
// BUTTON HOVER GLOW EFFECT
// ================================

const buttons = document.querySelectorAll(
    '.primary-btn, .secondary-btn, .join-btn'
);

buttons.forEach((button) => {

    button.addEventListener('mousemove', (e) => {

        const x = e.offsetX;
        const y = e.offsetY;

        button.style.setProperty('--x', x + 'px');
        button.style.setProperty('--y', y + 'px');

    });

});


// ================================
// ACTIVE NAV LINK ON SCROLL
// ================================

const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('.nav-links a');

window.addEventListener('scroll', () => {

    let current = '';

    sections.forEach((section) => {

        const sectionTop = section.offsetTop - 200;
        const sectionHeight = section.clientHeight;

        if (pageYOffset >= sectionTop) {

            current = section.getAttribute('id');

        }

    });

    navLinks.forEach((link) => {

        link.classList.remove('active-link');

        if (link.getAttribute('href') === `#${current}`) {

            link.classList.add('active-link');

        }

    });

});


// ================================
// IMAGE HOVER TILT EFFECT
// ================================

const cards = document.querySelectorAll(
    '.membership-card, .trainer-card, .testimonial-card'
);

cards.forEach((card) => {

    card.addEventListener('mousemove', (e) => {

        const rect = card.getBoundingClientRect();

        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        const centerX = rect.width / 2;
        const centerY = rect.height / 2;

        const rotateX = ((y - centerY) / 20) * -1;
        const rotateY = (x - centerX) / 20;

        card.style.transform = `
            perspective(1000px)
            rotateX(${rotateX}deg)
            rotateY(${rotateY}deg)
            translateY(-8px)
        `;

    });

    card.addEventListener('mouseleave', () => {

        card.style.transform = `
            perspective(1000px)
            rotateX(0deg)
            rotateY(0deg)
            translateY(0px)
        `;

    });

});


// ================================
// SMOOTH FADE-IN FOR SECTIONS
// ================================

const allSections = document.querySelectorAll('section');

const sectionObserver = new IntersectionObserver((entries) => {

    entries.forEach((entry) => {

        if (entry.isIntersecting) {

            entry.target.classList.add('show-section');

        }

    });

}, {
    threshold: 0.15
});

allSections.forEach((section) => {

    section.classList.add('hidden-section');

    sectionObserver.observe(section);

});


// ================================
// COUNTER ANIMATION
// ================================

const counters = document.querySelectorAll('.stat-box h2');

const speed = 200;

const animateCounters = () => {

    counters.forEach((counter) => {

        const target = +counter.innerText.replace('+', '');

        let count = 0;

        const updateCount = () => {

            const increment = target / speed;

            if (count < target) {

                count += increment;

                counter.innerText = `${Math.ceil(count)}+`;

                requestAnimationFrame(updateCount);

            } else {

                counter.innerText = `${target}+`;

            }

        };

        updateCount();

    });

};

let counterStarted = false;

window.addEventListener('scroll', () => {

    const statsSection = document.querySelector('.hero-stats');

    const sectionTop = statsSection.getBoundingClientRect().top;

    if (sectionTop < window.innerHeight && !counterStarted) {

        animateCounters();

        counterStarted = true;

    }

});


// ================================
// CUSTOM CURSOR GLOW
// ================================

const cursor = document.createElement('div');

cursor.classList.add('custom-cursor');

document.body.appendChild(cursor);

document.addEventListener('mousemove', (e) => {

    cursor.style.left = e.clientX + 'px';
    cursor.style.top = e.clientY + 'px';

});


// ================================
// PRELOADER EFFECT
// ================================

window.addEventListener('load', () => {

    const preloader = document.querySelector('.preloader');

    if (preloader) {

        preloader.style.opacity = '0';

        setTimeout(() => {

            preloader.style.display = 'none';

        }, 600);

    }

});


// ================================
// FLOATING WHATSAPP PULSE
// ================================

const whatsappBtn = document.querySelector('.whatsapp-float');

setInterval(() => {

    whatsappBtn.classList.add('pulse');

    setTimeout(() => {

        whatsappBtn.classList.remove('pulse');

    }, 1000);

}, 3000);


// ================================
// CONSOLE BRANDING
// ================================

console.log(
    "%cTHE MUSCLE HUSTLE",
    `
    color: white;
    background: black;
    padding: 10px 20px;
    font-size: 22px;
    font-weight: bold;
    border: 2px solid white;
    `
);

console.log(
    "%cBuilt for champions.",
    `
    color: #999;
    font-size: 14px;
    `
);

// ================================
// MOBILE MENU TOGGLE
// ================================

const menuToggle = document.querySelector('.menu-toggle');
const navMenu = document.querySelector('.nav-links');

menuToggle.addEventListener('click', () => {

    navMenu.classList.toggle('active');

    if (navMenu.classList.contains('active')) {

        menuToggle.innerHTML = `<i class="fas fa-times"></i>`;

    } else {

        menuToggle.innerHTML = `<i class="fas fa-bars"></i>`;

    }

});


// CLOSE MENU ON LINK CLICK

document.querySelectorAll('.nav-links a').forEach((link) => {

    link.addEventListener('click', () => {

        navMenu.classList.remove('active');

        menuToggle.innerHTML = `<i class="fas fa-bars"></i>`;

    });

});

/* =========================
   FORM SUCCESS MESSAGE
========================= */

const forms = document.querySelectorAll(".apply-form");

forms.forEach((form) => {

    form.addEventListener("submit", function (e) {

        e.preventDefault();

        const button = form.querySelector(".plan-btn");

        button.innerHTML = "Submitted Successfully ✓";
        button.style.background = "#22c55e";
        button.style.color = "#000";

        form.reset();

        setTimeout(() => {

            button.innerHTML = button.dataset.originalText;
            button.style.background = "white";
            button.style.color = "black";

        }, 3000);

    });

});

/* Store original button text */

document.querySelectorAll(".plan-btn").forEach((btn) => {

    btn.dataset.originalText = btn.innerHTML;

});