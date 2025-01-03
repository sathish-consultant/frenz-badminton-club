document.addEventListener("DOMContentLoaded", () => {
    const app = document.getElementById('app');
    
    // Page content templates
    const pages = {
        home: `
            <h1>Welcome to Frenz Badminton Club</h1>
            <p>Join us for exciting badminton matches and events!</p>
        `,
        about: `
            <h1>About Us</h1>
            <p>Frenz Badminton Club is a community for badminton enthusiasts. We host regular matches and tournaments.</p>
        `,
        contact: `
            <h1>Contact Us</h1>
            <p>Email: contact@frenzbadmintonclub.com</p>
        `
    };

    // Function to load a page
    const loadPage = (page) => {
        app.innerHTML = pages[page] || pages.home;
    };

    // Event delegation for navigation
    document.querySelectorAll('a.nav-link').forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const page = link.getAttribute('href').replace('#', '');
            loadPage(page);
        });
    });

    // Load the home page by default
    loadPage('home');
});
