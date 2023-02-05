const prisma = require("../prisma/prisma");

module.exports = {
    postdetail: async (req, res) => {
        if (!req.params.id) {
            return res
                .send("not enough params")
                .status(400).end();
        }

        const post = await prisma.posts.findUnique({
            where: {
                id: Number(req.params.id)
            }
        })
        return res.status(200).send(post);
    }
}