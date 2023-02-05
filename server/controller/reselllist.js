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
                isSelling: true
            }
        })
        return res.status(200).send(resellgoods);
    }
}