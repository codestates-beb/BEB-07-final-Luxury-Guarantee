const prisma = require("../prisma/prisma");

module.exports = {
    cartdelete: async (req, res) => {
        if(!req.body.cartIds) {
            return res.status(400).send("not enough params");
        }
        for(let i=0;i<req.body.cartIds.length; i++) {
            await prisma.cart.delete({
                where: {id:req.body.cartIds[i]}
            });
        }
        return res.status(200).send("delete success");
    }
}