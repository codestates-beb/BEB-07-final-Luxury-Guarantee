const prisma = require("../prisma/prisma");

module.exports = {
    likedelete: async (req, res) => {
        if(!req.body.likeId) {
            return res.send("not enough body params").status(400).end();
        }

        const like1 = await prisma.like.findUnique({
            where: { id: req.body.likeId}
        })
        await prisma.luxury_goods.update({
            where: {id: like1.goodsId},
            data: {
                likecnt: {
                    increment: -1
                }
            }
        })

        await prisma.like.delete({
            where: {id: req.body.likeId}
        })
        return res.status(200).send("likedelete success");
    }
}