// ===== ⚔️ VERGIL SWORD TRAIL CURSOR EFFECT =====

document.addEventListener("DOMContentLoaded", () => {
  const trailLength = 20;
  const trail = [];

  for (let i = 0; i < trailLength; i++) {
    const dot = document.createElement("div");
    dot.className = "cursor-trail";
    document.body.appendChild(dot);
    trail.push({ x: 0, y: 0, el: dot });
  }

  let mouseX = 0;
  let mouseY = 0;

  document.addEventListener("mousemove", (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
  });

  function animateTrail() {
    let x = mouseX;
    let y = mouseY;

    trail.forEach((dot, i) => {
      const next = trail[i + 1] || trail[0];
      dot.x += (x - dot.x) * 0.2;
      dot.y += (y - dot.y) * 0.2;
      dot.el.style.transform = `translate(${dot.x}px, ${dot.y}px)`;
      dot.el.style.opacity = `${1 - i / trailLength}`;
      x = dot.x;
      y = dot.y;
    });

    requestAnimationFrame(animateTrail);
  }

  animateTrail();
});
