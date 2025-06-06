# 📊 GitHub Profile Analyzer

## 🚀 Project Description

**GitHub Profile Analyzer** is a simple web application that visualizes and analyzes public GitHub profile data.  
By entering a GitHub username, users can retrieve public information and view interactive statistics and graphs about that user's repositories.

---

## ✨ Features

- Fetches real-time public profile data using the GitHub REST API
- Displays user details:
  - Avatar, full name, username, bio, location, company, website, join date
  - Public repositories, followers, following, public gists
- Visual analytics with **Chart.js**:
  - **Languages Used** – Breakdown of programming languages (doughnut chart)
  - **Repository Statistics** – Total stars, forks, and repository count (bar chart)
  - **Repository Types** – Original vs Forked repositories (doughnut chart)
  - **Repository Creation Timeline** – Number of repositories created by year (line chart)
- Smooth scroll to profile section upon search
- Modular and clean structure:
  - HTML: layout only
  - CSS: styling and responsive layout
  - JS: separated into API logic, chart rendering, and UI logic

---

## 🛠️ Technologies Used

- HTML5  
- CSS3 (Custom properties & Responsive design)  
- Vanilla JavaScript (ES6 modules)  
- GitHub REST API  
- Chart.js v3

---

## 📦 Installation & Usage

1. Clone this repository or download it as a ZIP file.
2. Project structure:
````
github-profile-analyzer/
├── index.html
├── style.css
└── scripts/
├── app.js
├── github-api.js
└── chart-manager.js
````

3. **Important**: Open `index.html` using a local development server.  
   - File URLs (`file://`) will not work due to ES module and CORS restrictions.
   - Use **Live Server** (VSCode extension) or run a simple local server:
     ```bash
     # Python 3
     python -m http.server
     ```

4. In your browser, enter a GitHub username (e.g., `torvalds`) and click **"Analyze Profile"**.

---

## 🧪 Example

### Example Username:
```text
torvalds
```

## Output:
👤 Profile card with avatar, name, username, bio, etc.

📦 Repository analytics shown in 4 interactive charts

📉 Time-based repo activity

💻 Language usage distribution

## ⚠️ API Rate Limit
The app uses unauthenticated GitHub API requests, which are limited to 60 requests per hour per IP.

You can extend this limit to 5000 requests/hour by integrating a GitHub personal access token.