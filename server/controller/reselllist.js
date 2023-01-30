const prisma = require("../prisma/prisma");

module.exports = {
    reselllist: async (req, res) => {
        if (!req) {
            return res.status(400).send("no request");
        }
        const resellgoods = await prisma.luxury_goods.findMany({
            where: {
                isResell : true,
                isSelling : true
            }
        })
        return res.status(200).send(resellgoods);
    }
}