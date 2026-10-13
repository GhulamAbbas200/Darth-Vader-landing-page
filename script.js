const intro = document.getElementById('intro');
const landing = document.getElementById('landing');

const MIN_TIME = 3000; // milliseconds the logo stays at minimum

const imageLoaded = new Promise((resolve) => {
    const img = new Image();
    img.onload = () => resolve(img.src);
    img.onerror = () => resolve(null);   // don't get stuck if it fails
    img.src = 'assets/bg.jpg';
});

const minWait = new Promise((resolve) => setTimeout(resolve, MIN_TIME));

Promise.all([imageLoaded, minWait]).then(([src]) => {
    if (src) landing.style.backgroundImage = `url(${src})`;
    intro.classList.add('hidden');
    document.body.classList.add('loaded');
});