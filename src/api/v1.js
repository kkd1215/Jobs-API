const express = require('express');
const middlwares = require('../middlewares');

const JobRoutes = require('../modules/jobs/routes/v1');
const AuthRoutes = require('../modules/auth/routes/v1');

const router = express.Router();

router.get('/', (req, res) => {
  res.status(200).send(`OK - ${req.baseUrl}`);
});

router.use('/jobs', middlwares.authentication, JobRoutes);
router.use('/auth', AuthRoutes);

module.exports = router;