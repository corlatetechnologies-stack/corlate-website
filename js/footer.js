// ─── Path Utilities (safe re-declaration guard) ───────────────────────────────
if (typeof window._corlateUtils === 'undefined') {
  window._corlateUtils = true;
  window._isSubPage = window.location.pathname.includes('/pages/');
  window._rootPath = window._isSubPage ? '../' : '';
  window._pagePath = (file) => window._isSubPage ? file : `pages/${file}`;
  window._currentPage = window.location.pathname.split('/').pop() || 'index.html';
  window._isHomePage = window._currentPage === 'index.html' && !window._isSubPage;
  window._navTarget = (file, sectionId) => window._isHomePage ? `#${sectionId}` : window._pagePath(file);
}

const _ft_isSubPage = window._isSubPage;
const _ft_rootPath = window._rootPath;
const _ft_pagePath = window._pagePath;
const _ft_navTarget = window._navTarget;

// ─── WhatsApp Constants ───────────────────────────────────────────────────────
const whatsappHref = 'https://wa.me/27793241570?text=Hi%20Corlate%20Technologies%2C%20I%20want%20a%20free%20audit';
const whatsappIcon = `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>`;

// ─── Footer Component ─────────────────────────────────────────────────────────
function renderFooter() {
  const mount = document.getElementById('site-footer');
  if (!mount) return;

  mount.innerHTML = `
    <footer>
      <div class="ft-inner">
        <div class="ft-top">
          <div class="ft-brand">
            <img src="${_ft_rootPath}assets/images/portfolio/1corlate-logo.png" alt="Corlate Technologies" onerror="this.style.display='none'">
            <p class="ft-tagline">Modern websites, SEO, and digital marketing for South African businesses ready to grow online.</p>
            <div class="ft-socials">
              <a href="https://www.linkedin.com/company/corlate-technologies/" target="_blank" rel="noopener" class="ft-social" aria-label="LinkedIn">
                <svg width="15" height="15" fill="currentColor" viewBox="0 0 24 24"><path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-4 0v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"/><circle cx="4" cy="4" r="2"/></svg>
              </a>
              <a href="https://instagram.com/corlate.tech" target="_blank" rel="noopener" class="ft-social" aria-label="Instagram">
                <svg width="15" height="15" fill="none" stroke="currentColor" stroke-width="1.8" viewBox="0 0 24 24"><rect x="2" y="2" width="20" height="20" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="0.8" fill="currentColor" stroke="none"/></svg>
              </a>
              <a href="https://wa.me/27793241570" target="_blank" rel="noopener" class="ft-social" aria-label="WhatsApp">
                ${whatsappIcon.replace('<svg', '<svg width="15" height="15"')}
              </a>
            </div>
          </div>

          <div class="ft-col">
            <h5>Services</h5>
            <ul>
              <li><a href="${_ft_navTarget('services.html', 'services')}">Website Development</a></li>
              <li><a href="${_ft_navTarget('services.html', 'services')}">SEO Optimisation</a></li>
              <li><a href="${_ft_navTarget('services.html', 'services')}">Digital Marketing</a></li>
              <li><a href="${_ft_navTarget('contact.html', 'contact')}">Free Website Audit</a></li>
            </ul>
          </div>

          <div class="ft-col">
            <h5>Company</h5>
            <ul>
              <li><a href="${_ft_navTarget('about.html', 'about')}">About Us</a></li>
              <li><a href="${_ft_pagePath('portfolio.html')}">Portfolio</a></li>
              <li><a href="${_ft_navTarget('process.html', 'process')}">How It Works</a></li>
              <li><a href="${_ft_navTarget('testimonials.html', 'testimonials')}">Testimonials</a></li>
              <li><a href="${_ft_navTarget('contact.html', 'contact')}">Contact</a></li>
            </ul>
          </div>

          <div class="ft-col">
            <h5>Get in touch</h5>
            <div class="ft-contact-rows">
              <p class="ft-crow"><a href="mailto:info@corlate.co.za">info@corlate.co.za</a></p>
              <p class="ft-crow"><a href="https://wa.me/27793241570" target="_blank" rel="noopener">+27 79 324 1570</a></p>
              <p class="ft-crow">South Africa</p>
            </div>
            <a href="${whatsappHref}" target="_blank" rel="noopener" class="ft-wa">
              ${whatsappIcon.replace('<svg', '<svg width="14" height="14"')}
              Chat on WhatsApp
            </a>
          </div>
        </div>

        <div class="ft-bottom">
          <p class="ft-copy">&copy; ${new Date().getFullYear()} Corlate Technologies. All rights reserved.</p>
          <div class="ft-legal">
            <a href="/privacy-policy">Privacy Policy</a>
            <a href="/terms-of-service">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>

    <a href="${whatsappHref}" target="_blank" rel="noopener" class="wa-fab" title="Chat on WhatsApp" aria-label="Chat on WhatsApp">
      ${whatsappIcon.replace('<svg', '<svg width="24" height="24"')}
    </a>
  `;
}

renderFooter();
