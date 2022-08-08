const express = require("express");

const app = express();

app.use(express.static("public"));

app.get('/', function(req, res) {
    res.sendFile(__dirname + '/public/fred.jpg');
});

const port = process.env.PORT || 3333;

app.listen(port, () => {
  console.log(`Server started! Listening port ${port}`);
});