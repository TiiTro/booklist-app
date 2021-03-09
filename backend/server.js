const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

// enables using .env for environmental variables
require('dotenv').config();

//creating an express server
const app = express();
const port = process.env.PORT || 5000;

//setting up the middleware
app.use(cors());
//allows to pars json
app.use(express.json());

// connecting to database
// making uri to be our mongodb atlas uri stored in .env
const uri = process.env.ATLAS_URI;
mongoose.connect(uri, { useNewUrlParser: true, useCreateIndex: true }
);
const connection = mongoose.connection;
connection.once('open', () => {
    console.log("MongoDB database connection established succesfully");
});

//requiring the route-file
const booksRouter = require('./routes/books');
//connecting the route-files
app.use('/books', booksRouter);

// running the server
app.listen(port, () => {
    console.log(`Server running on port', ${port}`);
});