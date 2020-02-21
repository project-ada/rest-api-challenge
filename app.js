const express = require('express')
const app = express()
const NOT_IMPLEMENTED = 501

app.get('/', (req, res) => res.status(NOT_IMPLEMENTED).end())

module.exports = app;
