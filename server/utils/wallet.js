const Web3 = require('web3');
require('dotenv').config({ path: '../.env' });

const { LOCAL_RPC_SERVER_NETWORK, LOCAL_RPC_SERVER_PORT } =
    process.env;

const getWeb3 = (network, port) =>
    new Web3(new Web3.providers.HttpProvider(`${network}:${port}`));

const web = getWeb3(LOCAL_RPC_SERVER_NETWORK, LOCAL_RPC_SERVER_PORT);

module.exports = {
    createWallet: async (password) => {
        return await web.eth.personal.newAccount(password);
    },
};
