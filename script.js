// // Mobile Menu Toggle
// document.addEventListener('DOMContentLoaded', function() {
//     const mobileMenuButton = document.getElementById('mobile-menu-button');
//     const mobileMenu = document.getElementById('mobile-menu');
    
//     mobileMenuButton.addEventListener('click', function() {
//         mobileMenu.classList.toggle('hidden');
        
//         // Toggle icon
//         const icon = mobileMenuButton.querySelector('i');
//         if (mobileMenu.classList.contains('hidden')) {
//             icon.classList.remove('fa-times');
//             icon.classList.add('fa-bars');
//         } else {
//             icon.classList.remove('fa-bars');
//             icon.classList.add('fa-times');
//         }
//     });

//     // Close mobile menu when clicking on a link
//     const mobileMenuLinks = mobileMenu.querySelectorAll('a');
//     mobileMenuLinks.forEach(link => {
//         link.addEventListener('click', function() {
//             mobileMenu.classList.add('hidden');
//             const icon = mobileMenuButton.querySelector('i');
//             icon.classList.remove('fa-times');
//             icon.classList.add('fa-bars');
//         });
//     });
// });

// // Smooth Scrolling for Navigation Links
// document.querySelectorAll('a[href^="#"]').forEach(anchor => {
//     anchor.addEventListener('click', function (e) {
//         e.preventDefault();
//         const target = document.querySelector(this.getAttribute('href'));
//         if (target) {
//             const offsetTop = target.offsetTop - 80; // Account for fixed navbar
//             window.scrollTo({
//                 top: offsetTop,
//                 behavior: 'smooth'
//             });
//         }
//     });
// });

// // Navbar Background Change on Scroll
// window.addEventListener('scroll', function() {
//     const navbar = document.querySelector('nav');
//     if (window.scrollY > 50) {
//         navbar.classList.add('bg-white/95', 'backdrop-blur-sm');
//         navbar.classList.remove('bg-white');
//     } else {
//         navbar.classList.remove('bg-white/95', 'backdrop-blur-sm');
//         navbar.classList.add('bg-white');
//     }
// });

// // Scroll Animations
// const observerOptions = {
//     threshold: 0.1,
//     rootMargin: '0px 0px -50px 0px'
// };

// const observer = new IntersectionObserver(function(entries) {
//     entries.forEach(entry => {
//         if (entry.isIntersecting) {
//             entry.target.classList.add('animate-fade-in');
//             entry.target.style.opacity = '1';
//             entry.target.style.transform = 'translateY(0)';
//         }
//     });
// }, observerOptions);

// // Observe elements for scroll animations
// document.addEventListener('DOMContentLoaded', function() {
//     const animatedElements = document.querySelectorAll('.card-hover, .animate-slide-in');
    
//     animatedElements.forEach(el => {
//         el.style.opacity = '0';
//         el.style.transform = 'translateY(30px)';
//         el.style.transition = 'all 0.6s ease-out';
//         observer.observe(el);
//     });
// });

// // Counter Animation
// function animateCounter(element, target, duration = 2000) {
//     let start = 0;
//     const increment = target / (duration / 16);
    
//     function updateCounter() {
//         start += increment;
//         if (start < target) {
//             element.textContent = Math.floor(start);
//             requestAnimationFrame(updateCounter);
//         } else {
//             element.textContent = target;
//         }
//     }
    
//     updateCounter();
// }

// // Animate counters when they come into view
// const counterObserver = new IntersectionObserver(function(entries) {
//     entries.forEach(entry => {
//         if (entry.isIntersecting) {
//             const counter = entry.target.querySelector('.text-3xl');
//             if (counter && !counter.classList.contains('animated')) {
//                 counter.classList.add('animated');
//                 animateCounter(counter, 1000);
//             }
//         }
//     });
// }, { threshold: 0.5 });

// document.addEventListener('DOMContentLoaded', function() {
//     const counterSection = document.querySelector('.absolute.-top-6.-left-6');
//     if (counterSection) {
//         counterObserver.observe(counterSection);
//     }
// });

