
const Comments = require('../model/comments');


exports.getComments = function (req, res, next) {

    console.log(Comments);

    Comments.findAll()
      .then(function(entity) {
        
        res.status('200').json(result);
        return entity;
    
      })
      .catch(function(err) {
        res.status('500').json(err);
        return err;
      })
        
}

exports.getComment = function (req, res, next) {

    Comments.findAll({
        'where': {
          id: req.params.id
        }
      })
      .then(function(entity) {
        res.status('200').json(result);
        return entity;
    
      })
      .catch(function(err) {
        res.status('500').json(err);
        return err;
      })
}

exports.updateComment = function (req, res, next) {

}

exports.createComment = function (req, res, next) {

}
