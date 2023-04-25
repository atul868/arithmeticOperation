const middleware = require('../middleware/vailidation')
const { add, substrate, multiply, divide, getAllArithmeticResult} = require('./controller');
const { inputDataVailidator } = require('./vailidator');

//route
module.exports = (app) => {
    app.post('/add', middleware(inputDataVailidator), add);
    app.post('/substrate', middleware(inputDataVailidator), substrate);
    app.post('/multiply', middleware(inputDataVailidator), multiply);
    app.post('/divide', middleware(inputDataVailidator), divide);
    app.get('/get/all/arithmetic/result', getAllArithmeticResult);
}

