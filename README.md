# 🚀 Portfolio - Shashank Soni

A modern, responsive portfolio website showcasing my skills and projects as a MERN Stack Developer. Built with React.js and styled with Tailwind CSS, featuring a sleek dark theme with smooth animations and glassmorphism effects.

[![Live Demo](https://img.shields.io/badge/demo-live-brightgreen)](https://shashank-soni.onrender.com/)
[![React](https://img.shields.io/badge/React-18.x-blue)](https://reactjs.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.x-38bdf8)](https://tailwindcss.com/)

## 📋 Table of Contents
- [Overview](#overview)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Sections](#sections)
- [Installation](#installation)
- [Usage](#usage)
- [Project Structure](#project-structure)
- [Customization](#customization)
- [Deployment](#deployment)
- [Contact](#contact)

## 🎯 Overview

This portfolio website serves as a comprehensive showcase of my development journey, technical skills, and projects. Designed with a focus on user experience and modern web design principles, it demonstrates proficiency in frontend development and responsive design.

## ✨ Features

- **Modern Dark Theme** - Sleek gradient background with blue/purple accents
- **Fully Responsive** - Optimized for desktop, tablet, and mobile devices
- **Smooth Animations** - Typing effects, fade-ins, and interactive hover states
- **Glassmorphism Design** - Semi-transparent cards with backdrop blur effects
- **Smooth Scrolling** - Seamless navigation between sections
- **Performance Optimized** - Fast loading times and efficient rendering
- **Component-Based Architecture** - Reusable React components for maintainability

## 🛠️ Tech Stack

**Frontend:**
- React.js 18.x
- Tailwind CSS 3.x
- Lucide React (Icons)
- JavaScript (ES6+)

**Tools & Deployment:**
- Vite (Build tool)
- Git & GitHub
- Vercel/Netlify (Deployment)

## 📱 Sections

### 1. Hero Section
- Animated typing effect for role title
- Eye-catching gradient text
- Call-to-action buttons with smooth scroll
- Animated background elements

### 2. Skills Section
- Animated progress bars showing proficiency levels
- Color-coded skill categories (Frontend, Backend, Programming)
- Intersection Observer for scroll-triggered animations
- 9 core technical skills displayed

### 3. Projects Section
- Responsive grid layout (3 → 2 → 1 columns)
- Reusable ProjectCard components
- Tech stack tags with color coding
- Live demo and GitHub repository links
- 3 featured projects:
  - Weather Web Application
  - E-Commerce Website (React + LocalStorage)
  - E-Commerce MERN Application

### 4. Contact Section
- Contact information cards (Email, Phone, Location)
- Social media links (GitHub, LinkedIn, Twitter)
- Interactive hover effects
- Direct links for easy communication

## 🚀 Installation

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn

### Steps

1. **Clone the repository**
```bash
git clone https://github.com/shashanksoni815/Intro.git
cd Intro
```

2. **Install dependencies**
```bash
npm install
```

3. **Start development server**
```bash
npm run dev
```

4. **Open in browser**
```
http://localhost:5173
```

## 💻 Usage

### Development
```bash
npm run dev        # Start development server
npm run build      # Build for production
npm run preview    # Preview production build
```

### Linting
```bash
npm run lint       # Run ESLint
```

## 📂 Project Structure

```
portfolio/
├── public/
│   └── assets/
├── src/
│   ├── components/
│   │   ├── Hero.jsx
│   │   ├── SkillsSection.jsx
│   │   ├── ProjectsSection.jsx
│   │   ├── ProjectCard.jsx
│   │   └── ContactSection.jsx
│   ├── pages/
│   │   └── HomePage.jsx
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── package.json
├── tailwind.config.js
├── vite.config.js
└── README.md
```

## 🎨 Customization

### Update Personal Information

1. **Contact Details** - Edit `ContactSection.jsx`:
```javascript
const contactInfo = [
  { value: "your.email@example.com", ... },
  { value: "+91 XXXXX XXXXX", ... },
  { value: "Your City, State", ... }
]
```

2. **Social Links** - Edit `ContactSection.jsx`:
```javascript
const socialLinks = [
  { link: "https://github.com/yourusername", ... },
  { link: "https://linkedin.com/in/yourusername", ... }
]
```

3. **Projects** - Edit `ProjectsSection.jsx`:
```javascript
const projectsData = [
  {
    title: "Your Project",
    description: "Project description",
    techStack: ["Tech1", "Tech2"],
    githubLink: "your-github-link",
    liveLink: "your-live-demo"
  }
]
```

4. **Skills** - Edit `SkillsSection.jsx`:
```javascript
const skills = [
  { name: "Your Skill", level: 85, category: "frontend" }
]
```

### Theme Customization

Modify colors in `tailwind.config.js` or update gradient classes in components:
```javascript
// Change background gradient
className="bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900"
```

## 🌐 Deployment

### Deploy to Vercel

1. Push code to GitHub
2. Import repository on [Vercel](https://vercel.com)
3. Configure build settings (auto-detected for Vite)
4. Deploy

### Deploy to Netlify

1. Push code to GitHub
2. Connect repository on [Netlify](https://netlify.com)
3. Build command: `npm run build`
4. Publish directory: `dist`
5. Deploy

## 📧 Contact

**Shashank Soni**

- Email: [shashanksoni815@gmail.com](mailto:shashanksoni815@gmail.com)
- GitHub: [@shashanksoni815](https://github.com/shashanksoni815)
- LinkedIn: [@shashank-soni815](https://linkedin.com/in/shashank-soni815)
- Location: Indore, Madhya Pradesh, India

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🙏 Acknowledgments

- Design inspiration from modern portfolio trends
- Icons by [Lucide React](https://lucide.dev/)
- Built with [React](https://reactjs.org/) and [Tailwind CSS](https://tailwindcss.com/)

---

⭐ **If you found this portfolio useful, please consider giving it a star!**

Made with ❤️ by Shashank Soni
