var fs = require('fs')
    , mongoose = require('mongoose')
    , Schema = mongoose.Schema
    , multer = require('multer');
;


module.exports = function (app, server, passport) {
    app
        .post('/api/upload'
            , auth
            , multer({ dest: './uploads/' }).single('file')
            , function (req, res, next) {
                console.log(req.body); //form fields
                /* example output:
                { title: 'abc' }
                 */
                console.log(req.file); //form files
                /* example output:
                        { fieldname: 'upl',
                          originalname: 'grumpy.png',
                          encoding: '7bit',
                          mimetype: 'image/png',
                          destination: './uploads/',
                          filename: '436ec561793aa4dc475a88e84776b1b9',
                          path: 'uploads/436ec561793aa4dc475a88e84776b1b9',
                          size: 277056 }
                 */
                res.status(204).end();
            });
}

function auth(req, res, next) {
    if (req.isAuthenticated()) { return next(); }
    res.redirect('/')
}