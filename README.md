# Corlate Technologies — Official Website

[![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=flat&logo=html5&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/HTML)
[![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=flat&logo=css3&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/CSS)
[![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat&logo=javascript&logoColor=black)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
[![License: MIT](https://img.shields.io/badge/License-MIT-green.svg)](LICENSE)

The official corporate website for **Corlate Technologies** — a digital marketing and web development agency based in South Africa. Built with vanilla HTML, CSS, and JavaScript; no frameworks or build tools required.

---

## Table of Contents

- [Features](#features)
- [Project Structure](#project-structure)
- [Getting Started](#getting-started)
- [Customization](#customization)
- [Technology Stack](#technology-stack)
- [Browser Support](#browser-support)
- [Contributing](#contributing)
- [Contact](#contact)

---

## Features

- Responsive, mobile-first design with a dark theme
- Smooth CSS animations and JavaScript-driven interactions
- Multi-page layout with consistent navigation and footer
- Contact form with client-side validation
- WhatsApp click-to-chat integration
- Services showcase with flip-card animation
- Client testimonials section
- 4-step process workflow
- SEO-friendly semantic markup
- Zero external runtime dependencies

---

## Project Structure

```
corlate/
├── index.html              # Homepage — hero, services, stats, CTA
├── package.json            # Project metadata & npm scripts
├── README.md               # Project documentation
├── .gitignore
├── assets/
│   ├── images/             # Logo, team photos, and general imagery
│   └── videos/             # Hero/background video assets
├── css/
│   └── styles.css          # All styling — variables, layout, animations
├── js/
│   └── script.js           # All interactivity — menu, forms, animations
└── pages/
    ├── about.html          # Company story and team showcase
    ├── contact.html        # Contact form and business details
    ├── process.html        # How-we-work workflow (4 steps)
    ├── services.html       # Service offerings with flip cards
    └── testimonials.html   # Client success stories and ratings
```

---

## Getting Started

### Prerequisites

No build tools or package managers are required to run the project. A local HTTP server is recommended to avoid browser restrictions on local file access.

### Installation

```bash
git clone https://github.com/corlatetechnologies-stack/corlate-website.git
cd corlate-website
```

### Running Locally

```bash
# Option 1 — npm script (requires Node.js)
npm start

# Option 2 — Python built-in server
python3 -m http.server 8000
```

Then open [http://localhost:8000](http://localhost:8000) in your browser.

---

## Customization

### Contact Information

Update the following values across all pages:

| Field | Current Value |
|---|---|
| Email | `info@corlate.co.za` |
| Phone / WhatsApp | `+27 79 324 1570` |
| Location | South Africa (Remote-First) |

### Brand Colors

All color tokens are defined as CSS custom properties at the top of `css/styles.css`:

```css
:root {
  --teal:       #0d6e78;   /* Primary brand color  */
  --gold:       #f5b319;   /* Accent / CTA color   */
  --sky:        #5bd4e0;   /* Light accent         */
  --bg:         #060d0e;   /* Dark background      */
  --text:       #e8f4f5;   /* Body text            */
  --text-muted: #7ab5bc;   /* Secondary text       */
}
```

### Responsive Breakpoints

| Breakpoint | Target |
|---|---|
| ≥ 1200px | Desktop |
| 768px – 1199px | Tablet |
| ≤ 640px | Mobile |

### Media Assets

| Asset | Path |
|---|---|
| Company logo | `assets/images/logo.jpg` |
| Team photo | `assets/images/team.jpg` |
| Hero video | `assets/videos/hero.mp4` |

---

## Technology Stack

| Technology | Purpose |
|---|---|
| HTML5 | Semantic page structure |
| CSS3 (Grid / Flexbox) | Layout, theming, and animations |
| Vanilla JavaScript | Interactivity and form handling |
| Google Fonts — Poppins | Typography |

---

## Browser Support

| Browser | Support |
|---|---|
| Chrome / Edge (latest) | Full |
| Firefox (latest) | Full |
| Safari (latest) | Full |
| iOS Safari / Chrome Android | Full |

---

## Contributing

This is the official Corlate Technologies website repository. Contributions are managed internally. If you have identified a bug or have a suggestion, please open an issue or contact the development team directly.

### Developer Notes

- All styling lives in a single file: `css/styles.css`
- Navigation paths in `/pages` use `../` to reference the root directory
- JavaScript helper functions (`toggleMenu`, `toggleFlip`, etc.) are globally scoped
- Image tags include `onerror` fallbacks for missing assets

---

## License

Distributed under the **MIT License**. See [LICENSE](LICENSE) for details.

---

## Contact

**Corlate Technologies**

- Website: [www.corlate.co.za](https://www.corlate.co.za)
- Email: [info@corlate.co.za](mailto:info@corlate.co.za)
- WhatsApp: +27 79 324 1570
- Location: South Africa (Remote-First)

### Colors
Edit CSS variables in `<style>` section of `index.html`:
```css
:root {
  --teal: #0d6e78;
  --gold: #f5b319;
  --sky: #5bd4e0;
  /* ... */
}
```

## Technologies

- HTML5
- CSS3 (Grid, Flexbox, Animations)
- Vanilla JavaScript
- Google Fonts (Syne, DM Sans)

## Browser Support

- Chrome/Edge 90+
- Firefox 88+
- Safari 14+
- Mobile browsers

## License

MIT License - see LICENSE file for details

## Author

Corlate Technologies
