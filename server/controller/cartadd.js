const prisma = require("../prisma/prisma");

module.exports = {
    cartadd: async (req, res) => {
        if(!req.body.goodsId || !req.body.userId || !req.body.image_url || !req.body.price) {
            return res.status(400).send("not enough params");
        }

        const item = await prisma.user.update({
            where: { id: req.body.userId },
            data: {
                Cart: {
                    create: {
                        goodsId: req.body.goodsId,
                        image_url: req.body.image_url,
                        price: req.body.price
                    }
                }
            }
        })
        return res.status(200).send("cartadd success");
    }
}