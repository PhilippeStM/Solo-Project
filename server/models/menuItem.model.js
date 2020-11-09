const mongoose = require("mongoose");

const NewMenuItem = new mongoose.Schema({
    url: { type: String },
    title: { type: String },
    price: { type: Number },
    description: { type: String },
},
    { timestamps: true }
);

const MenuItem = mongoose.model("MenuItem", NewMenuItem);

module.exports = MenuItem;