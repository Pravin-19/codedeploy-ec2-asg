const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
    res.send('Hello, welcome to the Node.js application!');
});

app.get('/data', (req, res) => {
    res.json({ message: 'This is some sample data.' });
});

app.listen(port, () => {
    console.log(`App running on port ${port}`);
});

