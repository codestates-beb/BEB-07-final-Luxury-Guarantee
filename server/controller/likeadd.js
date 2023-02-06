const prisma = require("../prisma/prisma");

module.exports = {
    likeadd: async (req, res) => {
        if(!req.body.userId || !req.body.goodsId) {
            return res.send("not enough body params").status(400).end();
        }
        const goods = await prisma.luxury_goods.findUnique({
            where: { id: req.body.goodsId }
        })
        const item = await prisma.user.update({
            where: { id: req.body.userId },
            data: {
                likes: {
                    create: {
                        goodsId: goods.id,
                        image_url: goods.image_url,
                        price: goods.price
                    }
                }
            }
        })

        const aa = await prisma.luxury_goods.update({
            where: {id: req.body.goodsId},
            data: {
                likecnt: {
                    increment: 1
                }
            }
        });

        return res.status(200).send("likeadd success");
    }
}