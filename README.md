# 🚧 Shepherd Broker Dashboard

This full stack web application allows a broker to complete an application for a client.

## Demo (Local):
> Note: This application was developed on a machine using an ARM processor, which may lead to unexpected issues during building on Linux/other systems.

### Pre-Installation System Requirements:
- Node.js (v16)
- npm (v6)
- Git (v2)
- PostgreSQL (v13)

### Installation:
1. `git clone https://github.com/foodforcode/hi_shepherd.git`
2. navigate to root directory *hi_shepherd/*
3. `psql -d test -a -f ./database/schema.sql` in your terminal to create PostgreSQL database and tables
3. `npm install` in your terminal to install all dependencies.
4. `npm start` in your terminal to start server and build webpack bundle.

### View in Browser:
Navigate to localhost:3000 in your browser to view and use dashboard

### Completed Requirements:
1. ✅ A simple web application for a broker to use.

    A simple, no-frills application that is simple to use.

2. ✅ A broker lands on the home page and is shown 2 application options. These options are coming from an API.

    An API is providing 2 application options to the broker.

3. ✅ A broker clicks on an option and is shown a form with the respective fields.

    Upon clicking, broker is shown the field inputs for the respective forms

4. ✅ The broker submits the form upon completion.

    The inputs are validated in the front end using required statments and type attributes.

    The data is saved to a PostgreSQL database and prevented from sql injection attacks.

    An alert is presented to display successful submission or error.

    Upon successful submission, a disabled form is displayed to present application information.

5. ✅ The broker is allowed to submit a form only if they have an “auth” cookie with the value “shepherd”.

    Form submit only allowed for brokers authorized with headers ```{ cookie: shepherd }```

6. ✅ A working localhost demo.

    The demo application can be tested locally at localhost:3000

* Bonus:
   * Node.js
   * Express.js
   * React.js
   * Saving to PostgreSQL database
   * Peep the tab of the web application for a familiar favicon!


### Architecture:
- Front end:

> React w/ hooks: A modern, popular front end framework used to create this Single Page Application that allows for seamless re-rendering of data without reloading. Hooks allow for the simple state management this project required, without use of additional libraries. React is fast and highly scalable.


> Reactstrap powered by Bootstrap: A toolkit for building mobile-first sites with responsive components. Provides increased accesibility which is a standard and requirement. Great for getting this mvp completed in a timely manner and keep components uniform. Easily integrates with Sass.


> Axios: A promise-based library for making HTTP requests and handling responses.


- Back end:
> Node/Express server: A powerful, lighweight, non-blocking server to handle requests incoming HTTP request for mail and server static assests. Highly scalable to serve other data and make third party API or database requests.


> Nodemon: A utility used for ease in development by restarting application upon file changes. Efficient for viewing changes during development.


> node-postgres & pg-format: Modules for interfacing with postgreSQL database and write dyanamic query strings useful in the context of these unique, dynamic forms with protection against sql injections.


- Build tools:


> Webpack: This webpack is a custom configuration for this broker dashboard application, chosen over Create React App for customizabization and scalability. Webpack with Babel is used as a compiler and transpiler and bundler to allow browers to read code written in jsx as js in one convenient but large bundle. Webpack can easily be configured for the addition of Sass and other libraries as needed during scaling.

### Technologies:
* [React v17](https://reactjs.org/) + [Webpack v5](https://webpack.js.org/)
* [Reactstrap v8.10.0](https://reactstrap.github.io/)
* [Axios v0.21.4](https://www.npmjs.com/package/axios)
* [Node v16.9.1](https://nodejs.org/dist/latest-v16.x/docs/api/) + [Nodemon v2.0.12](https://www.npmjs.com/package/nodemon) + [Express v4.17.1](https://expressjs.com/)
* [node-postgres](https://www.npmjs.com/package/pg) + [pg-format](https://www.npmjs.com/package/pg-format)

### Future Development:
1. Add test Coverage
2. Add PDF generation upon form submission
3. Add React Router for true 'redirect' to form page
4. Implement TypeScript for type checking
5. Implement GraphQL:
  Provides more flexiblity to fetch data
  Allows additional type safety
  Prevents overfetching
  Limits bandwith and waterfall requests for faster loads particularly on mobile
6. Add regex for increased, specific validation
7. Add additional UI design and micro-interactions.
