const mongoose = require('mongoose');
const schema = mongoose.Schema;
const arithmeticOperationSchema = new schema({
    add: {
        n1: { type: Number },
        n2: { type: Number },
        result: { type: Number }
    }, substrte: {
        n1: { type: Number },
        n2: { type: Number },
        result: { type: Number }
    },
    multiply: {
        n1: { type: Number },
        n2: { type: Number },
        result: { type: Number }
    },
    divide: {
        n1: { type: Number },
        n2: { type: Number },
        result: { type: Number }
    }
}, {
    timestamps: true
})
const arithmeticOperation = mongoose.model('add', arithmeticOperationSchema);
module.exports = arithmeticOperation;