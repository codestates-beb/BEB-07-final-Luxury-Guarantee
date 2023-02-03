const prisma = require("../prisma/prisma");

module.exports = {
    cartlist: async (req, res) => {
        if(!req.params.id) {
            return res.status(400).send("not enough params");
        }
        const users = await prisma.user.findUnique({
            where: {
                id:Number(req.params.id)
            },
            include: {
                Cart: true
            },
        })
        return res.status(200).send({items : users.Cart});
    }
}