const express = require('express');
const router = express.Router();
const { companySignUp, userSignUp } = require('../controller/signUp');

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
router.post("/newcompany", companySignUp);
router.post("/newuser", userSignUp)

module.exports = router;