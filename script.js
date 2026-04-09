import {
    initializeComponents,
    setupScrollNavigation
} from './components.js';

document.addEventListener('DOMContentLoaded', () => {
    initializeComponents();
    setupScrollNavigation();
    setupMobileNavigation();
    setupSmoothScroll();
    setupContactForm();
    preloadImages();
    createGoToTopButton();
    console.log('Portfolio loaded successfully! 🎉');
});

function setupMobileNavigation() {
    const hamburger = document.getElementById('hamburger');
    const navMenu = document.querySelector('.nav-menu');

    if (hamburger) {
        hamburger.addEventListener('click', () => {
            navMenu.classList.toggle('active');
        });
    }

    // Close menu when clicking on a link
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            navMenu.classList.remove('active');
        });
    });

    // Close menu when clicking outside
    document.addEventListener('click', (e) => {
        if (!e.target.closest('.nav-container') && navMenu?.classList.contains('active')) {
            navMenu.classList.remove('active');
        }
    });
}


function setupSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const href = this.getAttribute('href');
            const target = document.querySelector(href);

            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            } else {
                const currentPage = window.location.pathname;
                if (!currentPage.endsWith('index.html') && !currentPage.endsWith('/')) {
                    window.location.href = 'index.html' + href;
                }
            }
        });
    });
}

function setupContactForm() {
    const contactForm = document.querySelector('.contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();

            const formData = new FormData(contactForm);
            const btn = contactForm.querySelector('.btn-primary');
            const originalText = btn.innerHTML;
            btn.innerHTML = '<i class="fas fa-check"></i> Message Sent!';
            btn.style.background = '#4CAF50';
            contactForm.reset();
            setTimeout(() => {
                btn.innerHTML = originalText;
                btn.style.background = '';
            }, 3000);
        });
    }
}
function setupScrollAnimation() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.animationPlayState = 'running';
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Add animation observer to sections
    document.querySelectorAll('.project-card, .video-card, .timeline-item').forEach(element => {
        observer.observe(element);
    });
}

// ===== GO TO TOP BUTTON =====
function createGoToTopButton() {
    const button = document.createElement('button');
    button.innerHTML = '<i class="fas fa-chevron-up"></i>';
    button.id = 'goToTop';
    button.style.cssText = `
    display: none;
    position: fixed;
    bottom: 30px;
    right: 30px;
    z-index: 999;
    width: 50px;
    height: 50px;
    border-radius: 50%;
    background: linear-gradient(135deg, #ff6b5b, #00c4a7);
    color: white;
    border: none;
    cursor: pointer;
    font-size: 20px;
    transition: all 0.3s ease;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
  `;

    document.body.appendChild(button);

    window.addEventListener('scroll', () => {
        if (window.pageYOffset > 300) {
            button.style.display = 'flex';
            button.style.alignItems = 'center';
            button.style.justifyContent = 'center';
        } else {
            button.style.display = 'none';
        }
    });

    button.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });

    button.addEventListener('mouseover', () => {
        button.style.transform = 'scale(1.1)';
    });

    button.addEventListener('mouseout', () => {
        button.style.transform = 'scale(1)';
    });
}

// ===== BUTTON RIPPLE EFFECT =====
function setupButtonRipple() {
    const buttons = document.querySelectorAll('.btn');
    buttons.forEach(button => {
        button.addEventListener('mousedown', function (e) {
            // Add ripple effect
            let ripple = document.createElement('span');
            let rect = this.getBoundingClientRect();
            let size = Math.max(rect.width, rect.height);
            let x = e.clientX - rect.left - size / 2;
            let y = e.clientY - rect.top - size / 2;

            ripple.style.position = 'absolute';
            ripple.style.width = ripple.style.height = size + 'px';
            ripple.style.left = x + 'px';
            ripple.style.top = y + 'px';
            ripple.style.background = 'rgba(255, 255, 255, 0.6)';
            ripple.style.borderRadius = '50%';
            ripple.style.transform = 'scale(0)';
            ripple.style.animation = 'ripple-animation 0.6s ease-out';
            ripple.style.pointerEvents = 'none';

            this.appendChild(ripple);

            setTimeout(() => ripple.remove(), 600);
        });
    });

    // Add ripple animation
    const style = document.createElement('style');
    style.textContent = `
    @keyframes ripple-animation {
      to {
        transform: scale(4);
        opacity: 0;
      }
    }
  `;
    document.head.appendChild(style);
}

// ===== PRELOAD IMAGES =====
function preloadImages() {
    const images = document.querySelectorAll('img');
    images.forEach(img => {
        const src = img.getAttribute('src');
        if (src) {
            const preloader = new Image();
            preloader.src = src;
        }
    });
}

// Setup all event listeners after components are initialized
setTimeout(() => {
    setupContactForm();
    setupScrollAnimation();
    setupButtonRipple();
}, 100);
