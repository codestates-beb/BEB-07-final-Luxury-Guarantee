const prisma = require("../prisma/prisma");

module.exports = {
    cartlist: async (req, res) => {
        if(!req.params.id) {
            return res.status(400).send("no id");
        }
        const users = await prisma.cart.findMany({
            where: {
                userId:Number(req.params.id)
            }
        })
        return res.status(200).send(users);
    }
}