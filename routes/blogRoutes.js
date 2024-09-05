const requireLogin = require('../middlewares/requireLogin');
module.exports = app => {
  app.get('/api/blogs/:id', requireLogin, async (req, res) => {
    // TODO
    const blog = null;
    res.send(blog);
  });

  app.get('/api/blogs', requireLogin, async (req, res) => {
    // TODO
    const blogs = null;
    res.send(blogs);
  });

  app.post('/api/blogs', requireLogin, async (req, res) => {
    // TODO
    const blog = null;
    try {

      res.send(blog);
    } catch (err) {
      res.send(400, err);
    }
  });

  app.delete('/api/blogs/:id', requireLogin, async (req, res) => {
    try {
      // TODO
      const blogs = null;
      res.send(blogs);
    } catch (err) {
      res.status(500).send({ error: 'Failed to delete blog' });
    }
  });
};