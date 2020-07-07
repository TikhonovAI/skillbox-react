import express from 'express';
//let express = require('express');

const app = express();

app.get('/', (req, res) => {
    res.send('Hello world');
});

app.listen(3000, () => {
    console.log('Server stared on http://localhost:3000');    
});