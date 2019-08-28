const express=require('express');
const mongoose=require('mongoose');
const rotas =require('./rotas');
const cors=require('cors')


const server=express();
mongoose.connect('mongodb+srv://soucer10:soucer10@cluster0-fwaym.mongodb.net/omnistack8?retryWrites=true&w=majority',{useNewUrlParser:true});

server.use(cors());
server.use(express.json());
server.use(rotas);

server.listen(3333);

