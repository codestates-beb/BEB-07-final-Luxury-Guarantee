const prisma = require("../prisma/prisma");

module.exports = {
    cartdeletemany: async (req, res) => {
        if (!req.body.userId) {
            return res
                .send("not enough body params")
                .status(400).end();
        } else {
            await prisma.cart.deleteMany({
                where: { userId: req.body.userId }
            })
        }
        return res.status(200).send("cartdelete success");
    },

    cartdeleteone: async (req, res) => {
        if (!req.body.cartId) {
            return res
                .send("not enough body params")
                .status(400).end();
        } else {
            await prisma.cart.delete({
                where: { id: req.body.cartId }
            })
        }
        return res.status(200).send("cartdelete success");
    }
}