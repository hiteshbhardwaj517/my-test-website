// Wait until the DOM is fully loaded
document.addEventListener('DOMContentLoaded', () => {
    const exploreBtn = document.getElementById('alertBtn');
    
    if (exploreBtn) {
        exploreBtn.addEventListener('click', () => {
            // Smoothly scroll down to the services section
            const servicesSection = document.getElementById('services');
            servicesSection.scrollIntoView({ behavior: 'smooth' });
        });
    }
});
