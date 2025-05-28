// Mobile Menu Toggle
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    hamburger.classList.toggle('active');
});

// Close mobile menu when clicking outside
document.addEventListener('click', (e) => {
    if (!hamburger.contains(e.target) && !navLinks.contains(e.target)) {
        navLinks.classList.remove('active');
        hamburger.classList.remove('active');
    }
});

// Smooth Scrolling for Navigation Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        
        if (target) {
            // Close mobile menu if open
            navLinks.classList.remove('active');
            hamburger.classList.remove('active');

            // Smooth scroll to target
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Navbar Background Change on Scroll
const navbar = document.getElementById('navbar');
let lastScrollTop = 0;

window.addEventListener('scroll', () => {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    
    if (scrollTop > lastScrollTop) {
        // Scrolling down
        navbar.style.transform = 'translateY(-100%)';
    } else {
        // Scrolling up
        navbar.style.transform = 'translateY(0)';
    }
    
    lastScrollTop = scrollTop;
});

// Add animation to sections when they come into view
const sections = document.querySelectorAll('.section');

const observerOptions = {
    root: null,
    threshold: 0.1,
    rootMargin: '0px'
};

const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

sections.forEach(section => {
    section.style.opacity = '0';
    section.style.transform = 'translateY(20px)';
    section.style.transition = 'opacity 0.5s ease-out, transform 0.5s ease-out';
    observer.observe(section);
});

function handleFormSubmit(event) {
    event.preventDefault();
    
    const form = document.getElementById('contactForm');
    const status = document.getElementById('formStatus');
    const submitButton = form.querySelector('button[type="submit"]');
    
    // Show loading state
    submitButton.disabled = true;
    submitButton.innerHTML = 'Sending...';
    status.innerHTML = '<div style="color: blue;">Testing form submission...</div>';

    // Create URL-encoded form data
    const formData = new URLSearchParams();
    formData.append('name', form.querySelector('#name').value);
    formData.append('email', form.querySelector('#email').value);
    formData.append('phone', form.querySelector('#phone').value);
    formData.append('service', form.querySelector('#service').value);
    formData.append('message', form.querySelector('#message').value);

    // Log test data
    console.log('TEST - Form data that would be sent:', Object.fromEntries(formData));
    console.log('TEST - Would be sent to URL:', 'https://script.google.com/macros/s/AKfycbyvfqNthqhMT4mtBBOnWPAub3ZNgpPeud5QM8MKQs6q_a5z4AD1oov5CR-Na7pxZCUbsQ/exec');
    console.log('TEST - Would be sent to email: ultrapropertyservicesinc@gmail.com');

    // Use the new deployment URL
    const scriptURL = 'https://script.google.com/macros/s/AKfycbyvfqNthqhMT4mtBBOnWPAub3ZNgpPeud5QM8MKQs6q_a5z4AD1oov5CR-Na7pxZCUbsQ/exec';

    // Send the form data
    fetch(scriptURL, {
        method: 'POST',
        mode: 'no-cors',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: formData.toString()
    })
    .then(response => {
        console.log('TEST - Response received:', response);
        // Clear the form and show test message
        form.reset();
        status.innerHTML = '<div style="color: green;">Test successful! Form is working correctly.</div>';
    })
    .catch(error => {
        console.error('Error:', error);
        status.innerHTML = '<div style="color: red;">Test failed. Error: ' + error.message + '</div>';
    })
    .finally(() => {
        // Re-enable the submit button
        submitButton.disabled = false;
        submitButton.innerHTML = 'Send Message';
    });
} 