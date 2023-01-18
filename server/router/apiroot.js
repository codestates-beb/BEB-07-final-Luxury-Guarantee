const express = require('express');
const router = express.Router();
const { adminSignUp } = require('../controller/adminSignUp');

router.get("/", function (req, res) {
    return res.status(200).send("index router, hello world");
});

router.post("/newadmin", adminSignUp);

module.exports = router;