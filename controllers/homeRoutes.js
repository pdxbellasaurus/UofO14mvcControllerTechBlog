const router = require('express').Router();
const { Post, User, Comment } = require('../models');
const withAuth = require('../utils/auth');

router.get('/', async (req, res) => {
    try {
      // Get all posts and JOIN with user data
      const postData = await Post.findAll({
        include: [{ model: User }],
      });
  
      // Serialize data so the template can read it
      const posts = postData.map((post) => post.get({ plain: true }));
  
      // Pass serialized data and session flag into template
      res.render('homepage', { 
        posts, 
        logged_in: true 
      });
    } catch (err) {
      res.status(500).json(err);
    }
  });
  
  router.get('/post/:id', async (req, res) => {
    try {
      const postData = await Post.findOne({
        where: { id: req.params.id },
        attributes: ['id','title','post_body','date_created'],
        include: [
            { model: Comment,
                attributes: ['id', 'content', 'post_id', 'user_id'],
                include: { model: User, attributes: ['name']
                }
            },
            { model: User, attributes: { exclude: ['password'] },
            }
        ]
    });

      const post = postData.get({ plain: true });
        res.render('view', {
        ...post,
        logged_in: true
      });
    } catch (err) {
      res.status(500).json(err);
    }
  });
  
 // Use withAuth middleware to prevent access to route
 router.get('/profile', withAuth, async (req, res) => {
  try {
    // Find the logged in user based on the session ID
    const userData = await User.findByPk(req.session.user_id, {
      attributes: { exclude: ['password'] },
      include: [{ model: Post, through: User}],
    });

    const user = userData.get({ plain: true });

    res.render('profile', {
      ...user,
      logged_in: true
    });
  } catch (err) {
    res.status(500).json(err);
  }
});
 
  router.get('/login', (req, res) => {
    if (req.session.logged_in) {
      res.redirect('/profile');
      return;
    }
  
    res.render('login');
  });
  
  router.get('/signup', (req, res) => {
    if (req.session.logged_in) {
      res.redirect('/');
      return;
    }
  
    res.render('signup');
  });

  router.get('./new-post', (req, res) => {
    if (req.session.logged_in) {
      res.redirect('/profile');
      return;
    }
  
    res.render('new-post');
  });

module.exports = router;