// // Form Submission Handler
// document.addEventListener('DOMContentLoaded', function() {
//     const contactForm = document.querySelector('#contact form');
//     if (contactForm) {
//         contactForm.addEventListener('submit', function(e) {
//             e.preventDefault();
            
//             // Get form data
//             const formData = new FormData(this);
//             const name = this.querySelector('input[type="text"]').value;
//             const phone = this.querySelector('input[type="tel"]').value;
//             const email = this.querySelector('input[type="email"]').value;
//             const service = this.querySelector('select').value;
//             const message = this.querySelector('textarea').value;
            
//             // Basic validation
//             if (!name || !phone || !email || !service) {
//                 alert('يرجى ملء جميع الحقول المطلوبة');
//                 return;
//             }
            
//             // Show success message
//             const submitButton = this.querySelector('button[type="submit"]');
//             const originalText = submitButton.innerHTML;
            
//             submitButton.innerHTML = '<i class="fas fa-spinner fa-spin ml-2"></i>جاري الإرسال...';
//             submitButton.disabled = true;
            
//             // Simulate form submission
//             setTimeout(() => {
//                 submitButton.innerHTML = '<i class="fas fa-check ml-2"></i>تم الإرسال بنجاح!';
//                 submitButton.classList.remove('btn-primary');
//                 submitButton.classList.add('bg-green-500');
                
//                 // Reset form
//                 this.reset();
                
//                 // Reset button after 3 seconds
//                 setTimeout(() => {
//                     submitButton.innerHTML = originalText;
//                     submitButton.disabled = false;
//                     submitButton.classList.add('btn-primary');
//                     submitButton.classList.remove('bg-green-500');
//                 }, 3000);
                
//                 alert('شكراً لك! تم إرسال طلبك بنجاح. سنتواصل معك قريباً.');
//             }, 2000);
//         });
//     }
// });

// // Parallax Effect for Hero Section
// window.addEventListener('scroll', function() {
//     const scrolled = window.pageYOffset;
//     const heroSection = document.querySelector('#home');
//     if (heroSection) {
//         const rate = scrolled * -0.5;
//         heroSection.style.transform = `translateY(${rate}px)`;
//     }
// });

// // Add loading animation
// window.addEventListener('load', function() {
//     document.body.classList.add('loaded');
    
//     // Animate hero section elements
//     const heroTitle = document.querySelector('#home h1');
//     const heroText = document.querySelector('#home p');
//     const heroButtons = document.querySelector('#home .flex');
    
//     if (heroTitle) {
//         setTimeout(() => heroTitle.classList.add('animate-fade-in'), 300);
//     }
//     if (heroText) {
//         setTimeout(() => heroText.classList.add('animate-fade-in'), 600);
//     }
//     if (heroButtons) {
//         setTimeout(() => heroButtons.classList.add('animate-fade-in'), 900);
//     }
// });

// // Add hover effects for service cards
// document.addEventListener('DOMContentLoaded', function() {
//     const serviceCards = document.querySelectorAll('#services .card-hover');
    
//     serviceCards.forEach(card => {
//         card.addEventListener('mouseenter', function() {
//             this.style.transform = 'translateY(-10px) scale(1.02)';
//         });
        
//         card.addEventListener('mouseleave', function() {
//             this.style.transform = 'translateY(0) scale(1)';
//         });
//     });
// });

// // Add click effects for buttons
// document.addEventListener('DOMContentLoaded', function() {
//     const buttons = document.querySelectorAll('.btn-primary, button');
    
//     buttons.forEach(button => {
//         button.addEventListener('click', function(e) {
//             // Create ripple effect
//             const ripple = document.createElement('span');
//             const rect = this.getBoundingClientRect();
//             const size = Math.max(rect.width, rect.height);
//             const x = e.clientX - rect.left - size / 2;
//             const y = e.clientY - rect.top - size / 2;
            
//             ripple.style.width = ripple.style.height = size + 'px';
//             ripple.style.left = x + 'px';
//             ripple.style.top = y + 'px';
//             ripple.classList.add('ripple');
            
