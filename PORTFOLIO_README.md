# Ghagra Salem Debnath - Portfolio Website

A modern, responsive portfolio website built with React and Bootstrap showcasing projects, skills, experience, and achievements.

## 🚀 Features

- ✅ **Fully Responsive** - Works seamlessly on all devices
- ✅ **Modular Components** - Easy to maintain and update
- ✅ **Bootstrap 5** - Modern UI framework
- ✅ **Smooth Animations** - Professional transitions and effects
- ✅ **SEO Friendly** - Optimized for search engines
- ✅ **Fast Performance** - Optimized loading times

## 📁 Project Structure

```
src/
├── components/
│   ├── Navbar.js        # Navigation bar with smooth scrolling
│   ├── Hero.js          # Hero section with introduction
│   ├── About.js         # About section with achievements & interests
│   ├── Skills.js        # Skills categorized by type
│   ├── Experience.js    # Work experience and activities
│   ├── Projects.js      # Project showcase with links
│   ├── Education.js     # Educational background
│   ├── Contact.js       # Contact form and information
│   └── Footer.js        # Footer with social links
├── data/
│   └── portfolioData.js # All portfolio content (CUSTOMIZE THIS!)
├── App.js               # Main app component
├── App.css              # Custom styles
└── index.js             # Entry point
```

## 🎨 Sections Included

1. **Hero** - Introduction with name and title
2. **About** - Personal description, achievements, and interests
3. **Skills** - Programming languages, tools, and soft skills
4. **Experience** - Work experience and volunteer activities
5. **Projects** - Portfolio of coding projects
6. **Education** - Academic qualifications
7. **Contact** - Contact form and social media links
8. **Footer** - Copyright and social links

## 🛠️ How to Customize

### Step 1: Update Personal Information

Edit `src/data/portfolioData.js` and update:

- **Personal Info** - Name, email, phone, location, social links
- **About** - Your description and profile image
- **Skills** - Programming languages, tools, specializations
- **Experience** - Add your work experience and activities
- **Projects** - Add your coding projects with links and images
- **Education** - Update your academic qualifications
- **Achievements** - List your awards and accomplishments
- **Interests** - Add your hobbies and interests

### Step 2: Add Your Images

Replace placeholder images in `portfolioData.js`:
- Profile photo in the About section
- Project screenshots for each project

You can:
- Use image URLs from your GitHub repository
- Upload to a free image hosting service (Imgur, Cloudinary)
- Place images in the `public` folder and reference them

### Step 3: Update Social Links

Update your social media links in `portfolioData.js`:
```javascript
export const personalInfo = {
  // ...
  github: "https://github.com/gagradebnath",
  linkedin: "https://linkedin.com/in/your-profile", // Update this!
  // ...
};
```

## 🚀 Running the Project

### Install Dependencies
```bash
npm install
```

### Start Development Server
```bash
npm start
```

Visit `http://localhost:3000` to view your portfolio.

### Build for Production
```bash
npm run build
```

### Deploy to GitHub Pages
```bash
npm run deploy
```

## 📝 To-Do List

- [ ] Update LinkedIn URL in `portfolioData.js`
- [ ] Add your profile photo
- [ ] Add project screenshots
- [ ] Update project GitHub links
- [ ] Add resume/CV link
- [ ] Test contact form functionality
- [ ] Customize color scheme (optional)
- [ ] Add Google Analytics (optional)

## 🎨 Customizing Colors

To change the primary color scheme, update Bootstrap's primary color in your CSS files or use Bootstrap's theming options.

## 📱 Contact Form Integration

The contact form is currently set up with a basic alert. To make it functional:

1. Use **EmailJS** - Free email service for static sites
2. Use **Formspree** - Simple form backend
3. Integrate with your own backend API

## 🌟 Your Achievements Highlighted

- 🏆 Blockchain Olympiad Bangladesh Champion (2025)
- 🥇 National Winner - Best Prototype (2023)
- 🎖️ International Blockchain Olympiad - Award of Merit
- 📚 National Merit Scholarship (HSC & SSC)
- And many more!

## 📧 Contact

**Ghagra Salem Debnath**
- Email: salemdebnath@gmail.com
- Phone: +8801400450272
- GitHub: [@gagradebnath](https://github.com/gagradebnath)

## 📄 License

This project is open source and available for personal use.

---

**Built with ❤️ using React and Bootstrap**
