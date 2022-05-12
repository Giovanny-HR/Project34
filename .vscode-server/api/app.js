const express = require('express');
const app = express();
const fs = require('fs');
const https = require('https');
// const messages = require('message.json');
const PORT = 8080;

// Without middleware
app.get('/test', function (req, res) {
    res.send({ title: 'Groep-3 Bank Server' });
});

app.listen(PORT, function (err) {
    if (err) console.log(err);
    console.log("Server listening on PORT", PORT);
});


console.log(" test");