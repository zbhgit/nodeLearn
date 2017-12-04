class HttpBaseError extends Error {
  constructor(httpStatusCode, httpMsg, errCode, msg) {
    super(`HTTP ERROR: ${msg}`);
    this.httpStatusCode = httpStatusCode;
    this.httpMsg = httpMsg;
    this.errorCode = errCode;
    this.msg = msg;
  }
}

module.exports = HttpBaseError;

try {
  throw new HttpBaseError(404, '资源不存在', 10000, 'resource not found')
} catch (err) {
  console.log(err.message);
  console.log(err.httpStatusCode);
  console.log(err.errorCode);
  console.log(err.httpMsg);
}
