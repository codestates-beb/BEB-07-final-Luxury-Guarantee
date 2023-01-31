const prisma = require("../prisma/prisma");

module.exports = {
    luxurylist: async (req, res) => {
        if (!req) {
            return res.status(400).send("no request");
        }
        const luxurygoods = await prisma.luxury_goods.findMany({
            where: {
                isResell : false,
                isSelling : true
            }
        })
        return res.status(200).send(luxurygoods);
    }
}