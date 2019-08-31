const express=require('express');
const mongoose=require('mongoose');
const rotas =require('./rotas');
const cors=require('cors')
require('dotenv/config')

const server=express();
mongoose.connect(`mongodb+srv://${process.env.MONGO_LOGIN}:${process.env.MONGO_PASS}@cluster0-fwaym.mongodb.net/omnistack8?retryWrites=true&w=majority`,{useNewUrlParser:true}); 
server.use(cors());
server.use(express.json());
server.use(rotas);

server.listen(3333);

