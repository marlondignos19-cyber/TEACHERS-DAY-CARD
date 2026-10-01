// =====================================================
// TEACHERS' DAY SCRAPBOOK CARD
// Vanilla JavaScript - interactions + animation controls
// =====================================================

const cover = document.getElementById("cover");
const messageSection = document.getElementById("messageSection");
const openButton = document.getElementById("openButton");
const closeButton = document.getElementById("closeButton");
const replayButton = document.getElementById("replayButton");
const celebration = document.getElementById("celebration");
const finalThanks = document.getElementById("finalThanks");

const clickablePins = document.querySelectorAll(".push-pin");
const clips = document.querySelectorAll(".metal-clip");

// Open the scrapbook message.
function openMessage() {
  cover.style.display = "none";
  messageSection.classList.add("open");
  messageSection.setAttribute("aria-hidden", "false");

  finalThanks.classList.remove("show");

  // Restart the CSS entrance animations.
  void messageSection.offsetWidth;

  createCelebration();
  setTimeout(() => finalThanks.classList.add("show"), 850);
}

// Close the scrapbook message.
function closeMessage() {
  messageSection.classList.remove("open");
  messageSection.setAttribute("aria-hidden", "true");
  finalThanks.classList.remove("show");

  cover.style.display = "grid";
  void cover.offsetWidth;

  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
}

// Replay the whole sequence.
function replayAnimation() {
  messageSection.classList.remove("open");
  finalThanks.classList.remove("show");
  cover.style.display = "grid";

  // Restart cover animation by forcing a reflow.
  void cover.offsetWidth;

  // Re-open automatically after the cover has been shown briefly.
  setTimeout(() => {
    openMessage();
  }, 950);
}

openButton.addEventListener("click", openMessage);
closeButton.addEventListener("click", closeMessage);
replayButton.addEventListener("click", replayAnimation);

// Make the decorative push pins interactive.
clickablePins.forEach((pin) => {
  pin.addEventListener("click", () => {
    pin.classList.remove("clicked");
    void pin.offsetWidth;
    pin.classList.add("clicked");
  });
});

// Make the paper clips gently bounce when clicked.
clips.forEach((clip) => {
  clip.addEventListener("click", () => {
    clip.animate(
      [
        { transform: "rotate(9deg) translateY(0)" },
        { transform: "rotate(15deg) translateY(-6px)" },
        { transform: "rotate(5deg) translateY(0)" }
      ],
      {
        duration: 550,
        easing: "ease-out"
      }
    );
  });
});

// If the image is unavailable, show a friendly placeholder.
document.querySelectorAll("img").forEach((img) => {
  img.addEventListener("error", () => {
    const fallback = img.parentElement.querySelector(".photo-fallback");
    if (fallback) {
      img.style.display = "none";
      fallback.style.display = "grid";
    }
  });
});

// Small tasteful celebration.
function createCelebration() {
  celebration.innerHTML = "";

  const symbols = ["✦", "✧", "♥", "♡", "•", "✿"];
  const count = window.innerWidth < 600 ? 16 : 28;

  for (let i = 0; i < count; i++) {
    const piece = document.createElement("span");
    piece.className = "confetti";
    piece.textContent = symbols[Math.floor(Math.random() * symbols.length)];

    const angle = Math.random() * Math.PI * 2;
    const distance = 100 + Math.random() * 330;

    piece.style.setProperty("--x", `${Math.cos(angle) * distance}px`);
    piece.style.setProperty("--y", `${Math.sin(angle) * distance}px`);
    piece.style.animationDelay = `${Math.random() * .22}s`;

    celebration.appendChild(piece);
  }

  setTimeout(() => {
    celebration.innerHTML = "";
  }, 1800);
}

// Keyboard support: Escape closes the message.
document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && messageSection.classList.contains("open")) {
    closeMessage();
  }
});
