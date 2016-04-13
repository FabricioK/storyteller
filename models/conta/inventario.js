/* global Debug */
var mongoose = require('mongoose')
    , Schema = mongoose.Schema;

var inventarioSchema = mongoose.Schema({
    nome: String,
    date: { type: Date, default: Date.now },
    level: Number,
    personagem: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Personagem'
    }
});

var Inventario = mongoose.model('Inventario', inventarioSchema);

module.exports = Inventario;
