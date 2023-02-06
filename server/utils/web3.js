require('dotenv').config({ path: '../.env' });

const Web3 = require('web3');
const LuxABI = require('./abi/LuxTokenABI');

const { LOCAL_RPC_SERVER_NETWORK, LOCAL_RPC_SERVER_PORT, LUX } =
    process.env;

const getWeb3 = (network, port) =>
    new Web3(new Web3.providers.HttpProvider(`${network}:${port}`));

const getContract = (web3, abi, contractAddr) =>
    new web3.eth.Contract(abi, contractAddr);

const web = getWeb3(LOCAL_RPC_SERVER_NETWORK, LOCAL_RPC_SERVER_PORT);

const tokenContract = getContract(web, LuxABI, LUX)

module.exports = {
    createWallet: async (password) => {
        return await web.eth.personal.newAccount(password);
    },

    getAccounts: async (req, res) => {
        const accounts = await web.eth.getAccounts();
        const accountsWithBalnace = {};
        for (let i of accounts) {
            const tokenBalance = await tokenContract.methods
                .balanceOf(i)
                .call();
            const ethBalance = await web.eth.getBalance(i)
            accountsWithBalnace[i] = `tokenBalance: ${tokenBalance}, ethBalance: ${ethBalance}`;
        }
        res.status(200).send(accountsWithBalnace);
    },
};
