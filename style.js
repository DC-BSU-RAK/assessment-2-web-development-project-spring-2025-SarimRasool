// Simple interactive elements for the website

document.addEventListener('DOMContentLoaded', function() {
    // Character selection effect
    const selectButtons = document.querySelectorAll('.select-btn');
    selectButtons.forEach(button => {
        button.addEventListener('click', function() {
            this.textContent = 'Selected!';
            this.style.backgroundColor = '#4CAF50';
            
            // Reset other buttons in the same card group
            const cardGroup = this.closest('.character-gallery');
            if (cardGroup) {
                const allButtons = cardGroup.querySelectorAll('.select-btn');
                allButtons.forEach(btn => {
                    if (btn !== this) {
                        btn.textContent = 'Select Character';
                        btn.style.backgroundColor = '#FF5722';
                    }
                });
            }
        });
    });
    
    // Newsletter form submission
    const newsletterForm = document.querySelector('.newsletter form');
    if (newsletterForm) {
        newsletterForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const emailInput = this.querySelector('input[type="email"]');
            if (emailInput.value) {
                alert('Thanks for subscribing! We\'ll keep you updated on Subway Surfers news.');
                emailInput.value = '';
            }
        });
    }
    
    // Platform download buttons hover effect
    const downloadButtons = document.querySelectorAll('.download-btn');
    downloadButtons.forEach(button => {
        button.addEventListener('mouseover', function() {
            this.parentElement.querySelector('.platform-icon').style.transform = 'scale(1.1)';
        });
        button.addEventListener('mouseout', function() {
            this.parentElement.querySelector('.platform-icon').style.transform = 'scale(1)';
        });
    });
});