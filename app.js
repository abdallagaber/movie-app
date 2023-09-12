const express = require('express');
const mongoose = require('mongoose');
const fs = require('fs');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 3000;
const mongoURI = process.env.MONGODB_URI;

mongoose.connect(mongoURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log('Connected to MongoDB');
}).catch((err) => {
    console.error('Error connecting to MongoDB', err);
});


app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

// Middleware to log requests
app.use((req, res, next) => {
    const logFilePath = './log.txt'
    const log = `${new Date().toISOString()} - ${req.method} ${req.url}\n`;

    fs.access(logFilePath, fs.constants.F_OK, (err) => {
        if (err) {
            // Create the file if it doesn't exist
            fs.writeFile(logFilePath, '', (err) => {
                if (err) {
                    console.error('Error creating log file:', err);
                }
            });
        }

        // Append the log entry to the file
        fs.appendFile(logFilePath, log, (err) => {
            if (err) {
                console.error('Error writing to log file:', err);
            }
        });
    });

    next();
});

// Routes
const movieRoutes = require('./routes/movies');

app.use('/', movieRoutes);

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
