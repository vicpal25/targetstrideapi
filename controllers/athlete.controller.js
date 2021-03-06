const stravaMiddleware = require('../middleware/strava');

exports.index = function (req, res, next) {

    const strava_id = req.params.id;

    stravaMiddleware.getAthlete(strava_id)
        .then(function (athlete) {
            res.status(200).send(athlete);
        })
        .catch(function (err) {
            res.status(500).json(err);
        });

}

exports.getActivity = function(req, res, next) {

    const activity_id = req.params.id;

    stravaMiddleware.getActivity(activity_id)
        .then(function (activity) {
            res.status(200).send(activity);
        })
        .catch(function (err) {
            res.status(500).json(err);
        });

}

exports.getActivities = function(req, res, next) {

    const activties_id = req.params.id;

    stravaMiddleware.getActivities(activties_id)
        .then(function (activities) {
            res.status(200).send(activities);
        })
        .catch(function (err) {
            res.status(500).json(err);
        });


}

exports.getPreferences = function(req, res) {

    const strava_id = req.params.id;

    stravaMiddleware.getAthletePreferences(strava_id)
        .then(function (preferences) {
            res.status(200).send(preferences);
        })
        .catch(function (err) {
            res.status(500).json(err);
        });

}
exports.updatePreferences = function(req, res) {

    const strava_id = req.params.id;

    stravaMiddleware.UpdateAthletePreferences(req.body, strava_id)
        .then(function (preferences) {
            res.status(200).send(preferences);
        })
        .catch(function (err) {
            res.status(500).json(err);
        });
}

exports.getStats = function(req, res) {

    const athleteid = req.params.id;

    stravaMiddleware.getAthleteStats(athleteid)
        .then(function (preferences) {
            res.status(200).send(preferences);
        })
        .catch(function (err) {
            console.log(err);
            res.status(500).json(err);
        });
}