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

Inside the `config` folder you need to create the following:
- `prod.env.js`
- `dev.env.js`
- `test.env.js`
The variables trickle down. From prod to dev, from dev to test.
Set these variables:
````
NODE_ENV:
GOOGLE_API_KEY: 
FIREBASE_AUTH_DOMAIN: 
FIREBASE_DATABASE_URL: 
FIREBASE_PROJECT_ID: 
FIREBASE_STORAGE_BUCKET: 
FIREBASE_MESSAGING_SENDER_ID:
````
