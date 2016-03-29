/* global Debug */
var mongoose = require('mongoose')
    , Schema = mongoose.Schema;

var perguntaSchema = mongoose
    .Schema({
        content: String
        , npc:  {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'NPC'
        }
        , date: { type: Date, default: Date.now }
        , quest: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Quest'
        }
        , requerItem: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Item'
        }
        , recolheItem : Boolean
        , requerInfo: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Informacao'
        }
        , recolheInfo : Boolean
    });

var Pergunta = mongoose.model('Pergunta', perguntaSchema);

module.exports = Pergunta;