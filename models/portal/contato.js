/* global Debug */
var mongoose = require('mongoose')
    , Schema = mongoose.Schema;

var contatoSchema = mongoose.Schema({
    nome: String,
    email: String,
    telefone: String,
    msg: String,    
    dataenvio: { type: Date, default: Date.now }
});

var Contato = mongoose.model('Contato', contatoSchema);

module.exports = Contato;
