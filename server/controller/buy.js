const prisma = require("../prisma/prisma");

module.exports = {
    buy: async (req, res) => {
        if(!req.body.userId || !req.body.goodsIds) {
            return res.status(400).send("not enough params");
        }
        for(let i=0;i<req.body.goodsIds.length;i++) {


            const luxurys = await prisma.cart.findUnique({ //소유자,가격 저장
                where: {goodsId: req.body.goodsIds[i]}
            })
            
            await prisma.cart.delete({ //카트에서 지우고
                where: {goodsId:req.body.goodsIds[i]} 
            })

            const users = await prisma.user.findUnique({ //소유자 유저
                where: {id: luxurys.userId}
            })

            const userss = await prisma.user.findUnique({ //사는 유저
                where: {id: req.body.userId}
            })

            await prisma.user.update({
                where: {id: req.body.userId}, //구매자
                data: {
                    tokenAmount: userss.tokenAmount - luxurys.price
                }
            })

            await prisma.user.update({
                where: {id:users.id}, //소유자
                data: {
                    tokenAmount: users.tokenAmount + luxurys.price
                }
            })

            await prisma.luxury_goods.update({ //물건정보변경
                where: {id: req.body.goodsIds[i]},
                data: {
                    isSelling: false, 
                    userId: req.body.userId
                }
            })
        }
        return res.status(200).send("success");
    }
}
