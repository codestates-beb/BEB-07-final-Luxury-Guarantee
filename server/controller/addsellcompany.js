const prisma = require("../prisma/prisma");
const { LuxTokenContract, web3 } = require("../web3s/web3");
require("dotenv").config();

module.exports = {
    addsellcompany: async (req, res) => {
        console.log(req.body)
        if (!req.body.id || !req.body.content || !req.body.price) {
            return res
                .send("not enough body params")
                .status(400).end();
        }

        const valid = await prisma.luxury_goods.findMany({
            where: {
                id: req.body.id,
                isSelling: true
            }
        });
        if (valid.length === 1) {
            return res
                .send("already selling")
                .status(400).end();
        }

        const goods_valid = await prisma.luxury_goods.findUnique({
            where: {id: req.body.id}
        });

        const users = await prisma.user.findUnique({
            where: { id: goods_valid.userId }
        })

        if(Number(users.tokenAmount) < goods_valid.price) {
            return res.send("not enough token").status(400).send();
        }

        let isResells = false;
        if(users.isCompany===false) isResells = true;
        
        const goods = await prisma.luxury_goods.update({
            where: { id: req.body.id },
            data: {
                content: req.body.content,
                price: req.body.price,
                isResell: isResells,
                isSelling: true
            }
        })

        const accounts = await web3.eth.getAccounts();
        const serverAd = accounts[0];
        // await LuxTokenContract.methods.transfer(users.address, 1000).send({from:serverAd});

        await web3.eth.personal.unlockAccount(users.address, users.password, 600);
        await LuxTokenContract.methods.transfer(serverAd, goods.price * 0.05).send({ from: users.address });

        const user_token = await LuxTokenContract.methods.balanceOf(users.address).call();
        const user_ether = web3.utils.fromWei(await web3.eth.getBalance(users.address), 'ether')
        await prisma.user.update({
            where: { id: users.id },
            data: {
                tokenAmount: user_token,
                ethAmount: user_ether
            }
        });

        return res.status(200).send("addsell success");
    }
}