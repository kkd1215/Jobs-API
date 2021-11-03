const getAllJobs = require('./getAllJobs');
const getJob = require('./getJob');
const createJob = require('./createJob');
const updateJob = require('./updateJob');
const deleteJob = require('./deleteJob');

const Controller = {
  getAllJobs,
  getJob,
  createJob,
  updateJob,
  deleteJob
};

module.exports = Controller;