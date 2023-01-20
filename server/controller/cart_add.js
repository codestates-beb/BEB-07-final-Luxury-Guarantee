const prisma = require("../prisma/prisma");

module.exports = {
    cart_add: async (req, res) => {
        if(!req.body.id || !req.body.image_url || !req.body.price) {
            return res.status(400).send("no id, image_url, price");
        }
        const item = await prisma.cart.create({
            data: {
                image_url : req.body.image_url,
                price:req.body.price,
                userId: req.body.id
            }
        })
        return res.status(200).send("cart success");
    }
}