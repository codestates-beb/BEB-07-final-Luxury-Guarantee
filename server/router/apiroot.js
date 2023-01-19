const express = require('express');
const router = express.Router();
const { adminSignUp } = require('../controller/adminSignUp');

const { wpost } = require("../controller/wpost");
const { postlist } = require("../controller/postlist");
const { postdetail } = require("../controller/postdetail");
const { luxurydetail } = require("../controller/luxury_detail");

router.get("/", function (req, res) {
    return res.status(200).send("index router, hello world");
});

router.post("/wpost", wpost);
router.get("/postlist", postlist);
router.get("/postdetail/:id", postdetail);
router.get("/luxurydetail/:goodsId", luxurydetail);
router.post("/newadmin", adminSignUp);

module.exports = router;