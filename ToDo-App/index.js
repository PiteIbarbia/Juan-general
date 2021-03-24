var express = require('express');
var bodyParser = require("body-parser");

var task = ["buy socks", "practise with nodejs"];

var app = express();
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: true }));


app.get('/', function(req, res) {
    res.render("index", { task: task, complete: complete });
});
app.post('/addtask', function(req, res) {
    var newTask = req.body.newtask;
    task(index.ejs) = task(array)
    task.push(newTask);
    res.redirect('/');
    
});

app.listen(4000, function() {
    console.log('Example app listening on port 4000');
});