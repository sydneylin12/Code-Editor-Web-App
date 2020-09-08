
// Initialize these constants for the server
const express = require("express");
const path = require("path");
const cors = require("cors");
const bodyParser = require("body-parser");
const edit = require("./routes/edit");
const app = express();

// Set public folder
app.use(express.static(path.join(__dirname, "public")));

// Set up cors - whatever the f that is
// PUT FUNCTION BRACKETS HERE!!!!!!!!!
app.use(cors());

// Use this to allow parsing of JSONs from request
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: false
}));

// Attach this to the /poll end of the URL
app.use("/edit", edit);

// Create port number
const port = 3000;

// Start server
app.listen(port, () => console.log("Server started on port: " + port));