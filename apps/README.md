# 🚀 PageSpeed Analyzer

A simple Node.js application that uses the **Google PageSpeed Insights API** to analyze a website's performance, save results in a JSON file, and display the results using a Bootstrap-styled interface.

---

## 🌟 Features

- 📩 Submit any URL to analyze
- ⚙️ Uses Google PageSpeed Insights API (mobile strategy)
- 💾 Saves result in `results/` folder as a timestamped JSON file
- 📊 Displays score and key performance metrics with Bootstrap styling

---

## 📸 Demo

![screenshot](https://via.placeholder.com/800x400.png?text=PageSpeed+Analyzer+UI) <!-- Optional: Replace with actual screenshot -->

---

## 🧑‍💻 Technologies Used

- Node.js
- Express.js
- EJS templating engine
- Bootstrap 5
- node-fetch
- dotenv

---

## 🔑 Requirements

- Node.js v14+
- Google PageSpeed Insights API key

---

## 🛠️ Setup Instructions

1. **Clone the repository:**

   ```bash
   git clone https://github.com/your-username/pagespeed-analyzer.git
   cd pagespeed-analyzer
   ```

2. **Install dependencies:**

   ```bash
   npm install
   ```

3. **Create a `.env` file:**

   ```bash
   touch .env
   ```

   Add your API key:

   ```
   PAGESPEED_API_KEY=your_pagespeed_api_key_here
   ```

   You can get a free API key from [Google PageSpeed API Docs](https://developers.google.com/speed/docs/insights/v5/get-started).

4. **Run the app:**

   ```bash
   npm start
   ```

5. **Visit in browser:**

   Open [http://localhost:3000](http://localhost:3000)

---

## 📂 File Structure

```
pagespeed-app/
├── public/              # Static assets (CSS, etc.)
├── results/             # JSON results saved here
├── views/               # EJS templates for UI
│   ├── index.ejs
│   └── result.ejs
├── .env                 # Contains your API key
├── app.js               # Main server logic
├── package.json
└── README.md
```

---

## 📊 Metrics Displayed

- **Overall Performance Score**
- **First Contentful Paint (FCP)**
- **Speed Index**
- **Largest Contentful Paint (LCP)**
- **Time to Interactive (TTI)**
- **Total Blocking Time (TBT)**
- **Cumulative Layout Shift (CLS)**

Color-coded using Bootstrap:

- 🟢 Green: Good
- 🟡 Yellow: Needs Improvement
- 🔴 Red: Poor

---

## ✅ License

MIT License

---

## 🙌 Acknowledgements

- [Google PageSpeed Insights API](https://developers.google.com/speed/docs/insights/v5/about)
- [Bootstrap](https://getbootstrap.com/)