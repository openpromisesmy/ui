# op-ui-2

## Up and Running
0. create an `.env` file in the `/app` folder
1. run `npm i`
2. run `npm run serve`
2. in your browser, open the localhost port as specified in the success message from the above step

## Build Setup

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).

# Configuration

## Environment variables

Inside the root folder, create a .env with the following variables:
(note: a quirk is that all strings in the .env need to be enclosed like this '"STRING_HERE"')

```

PROD_GOOGLE_API_KEY=
PROD_FIREBASE_DATABASE_URL=
PROD_FIREBASE_PROJECT_ID=
PROD_FIREBASE_STORAGE_BUCKET=
PROD_FIREBASE_MESSAGING_SENDER_ID=
VUE_APP_API_URL="http://localhost:5000/openpromises-8526c/us-central1"

```

## TODOS:

- use `DEV_` variables when in dev mode (set this in config/dev.env.js). Currently all the variables names are `PROD_`
- no component should call api directly. the store should be the interface. caching should also be implemented by the store and not the component.

```

```
