const express= require('express');
const app=express();
const cors=require('cors');
const bodyParser=require('body-parser');
const connect=require('./dbConnect');
const port=50111;
const index=require('./config/index')

app.get('/',(req,res)=>{res.send('app started')});

connect.then(() => {
    console.log(`Connected to MongoDB`);
  }).catch((e) => {
    console.error(`Could not init db\n${e.trace}`);
  });

app.use(cors());
app.use(bodyParser.json());

require('./modules/router')(app);

app.listen(port,() => console.log(`Listening on Port: ${port}`))
