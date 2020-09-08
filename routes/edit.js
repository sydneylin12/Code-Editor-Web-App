// Part of the server code

// Initialize constants
const express = require("express");
const router = express.Router();

// Initialize pusher
const Pusher = require("pusher");

var pusher = new Pusher({
    appId: '1068673',
    key: '2338ecd2ad9b942dfa9e',
    secret: 'bc4330f301b127c6fc2b',
    cluster: 'us3',
    useTLS: true
});

router.get("/", (req, res) => {
    res.send("GETTING REQUEST TEST");
})

// When poll is called, this will send a message to pusher telling everyone to update
router.post("/", (req, res) => {
    pusher.trigger("my-channel", "text-edit", {
        text: req.body.text
    });

    return res.json({
        success: true, 
        code: 200, 
        message: "Text updated successfully!"
    });
});

module.exports = router;