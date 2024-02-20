# UniDeals

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 16.2.9.

## How to setup UniDeals website
0. Before installing the project, make sure you have installed Angular CLI and Node.js. Then, execute the following command to install project dependencies:`$ npm install`, if error happens, use " npm install --force"

The dependencies for this project are as follows:

Node.js (>=12.x)

Express (>=4.18.1)

Jsonwebtoken (>=9.0.2)

Pg (>=8.11.3)

Stripe (>=10.7.0)

Also, make sure you have run the database file (see server/UniDeals.sql) on your own database. In the file (server/db.js), you need to change your database user, host, and password.(Ying's branch)

1. Run `ng serve` for a development server for Angular. Then navigate to http://localhost:4200/. The application will automatically reload if you change any of the source files.

2. Open a new terminal and navigate to the root folder of the server by using `cd server`.Then, install the 'cors' module using npm, you can do this by running the following command in your terminal or command prompt:'npm install cors'. Then, run `node server.js` to start the Node.js server.


Now you should be able to view the project.


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
