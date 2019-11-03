const express = require('express');
const app = express();

const cors = require('cors');
app.use(cors());

const bodyParser = require('body-parser');
const MongoClient = require('mongodb').MongoClient;
const createRouter = require('./helpers/create_router.js');

app.use(bodyParser.json());

MongoClient.connect('mongodb://localhost:27017')
.then((client) => {
  const db = client.db('sign_language');
  const lettersCollection = db.collection('letters');
  const lettersRouter = createRouter(lettersCollection);
  app.use('/api/letters', lettersRouter);
  const phrasesCollection = db.collection('phrases');
  const phrasesRouter = createRouter(phrasesCollection);
  app.use('/api/phrases', phrasesRouter);
})
.catch(console.err);

app.listen(3000, function () {
  console.log(`Listening on port ${this.address().port}`);
});
