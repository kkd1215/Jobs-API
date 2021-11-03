const logger = require('../../../lib/logger');
const APIError = require('../../../lib/api-error');
const HTTPStatus = require('http-status');

const { model: JobModel } = require('..');

const createJob = async (req, res, next) => {
  try {
    const { body, user } = req;
    body.createdBy = user.userId;
    const jobResult = await JobModel.create(body);

    return res.status(HTTPStatus.CREATED).json({jobResult});
  } catch(err) {
    logger.error('ERROR > CREATE_JOB > ', err);
    return next(err);
  }
} 

module.exports = createJob