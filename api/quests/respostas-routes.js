var Pergunta = require('../../models/quests/perguntas')
    , moment = require('moment');

function handleError(err) {
    console.log(err);
}

module.exports = function(app, server) {
    //cria novo personagem
    app.get('/api/respostas', auth, function(req, res) {
        Resposta.find({ postreff: null }, 'nome')
            .exec(function(err, posts) {
                if (err) return console.log(err);
                res.json(posts);
            });
    });

    //cria nova pergunta
    app.post('/api/respostas', auth, function(req, res) {
        var post_sav = new Resposta({            
             pergunta: req.body.pergunta_id
            , content: req.body.content
            , requerItem : req.body.item
            , recolheItem :  req.body.recItem
            , requerInfo :  req.body.requerInfo
            , recolheInfo: req.body.recolheInfo
            , basePoints : req.body.basePoints
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