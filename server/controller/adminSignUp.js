const prisma = require("../prisma/prisma");

const isUserIdExist = async (userId) => {
    const user = await prisma.companyuser.findMany({
        where: {
            userId: userId,
        },
    });

    if (user.length === 0) return false;
    return true;
};

const isNicknameExist = async (nickname) => {
    const user = await prisma.companyuser.findMany({
        where: {
            nickname: nickname,
        },
    });
    if (user.length === 0) return false;
    return true;
};

module.exports = {
    adminSignUp: async (req, res) => {
        const { userId, password, nickname } = req.body;

        if (await isUserIdExist(userId)) {
            return res
                .status(200)
                .send({
                    status: 'fail',
                    message: 'same id exist'
                });
        } else if (await isNicknameExist(nickname)) {
            return res
                .status(200)
                .send({
                    status: 'fail',
                    message: 'same nickname exist'
                });
        }
        const newAdminUser = await prisma.companyuser.create({
            data: {
                userId: userId,
                password: password,
                nickname: nickname,
            },
        });
        return res.status(201).send({
            status: 'success',
            message: {
                userId: newAdminUser.userId,
                nickname: newAdminUser.nickname,
            }
        });
    },
};