const prisma = require("../prisma/prisma");

module.exports = {
    reselllist: async (req, res) => {
        if (!req) {
            return res.status(400).send("no request");
        }
        const resellgoods = await prisma.resell_selling.findMany({

        })
        return res.status(200).send(resellgoods);
    }
}