const prisma = require("../prisma/prisma");

module.exports = {
    cartadd: async (req, res) => {
        if(!req.body.goodsId || !req.body.userId) {
            return res.status(400).send("not enough body params");
        }

        const goods = await prisma.luxury_goods.findUnique({
            where: {id:req.body.goodsId}
        })

        const users = await prisma.user.findUnique({
            where: {id: req.body.userId},
            include:{
                Cart:true
            }
        })
        console.log(users.Cart[0].id);
        for(let i=0;i<users.Cart.length;i++) {
            if(users.Cart[i].id === req.body.goodsId) {
                return res.status(400).send("already in cart");
            }
        }

        const item = await prisma.user.update({
            where: { id: req.body.userId },
            data: {
                Cart: {
                    create: {
                        goodsId: goods.id,
                        image_url: goods.image_url,
                        price: goods.price
                    }
                }
            }
        })
        return res.status(200).send("cartadd success");
    }
}