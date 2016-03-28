var Footer = require('../../models/portal/footer')
    , moment = require('moment');

function handleError(err) {
    console.log(err);
}

module.exports = function (app, server) {
    app.get('/api/footer', function (req, res) {
        Footer.find({ postreff: null })
            .exec(function (err, posts) {
                if (err) return console.log(err);
                res.json(posts);
            });
    });

    app.post('/api/footer', auth, function (req, res) {
        var post_sav = new Footer({
            title: req.body.title,
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