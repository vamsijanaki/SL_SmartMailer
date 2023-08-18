# SL_SmartMailer
An email client made for internal team as part of my test

# Used Packages
- express
- sequelize
- pg
- pg-hstore
- nodemailer
- dotenv

# Database Configuration
I have used https://www.elephantsql.com/ as my database provider. You can use any other provider or your own local database. Just change the database configuration in .env file.
- DB_URL = postgres://username:password@host:port/database

# How to run
- Run `npm install`
- Run `npm start`

Note : Make sure to update the .env file with your own credentials

# API Documentation

  ## Add Account
    - URL: http://localhost:3000/api/add-account
    - Method: POST
  ## Send Email
    - URL: http://localhost:3000/api/send-email
    - Method: POST

# Sample Request
I have included an folder called example_requests. It contains two sample requests. You can use them to test the API.

# Project Structure
```
├── example_requests
│   ├── add_account.json
│   └── send_email.json
├── src
│   ├── controllers
│   │   ├── AccountController.js
│   │   └── emailController.js
│   ├── db
│   │   ├── models
│   │   │   └── SMTPAccount.js
│   │   └── config.js
│   ├── helpers
│   │   └── mailer.js
│   └── utils
│       └── validation.js
├── .env
├── .gitignore
├── launchpad.js
├── package-lock.json
├── package.json
├── README.md
```

# Src Folder
- controllers: Contains all the controllers
- db: Contains all the database related files
- helpers: Contains all the helper functions
- utils: Contains all the utility functions

# db Folder
- models: Contains all the database models
- config: Contains all the database configuration

# Helpers Folder
- mailer: Contains all the functions related to sending emails

# Utils Folder
- validation: Contains all the functions related to validation

# Controllers
- AccountController: Contains all the functions related to account
- emailController: Contains all the functions related to sending emails

# API Endpoints
- /api/add-account
- /api/send-email
