const prisma = require("../prisma/prisma");
const { MyLuxuryContract, LuxTokenContract, web3 } = require("../web3s/web3");

module.exports = {
    manybuy: async (req, res) => {
        if (!req.body.userId || !req.body.cartIds) {
            return res
                .send("not enough body params")
                .status(400).end();
        }
        for (let i = 0; i < req.body.cartIds.length; i++) {
            const carts = await prisma.cart.findUnique({
                where: { id: req.body.cartIds[i].id }
            });
            await prisma.cart.delete({
                where: { id: req.body.cartIds[i].id }
            });

            const goods = await prisma.luxury_goods.findUnique({
                where: { id: carts.goodsId }
            });

            const buy_user = await prisma.user.findUnique({
                where: { id: req.body.userId }
            });
            const sell_user = await prisma.user.findUnique({
                where: { id: goods.userId }
            });

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

            // const accounts = await web3.eth.getAccounts();
            // const serverAd = accounts[0];
            // await web3.eth.sendTransaction({from:serverAd, to:sell_user.address, value:web3.utils.toWei(String(1), "ether")});
            // await LuxTokenContract.methods.transfer(buy_user.address, 1000).send({from:serverAd});

            await web3.eth.personal.unlockAccount(buy_user.address, buy_user.password, 600);
            await web3.eth.personal.unlockAccount(sell_user.address, sell_user.password, 600);

            //보내는 계정의 지갑에 이더가 있어야 트랜잭션을 날릴 수 있음. (transfer둘다)
            await LuxTokenContract.methods.transfer(sell_user.address, goods.price).send({
                from: buy_user.address,
                gasPrice: "0",
                gas: 1000000
            });

            await MyLuxuryContract.methods.approve(buy_user.address, goods.tokenId).send({
                from: sell_user.address,
                gasPrice: "0",
                gas: 1000000
            });

            if (await MyLuxuryContract.methods.ownerOf(goods.tokenId).call() !== sell_user.address) {
                throw new Error("The ownership of the token has already transferred.");
            }

            await MyLuxuryContract.methods.transferFrom(sell_user.address, buy_user.address, goods.tokenId).send({
                from: sell_user.address, gasPrice: "0",
                gas: 1000000
            });

            const buy_token = await LuxTokenContract.methods.balanceOf(buy_user.address).call();
            const buy_ether = await web3.eth.getBalance(buy_user.address);
            const sell_token = await LuxTokenContract.methods.balanceOf(sell_user.address).call();
            const sell_ether = await web3.eth.getBalance(sell_user.address);

            await prisma.luxury_goods.update({
                where: { id: goods.id },
                data: {
                    userId: buy_user.id,
                    isSelling: false,
                    isReview: false
                }
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
        }
        return res.status(200).send("buy success");
    }
}