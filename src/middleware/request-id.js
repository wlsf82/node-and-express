const cuid = require("cuid");

const requestId = (req, res, next) => {
  const requestId = cuid();
  req.id = requestId;
  res.id = requestId;
  console.log(requestId);
  next();
};

module.exports = requestId;
