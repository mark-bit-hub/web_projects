// script.js

// Smooth scrolling for navigation links
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        const targetId = this.getAttribute('href').substring(1); // Get the target section ID
        const targetElement = document.getElementById(targetId);

        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop, // Scroll to the top of the target section
                behavior: 'smooth' // Use smooth scrolling animation
            });
        }
    });
});

// Optional: Add active class to navigation links on scroll
window.addEventListener('scroll', () => {
    let currentSection = '';

    document.querySelectorAll('section').forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;

        if (window.pageYOffset >= sectionTop - sectionHeight / 3) { // Adjust the divisor for sensitivity
            currentSection = section.id;
        }
    });

    document.querySelectorAll('nav a').forEach(link => {
        link.classList.remove('active'); // Remove active class from all links

        if (link.getAttribute('href').substring(1) === currentSection) {
            link.classList.add('active'); // Add active class to the current section's link
        }
    });
});


// Optional: Form submission handling (more robust than mailto:)
const contactForm = document.getElementById('contact-form'); // Add an ID to your form

if (contactForm) { // Check if the form exists on the page
    contactForm.addEventListener('submit', (event) => {
        event.preventDefault(); // Prevent default form submission

        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;

        // Here, you would typically send the form data to a server
        // using AJAX (fetch or XMLHttpRequest) or a library like Axios.
        // For this example, we'll just log the data to the console.

        console.log('Name:', name);
        console.log('Email:', email);
        console.log('Message:', message);

        // Clear the form fields (optional)
        contactForm.reset();

        // Provide feedback to the user (e.g., a success message)
        alert('Message sent successfully! (This is a demo)');

    });
}

// Optional: Add a "Back to Top" button
const backToTopButton = document.createElement('button');
backToTopButton.textContent = 'Back to Top';
backToTopButton.classList.add('back-to-top'); // Style the button with CSS

backToTopButton.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// Style the button with CSS (add to your style.css file)
/*
.back-to-top {
    position: fixed;
    bottom: 20px;
    right: 20px;
    background-color: #007bff;
    color: #fff;
    border: none;
    padding: 10px 15px;
    border-radius: 5px;
    cursor: pointer;
    opacity: 0; // Initially hidden
    transition: opacity 0.3s ease;
}

.back-to-top:hover {
    background-color: #0056b3;
}

body.show-back-to-top .back-to-top {
    opacity: 1; // Show the button when scrolled
}
*/


document.body.appendChild(backToTopButton);

window.addEventListener('scroll', () => {
    if (window.pageYOffset > 100) { // Show after scrolling 100px
        document.body.classList.add('show-back-to-top');
    } else {
        document.body.classList.remove('show-back-to-top');
    }
});
