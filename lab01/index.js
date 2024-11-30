const express = require("express");
const cors = require('cors');

let app = express();
app.use(cors());

// add routes here
// Parameter routes===============
// Route: default
app.get("/", function (req, res) {
    res.send("Hello world!")
});

// Route: hello name
app.get("/hello/:name", (req, res) => {
    let name = req.params.name
    res.send(`Hello ${name}`)
});

// String Query routes===============
app.get("/echo", (res, req) => {
    // Get all query parameters
    const queryParams = req.query;

    // Create a response object
    const response = {
        message: "Here are the query parameters you sent:",
        firstName: queryParams.firstName,
        lastName: queryParams.lastName
    };

    // Send the response as JSON
    res.json(response);
})


app.listen("3000", function () {
    console.log("This server is running on port 3000");
});
