const express = require('express');
const router = express.Router();
const { adminSignUp } = require('../controller/adminSignUp');

const { wpost } = require("../controller/wpost");
const { postlist } = require("../controller/postlist");
const { postdetail } = require("../controller/postdetail");
const { luxurydetail } = require("../controller/luxurydetails");
const {luxurysellingdetail} = require("../controller/luxurysellingdetail");
const {resellsellingdetail} = require("../controller/resellsellingdetail");
const {cart_add} = require("../controller/cart_add");
const {cartlist} = require("../controller/cartlist");

router.get("/", function (req, res) {
    return res.status(200).send("index router, hello world");
});

router.get("/postlist", postlist);
router.get("/postdetail/:id", postdetail);
router.get("/luxurydetail/:goodsId", luxurydetail);
router.get("/luxurysellingdetail/:goodsId", luxurysellingdetail);
router.get("/resellsellingdetail/:goodsId",resellsellingdetail);
router.get("/cart/:id",cartlist);
router.post("/wpost", wpost);
router.post("/newadmin", adminSignUp);
router.post("/cart",cart_add);


module.exports = router;