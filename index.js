const http = require('http');

const getIpInfo = () => {
    http.get(
        { host: 'api.ipify.org', port: 80, path: '/' },
        (res) => {
            res.on('data', (ip) => {
                if (!ip) {
                    console.log('0.0.0.0');
                }
                return console.log(`Your public IP is: ${ip}`);
            });
        },
    );
};
module.exports = getIpInfo();
