const express = require('express');
const app = express();
app.engine('html', require('ejs').renderFile);
app.use(express.static('public'));
const faker = require('faker');

// Set faker vars to pass

function generateFakeVals() {
  return [
      faker.address.streetAddress(),
      faker.address.streetName(),
      faker.address.city(),
      faker.address.stateAbbr(),
      faker.address.zipCode()
   ];   
}


// routes
app.get("/", function(req, res) {
   res.render("index.ejs", {'randAddress': generateFakeVals()});
});
   
app.get("/arrays", function(req, res) {
   res.render("arrays.ejs", {'randAddress': generateFakeVals()});
});

app.get("/es6", function(req, res) {
   res.render("es6.ejs", {'randAddress': generateFakeVals()});
});

app.get("/strings", function(req, res) {
   res.render("strings.ejs", {'randAddress': generateFakeVals()});
});

// starting server
app.listen(process.env.PORT, process.env.IP, function(){
    console.log("Express server is running...");
});