const prisma = require("../prisma/prisma");

module.exports = {
    postlist: async (req, res) => {
        if (!req) return res
            .send("no request")
            .status(400).end();

        const posts = await prisma.posts.findMany({})
        return res.status(200).send(posts);
    }
}