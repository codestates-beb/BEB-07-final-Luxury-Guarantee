const prisma = require("../prisma/prisma");
const { createWallet } = require("../utils/web3");


const isUserIdExist = async (userId) => {
    const user = await prisma.user.findMany({
        where: {
            userId: userId,
        },
    });

    if (user.length === 0) return false;
    return true;
};

const isNicknameExist = async (nickname) => {
    const user = await prisma.user.findMany({
        where: {
            nickname: nickname,
        },
    });
    if (user.length === 0) return false;
    return true;
};



module.exports = {
    companySignUp: async (req, res) => {
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

        const address = await createWallet(password);
        const newCompanyUser = await prisma.user.create({
            data: {
                userId: userId,
                password: password,
                nickname: nickname,
                isCompany: true,
                address: address,
            },
        });
        return res.status(201).send({
            status: 'success',
            message: {
                userId: newCompanyUser.userId,
                nickname: newCompanyUser.nickname,
            }
        });
    },

    userSignUp: async (req, res) => {
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

        const address = await createWallet(password);
        const newNomalUser = await prisma.user.create({
            data: {
                userId: userId,
                password: password,
                nickname: nickname,
                isCompany: false,
                address: address,
            },
        });
        return res.status(201).send({
            status: 'success',
            message: {
                userId: newNomalUser.userId,
                nickname: newNomalUser.nickname,
            }
        });
    }
};