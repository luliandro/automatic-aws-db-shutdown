const startCluster = require('./start');

exports.lambdaHandler = async (event, context) => {
    const result = await startCluster(process.env.DB_CLUSTER);
    return {
        statusCode: 200,
        body: result,
    }
};
