const prisma = require("../prisma/prisma");

module.exports = {
    wpost: async (req, res) => {
        if (!req.body.userId || !req.body.category || !req.body.title || !req.body.content) {
            return res.status(400).send(false);
        }
        const { userId, category, title, content } = req.body;
        const post = await prisma.posts.create({
            data: {
                userId: userId,
                category: category,
                title: title,
                content: content
            }
        })

        if(category === "review") {
            console.log("게시글 썻으니 토큰 줄게요");
        }

        return res.status(200).send(true);
    }
}