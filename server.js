const express = require("express");
const dotenv = require("dotenv").config();
const fs = require("fs");

const publicKey = dotenv.parsed.STRIPE_PUBLIC_KEY;
const secretKey = dotenv.parsed.STRIPE_SECRET_KEY;

const app = express();

app.set("view engine", "ejs");
app.use(express.static("public")); // This sets the public folder as our static files.

app.get("/store", (req, res) => {
  fs.readFile("item.json", (err, data) => {
    if (err) res.status(500).end();
    else
      res.render("store.ejs", {
        items: JSON.parse(data),
      });
  });
});

app.listen(3000);
