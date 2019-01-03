const stravaMiddleware = require('../middleware/strava');

exports.getActivityLaps = function(req, res, next) {

    const activties_id = req.params.id;

    stravaMiddleware.getActivityLaps(activties_id)
        .then(function (activities) {
            res.status(200).send(activities);
        })
        .catch(function (err) {
            res.status(500).json(err);
        });
}

