const HttpError = require("./HttpError");

const validateRequestBodyFav = (req, res, next) => {
  if (!req.body || Object.keys(req.body).length === 0) {
    return next(HttpError(400, "missing field favorite"));
  }
  next();
};
module.exports = validateRequestBodyFav;
