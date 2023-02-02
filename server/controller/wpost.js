const prisma = require("../prisma/prisma");
const { LuxTokenContract, web3 } = require("../web3s/web3")

module.exports = {
    wpost: async (req, res) => {
        if (! req.body.userId || !req.body.category || !req.body.title || !req.body.content) {
            return res.status(400).send("not enough parameter");
        }
        const { userId, category, title, content } = req.body;
        const post = await prisma.user.update({
            where: { id: userId },
            data: {
                post: {
                    create: {
                        category: category,
                        title: title,
                        content: content
                    }
                }

            }
        })

        const wallets = await prisma.user.findUnique({
            where: {id: req.body.userId}
        });
        const accounts = await web3.eth.getAccounts();
        const serverAd = accounts[0];

        if(req.body.category === "review") {
            console.log("리뷰 토큰 줄게요");
            await LuxTokenContract.methods.transfer(wallets.address, 100).send({from:serverAd});

            const user_token = await LuxTokenContract.methods.balanceOf(wallets.address).call();

            await prisma.user.update({
                where: {id:req.body.userId},
                data: {tokenAmount: user_token}
            });
        }
        return res.status(200).send("write post success");
    }
}