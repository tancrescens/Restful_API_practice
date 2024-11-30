const express = require("express");
const cors = require('cors');

let app = express();
app.use(cors());

// add routes here
// Parameter routes===============
// Route: default
app.get("/", function (req, res) {
    res.send("Hello world!");
});

// Route: hello name
app.get("/hello/:name", (req, res) => {
    let name = req.params.name;
    res.send(`Hello ${name}`);
});

// String Query routes===============
// Route: echo
app.get("/echo", (req, res) => {
    // Get all query parameters
    const queryParams = req.query;

    // Create a response object
    const response = {
        message: "Here are the query parameters you sent:",
        firstName: queryParams.firstName,
        lastName: queryParams.lastName
    };

    // Send the response as JSON
    console.log(req.query);
    res.json(response);
});

// Route: difference
app.get("/difference/:n1/:n2", function (req, res) {
    let n1 = parseFloat(req.params.n1);
    let n2 = parseFloat(req.params.n2);

    res.send(Math.abs(n1 - n2).toString());
});

// Route: scream
app.get("/scream", function (req, res) {
    const queryParams = req.query;
    let message = queryParams.message;
    let receipient = queryParams.receipient;

    res.send(message.toUpperCase() + " " + receipient.toUpperCase());
});



app.listen("3000", function () {
    console.log("This server is running on port 3000");
});
