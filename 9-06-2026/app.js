const express = require("express");
const fs = require("fs");

const app = express();

app.use(express.static("Public"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));












app.get("/", (req, res) => {
    res.send("home route page");
});


app.post("/register", (req, res) => {
    console.log(req.body);

    // Append form data to data.json
    fs.appendFileSync(
        "data.json",
        JSON.stringify(req.body) + "\n",
        "utf-8"
    );

    res.send("registration completed...");
});



app.listen(3000, () => {
    console.log("server is running at port 3000");
});