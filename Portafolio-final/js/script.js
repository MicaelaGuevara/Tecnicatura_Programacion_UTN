const starsCanvas = document.getElementById('stars');
const firefliesCanvas = document.getElementById('fireflies');
const orbitCanvas = document.getElementById('orbitCanvas');
const starRainCanvas = document.getElementById('starRain');

const starsCtx = starsCanvas.getContext('2d');
const firefliesCtx = firefliesCanvas.getContext('2d');
const orbitCtx = orbitCanvas.getContext('2d');
const starRainCtx = starRainCanvas.getContext('2d');
const fireflyContainer = document.getElementById("fireflyContainer");

let width, height;
let isAnimating = true

const btn = document.getElementById('menu-btn');
const audio = document.getElementById('menu-audio');
// Aplicar glow animado desde el inicio
btn.classList.add('glowing');

btn.addEventListener('click', () => {
  if (audio.paused) {
    audio.currentTime = 0;
    audio.play().catch(err => console.warn("No se pudo reproducir audio:", err));
    btn.classList.add('active');
  } else {
    audio.pause();
    btn.classList.remove('active');
  }
});

audio.addEventListener('ended', () => {
  btn.classList.remove('active');
});


function resize() {
  width = window.innerWidth;
  height = window.innerHeight;
  [starsCanvas, firefliesCanvas, orbitCanvas, starRainCanvas].forEach(c => {
    c.width = width;
    c.height = height;
  });
}
resize();
window.addEventListener('resize', resize);

const stars = Array.from({ length: 400 }, () => ({
  x: Math.random() * width,
  y: Math.random() * height,
  r: Math.random() * 1.2 + 0.3,
  a: Math.random(),
  s: 0.002 + Math.random() * 0.004
}));

const fireflies = Array.from({ length: 150 }, () => ({
  x: Math.random() * width,
  y: Math.random() * height,
  r: Math.random() * 2 + 1,
  a: 0,
  s: 0.004 + Math.random() * 0.008,
  vx: (Math.random() - 0.5) * 0.3,
  vy: (Math.random() - 0.5) * 0.3,
  phase: Math.random() * Math.PI * 2
}));



const orbitParticles = [];
for (let l = 1; l <= 3; l++) {
  for (let i = 0; i < 100; i++) {
    orbitParticles.push({
      angle: Math.random() * Math.PI * 2,
      radius: 40 + l * 30,
      speed: (Math.random() * 0.01 + 0.005) * (Math.random() < 0.5 ? -1 : 1),
      size: Math.random() * 2 + 1,
    });
  }
}

const starRain = [];
for (let i = 0; i < 400; i++) {
  starRain.push({
    x: Math.random() * width,
    y: Math.random() * height,
    speed: 1 + Math.random() * 1.5,
    size: Math.random() * 1.5 + 0.5
  });
}

const textContainer = document.getElementById('text-container');
const welcomeText = document.getElementById('welcome-text');
const magicOrb = document.getElementById('magic-orb');
const contenido = document.getElementById('contenido');


function createFirefly() {
  const firefly = document.createElement("article");
  firefly.classList.add("firefly");

  const size = Math.random() * 6 + 4;
  const color = Math.random() > 0.5 ? 'rgba(255,255,150,0.8)' : 'rgba(150,255,150,0.8)';
  const blur = Math.random() > 0.5 ? 10 : 20;

  firefly.style.width = size + "px";
  firefly.style.height = size + "px";
  firefly.style.left = Math.random() * window.innerWidth + "px";
  firefly.style.top = Math.random() * window.innerHeight + "px";
  firefly.style.background = color;
  firefly.style.boxShadow = `0 0 ${blur}px ${color}`;

  fireflyContainer.appendChild(firefly);
  setTimeout(() => firefly.remove(), 12000);
}



setTimeout(() => {
  textContainer.classList.add('show');
  orbitCanvas.classList.add('show');
}, 4100);

setTimeout(() => {
  textContainer.classList.remove('show');
  orbitCanvas.classList.remove('show');
}, 9000);

setTimeout(() => {
  welcomeText.classList.add('show');
  magicOrb.classList.add('show');
}, 12000);

setTimeout(() => {
  welcomeText.classList.remove('show');
  magicOrb.classList.remove('show');
}, 17000);

setTimeout(() => {
  document.body.style.transition = 'opacity 3s ease-in-out';
  document.body.style.opacity = '0';
}, 17000);

