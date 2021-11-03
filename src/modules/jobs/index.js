const controller = require('./controllers');
const routes = require('./routes');
const model = require('./model');

const jobs = {
  controller,
  routes,
  model
};

module.exports = jobs;