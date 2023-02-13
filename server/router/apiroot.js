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
const { reselllist, beforereselllist } = require("../controller/reselllist");
const { mypage } = require("../controller/mypage");
const { luxurylist, beforesalelist } = require("../controller/luxurylist");
const { addsellcompany } = require("../controller/addsellcompany");
const { addselluser } = require("../controller/addselluser");
const { directbuy } = require("../controller/directbuy");
const { manybuy } = require("../controller/manybuy");
const { cartdeletemany } = require("../controller/cartdelete");
const { cartdeleteone } = require("../controller/cartdelete");
const { ether } = require("../controller/ethertransfer");
const { getAccounts } = require('../utils/web3');
const { likeadd } = require("../controller/likeadd");
const { likedelete } = require("../controller/likedelete");
const { likelist } = require("../controller/likelist");
const { tokenTransfer } = require("../controller/transfer")
const { itemlist } = require("../controller/itemlist");
const { resellitemlist } = require("../controller/itemlist");

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
router.get("/beforesalelist/:id", beforesalelist);
router.get('/accounts', getAccounts);
router.get("/ether", ether);
router.get("/likelist/:id", likelist);
router.get("/beforereselllist/:id", beforereselllist);
router.post("/wpost", wpost);
router.post("/cart", cartadd);
router.post("/newcompany", companySignUp);
router.post("/newuser", userSignUp)
router.post("/luxury_register", luxury_register);
router.post('/signin', signIn);
router.post("/addsellcompany", addsellcompany);
router.post("/addselluser", addselluser);
router.post("/directbuy", directbuy);
router.post("/manybuy", manybuy);
router.post("/cartdeletemany", cartdeletemany);
router.post("/cartdeleteone", cartdeleteone);
router.post("/likeadd", likeadd);
router.post("/likedelete", likedelete);
router.post("/tokentransfer", tokenTransfer)
router.post("/itemlist", itemlist);
router.post("/resellitemlist", resellitemlist);


module.exports = router;