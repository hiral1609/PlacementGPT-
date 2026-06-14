<div align="center">

# 🎓 PlacementGPT
**Your AI-Powered Virtual Placement Mentor**

[![Deploy static content to Pages](https://github.com/hiral1609/PlacementGPT-/actions/workflows/static.yml/badge.svg)](https://github.com/hiral1609/PlacementGPT-/actions/workflows/static.yml)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)
[![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=flat&logo=html5&logoColor=white)](https://developer.mozilla.org/en-US/docs/Glossary/HTML5)
[![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=flat&logo=css3&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/CSS)
[![JavaScript](https://img.shields.io/badge/JavaScript-323330?style=flat&logo=javascript&logoColor=F7DF1E)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)

</div>

<br>

## 📌 Problem Statement
Engineering students often possess strong theoretical knowledge but struggle to articulate their thoughts confidently during live technical interviews. Traditional preparation relies heavily on static resources (YouTube, PDFs) that cannot dynamically evaluate a student's answer or correct their mistakes. Professional 1-on-1 human mock interviews are extremely expensive and often inaccessible.

## 🚀 Proposed Solution
**PlacementGPT** bridges the gap between academic theory and industry readiness by providing an interactive, zero-cost environment for technical interview practice. Students select their target domain, and the integrated Generative AI conducts a dynamic mock interview, evaluating their typed answers in real-time and providing actionable feedback.

---

## ✨ Features
- **Serverless Architecture:** Completely frontend-driven. Uses `LocalStorage` for session management and user authentication, eliminating backend hosting costs.
- **Glassmorphism UI:** A highly aesthetic, modern, and fully responsive user interface built with Vanilla CSS3.
- **AI Integration:** Connects directly to Large Language Model (LLM) APIs to generate dynamic, domain-specific interview questions.
- **Real-Time Evaluation:** Instantly parses user answers and provides a score out of 10 along with constructive feedback.
- **Automated CI/CD:** Global deployment pipeline set up using GitHub Actions and GitHub Pages.

---

## 🛠️ Technology Stack
- **Frontend Presentation:** HTML5, CSS3 (Glassmorphism, Flexbox/Grid)
- **Client-Side Logic:** Vanilla JavaScript (ES6, DOM Manipulation)
- **Data Persistence:** HTML5 Web Storage API (`LocalStorage`)
- **Intelligence Layer:** Generative AI REST APIs (`fetch()` API integration)
- **DevOps & Automation:** Git, GitHub Actions, GitHub Pages

---

## 📂 Folder Structure
```text
PlacementGPT/
├── .github/
│   └── workflows/
│       └── static.yml       # CI/CD Pipeline Configuration
├── css/
│   └── style.css            # Global UI and Glassmorphism styling
├── js/
│   ├── app.js               # LocalStorage authentication logic
│   └── dashboard.js         # API Fetch and DOM manipulation logic
├── index.html               # The Landing Page
├── login.html               # Registration and Authentication
├── dashboard.html           # Main Mock Interview Interface
└── README.md                # Project Documentation
```

---

## ⚙️ Installation & Local Setup
Because this is a serverless application, no heavy backend installation is required.
1. Clone the repository:
   ```bash
   git clone https://github.com/hiral1609/PlacementGPT-.git
   ```
2. Navigate to the project directory:
   ```bash
   cd PlacementGPT-
   ```
3. Open `index.html` directly in any modern web browser (Chrome, Edge, Safari) or use the VS Code Live Server extension for hot-reloading.

---

## 🌐 Live Deployment
The project is automatically deployed via GitHub Actions and is live at:  
👉 **[PlacementGPT Live Portal](https://hiral1609.github.io/PlacementGPT-/)**

---

## 👨‍💻 Team Members
*Developed for partial fulfillment of the requirement for the award of the degree of Bachelor of Technology.*
- **Arham Mehta** (0827IT231031)
- **Divyanshu Patil** (0827IT231044)
- **Hariom Patidar** (0827IT231049)
- **Hiral Shah** (0827IT231056)

**Guided By:** Dr. Pawan Makhija  
**Institution:** Acropolis Institute of Technology & Research, Indore (M.P.)
