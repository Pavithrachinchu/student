var express=require('express');
var app=express();
var bodyParser=require('body-parser');
var connection=require('./model/database.js');

app.set("views","./views")
app.set("view engine","ejs");

app.use(bodyParser.urlencoded({extended:false}));
app.use(express.static(__dirname));

app.get('/signup',function(req,res){
    console.log('Hello');
    /*res.sendFile(__dirname+'/views/signup.html');*/
    res.render("signup");
})

app.use('/check',function(req,res){
    console.log('checked');
    var username=req.body.username;
    var rollnumber=req.body.rollnumber;
    var email=req.body.Email;
    var pswd=req.body.Password;
    /*var pswd2=req.body.password;
    var radio=req.body.radio;
    console.log("Data Submitted");*/

    connection.query('insert into student_details values(?,?,?,?)',[rollnumber,username,email,pswd],(err,results)=>{
        console.log('this is query');
        if(err) throw err;
        if(results){
            console.log("Values is inserted");
            /*res.sendFile(__dirname+'/views/login.html');*/
            res.render('login');
        }
    })
   /* res.writeHead(200,{'Content-type':'text/html'});
    res.write("<h3>Registration done successfully</h3>");
    res.end();*/
})

app.get('/login',function(req,res){
    console.log('hai');
    /*res.sendFile(__dirname+'/views/login.html');*/
    res.render('login');
})

app.post('/validate',function(req,res){
    console.log('checked');
    var email=req.body.Email;
    var pswd=req.body.password;
    /*console.log("Data Submitted");*/
    /*res.sendFile(`Username:${email},Password:${pswd}`);*/

    connection.query('select email from student_details where email like ?',[email],(err,results)=>{
        if(err)throw err;
        if(results){
            connection.query('select pswd from student_details where email like ? and password like ?',[email,pswd],(err,results)=>{

                connection.query('select student_marks.*,student_details.email from student_marks join student_details on student_marks.rollnumber=student_details.rollnum where student_details.email like ?',[email],(err,data)=>{
                    
                    if(err) throw err;
                    if(data){
                        res.render("user",{userdata:data});
                        console.log(data);
                    }
                })
               /* res.send('<h3>Hai Everyone</h3>');*/
            })
        }
    })
})

app.listen(1010,()=>{
    console.log("Server running at the port 1010");
})