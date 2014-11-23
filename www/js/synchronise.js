/**
 * Created by Phil on 19/11/2014.
 */
//This module copies current master sqlite database from server to local file.



function synch() {
        console.log("Here");
        var ftpClient= require('ftp-client/lib/client.js');
        config = {
            host: 'flavin.no-ip.biz',
            port: 21,
            user: 'fogs_user',
            password: 'fogs'
        },
        options = {
            logging: 'basic'
        };

        client = new ftpClient(config, options);

    client.connect(function () {

        client.download('web/FOGS', '../data/', {
            overwrite: 'all'
        }, function (result) {
            console.log(result);
        });
    return function (result){};
    });
}

