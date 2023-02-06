const prisma = require("../prisma/prisma");

module.exports = {
    likelist: async (req, res) => {
        if (!req.params.id) {
            return res.send("not enough params").status(400).end();
        }
        const users = await prisma.user.findUnique({
            where: {
                id: Number(req.params.id)
            },
            include: {
                likes: true
            },
        })
        return res.status(200).send({ likes: users.likes });
    }
}