const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send({ hi: 'there' });
});

// Create environment variable so Heroku can input dynamic port
// If there is no Heroku environment variable then use 5000
const PORT = process.env.PORT || 5000;
app.listen(PORT);
