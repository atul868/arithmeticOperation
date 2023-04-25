const arithmeticOperation = require('./schema');

module.exports.arithmeticOpration = async (data) => {
    return await arithmeticOperation.create(data);
}


module.exports.showAllArithmeticResult = async (data) => {
    return await arithmeticOperation.find(data);
}

