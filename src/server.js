const express = require('express');
const postRoutes = require('./routes/postRoutes');

const app = express();
const port = process.env.PORT || 5000;

app.get('/', (req, res) => {
    res.send('API is running...');
})

app.use('/api/posts', postRoutes);


require('colors');
app.listen(port, () => {
    console.log(`Server is running on PORT: ${port}`.yellow.bold);
})

