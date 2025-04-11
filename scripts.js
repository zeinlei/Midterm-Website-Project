//loader script
// When the page loads, scroll to the top
window.onload = function() {
    window.scrollTo(0, 0);
  };
  
  // For older browsers or additional support
  document.addEventListener('DOMContentLoaded', function() {
    window.scrollTo(0, 0);
  });

  //about js
document.addEventListener('DOMContentLoaded', function() {
    const images = document.querySelectorAll('.logos-1');
    let currentIndex = 0;
    
    // Set first image as active initially
    images[0].classList.add('active');
    
    // Function to change image with clean fade
    function changeImage() {
        // Remove active class from current image
        images[currentIndex].classList.remove('active');
        
        // Update index to next image
        currentIndex = (currentIndex + 1) % images.length;
        
        // Add active class to new image
        images[currentIndex].classList.add('active');
    }
    
    // Set interval for automatic image change (6 seconds)
    setInterval(changeImage, 6000);
});

//colletion js
document.addEventListener('DOMContentLoaded', () => {
    const dots = document.querySelectorAll('.dot');
    const slides = document.querySelectorAll('.slide');
    let currentSlideIndex = 0;

    function activateSlide(targetId) {
        slides.forEach(slide => slide.classList.remove('active'));
        const targetSlide = document.getElementById(targetId);
        if (targetSlide) targetSlide.classList.add('active');

        dots.forEach(dot => dot.classList.remove('active'));
        const targetDot = document.querySelector(`.dot[data-target="${targetId}"]`);
        if (targetDot) targetDot.classList.add('active');
    }

    dots.forEach(dot => {
        dot.addEventListener('mouseover', () => {
            const targetId = dot.getAttribute('data-target');
            activateSlide(targetId);
        });
    });

    function autoSlide() {
        currentSlideIndex = (currentSlideIndex + 1) % slides.length;
        const nextSlide = slides[currentSlideIndex];
        const targetId = nextSlide.id;
        activateSlide(targetId);
    }

    setInterval(autoSlide, 5000);
    activateSlide(slides[0].id);
});

// Collection JS
document.addEventListener('DOMContentLoaded', () => {
    const fadeElements = document.querySelectorAll('.rectangle-6, .sweet-collection, .sweet-collection-text');
    const swingElement = document.querySelector('.image-1');
    const spinElements = document.querySelectorAll('.image-2, .image-3');
    const textElements = document.querySelectorAll('.sweet-collection-text p');
    const sweetCollectionText = document.querySelector('.sweet-collection');

    // Fade-In Effect on Scroll
    const appearOnScroll = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('show');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });

    fadeElements.forEach(el => {
        el.classList.add('fade-in');
        appearOnScroll.observe(el);
    });

    // Sweet Collection Text Animation (Smooth Fade-In + Slide Up)
    if (sweetCollectionText) {
        sweetCollectionText.animate(
            [
                { transform: 'translateY(20px)', opacity: 0 },
                { transform: 'translateY(0)', opacity: 1 }
            ],
            {
                duration: 2000,
                easing: 'ease-out',
                fill: 'forwards'  // This ensures the animation doesn't reset
            }
        );
    }

    // Smooth Text Animation (Elegance Effect)
    textElements.forEach(textElement => {
        textElement.animate(
            [
                { transform: 'translateY(20px)', opacity: 0 },
                { transform: 'translateY(0)', opacity: 1 }
            ],
            {
                duration: 1500,
                easing: 'ease-out',
                fill: 'forwards'
            }
        );
    });

    // Swing Animation for image-1
    if (swingElement) {
        swingElement.animate(
            [
                { transform: 'rotate(0deg)' },
                { transform: 'rotate(5deg)' },
                { transform: 'rotate(-5deg)' },
                { transform: 'rotate(0deg)' }
            ],
            {
                duration: 3000,
                iterations: Infinity,
                easing: 'ease-in-out'
            }
        );
    }

    // Spin Animation for image-2 and image-3
    spinElements.forEach(element => {
        element.animate(
            [
                { transform: 'rotate(0deg)' },
                { transform: 'rotate(360deg)' }
            ],
            {
                duration: 10000,
                iterations: Infinity,
                easing: 'linear'
            }
        );
    });
});
