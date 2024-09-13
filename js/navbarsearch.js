// Function to initialize the mobile menu
function initializeMobileMenu() {
    const menuToggle = document.querySelector('.js-menu-toggle');
    const menu = document.querySelector('.site-mobile-menu-body');

    if (menuToggle && menu) {
        menuToggle.addEventListener('click', function() {
            menu.classList.toggle('open'); // Toggling the menu visibility
        });
    }
}

// Fetch external HTML and insert it
fetch('navbarsearch.html')
    .then(response => response.text())
    .then(data => {
        document.getElementById('navbarsearch').innerHTML = data;

        // Re-initialize the menu and other event listeners after the HTML is injected
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

// Use MutationObserver to listen for changes and ensure the mobile menu is initialized
const observer = new MutationObserver(function(mutationsList, observer) {
    for (let mutation of mutationsList) {
        if (mutation.type === 'childList' && mutation.addedNodes.length) {
            // Reinitialize mobile menu logic after the navbar content is injected
            initializeMobileMenu();
        }
    }
});

// Start observing the #navbarsearch element
const navbarSearch = document.getElementById('navbarsearch');
observer.observe(navbarSearch, { childList: true });
