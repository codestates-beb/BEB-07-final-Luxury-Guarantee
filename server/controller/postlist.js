const prisma = require("../prisma/prisma");

module.exports = {
    postlist: async (req, res) => {
        if (!req) return res.status(400).send("no request");
        
        const posts = await prisma.posts.findMany({ })
        return res.status(200).send(posts);
    }
}