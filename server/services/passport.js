const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const LinkedInStrategy = require('passport-linkedin-oauth2').Strategy;
const mongoose = require('mongoose');
const keys = require('../config');
//const keys = require('../config/keys');

// const User = mongoose.model('User');

// passport.serializeUser((user, done) => {
//   done(null, user.id);
// });

// passport.deserializeUser((id, done) => {
//   User.findById(id).then(user => {
//     done(null, user);
//   });
// });

// passport.use(
//   new GoogleStrategy(
//     {
//       callbackURL: '/auth/google/callback',
//       clientID: keys.googleClientID,
//       clientSecret: keys.googleClientSecret,
//       proxy: true
//     },
//     async (accessToken, refreshToken, profile, done) => {
//       try {
//         const existingUser = await User.findOne({ googleId: profile.id });
//         if (existingUser) {
//           return done(null, existingUser);
//         }
//         const user = await new User({
//           googleId: profile.id,
//           displayName: profile.displayName
//         }).save();
//         done(null, user);
//       } catch (err) {
//         done(err, null);
//       }
//     }
//   )
// );

passport.serializeUser(function(user, done) {
  done(null, user);
});

passport.deserializeUser(function(obj, done) {
  done(null, obj);
});


//begin new linkedin strategy
passport.use(new LinkedInStrategy({
  clientID: keys.LINKEDIN.client_id,
  clientSecret: keys.LINKEDIN.client_secret,
  callbackURL: "http://localhost:5000/auth/linkedin/callback",
  scope: ['r_emailaddress', 'r_basicprofile'],
  state: true
}, function(accessToken, refreshToken, profile, done) {
  // asynchronous verification, for effect...
  console.log('creating linkedin strat');
  process.nextTick(function () {
    // To keep the example simple, the user's LinkedIn profile is returned to
    // represent the logged-in user. In a typical application, you would want
    // to associate the LinkedIn account with a user record in your database,
    // and return that user instead.
    console.log(profile);
    return done(null, profile);
    
  });
}));


