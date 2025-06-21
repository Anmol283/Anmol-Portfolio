<h1 align="center">🌟 My Portfolio</h1>
<h5 align="center"><i>Showcasing my journey, one project at a time.</i></h5>
<br>
<p align="center">
  <img src="https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExNG81cXpxaWcxb2t1bWdvdHUxdTA5engxajd6NWx5ZnAyOXI5c3Z5OCZlcD12MV9naWZzX3NlYXJjaCZjdD1n/8m7nAJTYvzNUh54HQm/giphy.gif" width="250"/>
</p>

---

## 📖 Overview

This is my personal portfolio, a modern and dynamic web application built with Next.js and Tailwind CSS. It’s designed to highlight my skills, projects, and achievements as a developer. With an interactive project gallery and a sleek dark theme, this portfolio delivers a seamless and engaging user experience across all devices.

---

## 📸 Sneak Peek

<p align="center">
  <img src="https://github.com/user-attachments/assets/a7064f5b-81cf-45c8-98da-318454e80398" alt="Homepage Screenshot" width="45%" />
  &nbsp;
  <img src="https://github.com/user-attachments/assets/64278f17-8426-4400-a1e4-7cc9bfcd198c" alt="Profile Page Screenshot" width="45%" />
</p>


---
## ✨ Features

### 🏠 Home Section
- **Welcoming Introduction**: A vibrant landing page introducing my journey.
- **Call-to-Action**: Links to explore other sections like Projects and Contact Me.

### ℹ️ About Section
- **Personal Story**: Insights into my background, passions, and goals.
- **Professional Overview**: Highlights of my skills and experience.

### 🛤️ Journey (Tech Stack)
- **Tech Evolution**: A timeline of technologies I’ve learned and mastered.
- **Skill Showcase**: Visual representation of my tech stack proficiency.

### 🛠️ Stack Utilisation
- **Practical Applications**: Examples of how I’ve used my tech stack in projects.
- **Tool Insights**: Details on frameworks, libraries, and tools I leverage.

### 📂 Projects Section
- **Project Listings**: Detailed showcase of my work with descriptions.
- **Live View**: Links to deployed projects for real-time interaction.
- **Source Code**: Access to GitHub repositories for code review.
- **Responsive Design**: Project previews optimized for all devices.

### 🏆 Achievements Section
- **Milestones**: Key accomplishments, certifications, and awards.
- **Professional Growth**: Highlights of contributions to the tech community.

### 📬 Contact Me Section
- **Direct Communication**: Form or links to reach out via email or social media.
- **Social Links**: Connect with me on GitHub, LinkedIn, and other platforms.

### 🎨 Modern UI/UX
- **Sleek Dark Theme**: Navy blue and black gradient for a professional look.
- **Responsive Design**: Seamless experience on desktop, tablet, and mobile.
- **Subtle Animations**: Smooth transitions for a polished feel.
- **Accessibility**: Built with WCAG guidelines in mind.

---

## 🧱 Technical Implementation

Here are the main technologies and tools used to build this portfolio:

| Category         | Technologies                                                                                                  |
|------------------|---------------------------------------------------------------------------------------------------------------|
| **Framework**     | ![Next.js](https://img.shields.io/badge/Next.js-000?style=flat-square&logo=nextdotjs&logoColor=white)       |
| **Styling**       | ![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-06B6D4?style=flat-square&logo=tailwindcss&logoColor=white)  ![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=flat-square&logo=css3&logoColor=white) |
| **Language**      | ![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=flat-square&logo=typescript&logoColor=white) |
| **Animations**    | ![Framer Motion](https://img.shields.io/badge/Framer_Motion-0055FF?style=flat-square&logo=framer&logoColor=white) |
| **Icons**         | ![Lucide React](https://img.shields.io/badge/Lucide_React-000?style=flat-square&logo=react&logoColor=white) |
| **Email Service** | ![EmailJS](https://img.shields.io/badge/EmailJS-4A90E2?style=flat-square&logo=gmail&logoColor=white)        |
| **Deployment**    | ![Vercel](https://img.shields.io/badge/Vercel-000000?style=flat-square&logo=vercel&logoColor=white)         |


---

## 📁 Directory Structure

```
ANMOL-PORTFOLIO/
└── my-app/
    ├── .next/                        # Next.js build output
    ├── app/                          # App directory for routing and layout
    │   ├── globals.css               # Global styles
    │   ├── layout.tsx                # Root layout component
    │   └── page.tsx                  # Homepage entry
    ├── components/                   # Reusable UI sections/components
    │   ├── about.tsx                 # About section
    │   ├── achievements.tsx          # Achievements section
    │   ├── contact.tsx               # Contact section
    │   ├── home.tsx                  # Home/Landing section
    │   ├── journey.tsx               # Tech Stack / Journey section
    │   ├── navbar.tsx                # Navigation bar
    │   ├── progress.tsx              # Progress / skills component
    │   ├── projects.tsx              # Projects section
    │   └── SectionBackground.tsx     # Section background visuals
    ├── public/                       # Static files like images or favicon
    ├── .env.local                    # Local environment variables
    ├── .eslintrc.json                # ESLint configuration
    ├── .gitignore                    # Git ignored files list
    ├── next-env.d.ts                 # TypeScript Next.js env types
    ├── next.config.js                # Next.js config file
    └── package.json                  # Project metadata and dependencies
```
---
## 🛠️ Installation

1. **Clone the repository**

```
git clone https://github.com/Anmol283/Anmol-Portfolio
cd my-app
```

2. **Install dependencies**

```
npm install
```

3. **Set up environment variables**

Create a `.env.local` file and fill in:

```
NEXT_PUBLIC_EMAILJS_SERVICE_ID=<YOUR_KEY>
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=<YOUR_KEY>
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=<YOUR_KEY>
```

4. **Run the development server**

```
npm run dev
```

5. **Open your browser**

Navigate to [http://localhost:3000](http://localhost:3000)

---

### 🧪 Testing

Run tests using:

```
npm run test
```

This will execute all unit and integration tests to ensure the application is functioning correctly.

---
## 📄 License

This project is licensed under the [MIT License](LICENSE).

---

## 🙋‍♀️ Acknowledgements

Big thanks to the awesome tools, libraries, and platforms that made this portfolio possible:

- [Next.js](https://nextjs.org/) – The React framework for production
- [Tailwind CSS](https://tailwindcss.com/) – Utility-first CSS framework for styling
- [EmailJS](https://www.emailjs.com/) – Send emails directly from the frontend
- [Lucide React](https://lucide.dev/) – Beautiful, consistent icons as React components
- [Framer Motion](https://www.framer.com/motion/) – Animation library for React
- [TypeScript](https://www.typescriptlang.org/) – Strongly typed JavaScript
- [ESLint](https://eslint.org/) – Linting for cleaner, consistent code
- [Shields.io](https://shields.io/) – For generating badges in the Tech Stack section

---
## ⭐ Support

If you like this project, consider giving it a ⭐ on GitHub — it helps others discover it too and keeps me motivated to improve and add more features!

> Built with ❤️ by Anmol. Let’s connect and create something extraordinary! 🌍



