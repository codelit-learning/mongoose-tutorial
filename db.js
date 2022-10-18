const mongoose = require('mongoose');

(async function connectToDatabase() {
    try {
        await mongoose.connect(process.env.DB_STRING);
        console.log("Connected to the database");
    } catch (err) {
        console.log(err);
    }
})();