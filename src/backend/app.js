const express = require('express');
const cors = require('cors');

const index = require('./routes/index');

const app = express();

const PORT = 8000;
app.use(cors());
app.use(express.urlencoded({ extended: false }));

app.use('/', index);

app.listen(PORT, () => console.log(`Express server started on port ${PORT}`));

module.exports = app;
