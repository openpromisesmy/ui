# op-ui-2

## Up and Running

1. run `npm ci`
2. in your browser, open `localhost:8080`

## Build Setup

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).

# Configuration

## Environment variables

Inside the root folder, create a .env with the following variables:
(note: a quirk is that all strings in the .env need to be enclosed like this '"STRING_HERE"')

```

PROD_GOOGLE_API_KEY:
PROD_FIREBASE_DATABASE_URL:
PROD_FIREBASE_PROJECT_ID:
PROD_FIREBASE_STORAGE_BUCKET:
PROD_FIREBASE_MESSAGING_SENDER_ID:

```

## TODOS:

- use `DEV_` variables when in dev mode (set this in config/dev.env.js). Currently all the variables names are `PROD_`

```

```
