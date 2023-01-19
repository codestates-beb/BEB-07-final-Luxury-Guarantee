const prisma = require("../prisma");

module.exports = {
    wpost: async (req, res) => {
        if(!req.body.userId || !req.body.title || !req.body.content) {
            return res.status(400).send(false);
        }
        const {userId, title, content} = req.body;
        const post = await prisma.posts.create({
            data: {
                userId: userId,
                title: title,
                content: content
            }
        })
        return res.status(200).send(true);
    }
}