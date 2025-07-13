import express from "express";

const app = express();
const port = 3000;

app.get("/", (req, res) => {
    res.send("Hello Stremers");
})

app.listen(port, () => {
    console.log('video confrencing service on port' + port)
})