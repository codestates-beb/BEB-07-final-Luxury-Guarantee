const prisma = require("../prisma/prisma");
const { MyLuxuryContract, LuxTokenContract, web3 } = require("../web3s/web3");

module.exports = {
    directbuy: async (req, res) => {
        if (!req.body.userId || !req.body.goodsId) {
            return res
                .send("not enough body params")
                .status(400).end();
        }

        const goods = await prisma.luxury_goods.findUnique({
            where: { id: req.body.goodsId }
        })

        const buy_user = await prisma.user.findUnique({
            where: { id: req.body.userId }
        });
        const sell_user = await prisma.user.findUnique({
            where: { id: goods.userId }
        })

        const token_valid = await LuxTokenContract.methods.balanceOf(buy_user.address).call();
        if (token_valid < goods.price) {
            return res
                .send("not enough token from buy_user")
                .status(400).end();
        }

        if (sell_user.id == buy_user.id) {
            return res
                .send("can't buy your goods")
                .status(400).end();
        }

        const accounts = await web3.eth.getAccounts();
        const serverAd = accounts[0];
        const buyEthers = web3.utils.fromWei(await web3.eth.getBalance(buy_user.address));

        const sellEthers = web3.utils.fromWei(await web3.eth.getBalance(sell_user.address));

        if (Number(buyEthers) === 0) await web3.eth.sendTransaction({ from: serverAd, to: buy_user.address, value: 2000000000000000 });
        else await web3.eth.sendTransaction({ from: serverAd, to: buy_user.address, value: 431700000000000 });

        console.log(sellEthers)
        console.log(sell_user)
        if (Number(sellEthers) === 1068540000000000) await web3.eth.sendTransaction({ from: serverAd, to: sell_user.address, value: 931460000000000 });
        else await web3.eth.sendTransaction({ from: serverAd, to: sell_user.address, value: 431700000000000 });
        console.log(sellEthers)
        // await web3.eth.sendTransaction({from:serverAd, to:sell_user.address, value:web3.utils.toWei(String(1), "ether")});
        // await LuxTokenContract.methods.transfer(buy_user.address, 1000).send({from:serverAd});

        await web3.eth.personal.unlockAccount(buy_user.address, buy_user.password, 600);
        await web3.eth.personal.unlockAccount(sell_user.address, sell_user.password, 600);
        console.log(sellEthers)


        //보내는 계정의 지갑에 이더가 있어야 트랜잭션을 날릴 수 있음. (transfer둘다)
        await LuxTokenContract.methods.transfer(sell_user.address, goods.price).send({ from: buy_user.address });
        await MyLuxuryContract.methods.transferFrom(sell_user.address, buy_user.address, goods.tokenId).send({ from: sell_user.address, gas: '1000000' });
        console.log(sellEthers)
        const buy_token = await LuxTokenContract.methods.balanceOf(buy_user.address).call();
        const buy_ether = await web3.eth.getBalance(buy_user.address);
        const sell_token = await LuxTokenContract.methods.balanceOf(sell_user.address).call();
        const sell_ether = await web3.eth.getBalance(sell_user.address);

        await prisma.luxury_goods.update({
            where: { id: req.body.goodsId },
            data: { userId: buy_user.id }
        });

        await prisma.user.update({
            where: { id: buy_user.id },
            data: {
                tokenAmount: buy_token,
                ethAmount: buy_ether
            }
        });
        await prisma.user.update({
            where: { id: sell_user.id },
            data: {
                tokenAmount: sell_token,
                ethAmount: sell_ether
            }
        });
        return res.status(200).send("directbuy success");
    }
}
