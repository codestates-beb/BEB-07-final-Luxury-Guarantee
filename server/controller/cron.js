const prisma = require("../prisma/prisma");
const cron = require("node-cron");

module.exports = {
    tokencron: async (req, res) => {
        const users = await prisma.user.findMany({});

        cron.schedule("0 0 0 * * *", async () => {
            for(let i=0;i<users.length;i++) {
                await prisma.user.update({
                    where: {id:Number(users[i].id)},
                    data: {
                        limit: 0
                    }
                })
            }
        });
    }
}