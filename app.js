const express = require('express');
var path = require('path');
var body = require('body-parser');
var port = 3000;

const app = express();

app.listen(port, function(){
    console.log('listening');
})

app.get('/', function(req, res){
    console.log('requested');
    res.send('Helllo Nurse');
})