const prisma = require("../prisma/prisma");

module.exports = {
    luxury_register: async (req, res) => {
        if(!req.body.name || !req.body.serial || !req.body.brand || !req.body.category || 
            !req.body.material || !req.body.designer || !req.body.madeCountry || !req.body.factory ||
            !req.body.totalSupply || !req.body.created_at || !req.body.season || !req.body.price ||
            !req.body.image_url || !req.body.description) {
            return res.status(400).send("not enough entity");
        }
        const item = await prisma.luxury_goods.create({
            data: {
                name: req.body.name,
                serial: req.body.serial,
                brand: req.body.brand,
                category: req.body.category,
                material: req.body.material,
                designer: req.body.designer,
                madeCountry: req.body.madeCountry,
                factory: req.body.factory,
                totalSupply: req.body.totalSupply,
                created_at: req.body.created_at,
                owner: req.body.name,
                season: req.body.season,
                price: req.body.price,
                image_url: req.body.image_url,
                description: req.body.description

            }
        })
        return res.status(200).send("luxury register success");
    }
}