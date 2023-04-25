const { success, failure } = require("../utils/response")
const serverResponseMessage = require('../config/index');
const { arithmeticOpration,showAllArithmeticResult } = require('./dbQuery');

/**
 * add - add incoming n1 and n2 and store it in database 
 * @param {*} req 
 * @param {*} res 
 */
exports.add = async function (req, res) {
    try {
        const add = req.body.n1 + req.body.n2;
        const data={add: {
            n1: req.body.n1,
            n2: req.body.n2,
            result: add
        }}
        const addRes = await arithmeticOpration(data);
        if (addRes) {
            return res.json(success(200, serverResponseMessage.add, addRes));
        } else {
            return res.json(failure(204, serverResponseMessage.failure_add));
        }
    } catch (error) {
        return res.json(
            failure(204, serverResponseMessage.ERROR, error.message)
        );
    }
}

/**
 * substrate - substrate incoming n1 and n2 and store it in database
 * @param {*} req 
 * @param {*} res 
 */
exports.substrate = async function (req, res) {
    try {
        const substrate = req.body.n1 - req.body.n2;
        const data={substrte: {
            n1: req.body.n1,
            n2: req.body.n2,
            result: substrate
        }};
        const substrateRes = await arithmeticOpration(data);
        if (substrateRes) {
            return res.json(success(200, serverResponseMessage.substrate, substrateRes));
        } else {
            return res.json(failure(204, serverResponseMessage.failure_substrate));
        }
    } catch (error) {
        return res.json(
            failure(204, serverResponseMessage.ERROR, error.message)
        );
    }
}

/**
 * multiply - multiply incoming n1 and n2 and store it in database
 * @param {*} req 
 * @param {*} res 
 */
exports.multiply = async function (req, res) {
    try {
        const multiply = req.body.n1 * req.body.n2;
        const data={multiply: {
            n1: req.body.n1,
            n2: req.body.n2,
            result: multiply
        }}
        console.log(data);
        const divideRes = await arithmeticOpration(data);
        if (divideRes) {
            return res.json(success(200, serverResponseMessage.multiply, divideRes));
        } else {
            return res.json(failure(204, serverResponseMessage.failure_multiply));
        }
    } catch (error) {
        return res.json(
            failure(204, serverResponseMessage.ERROR, error.message)
        );
    }
}


/**
 * divide - divide incoming n1 and n2 and store it in database
 * @param {*} req 
 * @param {*} res 
 */
exports.divide = async function (req, res) {
    try {
        const divide = req.body.n1 / req.body.n2;
        const data={divide: {
            n1: req.body.n1,
            n2: req.body.n2,
            result: divide
        }}
        const divideRes = await arithmeticOpration(data);
        if (divideRes) {
            return res.json(success(200, serverResponseMessage.divide, divideRes));
        } else {
            return res.json(failure(204, serverResponseMessage.failure_divide, err));
        }
    } catch (error) {
        return res.json(
            failure(204, serverResponseMessage.ERROR, error.message)
        );
    }
}
/**
 * getAllArithmeticResult 
 * @param {*} req 
 * @param {*} res 
 */
exports.getAllArithmeticResult = async function (req,res) {
    try {
        const getAllArithmeticResultRes = await showAllArithmeticResult();
        if (getAllArithmeticResultRes) {
            return res.json(success(200, serverResponseMessage.fetch, getAllArithmeticResultRes));
        } else {
            return res.json(failure(204, serverResponseMessage.failure_fetch));
        }
    } catch (error) {
        return res.json(failure(204, serverResponseMessage.ERROR, error.message));
    }
}



