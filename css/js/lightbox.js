document.addEventListener('DOMContentLoaded', function() {
    // Lightbox functionality
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.querySelector('.lightbox-img');
    const lightboxCaption = document.querySelector('.lightbox-caption');
    const closeLightbox = document.querySelector('.close-lightbox');
    const portfolioLinks = document.querySelectorAll('[data-lightbox]');
    
    // Sample project data (in a real app, this would come from a database)
    const projects = {
        project1: {
            img: 'images/projects/project1.jpg',
            title: 'E-commerce Website',
            description: 'Full-featured online store with payment integration'
        },
        project2: {
            img: 'images/projects/project2.jpg',
            title: 'Fitness Tracker App',
            description: 'Cross-platform mobile application for fitness tracking'
        },
        project3: {
            img: 'images/projects/project3.jpg',
            title: 'Brand Identity',
            description: 'Complete branding package for a startup'
        }
    };
    
    // Open lightbox
    portfolioLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const projectId = this.getAttribute('data-lightbox');
            const project = projects[projectId];
            
            if (project) {
                lightboxImg.src = project.img;
                lightboxCaption.textContent = `${project.title} - ${project.description}`;
                lightbox.classList.add('active');
                document.body.style.overflow = 'hidden';
            }
        });
    });
    
    // Close lightbox
    closeLightbox.addEventListener('click', function() {
        lightbox.classList.remove('active');
        document.body.style.overflow = 'auto';
    });
    
    // Close when clicking outside the image
    lightbox.addEventListener('click', function(e) {
        if (e.target === lightbox) {
            lightbox.classList.remove('active');
            document.body.style.overflow = 'auto';
        }
    });
    
    // Close with Escape key
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && lightbox.classList.contains('active')) {
            lightbox.classList.remove('active');
            document.body.style.overflow = 'auto';
        }
    });
});