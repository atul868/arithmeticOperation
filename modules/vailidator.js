const joi = require('joi');

exports.inputDataVailidator = joi.object({
    n1: joi.number().required(),
    n2: joi.number().required(),
})