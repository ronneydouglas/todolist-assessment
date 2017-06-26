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
// app.use(validator());

todoList = {
    "items": [
        {"id": 1, "item": "Wash Car", "complete": true},
        {"id": 2, "item": "Walk Dog", "complete": false}
    ]
};

app.get("/", function(req, res) {
    res.render("list", todoList);
});


app.post("/", function(req, res) {
    let i = todoList.items.length + 1;
    todoList.items.push({"id": i, "item": req.body.item, "complete": false});
    res.redirect("/");
});

app.get("/complete/:id", function() {
    todoList.items[req.params.id -1].complete = true;
        res.redirect("/");
});

app.listen(3000, function() {
    console.log("All good things must come to an end");
});
