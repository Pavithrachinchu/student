document.getElementById("check").onclick=function()
{
   let filled=true;
      document.getElementById("page").querySelectorAll("[required]").forEach(function(i) {
       if(!filled) return;
       if(!i.value) filled=false;
       if(i.type==="radio"){
           let radiocheck=false;
           document.getElementById("page").querySelectorAll(`[name=${i.name}]`).forEach(function(r) {
               if(r.checked) radiocheck=true;
           })
           filled=radiocheck;
       }
   })
   if(!filled)
   {
       alert('Please fill all the fields');
   }
//function validate()
//{
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
alert("Incorrect password");
}
//}
};