var livereload = require('livereload');
var server = livereload.createServer();
server.watch(__dirname);
var express = require('express')
var app = require('express')()
app.use(express.static(__dirname + '/output'))
app.listen(3000)
console.log('http:/127.0.0.1:3000')
