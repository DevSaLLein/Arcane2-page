const button = document.querySelector('#menuButton');

const toggleMenu = (event) => {
    const nav = document.querySelector('nav');

    if(event.type === 'touchstart') event.preventDefault();
    

    nav.classList.toggle('active');
}

button.addEventListener('click', toggleMenu);
button.addEventListener('touchstart', toggleMenu);