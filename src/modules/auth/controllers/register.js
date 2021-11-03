const logger = require('../../../lib/logger');
const HTTPStatus = require('http-status');

const { model: UserModel } = require('../../user');

const register = async (req, res, next) => {
  try {
    const user = await UserModel.create({ ...req.body })
    const token = user.createJWT();
    return res.status(HTTPStatus.CREATED).json({ user: { name: user.name }, token });
  } catch(err) {
    logger.error('ERROR > REGISTER > ', err);
    return next(err);
  }
} 

module.exports = register