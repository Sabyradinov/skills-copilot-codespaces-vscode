// Create web server with express
// Create a route to add comments
// Create a route to get all comments

const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.json());

// Create an array to store the comments
const comments = [];

// Route to add comments
app.post('/comments', (req, res) => {
    // Get the comment from the request body
    const comment = req.body.comment;
    // Add the comment to the comments array
    comments.push(comment);
    // Send a response
    res.send('Comment added');
});

// Route to get all comments
app.get('/comments', (req, res) => {
    // Send the comments array as a response
    res.send(comments);
});

// Start the server
app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});