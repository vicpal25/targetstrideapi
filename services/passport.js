const passport = require('passport');
const User = require('../model/user');
const config = require('../config');
const JwtStrategy = require('passport-jwt').Strategy;
const ExtractJwt = require('passport-jwt').ExtractJwt;
const StravaStrategy = require('passport-strava-oauth2').Strategy;
const session = require('express-session');

const JwtOptions = {
    jwtFromRequest : ExtractJwt.fromHeader('authorization'),
    secretOrKey : config.secret
};

const stravaConfig = {
    clientID: "28945",
    clientSecret: "0e324e5fb48442585cbc5ae635933c87fc149f5c",
    callbackURL: "callback"
};

const localstrategy = require('passport-local');
const localOptions = {usernameField : 'email' };

const localLogin = new localstrategy(localOptions, function(email, passowrd, done){


    User.findOne({email : email }, function(err, user) {

        console.log(email);

        if(err) { return done(err, false);  }
        
        if(!user) {
            done(null, false);
        } 

        user.comparePassword(passowrd, function(err, isMatch) {

            console.log(isMatch);

            if(err) { return done(err, false);  }

            if(!isMatch) {  done(null, false);  }

            return done(null, user);

        })



    })

})



const jwtLogin = new JwtStrategy(JwtOptions, function(payload, done) {


    User.findById(payload.sub, function(err, user) {

        if(err) { return done(err, false);  }
        
        if(user) {
            done(null, user);
        } else {
            done(null, false);
        }


    })

})

const stravaStrategy = new StravaStrategy(stravaConfig, (accessToken, refreshToken, profile, done) => {
    const stravaId = profile.id
    const name = profile.displayName
    const email = profile.emails[0].value
    User.find({where: {stravaId}})
      .then(foundUser => (foundUser
        ? done(null, foundUser)
        : User.create({name, email, stravaId})
          .then(createdUser => done(null, createdUser))
      ))
      .catch(done)
  })


// passport.use(stravaStrategy);  
passport.use(jwtLogin);
passport.use(localLogin);

passport.serializeUser((user, done) => done(null, user.id))
passport.deserializeUser((id, done) =>
//the db.models.user below is dependent upon where your user database is saved and what it's called
    db.models.user.findById(id)
    .then(user => done(null, user))
    .catch(done))
