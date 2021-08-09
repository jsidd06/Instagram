dotenv.config(); 
import express from 'express'
import mongoose from 'mongoose'
import dotenv from 'dotenv'


const app = express();

app.use(express.json())

mongoose.connect(process.env.DB_STRING,{
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(req => {
    console.log("database is ready");
})

const schema = new mongoose.Schema({
    username:String,
    password:String,  
    confirm:String,
})

const contactSchema = new mongoose.Schema({
    email:{
        type:String,required:true,
    },
    message:{
        type:String,required:true,
    }, 
})

const Message = mongoose.model('Message', contactSchema)
const User = mongoose.model('User', schema)

app.get('/', (req, res) => {
    res.send("hi")
})
app.post('/contact', (req, res) => {
    new Message({
        email:req.body.email,
        message:req.body.message,
    }).save(function(err){
        if(!err){
            res.send("sucess you message")
        }else{
            console.log(err.messager);
            res.send("please try again")
    }
    })
})
app.listen(5000, (req, res) => {
    console.log("server is started baby");
})