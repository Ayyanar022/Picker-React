const express = require('express');
const cors = require('cors');
const db = require('./db');

const app = express();
app.use(cors());
app.use(express.json());

const PORT = 7000;


app.listen(PORT,()=>{
    console.log("port runing on :",PORT);
})

