const hamburgerBtn = document.getElementById('hamburger-btn');
const navMenu = document.getElementById('nav-menu');

if (hamburgerBtn && navMenu) {
  hamburgerBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    navMenu.classList.toggle('active');
  });
}

document.querySelectorAll('.nav-link').forEach(link => {
  link.addEventListener('click', () => {
    if (navMenu) navMenu.classList.remove('active');
  });
});

const allViews = document.querySelectorAll('.page-view');

function showView(viewId) {
  allViews.forEach(view => {
    view.style.display = 'none';
  });
  const target = document.getElementById(viewId);
  if (target) target.style.display = 'block';
}

document.querySelectorAll('.back-to-groups').forEach(btn => {
  btn.addEventListener('click', (e) => {
    e.preventDefault();
    showView('interest-view');
    const groupsSec = document.getElementById('kpop-groups');
    if (groupsSec) groupsSec.scrollIntoView({ behavior: 'smooth' });
  });
});

const openKiof = document.getElementById('open-kiof-folder');
if (openKiof) {
  openKiof.addEventListener('click', () => {
    showView('kiof-folder-view');
    document.getElementById('kiof-group-part').style.display = 'block';
    document.getElementById('kiof-bias-part').style.display = 'none';
    window.scrollTo({ top: 0, behavior: 'smooth' });
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
}

const openUnis = document.getElementById('open-unis-folder');
if (openUnis) {
  openUnis.addEventListener('click', () => {
    showView('unis-folder-view');
    document.getElementById('unis-group-part').style.display = 'block';
    document.getElementById('unis-bias-part').style.display = 'none';
    window.scrollTo({ top: 0, behavior: 'smooth' });
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
}

const openAhof = document.getElementById('open-ahof-folder');
if (openAhof) {
  openAhof.addEventListener('click', () => {
    showView('ahof-folder-view');
    document.getElementById('ahof-group-part').style.display = 'block';
    document.getElementById('ahof-bias-part').style.display = 'none';
    window.scrollTo({ top: 0, behavior: 'smooth' });
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
}

const reviewModal = document.getElementById('review-modal');
if (reviewModal) {
  document.querySelectorAll('.drama-card').forEach(card => {
    card.addEventListener('click', () => {
      document.getElementById('modal-img').src = card.getAttribute('data-poster');
      document.getElementById('modal-rating').textContent = card.getAttribute('data-rating');
      document.getElementById('modal-text').textContent = card.getAttribute('data-review');
      reviewModal.style.display = 'flex';
    });
  });

  document.getElementById('close-modal').addEventListener('click', () => {
    reviewModal.style.display = 'none';
  });

  document.getElementById('modal-say-btn').addEventListener('click', () => {
    reviewModal.style.display = 'none';
  });
}


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
    const coverEl = document.getElementById(item.getAttribute('data-cover'));

    document.querySelectorAll('.group-audio').forEach(a => a.pause());
    audio.src = item.getAttribute('data-src');
    titleEl.textContent = item.textContent.replace(/^\d+\.\s*/, '');
    if (coverEl && item.getAttribute('data-img')) {
      coverEl.src = item.getAttribute('data-img');
    }
    audio.play();
  });
});


const commentForm = document.getElementById('comment-form');
if (commentForm) {
  commentForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = document.getElementById('comment-name').value;
    const msg = document.getElementById('comment-input').value;
    const bubble = document.createElement('div');
    bubble.className = 'comment-bubble';
    bubble.innerHTML = `<strong>${name}:</strong> ${msg}`;
    document.getElementById('comments-list').appendChild(bubble);
    e.target.reset();
  });
}
