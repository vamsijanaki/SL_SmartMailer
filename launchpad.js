const express = require('express');
const app = express();
const bodyParser = require('body-parser');

// Import controllers
const accountController = require('./src/controllers/AccountController');
const emailController = require('./src/controllers/emailController');

// Using middlewaree to parse request body
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Define a route for /
app.get('/', (req, res) => {
    res.send('You are not supposed to be here!');
});

// Define a route for setting up SMTP / Adding account Details
app.post('/api/add-account', (req, res) => {
    accountController.addAccount(req, res);
});

// Define a route for sending emails
app.post('/api/send-email', (req, res) => {
    emailController.sendEmail(req, res);
});

// Start the server
const port = 3000; // You can use any port you prefer
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
