const express = require("express");
const mustacheExpress = require("mustache-express");
const bodyParser = require("body-parser");
const expressValidator = require("express-validator");
const app = express();

app.engine("mustache", mustacheExpress());
app.set("views", "./views");
app.set("view engine", "mustache");

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use(express.static("public"));
app.use(expressValidator());

let todoList = [
   {item: "Wash Car", complete: true},
   {item: "Walk Dog", complete: false}
   ];

app.get("/", function(req, res) {
    res.render("list", {todoList: todoList});
});


app.post("/", function(req, res) {
    todoList.push({"item": req.body.item, complete: false});
    res.redirect("/");
});

app.post("/complete", function(req, res) {
    todoList.forEach(function(pending) {
      if(pending.item === req.body.confirm) {
         pending.complete = true;
      }
   })
        res.redirect("/");
});

app.listen(8000, function() {
    console.log("All good things must come to an end");
});
