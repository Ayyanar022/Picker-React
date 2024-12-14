const mysql = require('mysql2');


const db = mysql.createConnection({
    host :'localhost',
    user : 'root',
    password : "admin",
    database :""
})

db.connect((err)=>{
    if(err){
        console.log("Error ocuure connecting DB");
        return
    }
    console.log("DB connected successfully..!")
})

exports.module = db