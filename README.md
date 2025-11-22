# Shivam Shrivastava - Personal Portfolio

A modern, space-themed single-page portfolio website showcasing backend engineering expertise in Python and iGaming platforms.

## 🌟 Features

- **Outer Space Theme**: Animated stars, nebula gradients, and cosmic atmosphere
- **Glassmorphism Design**: Modern glass cards with backdrop blur effects
- **Smooth Animations**: Scroll-triggered reveals and micro-interactions
- **Fully Responsive**: Mobile-first design that works on all devices
- **Zero Dependencies**: Built with vanilla HTML, CSS, and JavaScript
- **SEO Optimized**: Semantic HTML with proper meta tags
- **Accessible**: WCAG-compliant with keyboard navigation support

## 🚀 Quick Start

### Local Development

Simply open `index.html` in your web browser:

```bash
# Using default browser
start index.html  # Windows
open index.html   # macOS
xdg-open index.html  # Linux
```

### Using a Local Server (Recommended)

For the best development experience, use a local server:

**Option 1: Python**
```bash
# Python 3
python -m http.server 8000

# Visit http://localhost:8000
```

**Option 2: Node.js**
```bash
# Install globally
npm install -g http-server

# Run
http-server

# Visit http://localhost:8080
```

**Option 3: VS Code**
- Install the "Live Server" extension
- Right-click `index.html` and select "Open with Live Server"

## 📦 Deployment

This is a static website with no build process required. Simply upload the files to any static hosting service.

### GitHub Pages

1. Create a new repository on GitHub
2. Push your code:
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO.git
   git push -u origin main
   ```
3. Go to repository Settings → Pages
4. Select `main` branch as source
5. Your site will be live at `https://YOUR_USERNAME.github.io/YOUR_REPO/`

### Netlify

**Option 1: Drag & Drop**
1. Visit [Netlify Drop](https://app.netlify.com/drop)
2. Drag the entire portfolio folder
3. Your site is live instantly!

**Option 2: Git Integration**
1. Push code to GitHub/GitLab
2. Connect repository to Netlify
3. Deploy settings:
   - Build command: (leave empty)
   - Publish directory: `/`

### Vercel

1. Install Vercel CLI: `npm i -g vercel`
2. Run `vercel` in the project directory
3. Follow the prompts
4. Your site is deployed!

Alternatively, use the Vercel web interface to connect your Git repository.

## 🛠️ Technology Stack

- **HTML5**: Semantic markup with accessibility in mind
- **CSS3**: Custom properties, animations, flexbox, and grid
- **JavaScript (ES6+)**: Intersection Observer, smooth scrolling, and micro-interactions
- **Fonts**: Google Fonts (Inter, JetBrains Mono)
- **Icons**: Lucide Icons (via CDN)

## 📁 Project Structure

```
portfolio/
├── index.html       # Main HTML file with all sections
├── styles.css       # Complete styling with space theme
├── script.js        # Interactive features and animations
└── README.md        # This file
```

## 🎨 Customization

### Colors

Edit CSS custom properties in `styles.css`:

```css
:root {
    --accent-primary: #6366f1;
    --accent-secondary: #a855f7;
    --nebula-purple: #8b5cf6;
    /* Modify other colors as needed */
}
```

### Content

Edit the content directly in `index.html`:
- Personal information in the Hero section
- About text in the About section
- Skills, experience, and projects in their respective sections
- Contact information in the Contact section

### Animations

Adjust animation speeds in `styles.css`:

```css
:root {
    --transition-fast: 0.2s ease;
    --transition-normal: 0.3s ease;
    --transition-slow: 0.5s ease;
}
```

## 🌐 Browser Support

- ✅ Chrome/Edge (latest)
- ✅ Firefox (latest)
- ✅ Safari (latest)
- ✅ Mobile browsers (iOS Safari, Chrome Mobile)

## ♿ Accessibility

- Semantic HTML5 elements
- ARIA labels for icon-only buttons
- Keyboard navigation support
- Proper heading hierarchy
- Focus visible states
- Respects `prefers-reduced-motion`

## 📱 Responsive Breakpoints

- Desktop: 1200px+
- Tablet: 768px - 1199px
- Mobile: < 768px

## 🎯 Performance

- No framework overhead
- Minimal external dependencies (only fonts and icons)
- Optimized animations with CSS transforms
- Throttled scroll events
- Lazy loading with Intersection Observer

## 📄 License

This portfolio is personal property. Feel free to use the structure and code as inspiration for your own portfolio, but please don't use it as-is with someone else's information.

## 🤝 Contact

- **Email**: shivamshrivastava470@gmail.com
- **LinkedIn**: [linkedin.com/in/shivam-shrivastava-355776160](https://in.linkedin.com/in/shivam-shrivastava-355776160)
- **GitHub**: [github.com/shree7796](https://github.com/shree7796)
- **Location**: Indore, India

---

**Built with ❤️ and cosmic energy by Shivam Shrivastava**
