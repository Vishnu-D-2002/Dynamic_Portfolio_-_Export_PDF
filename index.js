const mongoose = require('mongoose');
const express = require('express');
const cors = require('cors');
const { MONGODB_URL, PORT } = require('./config');
const userRoute = require('./Routes/userRoute');

const app = express();

mongoose.set('strictQuery', false);

console.log('connecting to MONGODB...');
mongoose.connect(MONGODB_URL)
    .then(() => {
        console.log('connected to MONGODB...');
        app.listen(PORT, () => {
            console.log(`Server is running http://localhost:${PORT}`);
        });
    });

app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: true }));

app.use('/', userRoute);
