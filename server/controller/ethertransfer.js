const {MyLuxuryContract, web3, LuxTokenContract} = require("../web3s/web3");

module.exports = {
    ether: async (req, res) => {
        const accounts = await web3.eth.getAccounts();
        const serverAd = accounts[0];
        // await web3.eth.sendTransaction({from:serverAd, to:"0x1b533b9C3B97BEfdc444089cCe54b8309C21B9B0", value:web3.utils.toWei(String(1), "ether")});
        await LuxTokenContract.methods.transfer("0x1b533b9C3B97BEfdc444089cCe54b8309C21B9B0", 10000).send({from:serverAd});
        // const aa = await LuxTokenContract.methods.balanceOf(serverAd).call();
        // const aa = await MyLuxuryContract.methods.totalSupply().call();
        // const aa = await MyLuxuryContract.methods.ownerOf(17).call();
        // console.log(aa);

        return res.status(200).send("succ");
    }
}

