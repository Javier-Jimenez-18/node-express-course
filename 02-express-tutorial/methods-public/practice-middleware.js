const express = require('express');
const app = express();

const consoleLog = (req, res, next) => {
    const method = req.method;
    const url = req.url;
    const date = new Date().toDateString();
    console.log(method, url, date);
    next();
};

module.exports = consoleLog;