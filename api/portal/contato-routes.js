var Model = require('../../models/portal/contato')
    , moment = require('moment');

function handleError(err) {
    console.log(err);
}

module.exports = function (app, server) {

    app.post('/api/contato', function (req, res, next) {
        var post_sav = new Model({
            nome: req.body.nome,
            email: req.body.email,
            msg: req.body.msg,
            telefone: req.body.telefone
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
    
    app.get('/api/contato',auth, function (req, res, next) {
       Model.find({ postreff: null })
            .exec(function (err, posts) {
                if (err) return console.log(err);
                res.json(posts);
            });
    });
}

function auth(req, res, next) {
    if (req.isAuthenticated()) { return next(); }
    res.status(401);
    res.send(null);
    return null;
}
