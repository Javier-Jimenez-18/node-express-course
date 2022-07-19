const express = require('express');
const path = require('path');
const app = express();
const consoleLog = require('./methods-public/practice-middleware');

// setup static and middleware
app.use(express.static('./new-public'));
app.use(consoleLog);

app.get('/', (req, res) => {
    res.sendFile(path.resolve(__dirname, './new-public/index.html'));
});

app.all('/sample', (req, res) => {
    res.status(200).send('This is working.');
});

app.all('*', (req, res) => {
    res.status(404).send('Resource not found.');
});

app.listen(3000, () => {
    console.log('Server is listening on port 3000...');
});