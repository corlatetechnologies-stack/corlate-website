// ─── Path Utilities ───────────────────────────────────────────────────────────
const isSubPage = window.location.pathname.includes('/pages/');
const rootPath = isSubPage ? '../' : '';
const pagePath = (file) => isSubPage ? file : `pages/${file}`;
const currentPage = window.location.pathname.split('/').pop() || 'index.html';
const isHomePage = currentPage === 'index.html' && !isSubPage;

function navTarget(file, sectionId) {
  return isHomePage ? `#${sectionId}` : pagePath(file);
}

function homeTarget(sectionId = 'hero') {
  return isHomePage ? `#${sectionId}` : `${rootPath}index.html#${sectionId}`;
}

function navLink(file) {
  return currentPage === file ? ' aria-current="page"' : '';
}

// ─── Navbar Component ─────────────────────────────────────────────────────────
function renderNavbar() {
  const mount = document.getElementById('site-nav');
  if (!mount) return;

  mount.innerHTML = `
    <nav id="navbar">
      <a class="nav-logo" href="${rootPath}index.html">
        <img src="${rootPath}assets/images/portfolio/1corlate-logo.png" alt="Corlate Logo" onerror="this.style.display='none'">
      </a>
      <ul class="nav-links">
        <li><a href="${homeTarget()}"${navLink('index.html')}>Home</a></li>
        <li><a href="${navTarget('services.html', 'services')}"${navLink('services.html')}>Services</a></li>
        <li><a href="${pagePath('portfolio.html')}"${navLink('portfolio.html')}>Portfolio</a></li>
        <li><a href="${navTarget('about.html', 'about')}"${navLink('about.html')}>About</a></li>
        <li><a href="${navTarget('process.html', 'process')}"${navLink('process.html')}>Process</a></li>
        <li><a href="${navTarget('testimonials.html', 'testimonials')}"${navLink('testimonials.html')}>Testimonials</a></li>
        <li><a href="${navTarget('contact.html', 'contact')}"${navLink('contact.html')}>Contact</a></li>
      </ul>
      <a href="${navTarget('contact.html', 'contact')}" class="nav-cta">Free Audit</a>
      <div class="hamburger" onclick="toggleMenu()" role="button" tabindex="0" aria-label="Toggle navigation" aria-expanded="false" aria-controls="mobileMenu" onkeydown="if (event.key === 'Enter' || event.key === ' ') { event.preventDefault(); toggleMenu(); }">
        <span></span><span></span><span></span>
      </div>
      <div class="mobile-menu" id="mobileMenu" aria-hidden="true">
        <ul class="mobile-links">
          <li><a href="${homeTarget()}" onclick="toggleMenu()">Home</a></li>
          <li><a href="${navTarget('services.html', 'services')}" onclick="toggleMenu()">Services</a></li>
          <li><a href="${pagePath('portfolio.html')}" onclick="toggleMenu()">Portfolio</a></li>
          <li><a href="${navTarget('about.html', 'about')}" onclick="toggleMenu()">About</a></li>
          <li><a href="${navTarget('process.html', 'process')}" onclick="toggleMenu()">Process</a></li>
          <li><a href="${navTarget('testimonials.html', 'testimonials')}" onclick="toggleMenu()">Testimonials</a></li>
          <li><a href="${navTarget('contact.html', 'contact')}" onclick="toggleMenu()">Contact</a></li>
          <li><a href="${navTarget('contact.html', 'contact')}" class="mobile-cta" onclick="toggleMenu()">Free Audit</a></li>
        </ul>
      </div>
    </nav>
  `;
}

renderNavbar();
