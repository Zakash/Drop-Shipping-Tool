const mongoose = require('mongoose');

const { Schema } = mongoose;

const OrderSchema = new Schema ({
  id: { type: Number, unique: true },
  orderNumber: Number,
  paymentNumber: Number,
  tracking: String,
  subTracking: String,
  status: String,
  pricePaid: Number,
  priceReceived: Number,
  priceReceivedWithoutFees: Number,
  profit: Number,
  paymentMethod: String,
  date: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Order', OrderSchema);
