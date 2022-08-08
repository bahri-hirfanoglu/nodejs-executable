const express = require("express"),
path = require('path'),
app = express();

app.set('views', path.join(__dirname, '/resource/views'));
app.set("view engine", "ejs");
app.use(express.static("public"));

app.get('/', function(req, res) {
    res.render('index', {dirname: __dirname})
});

app.get('/assets/*', function(req, res) {
    console.log(req.path)
    res.sendFile(__dirname + "/resource/public/" + req.path)
});

const port = process.env.PORT || 3333;

app.listen(port, () => {
  console.log(`Server started! Listening port ${port}`);
});

