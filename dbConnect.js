const mongoose=require('mongoose');
mongoose.Promise=require('bluebird');

const connect = mongoose.connect('mongodb://localhost:27017/Test',{useNewUrlParser:true,useUnifiedTopology:true});
module.exports=connect;
