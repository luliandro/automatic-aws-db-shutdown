const AWS = require('aws-sdk');

module.exports = (dbCluster) => {
    return new Promise((resolve, reject) => {
        const rds = new AWS.RDS();
        const params = {
            DBClusterIdentifier: dbCluster,
        };
        rds.startDBCluster(params, (err, data)=> {
            if (err) {
                reject(err);
            } else {
                resolve(data);
            }
        });
    });
};
