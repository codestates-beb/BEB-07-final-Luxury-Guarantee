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
                .send("Login information does not match")
                .status(400).end();
        } else if (user[0].password != req.body.password) {
            return res

                .send("Login information does not match")
                .status(400).end();
        }
        return res.status(200).send({
            message: {
                id: user[0].id,
                userId: user[0].userId,
                nickname: user[0].nickname,
                address: user[0].address,
                isCompany: user[0].isCompany,
            }
        });
    },
};