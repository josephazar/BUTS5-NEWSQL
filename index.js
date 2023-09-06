const express = require('express');
const mongoose = require('mongoose');
const cookieSession = require('cookie-session');
const passport = require('passport');
const bodyParser = require('body-parser');
const cors = require('cors');
const keys = require('./config/keys');

require('./models/User');
require('./models/Blog');
require('./services/passport');

mongoose.connect(keys.mongoURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const app = express();
// CORS configuration
const corsOptions = {
    origin: 'http://localhost:3000', // Cela autorisera les requêtes de localhost:3000
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  credentials: true,  // Cela permet d'envoyer des cookies de session avec les requêtes
  optionsSuccessStatus: 204
};

// Use CORS with the provided configuration
app.use(cors(corsOptions));

app.use(bodyParser.json());
app.use(
  cookieSession({
    maxAge: 30 * 24 * 60 * 60 * 1000,
    keys: [keys.cookieKey],
  })
);
app.use(passport.initialize());
app.use(passport.session());

// TODO SWAGGER DOC

require('./routes/authRoutes')(app);
require('./routes/blogRoutes')(app);


const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Le serveur ecoute sur le port: `, PORT);
});
