var fs = require('fs')
    , mongoose = require('mongoose')
    , Schema = mongoose.Schema
    , multer = require('multer');
;


module.exports = function(app, server, passport) {

    app.post('/api/upload'
        , auth
        , multer({ dest: './uploads/', inMemory: true }).single('file')
        , function(req, res) {
            Grid.mongo = mongoose.mongo;
            var conn = mongoose.connection;
            var gfs = Grid(conn.db, mongoose.mongo);

            var filename = req.file.filename;
            var path = req.file.path;
            var type = req.file.mimetype;

            var read_stream = fs.createReadStream(__dirname + '/' + path);

            var writestream = gfs.createWriteStream({
                filename: filename
                , type: type
            });
            read_stream.pipe(writestream);

            writestream.on('close', function(file) {
                fs.unlink('./uploads/' + file.filename);
                res.status(200).send({ fileId: file._id });
            });
            writestream.on('error', function(e) {
                res.status(500).send("Could not upload file");
            });
        });


    app.get('/api/upload', function(req, res) {

        Grid.mongo = mongoose.mongo;
        var conn = mongoose.connection;
        var gfs = Grid(conn.db, mongoose.mongo);
        var perPage = Math.max(0, (req.param('max'))),
            page = Math.max(0, (req.param('page') - 1));

        var TotalPaginas = 0;
        var TotalItens = 0;
        var PaginaAtual = page;

        if (PaginaAtual < 1)
            PaginaAtual = 1;

        var PaginaAnterior = page - 1;

        if (PaginaAnterior < 1)
            PaginaAnterior = 1;

        var PaginaSeguinte = page + 1;

        if (PaginaSeguinte < 2)
            PaginaSeguinte = 2;
        var totalFiles = gfs.files.find().toArray(function(err, files) {
            var pageItens = pagination(files.length);
            return;
        });
        function pagination(length) {
            var files = gfs.files.find()
                .limit(perPage)
                .skip(perPage * page)
                .sort({
                    uploadDate: -1
                })
                .toArray(function(err, files) {
                    if (err) {
                        res.json(err);
                    }
                    var pageItens = Fillpages(length);
                    pageItens.Itens = files;
                    return res.json(pageItens);
                });
        }
        function Fillpages(length) {
            return {
                PaginaAtual: PaginaAtual,
                PaginaAnterior: PaginaAnterior,
                PaginaSeguinte: PaginaSeguinte,
                TotalPaginas: Math.ceil((length / perPage)),
                TotalItens: length,
                Itens: null
            };
        };


    });
    app.get('/api/getimage/:id', function(req, res) {
        var pic_id = req.param('id');
        Grid.mongo = mongoose.mongo;
        var conn = mongoose.connection;
        var gfs = Grid(conn.db, mongoose.mongo);

        gfs.files.find({ filename: pic_id }).toArray(function(err, files) {

            if (err) {
                res.json(err);
            }
            if (files.length > 0) {
                var mime = 'image/jpeg';
                res.set('Content-Type', mime);
                var read_stream = gfs.createReadStream({ filename: pic_id });
                read_stream.pipe(res);
            } else {
                res.json('File Not Found');
            }
        });
    });
}

function auth(req, res, next) {
    if (req.isAuthenticated()) { return next(); }
    res.redirect('/')
}