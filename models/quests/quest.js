/* global Debug */
var mongoose = require('mongoose')
    , Schema = mongoose.Schema;

var questSchema = mongoose.Schema({
    nome: String,
    date: { type: Date, default: Date.now },
    cenario_id: Number,
    content : String,
    exp: Number,
    reward: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Rewards'
    }
    , pointsNeedToClose: Number
    , infoNeedToClose : {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Informacao'
    }
    , itemNeedToClose: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Item'
    }
});

var Quest = mongoose.model('Quest', questSchema);

module.exports = Quest;