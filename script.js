// Wait for the DOM content to be fully loaded before executing JavaScript code
document.addEventListener('DOMContentLoaded', function () {
    
    // Get references to elements
    const ctaButton = document.getElementById('cta-button');
    const modal = document.getElementById('modal');
    const closeModal = document.getElementById('close-modal');
    const scrollToLinks = document.querySelectorAll('.scroll-to');
    const contactForm = document.getElementById('contact-form');

    // Event listener to open modal when CTA button is clicked
    ctaButton.addEventListener('click', function () {
        modal.classList.remove('hidden'); // Remove 'hidden' class to show modal
    });

    // Event listener to close modal when close button is clicked
    closeModal.addEventListener('click', function () {
        modal.classList.add('hidden'); // Add 'hidden' class to hide modal
    });

    // Smooth scroll functionality for links
    scrollToLinks.forEach(link => {
        link.addEventListener('click', function (e) {
            e.preventDefault(); // Prevent default link behavior
            const target = document.querySelector(link.getAttribute('data-target'));
            target.scrollIntoView({ behavior: 'smooth' }); // Smoothly scroll to target
        });
    });

    // Event listener for form submission
    contactForm.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent default form submission

        // Get form data
        const formData = new FormData(this);

        // Send form data to send_email.php
        fetch('send_email.php', {
            method: 'POST',
            body: formData,
            headers: {
                'Accept': 'application/json'
            }
        })
        .then(response => response.json())
        .then(data => {
            if (data.success) {
                // Redirect to CTA.html after successful form submission
                window.location.href = 'CTA.html';
            } else {
                console.error('Error:', data.message); // Log any errors
                // Handle error, if needed
            }
        })
        .catch(error => {
            console.error('Error:', error); // Log any errors
            // Handle error, if needed
        });
    });
});
const adjectives = ["Proactive", "Tech-Savvy", "Driven", "Experienced", "Organized", "Optimistic", "Efficient"];
let currentIndex = 0;

function updateAdjective() {
    const adjectiveElement = document.getElementById("adjective");
    adjectiveElement.textContent = adjectives[currentIndex];
    currentIndex = (currentIndex + 1) % adjectives.length;
}

// Update the adjective every 2 seconds
setInterval(updateAdjective, 2000);

// Initial update
updateAdjective();
