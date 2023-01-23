const prisma = require("../prisma/prisma");

module.exports = {
    wpost: async (req, res) => {
        if (! req.body. userId || !req.body.category || !req.body.title || !req.body.content) {
            return res.status(400).send("not enough parameter");
        }
        const { userId, category, title, content } = req.body;
        const post = await prisma.user.update({
            where: { id: userId },
            data: {
                post: {
                    create: {
                        category: category,
                        title: title,
                        content: content
                    }
                }

            }
        })

        if(category === "review") {
            console.log("게시글 썻으니 토큰 줄게요");
        }

        return res.status(200).send("write post success");
    }
}