const musicToggle = document.getElementById("music-toggle");
const music = document.getElementById("background-music");

musicToggle.addEventListener("click", () => {
  if (music.paused) {
    music.play();
    musicToggle.textContent = "♫";
    musicToggle.setAttribute("aria-label", "Turn music off");
  } else {
    music.pause();
    musicToggle.textContent = "🔇";
    musicToggle.setAttribute("aria-label", "Turn music on");
  }
});

const snow = document.getElementById("snow");

for (let i = 0; i < 40; i++) {
  const flake = document.createElement("span");

  flake.className = "snowflake";
  flake.style.left = `${Math.random() * 100}%`;
  flake.style.width = `${4 + Math.random() * 7}px`;
  flake.style.height = flake.style.width;
  flake.style.opacity = `${0.4 + Math.random() * 0.6}`;
  flake.style.setProperty("--duration", `${10 + Math.random() * 10}s`);
  flake.style.setProperty("--delay", `${Math.random() * -20}s`);

  snow.appendChild(flake);
}
