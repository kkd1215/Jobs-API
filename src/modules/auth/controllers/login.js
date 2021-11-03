const logger = require('../../../lib/logger');
const HTTPStatus = require('http-status');
const APIError = require('../../../lib/api-error');

const { model: UserModel } = require('../../user');

const login = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      const err = new APIError("please provide email and password", HTTPStatus.BAD_REQUEST);
      return next(err);
    }

    const user = await UserModel.findOne({ email });
    
    if (!user) {
      let message = 'Unauthorized!';
      const err = new APIError(message, HTTPStatus.UNAUTHORIZED);
      return next(err);
    }

    const isPassword = await user.comparePassword(password);
    if (!isPassword) {
      let message = 'Incorrect Password!';
      const err = new APIError(message, HTTPStatus.UNAUTHORIZED);
      return next(err);
    }

    const token = user.createJWT();
    return res.status(HTTPStatus.OK).json({ user: { name: user.name }, token });
  } catch(err) {
    logger.error('ERROR > LOGIN > ', err);
    return next(err);
  }
} 

module.exports = login