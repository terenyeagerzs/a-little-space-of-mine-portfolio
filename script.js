// ==========================================
// 1. MOBILE HAMBURGER MENU
// ==========================================
const hamburgerBtn = document.getElementById('hamburger-btn');
const navMenu = document.getElementById('nav-menu');

hamburgerBtn.addEventListener('click', () => {
  navMenu.classList.toggle('active');
});

// ==========================================
// 2. PAGLIPAT NG VIEWS (SINGLE-PAGE FEEL)
// ==========================================
const allViews = document.querySelectorAll('.page-view');

function showView(viewId) {
  allViews.forEach(view => {
    view.style.display = 'none';
  });
  document.getElementById(viewId).style.display = 'block';
  navMenu.classList.remove('active');
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Nav links papunta sa Home View (ARCHIVE, Home, About)
document.querySelectorAll('.nav-home').forEach(link => {
  link.addEventListener('click', () => {
    showView('home-view');
  });
});

// Nav link & Clickable words papunta sa Interest View (Top 12 K-Dramas)
document.querySelectorAll('.nav-interest, #open-kdrama-view').forEach(link => {
  link.addEventListener('click', (e) => {
    e.preventDefault();
    showView('interest-view');
  });
});

// Back to Groups button
document.querySelectorAll('.back-to-groups').forEach(btn => {
  btn.addEventListener('click', (e) => {
    e.preventDefault();
    showView('interest-view');
  });
});

// ==========================================
// 3. K-POP GROUP FOLDERS & BIAS SWITCHING
// ==========================================
// Open KIOF Folder
document.getElementById('open-kiof-folder').addEventListener('click', () => {
  showView('kiof-folder-view');
  document.getElementById('kiof-group-part').style.display = 'block';
  document.getElementById('kiof-bias-part').style.display = 'none';
});
document.getElementById('show-kiof-bias').addEventListener('click', (e) => {
  e.preventDefault();
  document.getElementById('kiof-group-part').style.display = 'none';
  document.getElementById('kiof-bias-part').style.display = 'block';
  window.scrollTo({ top: 0, behavior: 'smooth' });
});
document.getElementById('back-to-kiof-group').addEventListener('click', (e) => {
  e.preventDefault();
  document.getElementById('kiof-bias-part').style.display = 'none';
  document.getElementById('kiof-group-part').style.display = 'block';
});

// Open UNIS Folder
document.getElementById('open-unis-folder').addEventListener('click', () => {
  showView('unis-folder-view');
  document.getElementById('unis-group-part').style.display = 'block';
  document.getElementById('unis-bias-part').style.display = 'none';
});
document.getElementById('show-unis-bias').addEventListener('click', (e) => {
  e.preventDefault();
  document.getElementById('unis-group-part').style.display = 'none';
  document.getElementById('unis-bias-part').style.display = 'block';
  window.scrollTo({ top: 0, behavior: 'smooth' });
});
document.getElementById('back-to-unis-group').addEventListener('click', (e) => {
  e.preventDefault();
  document.getElementById('unis-bias-part').style.display = 'none';
  document.getElementById('unis-group-part').style.display = 'block';
});

// Open AHOF Folder
document.getElementById('open-ahof-folder').addEventListener('click', () => {
  showView('ahof-folder-view');
  document.getElementById('ahof-group-part').style.display = 'block';
  document.getElementById('ahof-bias-part').style.display = 'none';
});
document.getElementById('show-ahof-bias').addEventListener('click', (e) => {
  e.preventDefault();
  document.getElementById('ahof-group-part').style.display = 'none';
  document.getElementById('ahof-bias-part').style.display = 'block';
  window.scrollTo({ top: 0, behavior: 'smooth' });
});
document.getElementById('back-to-ahof-group').addEventListener('click', (e) => {
  e.preventDefault();
  document.getElementById('ahof-bias-part').style.display = 'none';
  document.getElementById('ahof-group-part').style.display = 'block';
});

// ==========================================
// 4. K-DRAMA RATING & REVIEW MODAL
// ==========================================
const reviewModal = document.getElementById('review-modal');
const modalImg = document.getElementById('modal-img');
const modalRating = document.getElementById('modal-rating');
const modalText = document.getElementById('modal-text');

document.querySelectorAll('.drama-card').forEach(card => {
  card.addEventListener('click', () => {
    modalImg.src = card.getAttribute('data-poster');
    modalRating.textContent = card.getAttribute('data-rating');
    modalText.textContent = card.getAttribute('data-review');
    reviewModal.style.display = 'flex';
  });
});

document.getElementById('close-modal').addEventListener('click', () => {
  reviewModal.style.display = 'none';
});

document.getElementById('modal-say-btn').addEventListener('click', () => {
  reviewModal.style.display = 'none';
});

// ==========================================
// 5. MUSIC PLAYER & TOP 5 PLAYLIST
// ==========================================
document.querySelectorAll('.play-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    const audio = document.getElementById(btn.getAttribute('data-audio'));
    if (audio.paused) {
      document.querySelectorAll('.group-audio').forEach(a => a.pause());
      audio.play();
    } else {
      audio.pause();
    }
  });
});

document.querySelectorAll('.song-item').forEach(item => {
  item.addEventListener('click', () => {
    const audio = document.getElementById(item.getAttribute('data-audio'));
    const titleEl = document.getElementById(item.getAttribute('data-title'));
    document.querySelectorAll('.group-audio').forEach(a => a.pause());
    audio.src = item.getAttribute('data-src');
    titleEl.textContent = item.textContent.replace(/^\d+\.\s*/, '');
    audio.play();
  });
});

// ==========================================
// 6. WHAT'S YOUR SAY? COMMENT SECTION
// ==========================================
document.getElementById('comment-form').addEventListener('submit', (e) => {
  e.preventDefault();
  const name = document.getElementById('comment-name').value;
  const msg = document.getElementById('comment-input').value;
  const bubble = document.createElement('div');
  bubble.className = 'comment-bubble';
  bubble.innerHTML = `<strong>${name}:</strong> ${msg}`;
  document.getElementById('comments-list').appendChild(bubble);
  e.target.reset();
});
