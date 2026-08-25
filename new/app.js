const express = require("express");
const mongoose = require("mongoose");

const app = express();
const port = 3000;

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// EJS
app.set("view engine", "ejs");

// MongoDB Connection
mongoose.connect("mongodb://127.0.0.1:27017/college_db")
.then(() => console.log("MongoDB Connected"))
.catch((err) => console.log(err));

// Schema
const studentSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    age: {
        type: Number,
        required: true
    },
    course: {
        type: String,
        required: true
    }
});

// Model
const Student = mongoose.model("Student", studentSchema);

// Home Route (Display Students)
app.get("/", async (req, res) => {
    try {
        const allstudent = await Student.find();
        res.render("student", { allstudent });
    } catch (err) {
        console.log(err);
        res.send("Error fetching students");
    }
});

// POST Route (Add Student)
app.post("/students", async (req, res) => {
    try {
        const student = new Student(req.body);
        await student.save();

        res.status(201).json({
            message: "Student Added Successfully",
            student
        });

    } catch (err) {
        console.log(err);

        res.status(500).json({
            message: "Error adding student",
            error: err.message
        });
    }
});

// GET API (Return all students in JSON)
app.get("/students", async (req, res) => {
    try {
        const students = await Student.find();
        res.json(students);
    } catch (err) {
        res.status(500).json({
            message: err.message
        });
    }
});

// Server
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});