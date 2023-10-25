// Importing Express
const express = require("express");

const PORT = 8000; // This Port can be changed

// Creating an Express App
const app = express();

// Creating Routes for the App
app.get("/", (req, res) => {
    res.send("App is running properly");
});

app.listen(PORT, (err) => {
    if(!err)
        console.log("App is running at Port "+PORT);
    else
        console.log("Error Occured: "+err);
});
