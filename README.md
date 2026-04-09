# Professional Portfolio Website 🚀

A modern, responsive portfolio website built with HTML5, CSS3, and JavaScript. Featuring a dark theme with gradient backgrounds, smooth animations, and professional design.

## 📁 File Structure

```
MyWeb/
├── index.html          # Main page (Home, About, Contact)
├── projects.html       # Projects showcase with video demos
├── style.css           # Complete styling (1000+ lines)
├── script.js           # Interactive features & animations
└── [Your Images]       # Your profile photo and project images
```

## 🎨 Features

✨ **Modern Design**
- Dark theme with vibrant gradients
- Smooth animations and transitions
- Glass-morphism effects
- Responsive grid layouts

🎯 **Responsive**
- Mobile-first design
- Works on all devices (480px - 4K)
- Hamburger menu on mobile
- Touch-friendly buttons

⚙️ **Interactive**
- Smooth scrolling navigation
- Active nav link tracking
- Contact form with validation
- Button ripple effects
- "Go to Top" button
- Hover animations on projects

📱 **SEO & Performance**
- Semantic HTML structure
- Fast loading with optimizations
- Clean, maintainable code

## 🛠️ How to Customize

### 1. **Update Your Name**
Edit `index.html` and replace:
- `<span class="logo-text">Your Name</span>` → Your actual name
- `<span id="name-placeholder">Your Name</span>` → Your name

### 2. **Add Your Profile Photo**
- Replace `https://via.placeholder.com/400x400/1a1a1a/ff6b5b?text=Profile+Photo` in the `<img>` tag
- Use your own image path: `src="your-profile-photo.jpg"`

### 3. **Update About Section**
In `index.html`, modify:
```html
<p>I started my software journey from passion...</p>
```
Replace with your own story.

### 4. **Update Statistics**
Change the numbers in the stats grid:
```html
<span class="stat-number">120 <span class="plus">+</span></span>
<span class="stat-label">Completed Projects</span>
```

### 5. **Add Your Projects**
In `projects.html`, update each project card:
```html
<div class="project-card">
    <div class="project-image">
        <img src="your-project-image.jpg" alt="Project Name">
        <div class="project-overlay">
            <a href="YOUR_GITHUB_LINK" class="project-link" target="_blank">
                <i class="fab fa-github"></i> GitHub
            </a>
            <a href="YOUR_LIVE_DEMO_LINK" class="project-link" target="_blank">
                <i class="fas fa-external-link-alt"></i> Live
            </a>
        </div>
    </div>
    <div class="project-info">
        <h3>Your Project Title</h3>
        <p>Your project description</p>
        <div class="project-tech">
            <span class="tech-tag">React</span>
            <span class="tech-tag">Node.js</span>
        </div>
    </div>
</div>
```

### 6. **Add Video Demos**
Replace YouTube embed links in `projects.html`:
```html
<iframe src="https://www.youtube.com/embed/YOUR_VIDEO_ID" ...</iframe>
```

### 7. **Update Social Links**
In `index.html`, modify the contact section:
```html
<a href="YOUR_GITHUB_URL" class="social-link">
    <i class="fab fa-github"></i>
</a>
```

### 8. **Customize Colors (Optional)**
Edit `style.css` and modify the CSS variables at the top:
```css
:root {
    --primary-color: #ff6b5b;      /* Main color (orange-red) */
    --secondary-color: #00c4a7;    /* Accent color (teal) */
    --text-light: #ffffff;
    --text-dark: #0f2027;
}
```

### 9. **Update Footer**
Change the copyright year and name in footer of both HTML files.

## 🚀 Deployment

### Host on GitHub Pages
1. Push to GitHub
2. Go to Settings → Pages
3. Select branch and click Save
4. Your site will be live at `username.github.io`

### Host on Vercel/Netlify
Simply upload the folder or connect your GitHub repo for automatic deployments.

### Self-hosted
Copy all files to your web server.

## 📋 Sections

### 1. **Hero Section**
- Welcome message
- Call-to-action buttons
- Animated profile image
- Skills showcase

### 2. **Experience Timeline**
- Website Development
- App Development
- Backend & Hosting

### 3. **About Section**
- Your story/bio
- Statistics (projects completed, satisfaction rate, years of experience)

### 4. **Contact Section**
- Contact form
- Social media links
- Easy reach-out

### 5. **Projects Page** (projects.html)
- Project cards with images
- GitHub & live demo links
- Technology tags
- Video demos section with YouTube embeds

## 🎯 Best Practices

✅ **Use high-quality images** (compress them first)
✅ **Update all placeholder links** with real URLs
✅ **Keep project descriptions brief** (100-150 chars)
✅ **Add meaningful alt text** to images
✅ **Test on mobile** before deploying
✅ **Update regularly** with new projects

## 📊 SEO Tips

- Update page titles in `<title>` tags
- Add descriptive meta descriptions
- Use proper heading hierarchy (H1, H2, H3)
- Add alt text to all images
- Use semantic HTML tags

## 🐛 Troubleshooting

**Images not showing?**
- Check file paths are correct
- Use absolute URLs for external images

**Styles not working?**
- Verify style.css is linked in HTML
- Clear browser cache (Ctrl+Shift+Del / Cmd+Shift+Del)

**Navigation not responsive?**
- Check if script.js is loaded
- Open browser console to check for errors

## 📞 Support

For issues or questions about the design:
1. Check the console for JavaScript errors (F12)
2. Verify all files are in the correct directory
3. Ensure image paths are correct

## 📝 Notes

- All fonts are loaded from Google Fonts (Lexend)
- Icons from Font Awesome
- CSS Grid and Flexbox for layouts
- Mobile-first responsive design
- No external dependencies (except fonts & icons)

Happy building! 🎉

---

**Color Palette:**
- Primary: `#ff6b5b` (Coral Red)
- Secondary: `#00c4a7` (Teal)
- Background: Gradient (Dark Blue to Navy)
- Text: White on dark backgrounds
