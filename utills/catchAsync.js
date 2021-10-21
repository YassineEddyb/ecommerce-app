const ApiError = require("./api-error");

module.exports = (fn) => {
  return (req, res, next) => {
    fn(req, res, next).catch((err) => next(new ApiError(err.message, 500)));
  };
};
