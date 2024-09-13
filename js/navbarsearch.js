fetch('navbarsearch.html')
    .then(response => response.text())
    .then(data => {
        document.getElementById('navbarsearch').innerHTML = data;

        // Initialize mobile menu toggle or rebind event listeners
        initializeMobileMenu();

        const searchBox = document.getElementById('searchBox');
        if (searchBox) {
            searchBox.addEventListener('keydown', function(event) {
                if (event.key === 'Enter') {
                    event.preventDefault();
                    search();
                }
            });
        } else {
            console.error('SearchBox element not found after loading navbarsearch.html');
        }
    })
    .catch(error => console.error('Error loading navbarsearch.html:', error));

function initializeMobileMenu() {
    const menuToggle = document.querySelector('.js-menu-toggle');
    const menu = document.querySelector('.site-mobile-menu-body');
    
    if (menuToggle && menu) {
        menuToggle.addEventListener('click', function() {
            menu.classList.toggle('open'); // Add your mobile menu toggle logic here
        });
    }
}
