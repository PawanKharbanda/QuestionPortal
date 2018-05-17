var login=document.getElementById("login");
var flag=0;
var s=[];
var le=document.createTextNode("Email :");
login.append(le);br();
var email=document.createElement("input");
email.setAttribute("type","text");
login.append(email);
br();br();

var lp=document.createTextNode("Password :")
login.append(lp);br();
var password=document.createElement("input");
password.setAttribute("type","password");
login.append(password);
br();br();
var lb=document.createElement("button");
var log=document.createTextNode("Login->");
lb.append(log);
login.append(lb);



lb.addEventListener("click", function(event)
{
var e=email.value;
var p=password.value;
if(e=="admin@gmail.com")
{
if(p=="Temp123!")
{


var obj=new Object();
obj.name=1;
s.push(obj);
sessionstoreinfo(s);
window.location.href="dashboard.html";
}
else{window.alert("Enter Valid Inputs");}
}
else {window.alert("Enter Valid Inputs");}





});



function sessionstoreinfo(s){sessionStorage.s = JSON.stringify(s);}






function br()
{

br1=document.createElement("br");
login.append(br1);
}