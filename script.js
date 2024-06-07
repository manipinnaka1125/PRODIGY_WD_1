document.addEventListener('DOMContentLoaded', function() {
    const navbar = document.getElementById('navbar');
    const menuIcon = document.getElementById('menu-icon');
    const navLinks = document.getElementById('nav-links');
    
    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            navbar.style.backgroundColor = '#555';
            navbar.style.boxShadow = '0 2px 5px rgba(0, 0, 0, 0.3)';
        } else {
            navbar.style.backgroundColor = '#333';
            navbar.style.boxShadow = 'none';
        }
    });

    menuIcon.addEventListener('click', function() {
        navLinks.classList.toggle('show');
    });
});
