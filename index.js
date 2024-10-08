const express = require("express");
const app = express();
const port = 8080;
const path = require("path");

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.use('/public', express.static('public'));


app.get("/", (req, res) => {
    res.render("index.ejs");
})

app.listen(port, () => {
    console.log(`app listning on ${port}`);
});