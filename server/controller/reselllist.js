const prisma = require("../prisma/prisma");

module.exports = {
    reselllist: async (req, res) => {
        if (!req) {
            return res.status(400).send("no request");
        }
        const resellgoods = await prisma.luxury_selling.findMany({
            where: {
                isResell : true
            }
        })
        return res.status(200).send(resellgoods);
    }
}