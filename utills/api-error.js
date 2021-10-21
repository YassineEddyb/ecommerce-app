class ApiError {
  constructor(message, code) {
    this.msg = message;
    this.code = code;
  }
}

module.exports = ApiError;
