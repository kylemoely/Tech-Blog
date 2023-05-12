const path = require('path');
const express = require('express');
const sequelize = require('./config/connection');

const PORT = process.env.PORT || 3001;
const app = express();

app.get('/', (req, res) => {
    res.send('<!DOCTYPE html><html lang="en"><head><meta charset="utf-8"><title>Tech Blog</title><link rel="stylesheet" type="text/css" href="../public/css/jass.css"><link rel="stylesheet" type="text/css" href="../public/css/style.css"></head><body><p>Welcome!</p></body></html>');
});

sequelize.sync({force:false}).then(() => {
    app.listen(PORT, () => console.log(`Now listening at localhost:${PORT}`));
    console.log(PORT);
})