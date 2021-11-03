const logger = require('../../../lib/logger');
const APIError = require('../../../lib/api-error');
const HTTPStatus = require('http-status');

const { model: JobModel } = require('..');

const deleteJob = async (req, res, next) => {
  try {
    const { user: { userId }, params: { id: jobId } } = req;
    const result = await JobModel.findByIdAndRemove({ _id: jobId, createdBy: userId });

    if (!result) {
      next(new APIError({ msg: `No job found with the id: ${jobId}` }, HTTPStatus.NOT_FOUND));
    }

    return res.status(HTTPStatus.OK).send();
  } catch(err) {
    logger.error('ERROR > DELETE_JOB > ', err);
    return next(err);
  }
} 

module.exports = deleteJob