const { MyLuxuryContract, web3, LuxTokenContract } = require("../web3s/web3");

module.exports = {
    ether: async (req, res) => {
        const accounts = await web3.eth.getAccounts();
        const serverAd = accounts[0];
        await web3.eth.sendTransaction({ from: serverAd, to: "0xc982163587d41cB96110f195f05406009e82fD13", value: 388530000000000 });
        // await web3.eth.sendTransaction({ from: serverAd, to: "0x1Ea54BEC7a98E1439906E2B644B5E82350A99B40", value: web3.utils.toWei(String(1), "ether") });
        // await LuxTokenContract.methods.transfer("0x1Ea54BEC7a98E1439906E2B644B5E82350A99B40", 1000000000).send({ from: serverAd });
        // const aa = await LuxTokenContract.methods.balanceOf(serverAd).call();
        // const aa = await MyLuxuryContract.methods.totalSupply().call();
        // const aa = await MyLuxuryContract.methods.ownerOf(17).call();
        // console.log(aa);

        return res.status(200).send("succ");
    }
}

