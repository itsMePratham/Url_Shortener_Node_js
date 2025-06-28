 
# 🔗 URL Shortener App

A simple Node.js application that allows users to shorten long URLs, track visits, and view analytics. Built using Express.js, MongoDB, and EJS.

---

## 🧠 Project Overview

This project is a basic URL shortening service similar to bit.ly or TinyURL. Users can:
- Submit a long URL to get a short version.
- Click the short URL to be redirected to the original site.
- Track how many times a short URL has been visited.
- View all URLs in a dashboard with visit counts.

---

## 🚀 Features

- URL form to submit original URLs
- Short unique ID generation
- Redirect to original URL
- Visit tracking (analytics)
- EJS-based UI for form + dashboard
- MongoDB database storage

---

## 📂 Technologies Used

- Node.js
- Express.js
- MongoDB
- Mongoose
- EJS (Embedded JavaScript templating)
- HTML/CSS

---

## ⚙️ How to Run Locally

1. Clone the repository
   ```bash
   git clone https://github.com/your-username/url-shortener.git
   cd url-shortener
   ```

2. Install dependencies
   ```bash
   npm install
   ```

3. Start MongoDB (if not already running)
   ```bash
   mongod
   ```

4. Run the app
   ```bash
   node index.js
   ```

5. Open in your browser
   ```
   http://localhost:3000
   ```

---

## 🌐 Available Routes (URLs to test)

### 📥 UI Pages

| Route                        | Method | Description                        |
|-----------------------------|--------|------------------------------------|
| `/views`                    | GET    | Form to submit a URL               |
| `/views/submitFormDetails`  | GET    | View the dashboard (short URLs)    |

### 🔗 URL Functional APIs

| Route                        | Method | Description                           |
|-----------------------------|--------|---------------------------------------|
| `/urls`                     | POST   | Submit a new URL to shorten           |
| `/urls/:shortId`            | GET    | Redirect to the original URL          |
| `/urls/analytics/:shortId`  | GET    | View visit analytics for a short URL  |

---

## 📸 Screenshots (Optional)

> You can add screenshots here using Markdown syntax:

```md
![Form Page](screenshots/form.png)
![Dashboard](screenshots/dashboard.png)
```

---

## 📁 Folder Structure

```
project/
│
├── controllers/
│   ├── urlControllers.js
│   └── ViewsControllers.js
│
├── models/
│   └── Url.js
│
├── routes/
│   ├── url.js
│   └── UIRender.js
│
├── views/
│   ├── index.ejs
│   └── dashboard.ejs
│
├── connection.js
├── index.js
└── README.md
```

---

## 📬 Contact

Made by **Pratham Sahu** — feel free to reach out via [LinkedIn](https://www.linkedin.com/in/pratham-sahu-560207231/) or GitHub!

---
