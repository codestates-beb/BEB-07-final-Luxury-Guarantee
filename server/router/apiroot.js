const express = require('express');
const router = express.Router();
const { companySignUp, userSignUp } = require('../controller/signUp');

const { wpost } = require("../controller/wpost");
const { postlist } = require("../controller/postlist");
const { postdetail } = require("../controller/postdetail");
const { luxurydetail } = require("../controller/luxurydetails");
const { luxury_register } = require("../controller/luxury_register");
const { cart_add } = require("../controller/cart_add");
const { cartlist } = require("../controller/cartlist");
const { reselllist } = require("../controller/reselllist");


router.get("/", function (req, res) {
    return res.status(200).send("index router, hello world");
});

router.get("/postlist", postlist);
router.get("/postdetail/:id", postdetail);
router.get("/luxurydetail/:goodsId", luxurydetail);
router.get("/cart/:id", cartlist);
router.get("/reselllist", reselllist);
router.post("/wpost", wpost);
router.post("/cart", cart_add);
router.post("/newcompany", companySignUp);
router.post("/newuser", userSignUp)
router.post("/luxury_register", luxury_register);

module.exports = router;