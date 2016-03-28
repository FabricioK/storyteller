/* global Debug */
var mongoose = require('mongoose')
    , Schema = mongoose.Schema;

var footerSchema = mongoose.Schema({
    title: String,
    date: { type: Date, default: Date.now },
    content: String
});

var Footer = mongoose.model('Footer', footerSchema);

module.exports = Footer;
