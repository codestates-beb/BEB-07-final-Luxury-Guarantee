const prisma = require("../prisma/prisma");
const axios = require('axios');
const { MyLuxuryContract, web3 } = require("../web3s/web3");

require("dotenv").config();
const JWT = process.env.JWT;

module.exports = {
    luxury_register: async (req, res) => {
        if (!req.body.name || !req.body.serial || !req.body.brand || !req.body.category ||
            !req.body.material || !req.body.designer || !req.body.madeCountry || !req.body.factory ||
            !req.body.totalSupply || !req.body.created_at || !req.body.season || !req.body.price ||
            !req.body.image_url || !req.body.description || !req.body.userId) {
            return res
                .send("not enough body params")
                .status(400).end();
        }

        const serial_test = await prisma.luxury_goods.findMany({
            where: { serial: req.body.serial }
        });
        if (serial_test.length !== 0) {
            return res
                .send("serial exists")
                .status(400).end();
        }

        const data = JSON.stringify({
            "pinataOptions": {
                "cidVersion": 1
            },
            "pinataMetadata": {
                "name": req.body.serial
            },
            "pinataContent": {
                "name": req.body.name,
                "brand": req.body.brand,
                "category": req.body.category,
                "material": req.body.material,
                "designer": req.body.designer,
                "madeCountry": req.body.madeCountry,
                "factory": req.body.factory,
                "totalSupply": req.body.totalSupply,
                "created_at": req.body.created_at,
                "season": req.body.season,
                "price": req.body.price,
                "image_url": req.body.image_url,
                "description": req.body.description
            }
        });
        const config = {
            method: 'post',
            url: 'https://api.pinata.cloud/pinning/pinJSONToIPFS',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': JWT
            },
            data: data
        };
        const addconfig = await axios(config);
        const url = `https://gateway.pinata.cloud/ipfs/${addconfig.data.IpfsHash}`;

        console.log(url);

        const userss = await prisma.user.findUnique({
            where: { id: req.body.userId }
        });
        let resell = false;
        if (userss.isCompany === false) resell = true;

        const item = await prisma.user.update({
            where: { id: req.body.userId },
            data: {
                Items: {
                    create: {
                        name: req.body.name,
                        serial: req.body.serial,
                        brand: req.body.brand,
                        category: req.body.category,
                        material: req.body.material,
                        designer: req.body.designer,
                        madeCountry: req.body.madeCountry,
                        factory: req.body.factory,
                        totalSupply: req.body.totalSupply,
                        created_at: req.body.created_at,
                        season: req.body.season,
                        price: req.body.price,
                        image_url: req.body.image_url,
                        description: req.body.description,
                        isResell: resell,
                        ipfsurl: url
                    }
                }
            }
        })
        const accounts = await web3.eth.getAccounts();
        const serverAd = accounts[0];

        const serialget = await prisma.luxury_goods.findUnique({
            where: { serial: req.body.serial }
        });

        const mint = await MyLuxuryContract.methods.mintNFT(serialget.ipfsurl, userss.address).send({ from: serverAd, gas: '1000000' });

        const goods2 = await prisma.luxury_goods.update({
            where: { id: serialget.id },
            data: {
                tokenId: Number(mint.events.Transfer.returnValues.tokenId)
            }
        })
        return res.status(200).send("luxury register success");
    }
}