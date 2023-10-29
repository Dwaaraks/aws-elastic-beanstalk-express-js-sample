const express = require('express');
const app = express();
const port = 8080;

// Serve static files from the 'public' directory
app.use(express.static('public'));

app.get('/', (req, res) => res.sendFile(__dirname + '/index.html'));

app.listen(port, () => {
  console.log(`App running on http://localhost:${port}`);
});

