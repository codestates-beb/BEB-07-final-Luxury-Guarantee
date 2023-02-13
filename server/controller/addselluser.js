const prisma = require("../prisma/prisma");
const { LuxTokenContract, web3 } = require("../web3s/web3");
require("dotenv").config();

module.exports = {
    addselluser: async (req, res) => {
        if (!req.body.id || !req.body.content || !req.body.price) {
            return res.send("not enough body params").status(400).end();
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
        const resellItem = await prisma.luxury_goods.findUnique({
            where: { id: req.body.id }
        })
        const users = await prisma.user.findUnique({
            where: { id: resellItem.userId }
        })

        const token_valid = await LuxTokenContract.methods.balanceOf(users.address).call();

        if (Number(token_valid) < req.body.price * 0.05) {
            return res.send("not enough token").status(400).send();
        }

        let isResells = false;
        if (users.isCompany === false) isResells = true;

        const goods = await prisma.luxury_goods.update({
            where: { id: req.body.id },
            data: {
                content: req.body.content,
                images: req.body.images,
                price: req.body.price,
                isResell: isResells,
                isSelling: true
            }
        })
        const accounts = await web3.eth.getAccounts();
        const serverAd = accounts[0];

        await web3.eth.personal.unlockAccount(users.address, users.password, 600);
        await LuxTokenContract.methods.transfer(serverAd, goods.price * 0.05).send({
            from: users.address,
            gasPrice: "0",
            gas: 0
        });

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