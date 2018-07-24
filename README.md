# op-ui-2

> A Vue.js project

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report

# run unit tests
npm run unit

# run e2e tests
npm run e2e

# run all tests
npm test
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).

# Configuration
## Environment variables
Inside the root folder, create a .env with the following variables:
(note: a quirk is that all strings in the .env need to be enclosed like this '"STRING_HERE"')
````
PROD_GOOGLE_API_KEY: 
PROD_FIREBASE_DATABASE_URL: 
PROD_FIREBASE_PROJECT_ID: 
PROD_FIREBASE_STORAGE_BUCKET: 
PROD_FIREBASE_MESSAGING_SENDER_ID:
````
todo: use DEV_ variables instead (set in config/dev.env.js)