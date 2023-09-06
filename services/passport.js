const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const keys = require('../config/keys');

passport.serializeUser((user, done) => {
    // TODO
});

passport.deserializeUser((id, done) => {
    // TODO
});

passport.use(
    new GoogleStrategy(
        {
            callbackURL: 'http://localhost:5000/auth/google/callback',
            clientID: keys.googleClientID,
            clientSecret: keys.googleClientSecret,
            proxy: true
        },
        async (accessToken, refreshToken, profile, done) => {
                // TODO
        }
    )
);
