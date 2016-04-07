/* global Debug */
var mongoose = require('mongoose')
    , Schema = mongoose.Schema;

var respostaSchema = mongoose
    .Schema({
        content: String
        , date: { type: Date, default: Date.now }
        , pergunta: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Pergunta'
        }, requerItem: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Item'
        }
        , recolheItem: Boolean
        , requerInfo: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Informacao'
        }
        , recolheInfo: Boolean
        , basePoints: Number
    });

var Resposta = mongoose.model('Resposta', respostaSchema);

module.exports = Resposta;