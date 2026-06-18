(function () {
  "use strict";

  function createSparkles(container, count) {
    for (let i = 0; i < count; i++) {
      const el = document.createElement("span");
      el.className = "sparkle";
      const size = Math.random() * 4 + 2;
      el.style.cssText = `
        width: ${size}px;
        height: ${size}px;
        left: ${Math.random() * 100}%;
        top: ${Math.random() * 100}%;
        --dur: ${2 + Math.random() * 4}s;
        --delay: ${Math.random() * 5}s;
      `;
      container.appendChild(el);
    }
  }

  function createFlares(container, count) {
    const positions = [
      { left: "10%", top: "20%", size: 200 },
      { left: "75%", top: "15%", size: 180 },
      { left: "50%", top: "45%", size: 250 },
      { left: "25%", top: "70%", size: 160 },
      { left: "85%", top: "60%", size: 140 },
    ];

    for (let i = 0; i < count; i++) {
      const pos = positions[i % positions.length];
      const el = document.createElement("span");
      el.className = "flare";
      const jitter = (Math.random() - 0.5) * 10;
      el.style.cssText = `
        width: ${pos.size}px;
        height: ${pos.size}px;
        left: calc(${pos.left} + ${jitter}%);
        top: calc(${pos.top} + ${jitter}%);
        --dur: ${5 + Math.random() * 4}s;
        --delay: ${Math.random() * 3}s;
      `;
      container.appendChild(el);
    }
  }

  const sparklesEl = document.querySelector(".sparkles");
  const flaresEl = document.querySelector(".light-flares");

  if (sparklesEl) createSparkles(sparklesEl, 60);
  if (flaresEl) createFlares(flaresEl, 5);

  document.querySelectorAll(".hall-btn").forEach(function (btn) {
    btn.addEventListener("click", function (e) {
      e.preventDefault();
    });
  });
})();
