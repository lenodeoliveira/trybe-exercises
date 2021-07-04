require('dotenv').config();
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const multer = require('multer');

const { PORT } = process.env;

const fs = require('fs');
const path = require('path');
const controllers = require('./controllers');
const middlewares = require('./middlewares');

const app = express();

app.use(
  cors({
    origin: `http://localhost:${PORT}`,
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Authorization'],
  })
);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/ping', controllers.ping);

function middlewarDuplicateName(name) {
  const nameFiles = fs.readdirSync(`${__dirname}/uploads`);
  return nameFiles.some((file) => file.includes(name));
}

const storage = multer.diskStorage({
  destination: (req, file, callback) => {
    callback(null, 'uploads');
  },
  filename: (req, file, callback) => {
    callback(null, `${Date.now()}-${file.originalname}`);
  },
});

const upload = multer({
  storage,
  fileFilter: (req, file, callback) => {
    if (file.originalname.split('.').pop() !== 'jpg') {
      return callback(new Error('Extension must be `png`'));
    }
    if (middlewarDuplicateName(file.originalname)) {
      req.validateName = true;
      return callback(null, false);
    }
    callback(null, true);
  },
});

app.post('/upload', upload.single('file'), (req, res) => {
  if (req.validateName) {
    return res.status(409).send({ error: { mesage: 'File already exists' } });
  }
  res.send('Ok!');
});

app.use(middlewares.error);

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
});
