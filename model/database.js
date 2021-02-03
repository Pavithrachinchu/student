const mysql=require('mysql');
const connect=mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'pavithra17sv',
    database:'myproject'
});
module.exports=connect;