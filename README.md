# op-ui-2

# Prerequisites

## Up and Running
0. create an `.env` file in project root
1. cd into `app` and run `npm i`
2. run `npm run serve`

TODO: docker instructions


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

