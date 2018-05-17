var s=[];
var dashboard=document.getElementById("dashboard");
var l=document.getElementById("l");
s=sessiongetstoreinfo();
console.log(s);
if(s[0]==null){
window.location.href="login.html";
}
if(s[0].name==1)
{var h=document.createTextNode("Hello Admin");
so=document.createElement("button");
sign=document.createTextNode("Sign Out <<-");
so.append(sign);
l.append(so);
dashboard.append(h);

}

so.addEventListener("click", function(event)
{
window.location.href="login.html";
});

function sessiongetstoreinfo(){if (!sessionStorage.s){sessionStorage.s = JSON.stringify([]); 
}return JSON.parse(sessionStorage.s); 
}
