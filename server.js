var express = require('express');
var app = express();
app.use(express.static(__dirname));
var path = require('path');
const fs = require("fs");

app.get("/", (request, response) =>
{
    let foo = fs.readFileSync("./jwtsample.html", "utf8");
    response.write(foo);
    response.end();
});

app.listen(8080, function () {
    console.log('Http Server listening on port 8080! Go to http://localhost:8080/')
  });