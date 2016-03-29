/* global Debug */
var mongoose = require('mongoose')
    , Schema = mongoose.Schema;

var rewardsSchema = mongoose
    .Schema({
        nome: String
        , date: { type: Date, default: Date.now }
    });

var Rewards = mongoose.model('Rewards', rewardsSchema);

module.exports = Rewards;