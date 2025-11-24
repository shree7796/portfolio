// ============================================
// Initialize Lucide Icons
// ============================================
document.addEventListener('DOMContentLoaded', () => {
    lucide.createIcons();
});

// ============================================
// Smooth Scrolling & Active Navigation
// ============================================
const navLinks = document.querySelectorAll('.nav-link');
const sections = document.querySelectorAll('section[id]');

// Smooth scroll to section
navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const targetId = link.getAttribute('href');
        const targetSection = document.querySelector(targetId);

        if (targetSection) {
            const navHeight = document.querySelector('.navbar').offsetHeight;
            const targetPosition = targetSection.offsetTop - navHeight;

            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });

            // Close mobile menu if open
            const navLinksContainer = document.getElementById('navLinks');
            if (navLinksContainer.classList.contains('active')) {
                navLinksContainer.classList.remove('active');
            }
        }
    });
});

// Highlight active section in navigation
const highlightActiveSection = () => {
    const scrollPosition = window.pageYOffset;
    const navHeight = document.querySelector('.navbar').offsetHeight;

    sections.forEach(section => {
        const sectionTop = section.offsetTop - navHeight - 100;
        const sectionBottom = sectionTop + section.offsetHeight;
        const sectionId = section.getAttribute('id');

        if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
            navLinks.forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href') === `#${sectionId}`) {
                    link.classList.add('active');
                }
            });
        }
    });
};

// Throttle function for performance
const throttle = (func, delay) => {
    let lastCall = 0;
    return (...args) => {
        const now = new Date().getTime();
        if (now - lastCall < delay) return;
        lastCall = now;
        return func(...args);
    };
};

// Apply scroll listener with throttling
window.addEventListener('scroll', throttle(highlightActiveSection, 100));

// ============================================
// Mobile Menu Toggle
// ============================================
const mobileMenuToggle = document.getElementById('mobileMenuToggle');
const navLinksContainer = document.getElementById('navLinks');

mobileMenuToggle.addEventListener('click', () => {
    navLinksContainer.classList.toggle('active');

    // Toggle icon between menu and X
    const icon = mobileMenuToggle.querySelector('i');
    const isOpen = navLinksContainer.classList.contains('active');
    icon.setAttribute('data-lucide', isOpen ? 'x' : 'menu');
    lucide.createIcons();
});

// Close menu when clicking outside
document.addEventListener('click', (e) => {
    if (!e.target.closest('.navbar')) {
        navLinksContainer.classList.remove('active');
        const icon = mobileMenuToggle.querySelector('i');
        icon.setAttribute('data-lucide', 'menu');
        lucide.createIcons();
    }
});

// ============================================
// Scroll Reveal Animation
// ============================================
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const revealOnScroll = (entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('revealed');
            observer.unobserve(entry.target);
        }
    });
};

const scrollObserver = new IntersectionObserver(revealOnScroll, observerOptions);

// Add scroll-reveal class to elements
const revealElements = document.querySelectorAll(
    '.glass-card, .timeline-item, .project-card, .expertise-card, .section-title'
);

revealElements.forEach(el => {
    el.classList.add('scroll-reveal');
    scrollObserver.observe(el);
});

// ============================================
// Navbar Background on Scroll
// ============================================
const navbar = document.querySelector('.navbar');
let lastScrollTop = 0;

const handleNavbarScroll = () => {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    // Add background when scrolled
    if (scrollTop > 50) {
        navbar.style.background = 'rgba(10, 14, 39, 0.95)';
        navbar.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.3)';
    } else {
        navbar.style.background = 'rgba(10, 14, 39, 0.8)';
        navbar.style.boxShadow = 'none';
    }

    lastScrollTop = scrollTop;
};

window.addEventListener('scroll', throttle(handleNavbarScroll, 100));

// ============================================
// Enhanced Hover Effects for Project Cards
// ============================================
const projectCards = document.querySelectorAll('.project-card');

projectCards.forEach(card => {
    card.addEventListener('mousemove', (e) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        const centerX = rect.width / 2;
        const centerY = rect.height / 2;

        const angleX = (y - centerY) / 20;
        const angleY = (centerX - x) / 20;

        card.style.transform = `perspective(1000px) rotateX(${angleX}deg) rotateY(${angleY}deg) translateY(-5px)`;
    });

    card.addEventListener('mouseleave', () => {
        card.style.transform = '';
    });
});

// ============================================
// Initialize on Page Load
// ============================================
window.addEventListener('load', () => {
    // Initialize icons
    lucide.createIcons();

    // Set initial active nav link
    highlightActiveSection();

    // Add animation delay to hero elements
    const heroElements = document.querySelectorAll('.hero-content > *');
    heroElements.forEach((el, index) => {
        el.style.animationDelay = `${index * 0.1}s`;
    });
});

// ============================================
// Performance: Reduce animations on slow devices
// ============================================
if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    // Disable complex animations for users who prefer reduced motion
    document.querySelectorAll('.scroll-reveal').forEach(el => {
        el.classList.add('revealed');
    });
}

// ============================================
// Easter Egg: Konami Code (Optional Fun)
// ============================================
let konamiCode = [];
const konamiSequence = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'b', 'a'];

document.addEventListener('keydown', (e) => {
    konamiCode.push(e.key);
    konamiCode = konamiCode.slice(-konamiSequence.length);

    if (konamiCode.join('') === konamiSequence.join('')) {
        // Easter egg triggered - add extra space effects
        const space = document.querySelector('.space-background');
        space.style.animation = 'nebula-drift 5s ease-in-out infinite alternate';

        // Show a fun message
        console.log('🚀 Warp speed activated! You found the secret code!');
    }
});

