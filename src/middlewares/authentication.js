const jwt = require('jsonwebtoken');
const httpStatus = require('http-status');

const logger = require('../lib/logger');
const APIError = require('../lib/api-error');
const CONFIG = require('../config');

const authentication = async (req, res, next) => {
  let token =
    req.get('Authorization') ||
    req.get('authorization') ||
    req.query.access_token;
  if (!token) {
    const err = new APIError('Unauthorized', httpStatus.UNAUTHORIZED);
    return next(err);
  }
  if (typeof token === 'string') {
    token = token.replace('Bearer ', '');
  }

  try {
    const payload = jwt.verify(token, CONFIG.jwtSecret);

    req.user = { userId: payload.userId, name: payload.name };
    return next();
  } catch (err) {
    let message = 'Unauthorized!';
    if (err.message && err.message.indexOf('expired') > -1) {
      message = 'Your session has expired. Please login again!';
    }
    logger.error('EXEC > INVALID_TOKEN > ', err);
    const exec = new APIError(message, httpStatus.UNAUTHORIZED);
    return next(exec);
  }
};

module.exports = authentication;
