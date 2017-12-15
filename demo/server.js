/////////////////////////////////////////////////////////////////////
// Express server to generate API endpoint
// to start: npm i && node server.js

const express = require('express');
const app = express();
let currentValue = 25;
app.use(express.static("."));
app.get('/koers', (req, res) =>{
    if (Math.random() < 0.5) currentValue *= 1.1 
    else currentValue *= 0.9;
    res.end(JSON.stringify(currentValue));
});

app.get('*', (req, res)=>{
    res.sendFile(__dirname + '/index.html');
});

app.get('/', (req, res) => {
    res.end("Hello SIEGFRIED!");
});
app.listen(3020, (req, res) => {
    console.log("I am ready");
});

