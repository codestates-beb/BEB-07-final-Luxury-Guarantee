const prisma = require("../prisma/prisma");

module.exports = {
    resellsellingdetail: async (req, res) => {
        if (!req.params.goodsId) {
            return res.status(400).send("no goodsId");
        }
        const one_goods = await prisma.resell_selling.findUnique({
            where: {
                id: Number(req.params.goodsId)
            }
        })
        return res.status(200).send(one_goods);
    }
}