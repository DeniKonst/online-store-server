const errorHandler = require("../utils/errorHandler");

module.exports.uploads = (req, res) => {
  try {
    res.status(201).json(req.file ? req.file.path : "");
  } catch (e) {
    errorHandler(res, e);
  }
};
