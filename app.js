var express = require('express');
var app = express();

app.get('/', function (req, res){
res.send('Hello AutoChek World!') ;
});

app.listen(3000, function(){
console.log('Current app is running on port 3000');
});