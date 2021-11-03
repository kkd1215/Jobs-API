const express = require('express');
const Controller = require('../controllers');

const router = express.Router();

router.get('/url', (req, res) => {
  res.status(200).send(`OK - ${req.baseUrl}`);
});

/** POST /api/v1/auth/register - REGISTER A USER */
router.route('/register').post(Controller.register);

/** POST /api/v1/auth/login - LOGIN A USER */
router.route('/login').post(Controller.login);



module.exports = router;