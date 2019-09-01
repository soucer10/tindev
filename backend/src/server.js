const express=require('express');
const mongoose=require('mongoose');
const rotas =require('./rotas');
const cors=require('cors')

require('dotenv/config')

const app=express();
const server=require('http').Server(app)
const io=require('socket.io')(server)

const connectedUsers={}

io.on('connect',socket=>{
    const {user}=socket.handshake.query

     connectedUsers[user]=socket.id
})

mongoose.connect(`mongodb+srv://${process.env.MONGO_LOGIN}:${process.env.MONGO_PASS}@cluster0-fwaym.mongodb.net/omnistack8?retryWrites=true&w=majority`,{useNewUrlParser:true}); 

app.use((req,res,next)=>{
    req.io=io
    req.connectedUsers=connectedUsers
    return next()
})
app.use(cors());
app.use(express.json());
app.use(rotas);

server.listen(3333);

