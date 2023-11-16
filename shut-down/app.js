const stopCluster = require('./stop');

exports.lambdaHandler = async (event, context) => {
    const result = await stopCluster(process.env.DB_CLUSTER);
    return {
        statusCode: 200,
        body: result,
    }
};
