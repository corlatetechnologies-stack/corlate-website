// Video autoplay handler
const videoEl = document.querySelector('.hero-video');
if (videoEl) {
  const playPromise = videoEl.play();
  if (playPromise !== undefined) {
    playPromise.catch(error => {
      console.log('Autoplay failed:', error);
      // Add play button overlay or fallback for mobile
      if (window.innerWidth <= 768) {
        videoEl.style.opacity = '0.08';
      }
    });
  }
}

// Nav scroll
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
  navbar.classList.toggle('scrolled', window.scrollY > 40);
});

// Reveal on scroll
const reveals = document.querySelectorAll('.reveal');
const io = new IntersectionObserver((entries) => {
  entries.forEach(e => { if(e.isIntersecting) { e.target.classList.add('visible'); io.unobserve(e.target); } });
}, { threshold: 0.1 });
reveals.forEach(el => io.observe(el));

// Form submit
function handleSubmit(btn) {
  btn.textContent = 'Sending…';
  btn.disabled = true;
  setTimeout(() => {
    btn.textContent = '✓ Message Sent!';
    btn.style.background = '#1e8a5a';
    setTimeout(() => { btn.textContent = 'Send Message →'; btn.disabled = false; btn.style.background = ''; }, 3000);
  }, 1400);
}

// Mobile menu
function toggleMenu() {
  const hamburger = document.querySelector('.hamburger');
  const mobileMenu = document.getElementById('mobileMenu');
  hamburger.classList.toggle('active');
  mobileMenu.classList.toggle('active');
}

// Team video play
function playTeamVideo() {
  const poster = document.querySelector('.tvp-poster');
  const video = document.getElementById('teamVideo');
  if (poster && video) {
    poster.classList.add('hidden');
    video.style.display = 'block';
    video.play();
  }
}

// Flip toggle for touch (mobile tap)
function toggleFlip(el) {
  if (window.matchMedia('(hover: none)').matches) {
    el.classList.toggle('flipped');
  }
}

// Drag-to-scroll for tracks
function makeDraggable(trackId) {
  const el = document.getElementById(trackId);
  if (!el) return;
  let isDown = false, startX, scrollLeft;
  el.addEventListener('mousedown', e => {
    isDown = true; startX = e.pageX - el.offsetLeft;
    scrollLeft = el.scrollLeft;
  });
  el.addEventListener('mouseleave', () => isDown = false);
  el.addEventListener('mouseup', () => isDown = false);
  el.addEventListener('mousemove', e => {
    if (!isDown) return;
    e.preventDefault();
    const x = e.pageX - el.offsetLeft;
    el.scrollLeft = scrollLeft - (x - startX) * 1.5;
  });
}
makeDraggable('servicesTrack');
makeDraggable('aboutTrack');

// Scroll by card width
function nudge(trackId, dir) {
  const el = document.getElementById(trackId);
  const cardWidth = el.querySelector('div').offsetWidth + 24;
  el.scrollBy({ left: dir * cardWidth, behavior: 'smooth' });
}

// Dot navigation
function scrollToCard(trackId, dotsId, index) {
  const el = document.getElementById(trackId);
  const cardWidth = el.querySelector('div').offsetWidth + 24;
  el.scrollTo({ left: index * cardWidth, behavior: 'smooth' });
  document.querySelectorAll(`#${dotsId} .scroll-dot`).forEach((d,i) => {
    d.classList.toggle('active', i === index);
  });
}

// Sync dots to scroll position
function syncDots(trackId, dotsId) {
  const el = document.getElementById(trackId);
  el.addEventListener('scroll', () => {
    const cardWidth = el.querySelector('div').offsetWidth + 24;
    const index = Math.round(el.scrollLeft / cardWidth);
    document.querySelectorAll(`#${dotsId} .scroll-dot`).forEach((d,i) => {
      d.classList.toggle('active', i === index);
    });
  });
}
syncDots('servicesTrack', 'servicesDots');
syncDots('aboutTrack', 'aboutDots');
