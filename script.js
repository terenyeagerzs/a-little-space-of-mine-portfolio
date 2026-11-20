// Bukas/Sara ng 3-line menu sa mobile
function toggleMenu() {
  const nav = document.getElementById('navLinks');
  nav.classList.toggle('active');
}

// View full picture sa About Me
function openPic() {
  const picSrc = document.getElementById('myProfilePic').src;
  document.getElementById('modalImg').src = picSrc;
  document.getElementById('picModal').style.display = 'flex';
}

// Isara ang full picture
function closePic() {
  document.getElementById('picModal').style.display = 'none';
}







