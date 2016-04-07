var Reward = require('../../models/quests/rewards')
    , moment = require('moment');

function handleError(err) {
    console.log(err);
}

module.exports = function(app, server) {
    //cria novo personagem
    app.get('/api/rewards', auth, function(req, res) {
        Reward.find({ postreff: null }, 'nome')
            .exec(function(err, posts) {
                if (err) return console.log(err);
                res.json(posts);
            });
    });

    //cria nova pergunta
    app.post('/api/rewards', auth, function(req, res) {
        var post_sav = new Reward({            
             nome: req.body.nome
            , content: req.body.content
            , resposta: req.body.resposta
            , Item : req.body.item
            , Informacao :  req.body.Informacao
            , bonusPoints :  req.body.bonusPoints          
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