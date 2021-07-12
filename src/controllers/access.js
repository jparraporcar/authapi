module.exports = (req, res, next) => {
  res
    .status(200)
    .json({
      message: `The access to the user with id ${req.userId} has been granted`,
    });
};
