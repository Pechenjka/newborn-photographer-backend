require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const helmet = require('helmet');
const { PORT } = require('./config');

const router = require('./routes/index');
const { requestLogger, errorLogger } = require('./middlewares/logger');
const errorHandler = require('./middlewares/errorHandler');
const limiter = require('./middlewares/rateLimit');

const app = express();

app.use(helmet());
app.use(cors());
app.use(express.json({ extended: true }));
app.use(bodyParser.json());
app.use(requestLogger);
app.use(limiter);
app.use('/', router);
app.use(errorLogger);
app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
});
