const express = require("express"),
  bodyParser = require("body-parser"),
  config = require('../config'),
  request = require('request'),
  app = express();

app.use(bodyParser.json());

exports.info = function (req, res) {
  request({'url': 'https://api.cashcow.co.il/Api/Stores/Orders?token=' + config.accessToken + '&store_id=7697&page=43&page_size=20', 'json': true} ,function (error, response, body) {
    console.log('error:', error); // Print the error if one occurred
    console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
    console.log('body:', body); // Print the HTML for the Google homepage.)
  });

};


