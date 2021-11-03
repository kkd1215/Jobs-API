const logger = require('../../../lib/logger');
const { model: JobModel } = require('..');
const APIError = require('../../../lib/api-error');
const HTTPStatus = require('http-status');

const updateJob = async (req, res, next) => {
  try {
    const { body: { company, position }, user: { userId }, params: { id: jobId } } = req;

    if (!company==='' || !position==='') {
      next(new APIError({ msg: `Comapany and position field cannot be empty` }, HTTPStatus.BAD_REQUEST));
    }

    const result = await JobModel.findByIdAndUpdate({ _id: jobId, createdBy: userId }, req.body, { new: true, runValidators: true });

    if (!result) {
      next(new APIError({ msg: `No job found with the id: ${jobId}` }, HTTPStatus.NOT_FOUND));
    }

    return res.status(HTTPStatus.OK).json({ result });
  } catch(err) {
    logger.error('ERROR > UPDATE_JOB > ', err);
    return next(err);
  }
} 

module.exports = updateJob