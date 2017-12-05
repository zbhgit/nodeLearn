const HTTPBaseError = require('./http_base_error');

const ERROR_CODE = 5000000;

class InternalServerError extends HTTPBaseError {
  constructor(msg) {
    super(500, '服务器出现错误', ERROR_CODE, msg);
  }
}

module.exports = InternalServerError;