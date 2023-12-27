const http = require('http');

const express = require('express');

const app = express();
//adding middleware
app.use((req, res, next) => {
    console.log('in the middleware-1');
    next();
});

app.use((req, res, next) => {
    console.log('in the middleware-2');
    next();
});

app.use((req, res, next) => {
    console.log('in the middleware-3');
    //sending response from here
    //res.send('<h1>hello from express js!</h1>');
    res.send( { "key1": "value" });
}); 
app.listen(3000);