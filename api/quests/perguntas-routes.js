var Pergunta = require('../../models/quests/perguntas')
    , moment = require('moment');

function handleError(err) {
    console.log(err);
}

module.exports = function(app, server) {
    //cria novo personagem
    app.get('/api/perguntas', auth, function(req, res) {
        Pergunta.find({ postreff: null }, 'nome')
            .exec(function(err, posts) {
                if (err) return console.log(err);
                res.json(posts);
            });
    });

    //cria novo personagem
    app.post('/api/perguntas', auth, function(req, res) {
        var post_sav = new Pergunta({
            nome: req.body.nome
            , quest: req.body.quest_id
            , content: req.body.content
            , exp: req.body.exp
        });

        var err = post_sav.validateSync();
        if (err) {
            handleError(err);
        } else {
            // validation passed
        }
        post_sav.save().then(function(post) {
            res.json({ success: true, id: post._id });
        });
    });
}

function auth(req, res, next) {
    if (req.isAuthenticated()) { return next(); }
    res.redirect('/')
}