//require the just installed express app
var express = require('express');
var bodyParser = require('body-parser');

var task = ["buy socks", "practise with nodejs"];

//then we call express
var app = express();
app.use(bodyParser.urlencoded({extended:true}));

app.set('view engine', 'ejs');

//takes us to the root(/) URL
app.get('/', function (req, res) {
//when we visit the root URL express will respond with 'Hello World'
//   res.send('Hello World!');
    res.render('index', { task: task, complete: complete });
});

app.post('/addtask', function (req, res) {
    var newTask = req.body.newtask;
    task.push(newTask)
    res.redirect('/')
 });

//the server is listening on port 3000 for connections
app.listen(3500, function () {
  console.log('Example app listening on port 3500!')
});