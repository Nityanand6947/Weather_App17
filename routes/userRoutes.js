const express = require("express");
const { userController } = require("../controllers/userController");

//router object
const router = express.Router();

//Searching weather
router.get('/weather', userController);



module.exports = router;