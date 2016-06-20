#Angular2 and Baqend Starter

This is an Angular2 and Baqend starter kit to build **blazingly fast single page applications**. It is based on the [Angular2 Webpack Starter](https://github.com/AngularClass/angular2-webpack-starter) and uses:

* [**Webpack**](http://webpack.github.io) as a great module bundler
* [**SASS**](http://sass-lang.com) as a CSS precompiler with cool features and syntax
* [**TypeScript**](https://www.typescriptlang.org) for typed JavaScript, ES6 features and because it is recommended for Angular2
* [**Bootstrap**](http://getbootstrap.com) for easy moder styling.
* [**Baqend**](http://www.baqend.com) as a fully managed backend service for backend-less development.

## How do I use the template?

1. Make sure you have [Node.js](https://nodejs.org/en/) installed on your machine
2. Clone this repository with `git clone https://github.com/Baqend/angular2-starter.git`
3. Install the project with `npm install`
4. Start the server with `npm start` (or `npm start:hmr` for *hot module replacement*)
5. Open the url in your browser [http://localhost:3000](http://localhost:3000), you should see a login/registration form as an example application

Your app is currently connected to a Baqend test instance called 'app-starter', which provides all common backend features like data and file storage, user authentication (used in the example), queries and push notifications among others.

To develop your own application 

1. Launch a free Baqend instance at [baqend.com](http://dashboard.baqend.com/regirster)
2. Change the app name in your projects `src/main.browsers.ts` from `app-starter` to your app name
3. Your angular app will automatically connect to your app instance.
4. To start accessing data or backend features, simply import the `db`-object with `import {db} from "../db";` and see the [Docs](http://www.baqend.com/guide/#accessing-data) for API details. 


## How does the Baqend integration work?

Before the Angular2 app starts, a connection to the Baqned instance is established in `src/main.browsers.ts`. `src/db.ts` exports the `db`-object that is the Baqend API and can be imported with `import {db} from "../db";`.

## Why you should use Angular2 with Baqend
