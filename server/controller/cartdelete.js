const prisma = require("../prisma/prisma");

module.exports = {
    cartdeletemany: async (req, res) => {
        if(!req.body.cartIds) {
            return res.status(400).send("not enough body params");
        }
        for(let i=0;i<req.body.cartIds.length; i++) {
            await prisma.cart.delete({
                where: {id:req.body.cartIds[i]}
            });
        }
        return res.status(200).send("cartdelete success");
    },

    cartdeleteone : async (req,res) => {
        if(!req.body.cartId) {
            return res.status(400).send("not enough body params");
        }
        await prisma.cart.delete({
            where: {id:req.body.cartId}
        });
        return res.status(200).send("cartdelete success");
    }
}