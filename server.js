const express = require('express');

const app = express();

express.static(__dirname);

app.get('/', (req, res) => {
  res.sendFile(__dirname+'/index.html');
});

app.get('/css/styles.css', function(req,res){
    res.sendFile(__dirname+"/css/styles.css");
});
app.get('/js/app.js',function(req,res){
    res.sendFile(__dirname+"/js/app.js");
});


app.get('/js/ui.js',function(req,res){
    res.sendFile(__dirname+"/js/ui.js");
});



app.get('/manifest.json',function(req,res){
    res.sendFile(__dirname+"/manifest.json");
});



app.listen(5000,function(){
    console.log('Server is running');
});
