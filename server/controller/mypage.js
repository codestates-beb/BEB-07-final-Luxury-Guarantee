const prisma = require("../prisma/prisma");

module.exports = {
    mypage: async (req, res) => {
        if (!req.params.id) {
            return res.status(400).send("no userId");
        }
        const users = await prisma.user.findUnique({
            where: {
                userId: req.params.id
            },
            include: {
                Items: true,
                post: true
            },
        })
        return res.status(200).send(users);
    }
}