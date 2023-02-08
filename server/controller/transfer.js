const prisma = require("../prisma/prisma");
const { web3, LuxTokenContract } = require("../web3s/web3");

module.exports = {
    tokenTransfer: async (req, res) => {
        const accounts = await web3.eth.getAccounts();
        const serverAd = accounts[0];

        if (!req.body.userId || !req.body.amount) {
            return res
                .send("not enough body params")
                .status(400).end();
        }

        const users = await prisma.user.findUnique({
            where: { userId: req.body.userId },
        })

        await LuxTokenContract.methods.transfer(`${users.address}`, req.body.amount).send({ from: serverAd });

        const user_token = await LuxTokenContract.methods.balanceOf(users.address).call();

        await prisma.user.update({
            where: { userId: req.body.userId },
            data: {
                tokenAmount: user_token
            }
        }
        )

        return res.status(200).send("tranfersuccess");
    }

}