//             this.appendChild(ripple);
            
//             setTimeout(() => {
//                 ripple.remove();
//             }, 600);
//         });
//     });
// });

// // Add CSS for ripple effect
// const style = document.createElement('style');
// style.textContent = `
//     .ripple {
//         position: absolute;
//         border-radius: 50%;
//         background: rgba(255, 255, 255, 0.6);
//         transform: scale(0);
//         animation: ripple-animation 0.6s linear;
//         pointer-events: none;
//     }
    
//     @keyframes ripple-animation {
//         to {
//             transform: scale(4);
//             opacity: 0;
//         }
//     }
    
//     button, .btn-primary {
//         position: relative;
//         overflow: hidden;
//     }
    
//     .loaded {
//         opacity: 1;
//     }
    
//     body {
//         opacity: 0;
//         transition: opacity 0.3s ease-in-out;
//     }
// `;
// document.head.appendChild(style);

// // Add scroll progress indicator
// document.addEventListener('DOMContentLoaded', function() {
//     const progressBar = document.createElement('div');
//     progressBar.style.cssText = `
//         position: fixed;
//         top: 0;
//         left: 0;
//         width: 0%;
//         height: 3px;
//         background: linear-gradient(90deg, #1e3a8a, #059669);
//         z-index: 9999;
//         transition: width 0.1s ease;
//     `;
//     document.body.appendChild(progressBar);
    
//     window.addEventListener('scroll', function() {
//         const scrollTop = window.pageYOffset;
//         const docHeight = document.body.scrollHeight - window.innerHeight;
//         const scrollPercent = (scrollTop / docHeight) * 100;
//         progressBar.style.width = scrollPercent + '%';
//     });
// });

// // Add typing effect for hero title
// document.addEventListener('DOMContentLoaded', function() {
//     const heroTitle = document.querySelector('#home h1');
//     if (heroTitle) {
//         const text = heroTitle.textContent;
//         heroTitle.textContent = '';
//         heroTitle.style.borderRight = '2px solid #fff';
        
//         let i = 0;
//         function typeWriter() {
//             if (i < text.length) {
//                 heroTitle.textContent += text.charAt(i);
//                 i++;
//                 setTimeout(typeWriter, 100);
//             } else {
//                 heroTitle.style.borderRight = 'none';
//             }
//         }
        
//         setTimeout(typeWriter, 1000);
//     }
// });


// // Luxury Pricing Section JavaScript
// // Advanced animations and interactions for premium user experience

// document.addEventListener('DOMContentLoaded', function() {
    
//     // Initialize all components
//     initFloatingParticles();
//     initScrollReveal();
//     initPricingToggle();
//     initCardHoverEffects();
//     initButtonAnimations();
//     initCounterAnimations();
    
//     console.log('🎨 Luxury Pricing Section loaded successfully!');
// });

// // Floating Particles Background Animation
// function initFloatingParticles() {
//     const particlesContainer = document.querySelector('.floating-particles');
//     const particleCount = 50;
    
//     for (let i = 0; i < particleCount; i++) {
//         createParticle(particlesContainer);
//     }
    
//     // Create new particles periodically
//     setInterval(() => {
//         if (document.querySelectorAll('.particle').length < particleCount) {
//             createParticle(particlesContainer);
//         }
//     }, 200);
// }

// function createParticle(container) {
//     const particle = document.createElement('div');
//     particle.className = 'particle';
    
//     // Random positioning and timing
//     particle.style.left = Math.random() * 100 + '%';
//     particle.style.animationDelay = Math.random() * 6 + 's';
//     particle.style.animationDuration = (Math.random() * 3 + 4) + 's';
    
//     // Random size variation
//     const size = Math.random() * 3 + 2;
//     particle.style.width = size + 'px';
//     particle.style.height = size + 'px';
    
//     container.appendChild(particle);
    
//     // Remove particle after animation
//     setTimeout(() => {
//         if (particle.parentNode) {
//             particle.remove();
//         }
//     }, 8000);
// }

// // Scroll Reveal Animation
// function initScrollReveal() {
//     const revealElements = document.querySelectorAll('.reveal');
    
