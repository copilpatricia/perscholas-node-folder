// const fs = require("fs");
const express = require("express"); // we import the express module (we can use import express from 'express'), yesterday we imported the http module
const usersRouter = require("./routes/users");
const morgan = require("morgan");

const app = express();
const PORT = 3000;

// register view engine - views default folder where the ejs will look
app.set("view engine", "ejs");

app.use(morgan("dev"));
app.use((req, res, next) => {
  console.log("I am a middleware.");
  next();
});

app.use("/users", usersRouter);

app.get("/", (req, res) => {
  console.log(req.url);

  res.send("This is the route");
});

// Render the index.ejs and about.ejs
app.get("/form", (req, res) => {
  res.render("form");
});

app.get("/about", (req, res) => {
  res.render("about", {
    title: "About",
    h1: "This is the about section",
    a: "Go to the form section",
  });
});

app.listen(PORT, () => {
  console.log("Server is running");
});
