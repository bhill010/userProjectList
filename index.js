const express = require('express');
const mongoose = require('mongoose');
const keys = require('./config/keys');
const seedDatabase = require('./config/seed');
require('./models/User');
require('./models/Project');
require('./models/UserProject');

mongoose.connect(keys.mongoURI);

const app = express();

app.get('/', (req, res) => {
  res.send({ hi: 'there' });
});

/* Run this function to seed database with initial data
seedDatabase();
*/


const PORT = process.env.PORT || 5000;
app.listen(PORT);
