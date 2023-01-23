const prisma = require("../prisma/prisma");

module.exports = {
    cart_add: async (req, res) => {
        if(!req.body.sellingId || !req.body.userId || !req.body.image_url || !req.body.price) {
            return res.status(400).send("not enough param cartadd");
        }
        const item = await prisma.cart.create({
            data: {
                sellingId: req.body.sellingId,
                userId: req.body.userId,
                image_url : req.body.image_url,
                price:req.body.price,
            }
        })
        return res.status(200).send("cart success");
    }
}