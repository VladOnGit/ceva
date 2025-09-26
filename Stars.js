
function createStars() {
    const starsContainer = document.getElementById('stars');
    const numStars = 150;

    for (let i = 0; i < numStars; i++) {
        const star = document.createElement('div');
        star.className = 'star';

    const sizes = ['small', 'medium', 'large'];
    const randomSize = sizes[Math.floor(Math.random() * sizes.length)];
    star.classList.add(randomSize);

        star.style.left = Math.random() * 100 + '%';
        star.style.top = Math.random() * 100 + '%';
        star.style.animationDelay = Math.random() * 2 + 's';
        star.style.animationDuration = (Math.random() * 2 + 1) + 's';
        starsContainer.appendChild(star);
            }
        }

document.addEventListener('DOMContentLoaded', createStars);

document.addEventListener('mousemove', (e) => {
    const stars = document.querySelectorAll('.star');
    const x = e.clientX / window.innerWidth;
    const y = e.clientY / window.innerHeight;
            
    stars.forEach((star, index) => {
    const speed = (index % 5) * 0.5;
    const offsetX = (x - 0.5) * speed;
    const offsetY = (y - 0.5) * speed;

    star.style.transform = `translate(${offsetX}px, ${offsetY}px)`;
});

});
