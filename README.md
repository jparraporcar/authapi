# authAPI

_It is necessary to create a .env file to define all the enviromental variables indicated below_

- USER_NAME= xxx
- USER_PASSWORD= xxx
- DEFAULT_DATABASE= xxx
- CLUSTER_NAME= xxx
- PORT = xxx

## The main features of authAPI are:

###### Handling of /POST request to /localhost:3000/signup (port number to be defined in .env file), using the main features/packages below:

- Handling of request/response with express [https://www.npmjs.com/package/express]
- Validation of request body fields with express-validator [https://www.npmjs.com/package/express-validator]
- Validation of password field separately with password-validator [https://www.npmjs.com/package/password-validator]
- MongoDB as a database
- Mongoose as a Object Data Modelling [https://www.npmjs.com/package/mongoose]
- bcryptjs to hash the password stored in mongoDB [https://www.npmjs.com/package/bcryptjs]
- dotenv to deal with enviromental variables [https://www.npmjs.com/package/dotenv]

###### Handling of /GET request to /localhost:300/login (port number to be defined in .env file), using the features/packages below:

- Assessment of password validity with bryptjs
- Creation of a token with jsonwebtoken [https://www.npmjs.com/package/jsonwebtoken]

###### Development pending tasks for /signup

- Adding sanitization of body fields
- Sending a confirmation email to the user when this user has succesfully signed up
