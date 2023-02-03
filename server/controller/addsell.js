const prisma = require("../prisma/prisma");
const {MyLuxuryContract, LuxTokenContract, web3} = require("../web3s/web3");
require("dotenv").config();

module.exports = {
    addsell: async (req, res) => {
        if(!req.body.id || !req.body.image_url || !req.body.content || !req.body.price) {
            return res.status(400).send("not enough params");
        }

        const valid = await prisma.luxury_goods.findMany({
            where: {
                id:req.body.id,
                isSelling: true
            }
        });
        if(valid.length===1) {
            return res.status(400).send("already selling");
        }


        const goods = await prisma.luxury_goods.update({
            where: {id: req.body.id},
            data: {
                image_url: req.body.image_url,
                description: req.body.content,
                price: req.body.price,
                isSelling: true
            }
        })

        const users = await prisma.user.findUnique({
            where: {id:goods.userId}
        })

        const accounts = await web3.eth.getAccounts();
        const serverAd = accounts[0];
        // await LuxTokenContract.methods.transfer(users.address, 1000).send({from:serverAd});

        await web3.eth.personal.unlockAccount(users.address, users.password, 600);
        await LuxTokenContract.methods.transfer(serverAd, goods.price*0.05).send({from:users.address});

        const user_token = await LuxTokenContract.methods.balanceOf(users.address).call();
        const user_ether = web3.utils.fromWei(await web3.eth.getBalance(users.address), 'ether')
        await prisma.user.update({
            where: {id:users.id},
            data: {
                tokenAmount: user_token,
                ethAmount: user_ether
            }
        });

        return res.status(200).send("addsell success");
    }
}