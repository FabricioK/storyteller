var Agenda = require('../../models/portal/agenda')
    , moment = require('moment');

function handleError(err) {
    console.log(err);
}

module.exports = function (app, server) {
    //busca todas
    app.get('/api/agendas', function (req, res) {
        Agenda.find({ postreff: null })
            .exec(function (err, posts) {
                if (err) return console.log(err);
                res.json(posts);
            });
    });
    // busca por id
    app.get('/api/agendas/:agenda_id', function (req, res) {
        Agenda.findById(req.params.agenda_id)
            .exec(function (err, agenda) {
                if (err) return console.log(err);
                res.json(agenda);
            });
    });
    //atualiza por id
    app.put(function (req, res) {
        // use our bear model to find the bear we want
        Agenda.findById(req.params.agenda_id, function (err, agenda) {

            if (err)
                res.send(err);
            agenda.title = req.body.title;
            agenda.date_event = new Date(moment(req.body.date_event, "DD/MM/YYYY").valueOf()),
            agenda.content = req.body.content; 

            // save the bear
            agenda.save(function (err) {
                if (err)
                    res.send(err);

                res.json({ message: 'agenda atualizada!' });
            });

        });
    })
    //deleta agenda
    app.delete(function (req, res) {
        Agenda.remove({
            _id: req.params.agenda_id
        }, function (err, bear) {
            if (err)
                res.send(err);

            res.json({ message: 'agenda deletada' });
        });
    });

    //cria agenda nova
    app.post('/api/agendas', auth, function (req, res) {
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