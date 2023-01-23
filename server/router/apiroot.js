const express = require('express');
const router = express.Router();
const { companySignUp, userSignUp } = require('../controller/signUp');

const { wpost } = require("../controller/wpost");
const { postlist } = require("../controller/postlist");
const { postdetail } = require("../controller/postdetail");
const { reselllist } = require("../controller/reselllist");
const { cart_add } = require("../controller/cart_add");
const { cartlist } = require("../controller/cartlist");

router.get("/", function (req, res) {
    return res.status(200).send("index router, hello world");
});

router.get("/postlist", postlist);
router.get("/postdetail/:id", postdetail);
router.get("/reselllist",reselllist);
router.get("/cart/:id",cartlist);
router.post("/wpost", wpost);
router.post("/newcompany", companySignUp);
router.post("/newuser", userSignUp)
router.post("/cart/", cart_add);

module.exports = router;