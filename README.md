<<<<<<< HEAD
# Store

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 16.2.9.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.
=======
# UniDeals

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 16.2.9.

## How to setup UniDeals website

Before installing the project, please ensure you have the following software installed:

Node.js (>=12.x)

Angular CLI

### Installing Node.js and Angular CLI
1. Install Node.js:

For macOS users, you can use Homebrew to install Node.js:`brew install node`

2. Install Angular CLI globally:`npm install -g @angular/cli`

### Installing project dependencies

1. Navigate to the project directory in your terminal or command prompt.

2. Execute the following command to install project dependencies:`npm install`

   If an error occurs during installation, you can try using the --force flag:`npm install --force`

3. Install additional dependencies: `npm install cors`

The dependencies for this project are as follows:

Node.js (>=12.x)

Express (>=4.18.1)

Jsonwebtoken (>=9.0.2)

Pg (>=8.11.3)

Stripe (>=10.7.0)

### Setting up the database

1. Run the database file server/UniDeals.sql on your own database management system(PostgreSQL).
  
3. In the file server/db.js, make sure to update the database connection details including user, host, and password.(Ying's branch)

### Running the development server

1. Start the Angular development server:`ng serve`

Navigate to http://localhost:4200/ in your web browser.

2. Open a new terminal and navigate to the root folder of the server (server/).

3. Start the Node.js server:`node server.js`


Now you should be able to view and interact with the UniDeals website.

>>>>>>> b5676b5c67b9e4c0e4c2d01490f0533b4a176bf6

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
