const router = require('express').Router();
const events = require('../controllers/events');
const auth = require('../controllers/auth');
const secureRoute = require('../lib/secureRoute');

router.route('/events')
  .get(events.index)
  .post(secureRoute, events.create);

router.route('/events/:id')
  .get(events.show)
  .put(secureRoute, events.update)
  .delete(secureRoute, events.delete);

router.post('/register', auth.register);
router.post('/login', auth.login);

module.exports = router;
