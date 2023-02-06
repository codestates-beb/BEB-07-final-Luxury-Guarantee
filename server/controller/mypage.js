const prisma = require("../prisma/prisma");

module.exports = {
    mypage: async (req, res) => {
        if (!req.params.id) {
            return res
                .send("not enough params")
                .status(400).end();
        }
        const users = await prisma.user.findUnique({
            where: {
                id: Number(req.params.id)
            },
            include: {
                Items: true,
                post: true
            },
        })
        return res.status(200).send(users);
    }
}