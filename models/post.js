var mongoose = require('mongoose')
    , Schema = mongoose.Schema;

var postSchema = mongoose.Schema({
    title: String,
    date : { type: Date, default: Date.now },
    content: String
});

postSchema.methods.listAll = function (req, res) {
    Post.find({ postreff: null })
        .exec(function (err, posts) {
            if (err) return console.log(err);
            res.json(posts);
            // prints "The creators age is null'
        });
};

postSchema.methods.create = function (req, res) {
    var post_sav = new Post({
        user: req.user._id,
        postreff: req.body.postreff,
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
};

function handleError(err) { 
    Debug.Log(err);
}
var Post = mongoose.model('Post', postSchema);

module.exports = Post;
