const prisma = require("../prisma/prisma");
const {LuxTokenContract, web3} = require("../web3s/web3");

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
                .status(400)
                .send('same id exist');
        } else if (await isNicknameExist(nickname)) {
            return res
                .status(400)
                .send('same nickname exist');
        }

        const address = await web3.eth.personal.newAccount(password);
        const ethers = web3.utils.fromWei(await web3.eth.getBalance(address), 'ether');
        const tokens = await LuxTokenContract.methods.balanceOf(address).call();

        const newCompanyUser = await prisma.user.create({
            data: {
                userId: userId,
                password: password,
                nickname: nickname,
                isCompany: true,
                address: address,
                tokenAmount: tokens,
                ethAmount: ethers
            },
        });
        return res.status(201).send({
            message: {
                userId: newCompanyUser.userId,
                nickname: newCompanyUser.nickname,
                address: newCompanyUser.address,
                isCompany: newCompanyUser.isCompany,
            }
        });
    },

    userSignUp: async (req, res) => {
        const { userId, password, nickname } = req.body;

        if (await isUserIdExist(userId)) {
            return res
                .status(400)
                .send('same id exist');
        } else if (await isNicknameExist(nickname)) {
            return res
                .status(400)
                .send('same nickname exist');
        }

        const address = await web3.eth.personal.newAccount(password);
        const ethers = web3.utils.fromWei(await web3.eth.getBalance(address), 'ether');
        const tokens = await LuxTokenContract.methods.balanceOf(address).call();

        const newNomalUser = await prisma.user.create({
            data: {
                userId: userId,
                password: password,
                nickname: nickname,
                isCompany: false,
                address: address,
                tokenAmount: tokens,
                ethAmount: ethers
            },
        });
        return res.status(201).send({
            message: {
                userId: newNomalUser.userId,
                nickname: newNomalUser.nickname,
                address: newNomalUser.address,
                isCompany: newNomalUser.isCompany,
            }
        });
    }
};