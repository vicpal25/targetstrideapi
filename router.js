
//Controller references
const Authentication = require('./controllers/authentication');
const BlogController = require('./controllers/blog.controller');
const AthleteController =  require('./controllers/athlete.controller');
const CommentController =  require('./controllers/comments.controller');
const ActivityController = require('./controllers/activity.controller');
const NewsletterController = require('./controllers/newsletters.controller');
var request = require("request");

//Passport service provider
const passportService = require('./services/passport');
const passport = require('passport');
//React stuff..Server Side rendering
const React = require('react');
const renderToString = require('react-dom/server').renderToString;
const Home = require('./react-components/header').default;

const requireAuth = passport.authenticate('jwt', {session: false })
const requireSignin = passport.authenticate('local', {session: false })
const session = require('express-session');

module.exports = function(app) {

        // session middleware with passport
    app.use(session({
        secret: process.env.SESSION_SECRET || 'running a marathon',
        resave: false,
        saveUninitialized: false
    }))
    app.use(passport.initialize())
    app.use(passport.session())

    app.post('/', requireAuth, function(req, res) {
        res.send('hi');
    });

    app.post('/signin', requireSignin, Authentication.signin);
    app.post('/signup', Authentication.signup);
    app.get('/blogentries', BlogController.index);
    app.get('/athlete/:id', AthleteController.index);
    app.get('/athlete/:id/stats', AthleteController.getStats);
    app.get('/activities/:id', AthleteController.getActivities);
    app.get('/activity/:id', AthleteController.getActivity);
    app.get('/activity/:id/laps', ActivityController.getActivityLaps);

    app.get('/preferences/:id',  AthleteController.getPreferences);
    app.put('/preferences/:id', AthleteController.updatePreferences);

    app.get('/comments/',  CommentController.getComments);
    app.get('/comments/:id',  CommentController.getComment);
    app.put('/comments/:id', CommentController.updateComment);
    app.post('/comments/',  CommentController.createComment);

    //Newsletter Controllers
    app.get('/markets/', NewsletterController.getMarkets);

    
    app.get('/stravalogin', passport.authenticate('strava', {scope:['public']}))

    // app.get('/callback',  function(req, res){
    //     res.send('ok');
    // });


    app.get('/callback', passport.authenticate('strava', {
        successRedirect: '/blogentries',
        failureRedirect: '/signin'
        }))



}