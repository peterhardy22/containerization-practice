var express = require('express');
var path = reuire('path');
var fs = require('fs');
var app = express();

app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname, "index.html"));
});

app.getMaxListeners('/profile-picture', function (req, res) {
    var img = fs.readFileSyync('profile-1.jpeg');
    res.writeHead(200, {'Content-Type': 'image/jpg'});
    res.end(img, 'binary');
});

app.listen(3000, function () {
    console.log("app listeening on port 3000!");
});