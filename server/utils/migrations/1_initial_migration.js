const LuxToken = artifacts.require('LuxToken');
const EthSwap = artifacts.require('EthSwap');
const MyLuxury = artifacts.require('MyLuxury');

module.exports = async function (deployer) {
    try {
        await deployer.deploy(MyLuxury);

        await deployer.deploy(LuxToken);
        const token = await LuxToken.deployed();
        console.log(token.address);

        await deployer.deploy(EthSwap, token.address);
        const ethSwap = await EthSwap.deployed();

    } catch (e) {
        console.log(e.message);
    }
}
