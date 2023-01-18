const express = require('express');
const router = express.Router();

// router.use('/')
router.get("/", function (req, res) {
    return res.status(200).send("index router, hello world");
});

module.exports = router;