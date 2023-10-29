const express = require('express');
const app = express();
const port = 8080;

app.get('/', (req, res) => res.send('This is the project done by R Dwaarakesh, Heeraa Ananthan, Sagana SS. Project for devops'));

app.listen(port);
console.log(`App running on http://localhost:${port}`);
