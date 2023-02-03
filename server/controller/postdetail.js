const prisma = require("../prisma/prisma");

module.exports = {
    postdetail: async (req, res) => {
        if (!req.params.id) {
            return res.status(400).send("not enough params");
        }

        const post = await prisma.posts.findUnique({
            where: {
                id: Number(req.params.id)
            }
        })
        return res.status(200).send(post);
    }
}