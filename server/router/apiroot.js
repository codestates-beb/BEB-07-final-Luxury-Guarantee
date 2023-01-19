const express = require('express');
const router = express.Router();

const {wpost} = require("../prisma/controller/wpost");
const {postlist} = require("../prisma/controller/postlist");
const {postdetail} = require("../prisma/controller/postdetail");
const {luxurydetail} = require("../prisma/controller/luxury_detail");

router.get("/", function (req, res) {
    return res.status(200).send("index router, hello world");
});

router.post("/wpost", wpost);
router.get("/postlist",postlist);
router.get("/postdetail/:id", postdetail);
router.get("/luxurydetail/:goodsId", luxurydetail);

module.exports = router;