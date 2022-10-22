const toggle = document.querySelector('input[type="checkbox"]');

function toggleTheme(event) {
    if(event.target.checked) {
        document.documentElement.setAttribute('data-theme', 'dark');
    } else {
        document.documentElement.setAttribute('data-theme', 'light');
    }
}

toggle.addEventListener('change', toggleTheme);