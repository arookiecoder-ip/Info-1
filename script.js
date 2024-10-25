function handleSidebar() {
    var sidebar = document.getElementById('sidebar');
    var mainContent = document.querySelector('.main-content');
    var sidebarBtn = document.getElementById('sidebarBtn');

    // Remove any existing event listeners
    sidebarBtn.removeEventListener('click', toggleSidebar);
    sidebarBtn.removeEventListener('mouseover', openSidebar);
    sidebar.removeEventListener('mouseleave', closeSidebar);

    // Detect if it's a mobile device
    if (window.innerWidth <= 768) {
        // Mobile: Toggle sidebar on click
        sidebarBtn.addEventListener('click', toggleSidebar);
    } else {
        // Desktop: Toggle sidebar on hover
        sidebarBtn.addEventListener('mouseover', openSidebar);
        sidebar.addEventListener('mouseleave', closeSidebar);
    }
}

function toggleSidebar() {
    var sidebar = document.getElementById('sidebar');
    var mainContent = document.querySelector('.main-content');
    
    if (sidebar.style.left === '0px') {
        sidebar.style.left = '-250px';
        mainContent.style.marginLeft = '0';
    } else {
        sidebar.style.left = '0';
        mainContent.style.marginLeft = '250px';
    }
}

function openSidebar() {
    var sidebar = document.getElementById('sidebar');
    var mainContent = document.querySelector('.main-content');
    sidebar.style.left = '0';
    mainContent.style.marginLeft = '250px';
}

function closeSidebar() {
    var sidebar = document.getElementById('sidebar');
    var mainContent = document.querySelector('.main-content');
    sidebar.style.left = '-250px';
    mainContent.style.marginLeft = '0';
}

handleSidebar();
window.addEventListener('resize', handleSidebar); // Reapply the correct behavior on resize

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });

        closeSidebar(); // Hide sidebar after click
    });
});

// Show/hide "Back to Top" button
window.addEventListener('scroll', function() {
    var backToTopBtn = document.getElementById('backToTopBtn');
    if (window.scrollY > 300) {
        backToTopBtn.style.display = 'block';
        backToTopBtn.style.opacity = '1';
    } else {
        backToTopBtn.style.opacity = '0';
        setTimeout(function() {
            backToTopBtn.style.display = 'none';
        }, 300);
    }
});

function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}
