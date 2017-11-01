const months = ["January","February","March","April","May","June","July","August","September","October","November","December"];

const express = require('express');
const app = express();
app.use(express.static('public'));

function isNumeric(n) {
  return !isNaN(parseFloat(n)) && isFinite(n);
}

function isValidDate(s) {
  var result = new Date(s);
  if(result == 'Invalid Date'){
    return false;
  }
  return true;
}

app.get("/:data", function (req, res) {
  var params = req.params.data;
  var obj = {};
  
  if(isNumeric(params)){
    var dt = new Date(parseInt(params)*1000);
    obj.unix = dt.getTime() / 1000;
    obj.natural = months[dt.getMonth()]+" "+dt.getDate()+", "+dt.getFullYear();
  }else if(isValidDate(params)){
    var dt = new Date(params);
    obj.unix = dt.getTime() / 1000;
    obj.natural = months[dt.getMonth()]+" "+dt.getDate()+", "+dt.getFullYear();
  }else{
    obj.unix = null;
    obj.natural = null;
  }
  
  res.set({'content-type': 'application/json'});
  res.end(JSON.stringify(obj));
});

// listen for requests :)
var listener = app.listen(process.env.PORT, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});