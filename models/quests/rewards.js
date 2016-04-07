/* global Debug */
var mongoose = require('mongoose')
    , Schema = mongoose.Schema;

var rewardsSchema = mongoose
    .Schema({
        nome: String
        , content : String
        , resposta: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Resposta'
        }
        , Item: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Item'
        }
        , Informacao: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Item'
        }
        , bonusPoints: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Item'
        }
        , date: { type: Date, default: Date.now }
    });

var Rewards = mongoose.model('Rewards', rewardsSchema);

module.exports = Rewards;