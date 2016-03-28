var  Personagem = require('../../models/personagem')
    , moment = require('moment');

function handleError(err) {
    console.log(err);
}

module.exports = function (app, server) {   
     //cria novo personagem
    app.get('/api/personagens', auth, function (req, res) {
          Personagem.find({ postreff: null })
            .exec(function (err, posts) {
                if (err) return console.log(err);
                res.json(posts);
            });
    });
    
    //cria novo personagem
    app.post('/api/personagens', auth, function (req, res) {
        var post_sav = new Personagem({
            nome: req.body.nome
        });

        var err = post_sav.validateSync();
        if (err) {
            handleError(err);
        } else {
            // validation passed
        }
        post_sav.save().then(function (post) {
            res.json({ success: true, id: post._id });
        });
    });
}

function auth(req, res, next) {
    if (req.isAuthenticated()) { return next(); }
    res.redirect('/')
}