const fs = require('fs');
const path = require('path');
// const keys_dir = "./secure"; // 키 파일, 상대경로 수정 필요
const absolutePath = path.resolve('./');

const exist =
    fs.existsSync(absolutePath + '/key.pem') &&
    fs.existsSync(absolutePath + '/cert.pem');

let key, cert;

if (exist) {
    key = fs.readFileSync(absolutePath + '/key.pem');
    cert = fs.readFileSync(absolutePath + '/cert.pem');
}


module.exports.options = {
    exist,
    cert,
    key,
};