setTimeout(() => {
  isAnimating = false; // ✅ Esto evita que se vuelva a llamar animate
  // Eliminar elementos de intro
  [starsCanvas, firefliesCanvas, orbitCanvas, starRainCanvas, textContainer, welcomeText, magicOrb].forEach(el => el.remove());
  // Cambiar estilos y mostrar contenido
  document.documentElement.style.height = '100%';
  document.documentElement.style.width = '100%';

  document.body.style.height = '100%';
  document.body.style.width = '100%';
  document.body.style.fontFamily = "'Poppins', sans-serif";
  document.body.style.background = 'radial-gradient(circle at center, #3f1c73, #120628)';
  document.body.style.backgroundSize = 'cover';
  document.body.style.backgroundRepeat = 'no-repeat';
  document.body.style.backgroundAttachment = 'fixed';
  document.body.style.color = '#e9f7ff';
  document.body.style.overflow = 'auto';
  document.body.style.position = 'relative';
  document.body.style.opacity = '1';
  contenido.classList.add('visible');
  // Activar luciérnagas
  const audio = document.getElementById('intro-audio');
  // Esperar un poco para asegurar que se reprodujo en mute
  setTimeout(() => {
    // Desmutear y subir volumen suavemente
    audio.muted = false;
    audio.volume = 0.4;

    // Opcional: efecto de fade-in de volumen
    let vol = 0;
    const fadeIn = setInterval(() => {
      if (vol < 0.4) {
        vol += 0.02;
        audio.volume = vol;
      } else {
        clearInterval(fadeIn);
      }
    }, 200);
  }, 500); // tiempo suficiente para evitar bloqueo de autoplay
  setInterval(createFirefly, 300);

}, 20000);

function animate() {
  if (!isAnimating) {
    console.log("Se detuvo la animación");
    return; // ✅ Detenemos el bucle aquí
  }
  starsCtx.clearRect(0, 0, width, height);
  stars.forEach(s => {
    s.a += s.s;
    if (s.a > 1 || s.a < 0) s.s *= -1;
    starsCtx.beginPath();
    starsCtx.arc(s.x, s.y, s.r, 0, Math.PI * 2);
    starsCtx.fillStyle = `rgba(255,255,255,${s.a})`;
    starsCtx.fill();
  });

  firefliesCtx.clearRect(0, 0, width, height);
  fireflies.forEach(f => {
    f.x += f.vx; f.y += f.vy;
    f.a += f.s;
    if (f.a > 1 || f.a < 0) f.s *= -1;
    if (f.x < 0) f.x = width; if (f.x > width) f.x = 0;
    if (f.y < 0) f.y = height; if (f.y > height) f.y = 0;
    f.phase += 0.02;
    const g = 182 + 20 * Math.sin(f.phase);
    const b = 193 + 30 * Math.cos(f.phase);
    firefliesCtx.beginPath();
    firefliesCtx.arc(f.x, f.y, f.r, 0, Math.PI * 2);
    firefliesCtx.fillStyle = `rgba(255,${g | 0},${b | 0},${Math.abs(f.a).toFixed(2)})`;
    firefliesCtx.shadowColor = `rgba(255,${g | 0},${b | 0},0.8)`;
    firefliesCtx.shadowBlur = 14;
    firefliesCtx.fill();
  });

  orbitCtx.clearRect(0, 0, width, height);
  const rect = textContainer.getBoundingClientRect();
  const cx = rect.left + rect.width / 2;
  const cy = rect.top + rect.height / 2;
  orbitParticles.forEach(p => {
    p.angle += p.speed;
    const x = cx + p.radius * Math.cos(p.angle);
    const y = cy + p.radius * Math.sin(p.angle);
    orbitCtx.beginPath();
    orbitCtx.arc(x, y, p.size, 0, Math.PI * 2);
    orbitCtx.fillStyle = 'rgba(255,182,193,0.9)';
    orbitCtx.shadowColor = 'rgba(255,182,193,1)';
    orbitCtx.shadowBlur = 12;
    orbitCtx.fill();
  });

  starRainCtx.clearRect(0, 0, width, height);
  starRain.forEach(s => {
    s.x += s.speed;
    s.y += s.speed;
    if (s.x > width) s.x = 0;
    if (s.y > height) s.y = 0;
    starRainCtx.beginPath();
    starRainCtx.arc(s.x, s.y, s.size, 0, Math.PI * 2);
    starRainCtx.fillStyle = 'rgba(255,192,203,0.8)';
    starRainCtx.shadowColor = 'rgba(255,192,203,1)';
    starRainCtx.shadowBlur = 10;
    starRainCtx.fill();
  });

  requestAnimationFrame(animate);
}
if (isAnimating) {
  animate();
} else {
  setInterval(createFirefly, 300);
}

  const hamburger = document.getElementById('hamburger');
  const navLinks = document.getElementById('nav-links');

  hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
  });

  // Marcar enlace activo
  const links = document.querySelectorAll('.nav-link');
  links.forEach(link => {
    link.addEventListener('click', () => {
      links.forEach(l => l.classList.remove('active'));
      link.classList.add('active');
      navLinks.classList.remove('active'); // Cierra el menú en mobile
    });
  });

  document.getElementById("contactForm").addEventListener("submit", function (e) {
  e.preventDefault();
  alert("Gracias por tu mensaje ✨ Pronto me pondré en contacto.");
  this.reset();
});