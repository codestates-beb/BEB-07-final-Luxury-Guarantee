const prisma = require("../prisma/prisma");

module.exports = {
    likedelete: async (req, res) => {
        if (!req.body.goodsId || !req.body.userId) {
            return res.send("not enough body params").status(400).end();
        }

        const like1 = await prisma.like.findMany({
            where: { goodsId: req.body.goodsId }
        })
        await prisma.luxury_goods.update({
            where: { id: like1[0].goodsId },
            data: {
                likecnt: {
                    increment: -1
                }
            }
        })

        await prisma.like.deleteMany({
            where: {
                userId: { equals: req.body.userId },
                goodsId: { equals: req.body.goodsId }
            }
        })
        return res.status(200).send("likedelete success");
    }
}