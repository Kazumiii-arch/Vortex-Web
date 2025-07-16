// This function updates the header to a "logged-in" state
function updateHeaderForLoggedInUser() {
    const navLinks = document.getElementById('nav-links');
    if (navLinks) {
        navLinks.innerHTML = `
            <a href="dashboard.html" class="button">Dashboard</a>
            <a href="#" id="logout-button" class="button primary">Log Out</a>
        `;

        // Add event listener for the new logout button
        const logoutButton = document.getElementById('logout-button');
        if (logoutButton) {
            logoutButton.addEventListener('click', (event) => {
                event.preventDefault();
                localStorage.removeItem('isLoggedIn'); // "Log out" by clearing the flag
                window.location.href = 'index.html'; // Redirect to homepage
            });
        }
    }
}

// === Check Login Status on Every Page Load ===
// This code runs every time a page is loaded
document.addEventListener('DOMContentLoaded', () => {
    if (localStorage.getItem('isLoggedIn') === 'true') {
        updateHeaderForLoggedInUser();
    }
});


// === Login Form Logic (Only runs on login page) ===
const loginForm = document.querySelector('.form-container form');
// We check if the loginForm exists to ensure this code only runs on the login page
if (loginForm) {
    loginForm.addEventListener('submit', (event) => {
        event.preventDefault(); // Stop the form from reloading the page

        // --- In a real app, you'd send data to a backend here ---
        
        // For our simulation, we'll just assume the login is successful
        console.log('Login successful (simulation)');
        localStorage.setItem('isLoggedIn', 'true'); // Set a flag to "remember" the login

        // Update the header immediately
        updateHeaderForLoggedInUser();
        
        // Redirect to the dashboard after a short delay
        window.setTimeout(() => {
            window.location.href = 'dashboard.html';
        }, 1000); // 1-second delay
    });
}


// === Product Page Tab Logic (Only runs on product page) ===
const tabs = document.querySelectorAll('[data-tab-target]');
const tabContents = document.querySelectorAll('[data-tab-content]');

tabs.forEach(tab => {
  tab.addEventListener('click', () => {
    const target = document.querySelector(tab.dataset.tabTarget);
    
    tabContents.forEach(tabContent => {
      tabContent.classList.remove('active');
    });
    
    tabs.forEach(t => {
      t.classList.remove('active');
    });
    
    tab.classList.add('active');
    target.classList.add('active');
  });
});
// === Wishlist Button Logic ===
const wishlistButton = document.querySelector('.wishlist-button');

if (wishlistButton) {
    wishlistButton.addEventListener('click', () => {
        // Toggle the 'active' class on the button
        wishlistButton.classList.toggle('active');

        // In a real app, you would add/remove the product ID from a list
        // in localStorage or send a request to the backend.
        if (wishlistButton.classList.contains('active')) {
            console.log('Product added to wishlist (simulation)');
        } else {
            console.log('Product removed from wishlist (simulation)');
        }
    });
}