console.log('%c🚀 Welcome to Shivam\'s Portfolio!', 'font-size: 20px; color: #6366f1; font-weight: bold;');
console.log('%cBuilt with vanilla JavaScript, CSS, and a touch of cosmic magic ✨', 'color: #a855f7;');

// ============================================
// Recommendations Carousel
// ============================================
const recommendationsData = [
    {
        name: "Bhavin Golakiya",
        role: "AI Engineer",
        company: "",
        image: "https://ui-avatars.com/api/?name=Bhavin+Golakiya&background=6366f1&color=fff",
        text: `I had the chance to work closely with Shivam on several projects that blended backend engineering and applied AI. We collaborated on building intelligent systems using Python, Django, and FastAPI, integrating OpenAI APIs, LLM pipelines, and data-driven components that powered real-world automation and analytics use cases.
        Shivam has a rare ability to bridge the gap between backend engineering and data science — he understands how data flows through a system, how models behave in production, and how to design APIs that make machine learning outputs usable and scalable. From fine-tuning model prompts and handling embeddings to optimizing async inference calls and caching logic, his work always reflected both precision and curiosity.
        He doesn’t just “make it work” - he makes it make sense. Whether it’s debugging complex API chains, structuring datasets for LLM evaluation, or reviewing architecture for efficiency, Shivam approaches each problem with depth and intent. His calm communication style, collaborative mindset, and technical versatility make him a standout engineer in any AI-driven product team.`,
        linkedin: "#"
    },
    {
        name: "Shubham Jaiswal",
        role: "Solution Engineer",
        company: "Gammastack",
        image: "https://ui-avatars.com/api/?name=Shubham+Jaiswal&background=a855f7&color=fff",
        text: `I had the chance to work closely with Shivam, and it was an awesome experience. He has great technical knowledge, especially in AI, LLMs, and iGaming, and has worked on some really interesting projects around them. Shivam is always approachable, supportive, and great at collaborating with the team. His problem-solving skills and positive attitude make him someone everyone enjoys working with. I would totally recommend him for any role or project.`,
        linkedin: "#"
    }
];

const initCarousel = () => {
    const track = document.getElementById('recommendationsTrack');
    const dotsContainer = document.getElementById('recommendationDots');
    const prevBtn = document.querySelector('.prev-btn');
    const nextBtn = document.querySelector('.next-btn');

    if (!track || !recommendationsData.length) return;

    let currentIndex = 0;

    // Create Cards
    recommendationsData.forEach((data, index) => {
        const card = document.createElement('div');
        card.className = 'recommendation-card';
        card.innerHTML = `
            <i data-lucide="quote" class="recommendation-quote-icon"></i>
            <div class="recommendation-header">
                <img src="${data.image}" alt="${data.name}" class="recommendation-img">
                <div class="recommendation-info">
                    <h4>${data.name}</h4>
                    <p>${data.role} at ${data.company}</p>
                </div>
            </div>
            <p class="recommendation-text line-clamp-3">"${data.text}"</p>
            <div class="recommendation-footer">
                <a href="${data.linkedin}" target="_blank" rel="noopener noreferrer" class="linkedin-badge">
                    <i data-lucide="linkedin" style="width: 14px; height: 14px;"></i>
                    LinkedIn
                </a>
            </div>
        `;
        track.appendChild(card);

        // Check for overflow and add "Show More" button
        const p = card.querySelector('.recommendation-text');
        if (p.scrollHeight > p.clientHeight) {
            const btn = document.createElement('button');
            btn.className = 'read-more-btn';
            btn.innerText = 'Show More';
            btn.onclick = (e) => {
                e.stopPropagation(); // Prevent carousel click issues if any
                p.classList.toggle('line-clamp-3');
                btn.innerText = p.classList.contains('line-clamp-3') ? 'Show More' : 'Show Less';
            };
            // Insert before the footer
            card.insertBefore(btn, card.querySelector('.recommendation-footer'));
        }

        // Create Dots
        const dot = document.createElement('div');
        dot.className = `dot ${index === 0 ? 'active' : ''}`;
        dot.addEventListener('click', () => goToSlide(index));
        dotsContainer.appendChild(dot);
    });

    // Re-initialize icons for new elements
    lucide.createIcons();

    const updateCarousel = () => {
        track.style.transform = `translateX(-${currentIndex * 100}%)`;

        // Update dots
        document.querySelectorAll('.dot').forEach((dot, index) => {
            dot.classList.toggle('active', index === currentIndex);
        });
    };

    const goToSlide = (index) => {
        if (index < 0) index = recommendationsData.length - 1;
        if (index >= recommendationsData.length) index = 0;
        currentIndex = index;
        updateCarousel();
    };

    const nextSlide = () => goToSlide(currentIndex + 1);
    const prevSlide = () => goToSlide(currentIndex - 1);

    // Event Listeners
    prevBtn.addEventListener('click', prevSlide);
    nextBtn.addEventListener('click', nextSlide);

    // Auto Play
    let interval = setInterval(nextSlide, 5000);

    track.addEventListener('mouseenter', () => clearInterval(interval));
    track.addEventListener('mouseleave', () => interval = setInterval(nextSlide, 5000));
};

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', initCarousel);
