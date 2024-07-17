const express = require('express');
const app = express();


// Define a route for the root URL
app.get('/', (req, res) => {
    res.send('Hellooooo, world!');
});

// Define a route for the '/about' URL
app.get('/about', (req, res) => {
    res.send('About Page');
});

// Define a route for the '/users' URL
app.get('/users', (req, res) => {
    res.send('Users Page');
});

// Start the server
app.listen(4000)
