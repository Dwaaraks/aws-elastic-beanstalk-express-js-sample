const express = require('express');
const app = express();
const port = 8080;

// Serve static files from the main directory
app.use(express.static(__dirname));

app.get('/', (req, res) => res.sendFile(__dirname + '/index.html');

app.listen(port, () => {
  console.log(`App running on http://localhost:${port}`);
});

