const express = require('express');
const morgan = require("morgan");
const cors = require("cors");
const dotenv = require('dotenv');
const bodyParser = require("body-parser");

//routh path
const userRouth = require('./routes/userRoutes');

//dotenv
dotenv.config();

//rest Objects
const app = express();

//middleware
app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(morgan('dev'));

//api routes
app.use('/api/search', userRouth);


//listen
app.listen(5000, () => {
    console.log("This server is running on port 5000.");
});