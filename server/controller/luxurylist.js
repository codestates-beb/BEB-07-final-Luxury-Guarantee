const prisma = require("../prisma/prisma");

module.exports = {
    luxurylist: async (req, res) => {
        if (!req) {
            return res
                .send("no request")
                .status(400).end();
        }
        const luxurygoods = await prisma.luxury_goods.findMany({
            where: {
                isResell: false,
                isSelling: true
            }
        })
        return res.status(200).send(luxurygoods);
    },

    beforesalelist: async (req, res) => {
        if (!req.params.id) {
            return res
                .send("not enough params")
                .status(400).end();
        }
        const beforeSaleGoods = await prisma.luxury_goods.findMany({
            where: {
                id: Number(req.params.id),
                isResell: false,
                isSelling: false
            }
        })
        return res.status(200).send(beforeSaleGoods);
    }
}