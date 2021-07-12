const jwt = require("jsonwebtoken");

module.exports = (req, res, next) => {
  authHeader = req.get("Authorization");
  if (!authHeader) {
    const error = new Error("Not authorized");
    error.status = 401;
    return next(error);
  }
  token = authHeader.split(" ")[1];
  try {
    decodedToken = jwt.verify(token, "secretsecretsecret");
    console.log(decodedToken);
  } catch {
    const error = new Error(
      "A problem has occured while storing the user in the DB, we are working on solving it"
    );
    error.status = 500;
    return next(error);
  }
  req.userId = decodedToken.id;
  next();
};
