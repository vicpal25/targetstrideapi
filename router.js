
//Controller references
const Authentication = require('./controllers/authentication');
const BlogController = require('./controllers/blog.controller');
const AthleteController =  require('./controllers/athlete.controller');
//Passport service provider
const passportService = require('./services/passport');
const passport = require('passport');
//React stuff..Server Side rendering
const React = require('react');
const renderToString = require('react-dom/server').renderToString;
const Home = require('./react-components/header').default;

const requireAuth = passport.authenticate('jwt', {session: false })
const requireSignin = passport.authenticate('local', {session: false })

module.exports = function(app) {

    app.post('/', requireAuth, function(req, res) {
        res.send('hi');
    });

    app.post('/signin', requireSignin, Authentication.signin);
    app.post('/signup', Authentication.signup);
    app.get('/blogentries', BlogController.index);
    app.get('/athlete/:id', AthleteController.index);
    app.get('/activities/:id', AthleteController.getActivities);
    app.get('/activity/:id', AthleteController.getActivity);
    app.get('/preferences/:id',  AthleteController.getPreferences);
    app.put('/preferences/:id', AthleteController.updatePreferences);

}