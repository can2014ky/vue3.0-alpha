# vue3.0-alpha
try to use vue3.0-alpha, form 0 to 1 by useing webpack building spa project by myself

# tips
```
"scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "serve": "webpack-dev-server --inline",
    "build": "webpack --inline"
},

// up is the same to bottom method

"scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "serve": "node_modules/.bin/webpack-dev-server",
    "build": "node_modules/.bin/webpack"
},
```