//     const revealObserver = new IntersectionObserver((entries) => {
//         entries.forEach(entry => {
//             if (entry.isIntersecting) {
//                 const delay = entry.target.dataset.delay || 0;
//                 setTimeout(() => {
//                     entry.target.classList.add('active');
//                 }, delay);
//                 revealObserver.unobserve(entry.target);
//             }
//         });
//     }, {
//         threshold: 0.1,
//         rootMargin: '0px 0px -50px 0px'
//     });
    
//     revealElements.forEach(element => {
//         revealObserver.observe(element);
//     });
// }

// // Pricing Toggle Functionality
// function initPricingToggle() {
//     const toggle = document.getElementById('pricingToggle');
//     const monthlyPrices = document.querySelectorAll('.price-monthly');
//     const annualPrices = document.querySelectorAll('.price-annual');
//     const billingPeriods = document.querySelectorAll('.billing-period');
//     const annualSavings = document.querySelectorAll('.annual-savings');
    
//     let isAnnual = false;
    
//     toggle.addEventListener('click', () => {
//         isAnnual = !isAnnual;
        
//         // Toggle switch animation
//         toggle.classList.toggle('annual', isAnnual);
        
//         // Animate price changes
//         animatePriceChange(monthlyPrices, annualPrices, billingPeriods, annualSavings, isAnnual);
        
//         // Add ripple effect
//         createRippleEffect(toggle, event);
//     });
// }

// function animatePriceChange(monthlyPrices, annualPrices, billingPeriods, annualSavings, isAnnual) {
//     // Fade out current prices
//     const currentPrices = isAnnual ? monthlyPrices : annualPrices;
//     const newPrices = isAnnual ? annualPrices : monthlyPrices;
    
//     currentPrices.forEach((price, index) => {
//         price.style.transform = 'scale(0.8)';
//         price.style.opacity = '0';
        
//         setTimeout(() => {
//             price.classList.add('hidden');
//             newPrices[index].classList.remove('hidden');
            
//             // Animate new prices in
//             setTimeout(() => {
//                 newPrices[index].style.transform = 'scale(1)';
//                 newPrices[index].style.opacity = '1';
//             }, 50);
//         }, 150);
//     });
    
//     // Update billing period text
//     billingPeriods.forEach(period => {
//         period.style.opacity = '0';
//         setTimeout(() => {
//             period.textContent = isAnnual ? 'سنوياً' : 'شهرياً';
//             period.style.opacity = '1';
//         }, 150);
//     });
    
//     // Show/hide annual savings
//     annualSavings.forEach(saving => {
//         if (isAnnual) {
//             saving.classList.remove('hidden');
//             setTimeout(() => {
//                 saving.style.opacity = '1';
//                 saving.style.transform = 'translateY(0)';
//             }, 200);
//         } else {
//             saving.style.opacity = '0';
//             saving.style.transform = 'translateY(-10px)';
//             setTimeout(() => {
//                 saving.classList.add('hidden');
//             }, 200);
//         }
//     });
// }

// function createRippleEffect(element, event) {
//     const ripple = document.createElement('div');
//     const rect = element.getBoundingClientRect();
//     const size = Math.max(rect.width, rect.height);
//     const x = event.clientX - rect.left - size / 2;
//     const y = event.clientY - rect.top - size / 2;
    
//     ripple.style.cssText = `
//         position: absolute;
//         width: ${size}px;
//         height: ${size}px;
//         left: ${x}px;
//         top: ${y}px;
//         background: rgba(212, 175, 55, 0.3);
//         border-radius: 50%;
//         transform: scale(0);
//         animation: ripple 0.6s ease-out;
//         pointer-events: none;
//     `;
    
//     element.appendChild(ripple);
    
//     setTimeout(() => {
//         ripple.remove();
//     }, 600);
// }

// // Card Hover Effects
// function initCardHoverEffects() {
//     const cards = document.querySelectorAll('.glass-card');
    
