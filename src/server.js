const express = require('express');
const db = require('./config/db');
const postRoutes = require('./routes/postRoutes');
const HttpError = require('./utils/httpError');
const {notFound, errorHandler} = require('./middlewares/errorHandler');
const app = express();
const port = process.env.PORT || 5000;

require('dotenv').config();
require('colors');

db.connectDB();

app.use(express.json());

app.get('/', (req, res) => {
    res.send('API is running...');
})

app.use('/api/posts', postRoutes);
app.all('*', notFound);
app.use(errorHandler);


app.listen(port, () => {
    console.log(`Server is running on PORT: ${port}`.yellow.bold);
})

