const dotenv = require("dotenv");
dotenv.config();
module.exports = {
  userName: process.env.USER_NAME,
  userPassword: process.env.USER_PASSWORD,
  defaultDb: process.env.DEFAULT_DATABASE,
  clusterName: process.env.CLUSTER_NAME,
  port: process.env.PORT,
};
