const prisma = require("../prisma/prisma");

module.exports = {
    luxurysellingdetail: async (req, res) => {
        if (!req.params.goodsId) {
            return res.status(400).send("no goodsId");
        }
        const one_goods = await prisma.luxury_selling.findUnique({
            where: {
                id: Number(req.params.goodsId)
            }
        })
        return res.status(200).send(one_goods);
    }
}