const express = require("express");

const authRoutes = require("./routes/auth");

const mongoose = require("mongoose");

// when installing sendgrid necessary to check all problems with dependencies in warnings of npm

const { userName, userPassword, Db, clusterName, port } = require("../config");
console.log(require("../config"));

const app = express();

app.use(express.json());

app.use(authRoutes);

app.use((error, req, res, next) => {
  const status = error.statusCode || 500;
  const message =
    error.message ||
    "A problem has occured while storing the user in the DB, we are working on solving it";
  const data = error.data;
  res.status(status).json({ message: message, errorData: data });
});

///Check for usability of Hemlet and other express security recommendations

mongoose
  .connect(`mongodb+srv://${userName}:${userPassword}@${clusterName}/${Db}`, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then((result) => {
    console.log(result);
    app.listen(port);
  });
