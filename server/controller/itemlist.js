const prisma = require("../prisma/prisma");

module.exports = {
    itemlist: async (req, res) => {
        if (!req.body.userId) {
            return res.send("not enough body params").status(400).end();
        }
        const goods = await prisma.luxury_goods.findMany({
            where: {
                isResell: false,
                isSelling: true
            }
        })
        const likes = await prisma.like.findMany({
            where: {
                userId: req.body.userId
            }
        })

        for(let i=0;i<goods.length;i++) {
            let reallike = 0 ;
            for(let j=0;j<likes.length;j++) {
                if(goods[i].id === likes[j].goodsId && req.body.userId === likes[j].userId) {
                    goods[i].isLike = true;
                    reallike = 1;
                }
            }
            if(reallike===0) goods[i].isLike = false;
        }
        return res.status(200).send(goods);
    },
    resellitemlist: async (req, res) => {
        if (!req.body.userId) {
            return res.send("not enough body params").status(400).end();
        }
        const goods = await prisma.luxury_goods.findMany({
            where: {
                isResell: true,
                isSelling: true
            }
        })
        const likes = await prisma.like.findMany({
            where: {
                userId: req.body.userId
            }
        })

        for(let i=0;i<goods.length;i++) {
            let reallike = 0 ;
            for(let j=0;j<likes.length;j++) {
                if(goods[i].id === likes[j].goodsId && req.body.userId === likes[j].userId) {
                    goods[i].isLike = true;
                    reallike = 1;
                }
            }
            if(reallike===0) goods[i].isLike = false;
        }
        return res.status(200).send(goods);
    }
}