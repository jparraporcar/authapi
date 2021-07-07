# signupAPI

It is necessary to create a .env file to define all the enviromental variables indicated below.

USER_NAME= xxx 
USER_PASSWORD= xxx
DEFAULT_DATABASE= xxx
CLUSTER_NAME= xxx
PORT = xxx

The main features of this API are:

- Handling of req/res with express
- Validation of request body fields with express-validator
- Validation of password field separately with password-validator
- MongoDB as a database
- Mongoose as a Object Data Modelling
- bcryptjs to hash the password stored in the mongoDB
- dotenv to deal with enviromental variables
