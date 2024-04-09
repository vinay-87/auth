const express = require("express");
const app = express();
const path = require("path");
const hbs = require("hbs");
const collection = require("./mongodb");
const templatePath = path.join(__dirname, "../templates");
const bcrypt = require('bcrypt')

app.use(express.json());
app.set("view engine", "hbs");
app.set("views", templatePath);
app.use(express.urlencoded({ extended: false }));
app.use(express.static("public"));

app.get("/", (req, res) => {
  res.render("login");
});
app.get("/signup", (req, res) => {
  res.render("signup");
});

app.post("/signup", async (req, res) => {
  const data = {
    name: req.body.name,
    password: req.body.password,
    role:req.body.role
  };
  const existing = await collection.findOne({ name: data.name });
  if (existing) {
    return res.send("user already exists");
  }
  else {
  //  const saltRounds = 10
  //  const hashPassword = await bcrypt.hash(data.password,saltRounds or 10)
  //  data.password = hashPassword
    await collection.insertMany([data]);
  }
  res.redirect("/");
});
app.post("/login", async (req, res) => {
  try {
      const check = await collection.findOne({ name: req.body.name });
      if (!check) {
          return res.send('Wrong username'); 
      }
      if (check.password !== req.body.password) {
          return res.send('Wrong password'); 
      }
      if (check.role === 'admin') {
          return res.render("homeAdmin", { check: check }); 
      } else {
          return res.render("homeUser", { check: check }); 
      }
  } catch (error) {
      console.error(error);
      return res.status(500).send("Internal server error"); 
  }
});


app.listen(process.env.PORT || 3000, () => {
  console.log("port connected");
});
