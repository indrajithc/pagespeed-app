require('dotenv').config();
const express = require('express');
const fs = require('fs');
const path = require('path');

const app = express();
app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

const RESULTS_DIR = path.join(__dirname, 'results');
if (!fs.existsSync(RESULTS_DIR)) fs.mkdirSync(RESULTS_DIR);

app.get('/', (req, res) => {
  res.render('index');
});

app.post('/analyze', async (req, res) => {
  const url = req.body.url;
  const apiKey = process.env.PAGESPEED_API_KEY;
  const endpoint = `https://www.googleapis.com/pagespeedonline/v5/runPagespeed?url=${encodeURIComponent(url)}&key=${apiKey}&strategy=mobile`;

  try {
    const response = await fetch(endpoint);
    const data = await response.json();

    const lighthouse = data.lighthouseResult;
    const score = Math.round(lighthouse.categories.performance.score * 100);
    const audits = lighthouse.audits;

    const metrics = {
      'First Contentful Paint': audits['first-contentful-paint'].numericValue,
      'Speed Index': audits['speed-index'].numericValue,
      'Largest Contentful Paint': audits['largest-contentful-paint'].numericValue,
      'Time to Interactive': audits['interactive'].numericValue,
      'Total Blocking Time': audits['total-blocking-time'].numericValue,
      'Cumulative Layout Shift': audits['cumulative-layout-shift'].numericValue,
    };

    const filePath = path.join(RESULTS_DIR, `result-${Date.now()}.json`);
    fs.writeFileSync(filePath, JSON.stringify(data, null, 2));

    res.render('result', { url, score, metrics });

  } catch (err) {
    res.send(`Error fetching data: ${err.message}`);
  }
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`🚀 Server running at http://localhost:${PORT}`);
});
