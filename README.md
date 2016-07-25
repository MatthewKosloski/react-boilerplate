#react-boilerplate
This is a minimal dev environment for building apps with React.

##Usage
  - Install node modules with `npm install`
  - Start the dev server with `npm start`
  - Navigate to `localhost:3000`
  - Generate compressed production code with `npm run build` (Not necessary for development)

##ES6 Concepts
A list of concepts in ES6 that you will use quite often.  These are prevalent in a lot of React code.
 - [Spread Operator](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_operator) — Allows an expression to be expanded in places where multiple arguments are expected. 
 - [Arrow Function](https://googlechrome.github.io/samples/arrows-es6/) — Essentially a regular JavaScript function but with a more concise syntax and lexically bound `this`. (Look especially at the CounterES5 example).
 - [Deconstructing Assignment](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment) — Makes it possible to extract data from arrays or objects into distinct variables.
 - [ES6 Modules](http://exploringjs.com/es6/ch_modules.html)

##Node Modules and Their Purpose
You will get the most out of this boilerplate if you understand all of the node modules and their role.  The following is a list of the node modules along with a candid description of the module.
  - `babel-core`, `babel-loader`, `babel-preset-es2015` — These allow you to use ES6 JavaScript.  These files tell Webpack to run our source files through Babel so we can use ES2015 features.
  - `babel-plugin-transform-object-rest-spread` — The longest name of an npm module ever.  It essentially allows you to use the new spread operator.  Lean more about what this is [here](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_operator).
  - `babel-preset-react` — Babel preset for all React plugins.
  - `express` — A web framework for Node.  It allows you to create servers, setup routes, create apis, render code from templates, etc.  It is very powerful.  Node without Express is boring.
  - `react`, `react-dom` — Importing React to use within the project.
  - `webpack` — This is a module bundling tool that also compiles code.  We use it in this boilerplate to turn our ES6 code back to JavaScript the browser can understand.  It also minifies our JavaScript and generates sourcemaps.  You can also compile sass with this tool, but I save that for Gulp.
  - `webpack-dev-middleware` — A small middleware for a connect-based middleware stack. It uses Webpack to compile assets in-memory and serve them.  (In our case, under /static)

##Helpful Links
  - [Webpack Docs](https://webpack.github.io/docs/usage.html)
  - [Babel](https://babeljs.io/docs/setup/#installation)
