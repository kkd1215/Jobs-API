const logger = require('../../../lib/logger');
const HTTPStatus = require('http-status');

const { model: JobModel } = require('..');

const getAllJobs = async (req, res, next) => {
  try {
    const jobs = await JobModel.find({ createdBy: req.user.userId }).sort('createdAt');
    return res.status(HTTPStatus.OK).send({ count: jobs.length, jobs });
  } catch(err) {
    logger.error('ERROR > GET_ALL_JOBS > ', err);
    return next(err);
  }
} 

module.exports = getAllJobs