//     cards.forEach(card => {
//         card.addEventListener('mouseenter', () => {
//             // Add glow effect to card
//             card.style.boxShadow = '0 35px 60px rgba(0, 0, 0, 0.4), 0 0 30px rgba(212, 175, 55, 0.2)';
            
//             // Animate icons
//             const icon = card.querySelector('i');
//             if (icon) {
//                 icon.style.transform = 'scale(1.1) rotate(5deg)';
//             }
            
//             // Animate features list
//             const features = card.querySelectorAll('li');
//             features.forEach((feature, index) => {
//                 setTimeout(() => {
//                     feature.style.transform = 'translateX(-5px)';
//                     feature.style.color = '#F8F8F8';
//                 }, index * 50);
//             });
//         });
        
//         card.addEventListener('mouseleave', () => {
//             // Reset effects
//             card.style.boxShadow = '';
            
//             const icon = card.querySelector('i');
//             if (icon) {
//                 icon.style.transform = 'scale(1) rotate(0deg)';
//             }
            
//             const features = card.querySelectorAll('li');
//             features.forEach(feature => {
//                 feature.style.transform = 'translateX(0)';
//                 feature.style.color = '';
//             });
//         });
        
//         // Add tilt effect
//         card.addEventListener('mousemove', (e) => {
//             const rect = card.getBoundingClientRect();
//             const x = e.clientX - rect.left;
//             const y = e.clientY - rect.top;
            
//             const centerX = rect.width / 2;
//             const centerY = rect.height / 2;
            
//             const rotateX = (y - centerY) / 10;
//             const rotateY = (centerX - x) / 10;
            
//             card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-10px) scale(1.02)`;
//         });
        
//         card.addEventListener('mouseleave', () => {
//             card.style.transform = '';
//         });
//     });
// }

// // Button Animations
// function initButtonAnimations() {
//     const buttons = document.querySelectorAll('.luxury-button');
    
//     buttons.forEach(button => {
//         button.addEventListener('click', (e) => {
//             // Create click animation
//             const clickEffect = document.createElement('div');
//             const rect = button.getBoundingClientRect();
//             const x = e.clientX - rect.left;
//             const y = e.clientY - rect.top;
            
//             clickEffect.style.cssText = `
//                 position: absolute;
//                 left: ${x}px;
//                 top: ${y}px;
//                 width: 0;
//                 height: 0;
//                 background: rgba(255, 255, 255, 0.5);
//                 border-radius: 50%;
//                 transform: translate(-50%, -50%);
//                 animation: buttonClick 0.6s ease-out;
//                 pointer-events: none;
//             `;
            
//             button.appendChild(clickEffect);
            
//             // Add success feedback
//             const originalText = button.textContent;
//             button.textContent = 'جاري التحميل...';
//             button.style.opacity = '0.8';
            
//             setTimeout(() => {
//                 button.textContent = '✓ تم بنجاح';
//                 button.style.background = 'linear-gradient(135deg, #10B981, #059669)';
//             }, 1000);
            
//             setTimeout(() => {
//                 button.textContent = originalText;
//                 button.style.opacity = '1';
//                 button.style.background = '';
//                 clickEffect.remove();
//             }, 2500);
//         });
        
//         // Hover sound effect simulation
//         button.addEventListener('mouseenter', () => {
//             button.style.transform = 'translateY(-2px)';
            
//             // Add subtle pulse
//             button.style.animation = 'pulse 0.3s ease-in-out';
//             setTimeout(() => {
//                 button.style.animation = '';
//             }, 300);
//         });
        
//         button.addEventListener('mouseleave', () => {
//             button.style.transform = 'translateY(0)';
//         });
//     });
// }

// // Counter Animations for Prices
// function initCounterAnimations() {
//     const priceElements = document.querySelectorAll('[class*="price-"]');
    
//     const counterObserver = new IntersectionObserver((entries) => {
//         entries.forEach(entry => {
//             if (entry.isIntersecting) {
//                 animateCounter(entry.target);
//                 counterObserver.unobserve(entry.target);
//             }
//         });
//     }, { threshold: 0.5 });
    
//     priceElements.forEach(element => {
//         counterObserver.observe(element);
//     });
// }

