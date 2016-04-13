/* global Debug */
var mongoose = require('mongoose')
    , Schema = mongoose.Schema;

var personagemSchema = mongoose.Schema({
    nome: String,
    date: { type: Date, default: Date.now },
    energy: Number,
    actions: Number,
    level: Number,
    strength: Number,
    constitution: Number,
    defense: Number,
    dexterity: Number,
    intelligence: Number,
    charisma: Number,
    wisdom: Number,
    willpower: Number,
    perception: Number,
    luck: Number
});

var Personagem = mongoose.model('Personagem', personagemSchema);

module.exports = Personagem;
