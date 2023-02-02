const express = require('express');
const router = express.Router();
const { companySignUp, userSignUp } = require('../controller/signUp');
const { signIn } = require('../controller/signIn');

const { wpost } = require("../controller/wpost");
const { postlist } = require("../controller/postlist");
const { postdetail } = require("../controller/postdetail");
const { luxurydetail } = require("../controller/luxurydetails");
const { luxury_register } = require("../controller/luxury_register");
const { cartadd } = require("../controller/cartadd");
const { cartlist } = require("../controller/cartlist");
const { reselllist } = require("../controller/reselllist");
const { mypage } = require("../controller/mypage");
const { luxurylist } = require("../controller/luxurylist");
const { addsell } = require("../controller/addsell");
const { directbuy } = require("../controller/directbuy");

const { getAccounts } = require('../utils/web3');

router.get("/", function (req, res) {
    return res.status(200).send("index router, hello world");
});

router.get("/postlist", postlist);
router.get("/postdetail/:id", postdetail);
router.get("/luxurydetail/:goodsId", luxurydetail);
router.get("/cart/:id", cartlist);
router.get("/reselllist", reselllist);
router.get("/mypage/:id", mypage);
router.get("/luxurylist", luxurylist);
router.get('/accounts', getAccounts);
router.post("/wpost", wpost);
router.post("/cart", cartadd);
router.post("/newcompany", companySignUp);
router.post("/newuser", userSignUp)
router.post("/luxury_register", luxury_register);
router.post('/signin', signIn);
router.post("/addsell", addsell);
router.post("/directbuy", directbuy);

module.exports = router;