// function animateCounter(element) {
//     const finalValue = parseInt(element.textContent);
//     const duration = 1500;
//     const increment = finalValue / (duration / 16);
//     let currentValue = 0;
    
//     const counter = setInterval(() => {
//         currentValue += increment;
//         if (currentValue >= finalValue) {
//             element.textContent = finalValue;
//             clearInterval(counter);
            
//             // Add completion effect
//             element.style.transform = 'scale(1.1)';
//             setTimeout(() => {
//                 element.style.transform = 'scale(1)';
//             }, 200);
//         } else {
//             element.textContent = Math.floor(currentValue);
//         }
//     }, 16);
// }

// // Advanced CSS Animations (added via JavaScript)
// function addAdvancedAnimations() {
//     const style = document.createElement('style');
//     style.textContent = `
//         @keyframes ripple {
//             to {
//                 transform: scale(2);
//                 opacity: 0;
//             }
//         }
        
//         @keyframes buttonClick {
//             to {
//                 width: 100px;
//                 height: 100px;
//                 opacity: 0;
//             }
//         }
        
//         @keyframes pulse {
//             0%, 100% {
//                 transform: translateY(-2px) scale(1);
//             }
//             50% {
//                 transform: translateY(-2px) scale(1.05);
//             }
//         }
        
//         @keyframes shimmer {
//             0% {
//                 background-position: -200% 0;
//             }
//             100% {
//                 background-position: 200% 0;
//             }
//         }
        
//         .shimmer-effect {
//             background: linear-gradient(90deg, transparent, rgba(255,255,255,0.1), transparent);
//             background-size: 200% 100%;
//             animation: shimmer 2s infinite;
//         }
//     `;
//     document.head.appendChild(style);
// }

// // Initialize advanced animations
// addAdvancedAnimations();

// // Smooth scrolling for any internal links
// document.querySelectorAll('a[href^="#"]').forEach(anchor => {
//     anchor.addEventListener('click', function (e) {
//         e.preventDefault();
//         const target = document.querySelector(this.getAttribute('href'));
//         if (target) {
//             target.scrollIntoView({
//                 behavior: 'smooth',
//                 block: 'start'
//             });
//         }
//     });
// });

// // Performance optimization: Throttle scroll events
// function throttle(func, limit) {
//     let inThrottle;
//     return function() {
//         const args = arguments;
//         const context = this;
//         if (!inThrottle) {
//             func.apply(context, args);
//             inThrottle = true;
//             setTimeout(() => inThrottle = false, limit);
//         }
//     }
// }

// // Add scroll-based parallax effect to background
// window.addEventListener('scroll', throttle(() => {
//     const scrolled = window.pageYOffset;
//     const parallaxElements = document.querySelectorAll('.floating-particles');
    
//     parallaxElements.forEach(element => {
//         const speed = 0.5;
//         element.style.transform = `translateY(${scrolled * speed}px)`;
//     });
// }, 16));

// // Accessibility improvements
// document.addEventListener('keydown', (e) => {
//     if (e.key === 'Tab') {
//         document.body.classList.add('keyboard-navigation');
//     }
// });

// document.addEventListener('mousedown', () => {
//     document.body.classList.remove('keyboard-navigation');
// });

// // Add focus styles for keyboard navigation
// const focusStyle = document.createElement('style');
// focusStyle.textContent = `
//     .keyboard-navigation *:focus {
//         outline: 2px solid #D4AF37;
//         outline-offset: 2px;
//     }
// `;
// document.head.appendChild(focusStyle);

// // Console styling for development
// console.log('%c🎨 Luxury Pricing Section', 'color: #D4AF37; font-size: 20px; font-weight: bold;');
// console.log('%cAll animations and interactions loaded successfully!', 'color: #10B981; font-size: 14px;');

// // Export functions for potential external use
// window.PricingSection = {
//     initFloatingParticles,
//     initScrollReveal,
//     initPricingToggle,
//     initCardHoverEffects,
//     initButtonAnimations,
//     initCounterAnimations
// };






