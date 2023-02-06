const qrcode = require("qrcode");

module.exports = {
    qradd : async (req, res) => {
        let abc = "abc";
        qrcode.toDataURL("I am a luxury!", function(err, url) {
            abc = url;
        })
        return res.status(200).send(abc);
    }
}