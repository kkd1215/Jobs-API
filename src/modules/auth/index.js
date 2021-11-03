const controller = require('./controllers');
const routes = require('./routes');
const model = require('./model');

const auth = {
  controller,
  routes,
  model
};

module.exports = auth;