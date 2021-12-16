# price-form

# Initialization of the project

  Project was developed with node 14.16.0, npm 6.14.11, yarn 1.22.10

  Clone and run:
  - `yarn`  /  `npm install`

## For development

  - `yarn start`  /  `npm start`

## To build production version

  - `yarn build`  /  `npm run build`

# Remarks:

Submit sends the form to: 'http://localhost:8000/tests/'. 
You may change it in /src/config.js

Price Brutto is not sent as it is calculated value, not an input form the client.


Price Netto validation does not work with 'locale' but simply replaces "," with "."
As a consequence the Price Brutto does not know about 'locale' and always displays: 
"."

