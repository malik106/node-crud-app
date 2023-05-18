# Node CRUD App

[![Build Status](https://travis-ci.org/joemccann/dillinger.svg?branch=master)](https://travis-ci.org/joemccann/dillinger)

This is Node.js CRUD Application

It consists following layers:-

- routes
- validators
- middlewares
- controllers
- services
- file-handling

Along with above main layers, it also contains various other sub-layers like:-

- constants
- lib
- providers
- utils
- scripts

## Installation

- Pre-requisites

  > node-crud-app requires Node.js v10+ to run.

  Clone the project by copying below mentioned command into your directory :-

  ```sh
  git clone https://github.com/malik106/node-crud-app
  ```

  Change directory to ems by typing below mentioned command :-

  ```sh
  cd node-crud-app
  ```

  Now run below mentioned command to install neccessary dependencies into your project :-

  ```sh
  npm install
  ```

  ## Configuring the Environment

  In order to properly run the system, you have to first configure `.env` file as per the guidelines given in `example.env` or as per your project requirement.

  ## Important

  Install nodemon as a utility that will monitor for any changes in your source and automatically restart your server. Perfect for development. Install it using below command :-

  ```sh
  npm install -g nodemon
  ```

  ## Executing the server

  In order to start the server to work, you can execute the command which is mentioned below :-

  - Run the app(For development) by

    ```
    npm run dev
    ```

  - Run the app by(For production)

    ```
    npm start
    ```

  This would execute the code from ems/bin/www directory

  ## Running Tests

  You can run the tests for the Node.js CRUD application using the following command:

  ```sh
  npm test
  ```

## Makefile Commands

1. Display linting for all files

   ```sh
   make all
   ```

2. Autofix fixable errors for linting for all files

   ```sh
   make all_fix
   ```

3. Display linting for staged files

   ```sh
   make lint
   ```

4. Autofix fixable errors for linting in staged files

   ```sh
   make lint_fix
   ```
