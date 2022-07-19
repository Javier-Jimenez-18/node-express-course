// npm - global command, comes with node
// npm --version or --v

// local dependency - use it only in this particular project
// npm (i or install) <packageName>

// glogal dependency - use it in any project
// npm install -g <packageName>
// sudo npm i -g <packageName> (for Mac)

// package.json - manifest file (stores important info about project/package)
// manual approach (create package.json in the root, create properties etc)
// npm init (step by step, press enter to skip)
// npm init -y (everything default)

// devDependencies - npm i <packageName> -D (or --save-dev)

//"scripts": {
//    "start": "nodemon app.js" 
//             or
//    "start": "node app.js",
//    "dev": "nodemon app.js"
// }

// npm start, npm run nameOfCommand (ex. npm run dev)

// npm uninstall <packageName>

const _ = require('lodash');

const items = [1, [2, [3, [4]]]];
const newItems = _.flattenDeep(items);
console.log(newItems);
console.log('hello world')