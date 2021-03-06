const http = require('http');
const os = require('os').networkInterfaces();

const getIpInfo = {};
getIpInfo.public = () => {
    http.get(
        { host: 'api.ipify.org', port: 80, path: '/' },
        (res) => {
            let data = '';
            res.on('data', (ip) => {
                data += ip;
            });
            // eslint-disable-next-line arrow-body-style
            res.on('end', () => {
                return console.log(`Your public IP address is - ${data}`);
            });
        },
    );
};
getIpInfo.private = () => {
    // eslint-disable-next-line no-shadow
    const adresses = Object.keys(os).reduce((result, dev) => result.concat(os[dev].reduce((result, details) => result.concat(details.family === 'IPv4' && !details.internal ? [details.address] : []), [])));
    return console.log(`Your private IP address is - ${adresses}`);
};
module.exports = getIpInfo;
