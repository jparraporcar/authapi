const express = require("express");

const authRoutes = require("./routes/signup");

const mongoose = require("mongoose");

// when installing sendgrid necessary to check all problems with dependencies in warnings of npm

const {
  userName,
  userPassword,
  defaultDb,
  clusterName,
  port,
} = require("../config");

const app = express();

app.use(express.json());

app.use(authRoutes);

app.use((error, req, res, next) => {
  const status = error.statusCode;
  const message = error.message;
  const data = error.data;
  res.status(status).json({ message: message, errorData: data });
});

///Check for usability of Hemlet and other express security recommendations

mongoose
  .connect(
    `mongodb+srv://${userName}:${userPassword}@${clusterName}/${defaultDb}`,
    { useNewUrlParser: true, useUnifiedTopology: true }
  )
  .then((result) => {
    // console.log(result);
    app.listen(port);
  });
