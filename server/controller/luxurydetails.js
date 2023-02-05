const prisma = require("../prisma/prisma");

module.exports = {
    luxurydetail: async (req, res) => {
        if (!req.params.goodsId) {
            return res
                .send("not enough params")
                .status(400).end();
        }
        const one_goods = await prisma.luxury_goods.findUnique({
            where: {
                id: Number(req.params.goodsId)
            }
        })
        return res.status(200).send(one_goods);
    }
}