const prisma = require("../prisma/prisma");

module.exports = {
    signIn: async (req, res) => {
        const user = await prisma.user.findMany({
            where: {
                userId: req.body.userId,
            },
        })

        if (user.length === 0 || user[0].userId != req.body.userId) {
            return res
                .status(400)
                .send({ message: "로그인 정보가 일치하지 않습니다." });
        } else if (user[0].password != req.body.password) {
            return res
                .status(400)
                .send({ message: "로그인 정보가 일치하지 않습니다." });
        }
        return res.status(200).send({
            status: "success", message: {
                id: user[0].id,
                userId: user[0].userId,
                nickname: user[0].nickname,
                address: user[0].address,
                isCompany: user[0].isCompany,
            }
        });
    },
};