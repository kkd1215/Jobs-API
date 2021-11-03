const express = require('express');
const Controller = require('../controllers');

const router = express.Router();

router.get('/url', (req, res) => {
  res.status(200).send(`OK - ${req.baseUrl}`);
});

/** GET /api/v1/jobs - GET ALL JOBS */
router.route('/').get(Controller.getAllJobs);

/** GET /api/v1/jobs/:id - GET JOB */
router.route('/:id').get(Controller.getJob);

/** POST /api/v1/jobs - CREATE JOB */
router.route('/').post(Controller.createJob);

/** PATCH /api/v1/jobs/:id - UPDATE JOB */
router.route('/:id').patch(Controller.updateJob);

/** DELETE /api/v1/jobs/:id - DELETE JOB */
router.route('/:id').delete(Controller.deleteJob);

module.exports = router;