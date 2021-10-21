const ApiError = require("../utills/api-error");

module.exports = (err, req, res, next) => {
  // just for testing
  console.error(err);

  if (err instanceof ApiError) {
    res.status(err.code).json({ status: "fail", message: err.msg });
    return;
  }

  res.status(500).json({ status: "error", message: "something went wrong" });
};
