// Shared interactions for A Little Space of Mine

// Mobile navigation
const menuButton = document.querySelector(".menu-button");
const siteNav = document.querySelector(".site-nav");

if (menuButton && siteNav) {
  menuButton.addEventListener("click", () => {
    const open = siteNav.classList.toggle("is-open");
    menuButton.setAttribute("aria-expanded", String(open));
    menuButton.setAttribute(
      "aria-label",
      open ? "Close navigation" : "Open navigation"
    );
  });

  siteNav.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      siteNav.classList.remove("is-open");
      menuButton.setAttribute("aria-expanded", "false");
    });
  });

  document.addEventListener("click", (event) => {
    if (!siteNav.contains(event.target) && !menuButton.contains(event.target)) {
      siteNav.classList.remove("is-open");
      menuButton.setAttribute("aria-expanded", "false");
    }
  });
}

// K-drama review modal (only exists on kdramas.html)
const modal = document.getElementById("dramaModal");
if (modal) {
  const modalTitle = document.getElementById("modalTitle");
  const modalYear = document.getElementById("modalYear");
  const modalRating = document.getElementById("modalRating");
  const modalReview = document.getElementById("modalReview");
  const modalImage = document.getElementById("modalImage");

  document.querySelectorAll(".drama-tile").forEach((tile) => {
    tile.addEventListener("click", () => {
      modalTitle.textContent = tile.dataset.title;
      modalYear.textContent = tile.dataset.year;
      modalRating.textContent = "Rating: " + tile.dataset.rating;
      modalReview.textContent = tile.dataset.review;
      const image = tile.dataset.image;
      if (image) {
        modalImage.src = image;
        modalImage.style.display = "block";
      } else {
        modalImage.style.display = "none";
      }
      modal.classList.add("open");
      modal.setAttribute("aria-hidden", "false");
      document.body.style.overflow = "hidden";
    });
  });

  const closeModal = () => {
    modal.classList.remove("open");
    modal.setAttribute("aria-hidden", "true");
    document.body.style.overflow = "";
  };

  modal.querySelectorAll("[data-close-modal]").forEach((button) => {
    button.addEventListener("click", closeModal);
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") closeModal();
  });
}

// Simple player controls: connect your own permitted audio files here.
// This starter intentionally does not include copyrighted songs.
const tracks = [
  { title: "Your song 1", src: "assets/audio/track-1.mp3" },
  { title: "Your song 2", src: "assets/audio/track-2.mp3" },
  { title: "Your song 3", src: "assets/audio/track-3.mp3" },
  { title: "Your song 4", src: "assets/audio/track-4.mp3" },
];
const audio = new Audio();
let currentTrack = 0;
const trackName = document.getElementById("trackName");
const playButton = document.getElementById("playTrack");
const playerMessage = document.getElementById("playerMessage");

function loadTrack(index, autoplay = false) {
  currentTrack = (index + tracks.length) % tracks.length;
  audio.src = tracks[currentTrack].src;
  if (trackName) trackName.textContent = tracks[currentTrack].title;
  if (playerMessage)
    playerMessage.textContent =
      "Add your own permitted audio files to assets/audio.";
  if (autoplay) {
    audio
      .play()
      .then(() => {
        if (playButton) playButton.textContent = "Ⅱ";
      })
      .catch(() => {
        if (playerMessage)
          playerMessage.textContent =
            "Add the audio file first, then press play.";
      });
  }
}
if (playButton) {
  loadTrack(0);
  playButton.addEventListener("click", () => {
    if (!audio.src || audio.paused) {
      loadTrack(currentTrack, true);
    } else {
      audio.pause();
      playButton.textContent = "▶";
    }
  });
  document
    .getElementById("nextTrack")
    ?.addEventListener("click", () => loadTrack(currentTrack + 1, true));
  document
    .getElementById("prevTrack")
    ?.addEventListener("click", () => loadTrack(currentTrack - 1, true));
  audio.addEventListener("ended", () => loadTrack(currentTrack + 1, true));
  audio.addEventListener("play", () => (playButton.textContent = "Ⅱ"));
  audio.addEventListener("pause", () => (playButton.textContent = "▶"));
}