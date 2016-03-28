var Quest = require('../../models/quest')
    , moment = require('moment');

function handleError(err) {
    console.log(err);
}

module.exports = function(app, server) {
    //cria novo personagem
    app.get('/api/quests', auth, function(req, res) {
        Quest.find({ postreff: null }, 'nome')
            .exec(function(err, posts) {
                if (err) return console.log(err);
                res.json(posts);
            });
    });

    //cria novo personagem
    app.post('/api/quests', auth, function(req, res) {
        var post_sav = new Quest({
            nome: req.body.nome
            , cenario_id: req.body.cenario_id
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