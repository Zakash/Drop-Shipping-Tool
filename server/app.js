const express = require("express"),
  bodyParser = require("body-parser"),
  path = require("path"),
  mongoose = require("mongoose"),
  config = require('./config'),
  app = express();

const cashcow_controller = require('./controllers/cashcow');

const Order = require('./models/order');

mongoose.Promise = global.Promise;
mongoose.connect(
  config.mongoURL,
  { useNewUrlParser: true }
);

app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, '../dist')))

app.get('/api/orders', (req,res) => {
  Order.find().then(rec => {
    if (rec) {
      res.status(200).json(rec);
    } else {
      res.status(200).json([]);
    }});
  }
);

app.put('/api/orders/:id', (req,res) => {
  Order.findOneAndUpdate( { id: req.params.id }, { $set: req.body }, {new: true}, (err, doc) => {
    if (err) {
      console.log("Something wrong when updating data!");
    }

    console.log(doc);
  });
});

app.get("*", (req, res) => {
  cashcow_controller.info();
  res.sendFile(path.join(__dirname, '../dist/index.html'))
});

app.listen(process.env.PORT || 3000, function(){
  console.log("Express server listening on port %d in %s mode", this.address().port, app.settings.env);
});
