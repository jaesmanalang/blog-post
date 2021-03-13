const mongoose = require('mongoose');

module.exports.connectDB = async () => {
    try {
        const conn = await mongoose.connect(process.env.MONGODB_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useFindAndModify: true
        });

        console.log(`MongoDB connected on -> ${conn.connection.host}:${conn.connection.port}`.cyan.bold);
    } catch (err) {
        console.error(`Error: ${err.message}`);
        process.exit(1);
    }
}
