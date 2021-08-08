import express from 'express'
import mongoose from 'mongoose'


const app = express();





app.get('/', (req, res) => {
    res.send("hi")
})

app.listen(5000, (req, res) => {
    console.log("server is started baby");
})