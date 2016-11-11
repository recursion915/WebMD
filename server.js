
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var fs = require("fs");
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.post('/create_user', function(req,res){
  var postBody = req.body;
  var user_id = postBody.user_id;
  console.log("new user created: " + user_id);
  var file_name = './user_file/' + user_id + ".json";
  fs.writeFile(file_name, JSON.stringify(postBody), function (err) {
   if (err) return console.log(err);})
  return;
  });

app.post('/update_user', function(req,res){
  var postBody = req.body;
  var user_id = postBody.user_id;
  console.log("user updated: " + user_id);
  var file_name = './user_file/' + user_id + ".json";
  fs.writeFile(file_name, JSON.stringify(postBody), function (err) {
      if (err) return console.log(err);})
  return;
  });

app.get('/get_user',function(req,res){
  // var postBody = req.body;

  var user_id = req.params[0];
  console.log(user_id);
  var file_name = './user_file/' + user_id + ".json";
  console.log(file_name);
  fs.readFile(file_name, (err, data) => {
    if (err) throw err;
    console.log(data);
    res.setHeader('Content-Type', 'application/json');
    res.send(JSON.stringify(data));
  });

});

var server = app.listen(3000, function () {
                        var port = server.address().port;
                        console.log('Server started at http://localhost:%s/', port);
                        });
