const express = require("express");
const app = express();
const port = 5001;
const fs = require("fs");

app.set("view engine", "ejs");

app.get("/", (req, res) => {
    res.send("home route...");
});

app.get("/getdata", (req, res) => {

    const data = fs.readFileSync("MOCK_DATA.json", "utf-8");
    const users = JSON.parse(data);

    console.log(users);

    res.render("index", { users });
});

app.listen(port, () => {
    console.log(`server is running at port ${port}`);
});