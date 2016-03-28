var Agenda = require('../../models/portal/novidade')
    , moment = require('moment');

function handleError(err) {
    console.log(err);
}

module.exports = function (app, server) {
    app.get('/api/novidades', function (req, res) {
        Agenda.find({ postreff: null })
            .exec(function (err, posts) {
                if (err) return console.log(err);
                res.json(posts);
            });
    });

    app.post('/api/novidades', auth, function (req, res) {
        var post_sav = new Agenda({
            title: req.body.title,
            date_event: new Date(moment(req.body.date_event, "DD/MM/YYYY").valueOf()),
            content: req.body.content
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