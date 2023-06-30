const mongoose = require("mongoose");

const LIST = new mongoose.Schema({
  heading: {
    type: "String",
    required: true,
  },
  creation: {
    type: Date,
    default: Date.now,
  },
  done:{
    type:Boolean,
    default:false
  },
  comptime: {
    type: Date,
  },
});

const LISTMODEL = mongoose.model("LIST", LIST);

module.exports = LISTMODEL;
