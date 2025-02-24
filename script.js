const canvas = document.getElementById('vortexCanvas');
const ctx = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight * 0.8;

const particles = [];
const numParticles = 100;

class Particle {
    constructor() {
        this.x = canvas.width / 2;
        this.y = canvas.height / 2;
        this.angle = Math.random() * 2 * Math.PI;
        this.speed = Math.random() * 2 + 1;
        this.radius = Math.random() * 2 + 1;
    }
    update() {
        // Increase angle for swirling effect
        this.angle += 0.05;
        this.x += Math.cos(this.angle) * this.speed;
        this.y += Math.sin(this.angle) * this.speed;
    }
    draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        ctx.fillStyle = 'rgba(255, 255, 255, 0.8)';
        ctx.fill();
    }
}

function initParticles() {
    for (let i = 0; i < numParticles; i++) {
        particles.push(new Particle());
    }
}

function animate() {
    ctx.fillStyle = 'rgba(17, 17, 17, 0.1)';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    particles.forEach(p => {
        p.update();
        p.draw();
    });
    requestAnimationFrame(animate);
}

initParticles();
animate();
