const express = require("express");
const app = express();

let port = 8080;

app.get("/", (req, res) => {
    res.render("index.ejs");
})

app.listen(port, () => {
    console.log(`app listning on ${port}`);
});