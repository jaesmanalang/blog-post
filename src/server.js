const express = require('express');
require('colors');

const app = express();
const port = process.env.PORT || 5000;

app.get('/', (req, res) => {
    res.send('API is running...');
})

app.listen(port, () => {
    console.log(`Server is running on PORT: ${port}`.yellow.bold);
})
