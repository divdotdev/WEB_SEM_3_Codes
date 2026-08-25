const express = require("express");
const app = express();
const { auth, status } = require("./middleware./auth");
const { premium } = require("./middleware/premium");
app.session=require("express-session");
const port = 3000;

app.use(cookieParser("viet123"));

// for session
app.use(session({
    secret:"mysecret",
    resave:false,
    saveUninialized:true,
    macAge:60
}));

app.get("/")

app.get("/", (req, res) => {
  const username = req.signedCookies.username;
  console.log("bye");
  console.log(username);

  if (username == "saif099") {
    console.log("user welcome");
    res.send("home route");
  } else {
    throw console.error("invalid username");
  }
});
