var express = require('express');
var app = express();
app.use(express.static('public'));

function isNumeric(n) {
  return !isNaN(parseFloat(n)) && isFinite(n);
}

app.get("/:data", function (req, res) {
  var params = req.params.data;
  var obj = {};
  
  if(isNumeric(params)){
    
  }
  
  res.set({'content-type': 'application/json'});
  res.end(JSON.stringify(obj));
});

// listen for requests :)
var listener = app.listen(process.env.PORT, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});