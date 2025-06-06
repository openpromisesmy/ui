# op-ui-2

# Prerequisites

## Up and Running
0. create an `.env` file in the project root
1. run `npm i`
2. run `npm run dev`


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

## Directory structure

The project is organized into two main folders:

- `public/` contains static assets such as `index.html` and the favicon.
- `src/` holds the application code. Notable subfolders include `components/` for UI components, `views/` for page-level views, `store/` for Vuex state management, and `router/` for route definitions.

All configuration and build files live in the project root alongside this README.

## Archive

A banner on the home page explains that the project is archived. It reproduces the previous landing page content and can be closed so the URL never changes.

