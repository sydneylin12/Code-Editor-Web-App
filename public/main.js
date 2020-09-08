// This is the front-end JS file

// Get the text box
var doc = document.getElementById("editor");
doc.contentEditable = true;

let timer = 1000;
let timeout = 1000;
var isDoneTyping = false;

// Add event on document input changed
// Create a POST request for everytime someone changes the text
doc.addEventListener('input', (e) => {
    isDoneTyping = false;
    window.clearTimeout(timer);
    
    timer = window.setTimeout(() => {
        alert("Timer over!");
        isDoneTyping = true;

        const data = { text : doc.value };
        fetch("http://localhost:3000/edit", {
            method: 'POST',
            body: JSON.stringify(data), 
            headers: new Headers({
                "Content-Type" : "application/json"
            }) 
        })
        .then(res => res.json())
        .then(data => console.log(data))
        .catch(err => console.log(err));

    }, timeout);
});

// Initialize pusher here (FRONT END!)
Pusher.logToConsole = true;

var pusher = new Pusher('2338ecd2ad9b942dfa9e', {
    cluster: 'us3'
});

// This will get called when the editing text is done
// ADD DATA WITH TRIGGER HERE
var channel = pusher.subscribe('my-channel');
channel.bind('text-edit', function(data) {
    doc.value = data.text;
});