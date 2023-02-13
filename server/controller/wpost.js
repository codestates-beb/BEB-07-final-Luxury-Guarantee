const prisma = require("../prisma/prisma");
const { LuxTokenContract, web3 } = require("../web3s/web3")

module.exports = {
    wpost: async (req, res) => {
        if (!req.body.userId || !req.body.itemId || !req.body.category || !req.body.title || !req.body.content || !req.body.itemName) {
            res
                .send("not enough body params")
                .status(400).end();
        }
        const { userId, category, title, content, image_url, itemName } = req.body;
        await prisma.user.update({
            where: { id: userId },
            data: {
                post: {
                    create: {
                        category: category,
                        title: title,
                        content: content,
                        image_url: req.body.image_url,
                        itemName: req.body.itemName
                    }
                }
            }
        })
        const itemInfo = await prisma.luxury_goods.findUnique({
            where: { id: req.body.itemId }
        })

        const wallets = await prisma.user.findUnique({
            where: { id: req.body.userId }
        });
        const accounts = await web3.eth.getAccounts();
        const serverAd = accounts[0];



        if (req.body.category === "review") {
            await LuxTokenContract.methods.transfer(wallets.address, itemInfo.price * 0.01).send({ from: serverAd });

            const user_token = await LuxTokenContract.methods.balanceOf(wallets.address).call();

            await prisma.user.update({
                where: { id: req.body.userId },
                data: { tokenAmount: user_token }
            });

            await prisma.luxury_goods.update({
                where: { id: req.body.itemId },
                data: { isReview: true }
            })
        }
        return res.status(200).send("write post success");
    }
}