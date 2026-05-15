// =========================
// FAQ ACCORDION
// =========================

const faqItems = document.querySelectorAll('.faq-item');

faqItems.forEach(item => {

    const question = item.querySelector('.faq-question');

    question.addEventListener('click', () => {

        // CLOSE OTHER FAQS
        faqItems.forEach(faq => {

            if (faq !== item) {
                faq.classList.remove('active');

                const icon = faq.querySelector('i');
                icon.classList.remove('fa-minus');
                icon.classList.add('fa-plus');
            }

        });

        // TOGGLE CURRENT FAQ
        item.classList.toggle('active');

        const icon = item.querySelector('i');

        if (item.classList.contains('active')) {
            icon.classList.remove('fa-plus');
            icon.classList.add('fa-minus');
        } else {
            icon.classList.remove('fa-minus');
            icon.classList.add('fa-plus');
        }

    });

});

// =========================
// NAVBAR SCROLL EFFECT
// =========================

const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', () => {

    if (window.scrollY > 50) {

        navbar.style.background = "rgba(0,0,0,0.98)";
        navbar.style.padding = "16px 8%";
        navbar.style.boxShadow = "0 5px 30px rgba(0,0,0,0.4)";

    } else {

        navbar.style.background = "rgba(0,0,0,0.92)";
        navbar.style.padding = "20px 8%";
        navbar.style.boxShadow = "none";

    }

});

// =========================
// SCROLL REVEAL ANIMATION
// =========================

const revealElements = document.querySelectorAll(
    '.pricing-card, .extra-card, .faq-item, .trial-content'
);

const revealOnScroll = () => {

    revealElements.forEach(element => {

        const windowHeight = window.innerHeight;
        const elementTop = element.getBoundingClientRect().top;

        if (elementTop < windowHeight - 100) {

            element.style.opacity = "1";
            element.style.transform = "translateY(0)";

        }

    });

};

// INITIAL STYLES
revealElements.forEach(element => {

    element.style.opacity = "0";
    element.style.transform = "translateY(60px)";
    element.style.transition = "all 0.8s ease";

});

window.addEventListener('scroll', revealOnScroll);

revealOnScroll();

// =========================
// BUTTON HOVER GLOW EFFECT
// =========================

const buttons = document.querySelectorAll(
    '.plan-btn, .trial-btn, .join-btn'
);

buttons.forEach(button => {

    button.addEventListener('mouseenter', () => {

        button.style.boxShadow = "0 0 25px rgba(255,255,255,0.25)";

    });

    button.addEventListener('mouseleave', () => {

        button.style.boxShadow = "none";

    });

});

// =========================
// WHATSAPP FLOAT ANIMATION
// =========================

const whatsappBtn = document.querySelector('.whatsapp-float');

setInterval(() => {

    whatsappBtn.classList.toggle('pulse');

}, 1500);

// =========================
// PARALLAX HERO EFFECT
// =========================

const heroImage = document.querySelector('.hero-image');

window.addEventListener('scroll', () => {

    const scrollY = window.scrollY;

    heroImage.style.transform = `translateY(${scrollY * 0.25}px) scale(1.05)`;

});

// =========================
// ACTIVE NAV LINK
// =========================

const navLinks = document.querySelectorAll('.nav-links a');

navLinks.forEach(link => {

    link.addEventListener('click', () => {

        navLinks.forEach(nav => nav.classList.remove('active'));

        link.classList.add('active');

    });

});

// =========================
// SMOOTH BUTTON RIPPLE
// =========================

buttons.forEach(button => {

    button.addEventListener('click', function (e) {

        const ripple = document.createElement('span');

        ripple.classList.add('ripple');

        const rect = button.getBoundingClientRect();

        ripple.style.left = `${e.clientX - rect.left}px`;
        ripple.style.top = `${e.clientY - rect.top}px`;

        this.appendChild(ripple);

        setTimeout(() => {
            ripple.remove();
        }, 600);

    });

});