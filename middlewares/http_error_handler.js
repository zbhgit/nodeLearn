const HTTPBaseError = require('../errors/http_base_error')
const logger = require('../utils/loggers/logger');

function handler(options) {
  return function (err, req, res, next) {
    if (err instanceof HTTPBaseError) {
      const errMeta = {
        query: req.query,
        url: req.orienalUrl,
        userInfo: req.user,
      };
      logger.error(err.message, errMeta);
      res.statusCode = err.httpStatusCode;
      res.json({
        code: err.errorCode,
        msg: err.msg,
      });
    } else {
      next(err);
    }
  };

}

module.exports = handler;