const prisma = require("../prisma/prisma");

module.exports = {
    addsell: async (req, res) => {
        if(!req.body.id || !req.body.image_url || !req.body.content || !req.body.price) {
            return res.status(400).send("not enough params");
        }
        const goods = await prisma.luxury_goods.update({
            where: {id: req.body.id},
            data: {
                image_url: req.body.image_url,
                description: req.body.content,
                price: req.body.price,
                isSelling: true
            }
        })
        return res.status(200).send("addsell success");
    }
}