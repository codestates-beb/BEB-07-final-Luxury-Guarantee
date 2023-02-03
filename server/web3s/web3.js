const Web3 = require('web3');
const MYLuxuryABI = require('./ABIS/MyLuxuryABI.json');
const EthSwapABI = require('./ABIS/EthSwap.json');
const LuxTokenABI = require('./ABIS/LuxToken.json');
require('dotenv').config({ path: '../.env' });

const web3 = new Web3(new Web3.providers.HttpProvider("http://127.0.0.1:7545"));

const MyLuxuryContract = new web3.eth.Contract(MYLuxuryABI, process.env.MY);
const EthSwapContract = new web3.eth.Contract(EthSwapABI, process.env.SWAP);
const LuxTokenContract = new web3.eth.Contract(LuxTokenABI, process.env.LUX);

module.exports = {MyLuxuryContract, EthSwapContract, LuxTokenContract, web3};