Image Search Abstraction Microservice
======================

# Description

This repo contains an exercise from [FreeCodecamp](https://www.freecodecamp.org/challenges/image-search-abstraction-layer) - a image search service. Users can input a query, and the service will return images that match that query.  

## Usage


### Running it locally

This project is hosted in [Heroku](https://secret-shelf-27952.herokuapp.com/date) - however you can run it locally by:

- Git cloning this repo:
```bash
git clone https://github.com/mangione77/timestamp-microservice
```

- _cd_'ing into it and running:
```bash
npm install
```

- Then:
```bash
node server/index
```

You need a running MongoDB, either locally or hosted in a site like [mLab](www.mlab.com).

Once you do, add a DB URL with the proper keys to a .env file:

```bash
DB_URL=mongodb://<mongoDBURL>:<mongoDBPORT>/<DB>
```

You will also need a Google CSE (Custom Search Engine) to get the API keys. Follow the instruccions [on this repo](https://github.com/vadimdemedes/google-images)
Then, add the keys to your .env file:

```bash
CSE_ID=<your API Key>
```
#### Dependencies

```js
  "dependencies": {
    "cors": "^2.8.4",
    "dotenv": "^4.0.0",
    "express": "^4.16.2",
    "google-images": "^2.1.0",
    "mongoose": "^4.13.7"
  }
```
