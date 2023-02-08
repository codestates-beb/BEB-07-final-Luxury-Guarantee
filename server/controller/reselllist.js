const prisma = require("../prisma/prisma");

module.exports = {
    reselllist: async (req, res) => {
        if (!req) {
            return res
                .send("no request")
                .status(400).end();
        }
        const resellgoods = await prisma.luxury_goods.findMany({
            where: {
                isResell: true,
                isSelling: false
            }
        })
        return res.status(200).send(resellgoods);
    },
    beforereselllist: async (req, res) => {
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