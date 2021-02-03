document.getElementById("check").onclick=function()
{
    let allAreFilled=true;
    document.getElementById("page").querySelectorAll("[required]").forEach(function(i) {
        if(!allAreFilledilled) return;
        if(!i.value) allAreFilled=false;
        if(i.type==="radio"){
            let radiocheck =false;
            document.getElementById("page").querySelectorAll(`[name=${i.name}]`).forEach(function(r) {
                if(r.checked) radiocheck=true;
            })
            allAreFilled=radiocheck;
        }
    })
    if(!allAreFilled)
    {
        alert('Please fill all the fields');
    }
//};    
//function validate()
//{
var v=/^[A-Za-z0-9]+$/
var username=v.test(document.getElementById("name").value);
if(!username)
{
alert("Username should not have special characters");
}

var v=/^[0-9]+$/
var rollno=v.test(document.getElementById("no").value);
if(!rollno)
{
alert("Rollno should have only numbers");
}

var id=/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
var a=document.getElementById("id").value;
if(a.match(id))
{
alert;
}
else
{
alert("Invalid mail id");
}

var password=/^[A-Za-z0-9]\w{7,12}$/;
var p=document.getElementById("pswd").value;
if(p.match(password))
{
alert;
}
else
{
alert("Password length should be minimum of 8 and maximum of 12 characters");
}

var p1=document.getElementById("pswd").value;
var p2=document.getElementById("pswd2").value;
if(p1!=p2)
{
alert("Password doesn't match");
}
};
//}