const express = require("express");
const mongoose = require("mongoose");
const app = express();
app.set("view engine", "ejs");

app.use(express.urlencoded({ extended: true }));

mongoose.connect("mongodb://127.0.0.1:27017/CollageDB")
.then(() => {
    console.log("MongoDB Connected Successfully");
})
.catch((err) => {
    console.log("MongoDB Connection Error:", err);
});

// Schema
const studentSchema = new mongoose.Schema({
    name: "String",
    age: Number,
    course: "String"
});
// Model
const Student = mongoose.model("Student", studentSchema, "student");

// Route
app.get("/", async (req, res) => {
    try {
        const allstudent = await Student.find({
            age: { $lt: 20 }
        });

        res.render("student", { allstudent });
    } catch (err) {
        res.send(err);
    }
});

// Server
app.listen(3000, () => {
    console.log("Server running on http://localhost:3000");
});