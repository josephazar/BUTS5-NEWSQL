const passport = require('passport');

module.exports = app => {
  app.get(
    '/auth/google',
    // TODO
  );

  app.get(
    '/auth/google/callback',
    // TODO,
    (req, res) => {
      res.redirect('http://localhost:3000/blogs');
    }
  );

  app.get('/auth/logout', (req, res) => {
    req.logout();
    res.redirect('http://localhost:3000/');
  });

  app.get('/api/current_user', (req, res) => {
    res.send(req.user);
  });
};