# Front-end Assignment: Progress-bars Demo

# git repository: 
https://github.com/georgehowell/progress-bars_v3

# live version:
http://georgehowell.com.au/Front-end-test

# node_modules:
npm init (see package.json for dependencies)
npm install gulp-util --save-dev
npm install node-sass gulp-sass --save-dev 
npm install gulp-autoprefixer --save-dev
npm install gulp-minify-css --save-dev
npm install gulp-rename gulp-concat gulp-uglify gulp-cssnano --save-dev
npm install --save-dev @babel/core @babel/preset-env
### minfied version throws error ("ReferenceError: regeneratorRuntime is not defined"). Need to install polyfill: 
npm install --save-dev babel-polyfill

# eslint:
npm install eslint --save-dev
## set up a configuration file:
./node_modules/.bin/eslint --init
## add rules to .eslintrc.json
    "rules": {
        "semi": ["error", "always"],
        "quotes": ["error", "double"]
    }



# Mocha Unit Tests
## global install
npm install mocha -g
## project install
npm install mocha --save-dev
## chai for extending libraries:
npm i --save-dev chai

# run tests with the following command
npm run test

# other run (from CLI) as follows:
"minify": "gulp minify"
"gulp": "gulp"
"lint": "eslint"
