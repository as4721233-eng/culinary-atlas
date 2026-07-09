type Piece = {
  el: HTMLDivElement;
  x: number;
  y: number;
  vx: number;
  vy: number;
  rot: number;
  vrot: number;
};

const COLORS = ['#f0c454', '#ecab2e', '#d98e16', '#f87171', '#dc2626', '#34d399', '#fbbf24'];

export function fireConfetti(originX: number, originY: number, count = 80) {
  const pieces: Piece[] = [];
  const container = document.createElement('div');
  container.style.position = 'fixed';
  container.style.inset = '0';
  container.style.pointerEvents = 'none';
  container.style.zIndex = '9999';
  document.body.appendChild(container);

  for (let i = 0; i < count; i++) {
    const el = document.createElement('div');
    const size = 6 + Math.random() * 8;
    el.className = 'confetti-piece';
    el.style.width = `${size}px`;
    el.style.height = `${size * 1.4}px`;
    el.style.left = `${originX}px`;
    el.style.top = `${originY}px`;
    el.style.background = COLORS[Math.floor(Math.random() * COLORS.length)];
    el.style.borderRadius = Math.random() > 0.5 ? '2px' : '50%';
    container.appendChild(el);
    const angle = Math.random() * Math.PI * 2;
    const speed = 4 + Math.random() * 9;
    pieces.push({
      el,
      x: originX,
      y: originY,
      vx: Math.cos(angle) * speed,
      vy: Math.sin(angle) * speed - 6,
      rot: Math.random() * 360,
      vrot: (Math.random() - 0.5) * 20,
    });
  }

  let frame = 0;
  const maxFrames = 120;
  const gravity = 0.35;

  function tick() {
    frame++;
    let alive = false;
    for (const p of pieces) {
      p.vy += gravity;
      p.x += p.vx;
      p.y += p.vy;
      p.rot += p.vrot;
      p.el.style.transform = `translate(${p.x - originX}px, ${p.y - originY}px) rotateZ(${p.rot}deg)`;
      const fade = 1 - frame / maxFrames;
      p.el.style.opacity = String(Math.max(0, fade));
      if (p.y < window.innerHeight + 60) alive = true;
    }
    if (alive && frame < maxFrames) {
      requestAnimationFrame(tick);
    } else {
      container.remove();
    }
  }
  requestAnimationFrame(tick);
}
