const prisma = require("../prisma/prisma");

module.exports = {
    cartdeletemany: async (req, res) => {
        if (!req.body.cartIds) {
            return res
                .send("not enough body params")
                .status(400).end();
        }
        for (let i = 0; i < req.body.cartIds.length; i++) {
            await prisma.user.delete({
                where: {id: req.body.cartIds[i]}
            })
        }
        return res.status(200).send("cartdelete success");
    },

    cartdeleteone: async (req, res) => {
        if (!req.body.cartId) {
            return res
                .send("not enough body params")
                .status(400).end();
        }
        await prisma.user.delete({
            where: {id: req.body.cartId}
        })
        return res.status(200).send("cartdelete success");
    }
}