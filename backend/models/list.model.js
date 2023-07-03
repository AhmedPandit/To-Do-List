const mongoose = require("mongoose");

const LIST = new mongoose.Schema({
  heading: {
    type: "String",
    required: true,
  },
  creation: {
    type: "String"
  },
  done:{
    type:Boolean,
    default:false
  },
  comptime: {
    type: "String",

  },
});

const LISTMODEL = mongoose.model("LIST", LIST);

module.exports = LISTMODEL;
