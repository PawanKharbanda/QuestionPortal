var questions=document.getElementById("questions");
var selection=document.getElementById("selection");
var form=document.getElementById("form");
var a=document.createElement("button");
var add=document.createTextNode("Add Questions->");
a.append(add);
var aflag=0;
questions.append(a);

var m=3;
var xx=2;
var pid=1;
var s=[];
s=sessiongetstoreinfo();
if(s[0]==null){
window.location.href="login.html";
}
if(s[0].name==1)
{so=document.createElement("button");
sign=document.createTextNode("Sign Out <<-");
so.append(sign);
l.append(so);


}

so.addEventListener("click", function(event)
{
window.location.href="login.html";
});



products=getStoredProducts()
console.log(products);

for (var i = 0; i < products.length; i++) 
{
products[i].id=pid;
var s=products[i].title;
createlist(s);
pid++;
}

function createlist(s)
{
div=document.createElement("div");
div.setAttribute("id",pid);
divlist.append(div);
ul=document.createElement("ul");
li=document.createElement("li");
li.append(s);
ul.append(li);
div.append(ul);
del=document.createElement("button");
delt=document.createTextNode("DELETE");
del.append(delt);
e=document.createElement("button");
ed=document.createTextNode("Edit");
e.append(ed);
div.append(e);
div.append(del);

del.addEventListener("click", function(event)
{
var parentnode=event.target.parentNode;
var grandparentnode=event.target.parentNode.parentNode;
grandparentnode.removeChild(parentnode);
var selectedid=parseInt(parentnode.id);
var selectedindex=pindex(selectedid);
products.splice(selectedindex,1);
storeProducts(products);
	console.log(products);

});

e.addEventListener("click", function(event)
{
var parentnode=event.target.parentNode;
var grandparentnode=event.target.parentNode.parentNode;
var selectedid=parseInt(parentnode.id);
var selectedindex=pindex(selectedid);
var ne = prompt("Please enter New Title", "Old title: "+products[selectedindex].title);
grandparentnode.removeChild(parentnode);
products[selectedindex].title=ne;
storeProducts(products);
	console.log(products);
window.location.href="questions.html";
});


}





function createpanel(ob)
{
s=document.createElement("button");
submit=document.createTextNode("Submit >>");
s.append(submit);
form.append(s);


a.style.visibility="hidden";
//event.preventDefault();
var f=document.createElement("form");
f.setAttribute("method","post");
form.append(f);

var p=document.createTextNode("Title: ");
form.append(p);
var t1=document.createElement("input");
t1.setAttribute("type","text");
t1.setAttribute("id","t1");
form.append(t1);
br();br();
var sc=document.createTextNode("Score: ");
form.append(sc);
var t2=document.createElement("input");
t2.setAttribute("type","number");
t2.setAttribute("id","t2");
form.append(t2);

br();br();
var n=document.createTextNode("Negative Marking: ");
form.append(n);
var t3=document.createElement("input");
t3.setAttribute("type","checkbox");
t3.setAttribute("id","t3");
t3.checked=true;
form.append(t3);

br();br();
var q=document.createTextNode("Question Explanation ");
form.append(q);
var t4=document.createElement("textarea");
t4.setAttribute("id","t4");
form.append(t4);

br();br();br();
var ao=document.createElement("button");
var at=document.createTextNode("Add Option +");
ao.append(at);
form.append(ao);br();
var o1t=document.createTextNode("Option 1:");
form.append(o1t);
var t5=document.createElement("input");
t5.setAttribute("id","t5");
form.append(t5);
var o1c=document.createElement("input");
o1c.setAttribute("type","checkbox");
o1c.setAttribute("id","o1c");
form.append(o1c);

br();br();

var o2t=document.createTextNode("Option 2:");
form.append(o2t);
var t6=document.createElement("input");
t6.setAttribute("id","t6");
form.append(t6);
var o2c=document.createElement("input");
o2c.setAttribute("type","checkbox");
o2c.setAttribute("id","o2c");
form.append(o2c);
br();br();



sortby=document.createTextNode("Sort By   ");
form.append(sortby)
mcqr=document.createTextNode("Mcq");
form.append(mcqr);
var r1=document.createElement("input");
r1.setAttribute("type","radio");
form.append(r1);
r1.setAttribute("id","r1");

;
codr=document.createTextNode("Coding");
form.append(codr);
var r2=document.createElement("input");
r2.setAttribute("type","radio");
form.append(r2);
r2.setAttribute("id","r2");

r1.addEventListener("click", function(event)
{
var childNodes = divlist.childNodes;
   for (var i = 0; childNodes.length > 0;) 
   {
     divlist.removeChild(childNodes[i]);
   }

});
r1.addEventListener("click", function(event)
{


});

ao.addEventListener("click", function(event)
{
if(m==11)
{
alert("Cannot Add More Options")
}
else {
var ot=document.createTextNode("Option"+" "+m+":");
div1=document.createElement("div");
form.append(div1);
div1.append(ot);
var t=document.createElement("input");
t.setAttribute("id","t");
div1.append(t);
var oc=document.createElement("input");
oc.setAttribute("type","checkbox");
oc.setAttribute("id","oc");
div1.append(oc);
d=document.createElement("button");
dele=document.createTextNode("DELETE");
d.append(dele);
div1.append(d);

m++;
br();br();
}
d.addEventListener("click", function(event)
{
var paa=event.target.parentNode;
var grandpaa=event.target.parentNode.parentNode;
grandpaa.removeChild(paa);

});

});

s.addEventListener("click", function(event)
{
if(t1.value=="" || t2.value=="" || t5.value==""||t4.value==""||t6.value=="")
{ 
window.alert("Fill The details");
return false;
}
else
{

var childNodes = form.childNodes;
   for (var i = 0; childNodes.length > 0;) 
   {
     form.removeChild(childNodes[i]);
   }
flag=0;


var s=t1.value ;
createlist(s);
var objproduct=new Object();
objproduct.id=pid;
objproduct.type="Mcq";
objproduct.title=t1.value;
objproduct.score=t2.value;
objproduct.nmark=t3.value;
objproduct.qexp=t4.value;

products.push(objproduct);
storeProducts(products);
pid++;

}


}
);





}

a.addEventListener("click", function(event)
{
a.style.visibility="hidden";

var childNodes = form.childNodes;
   for (var i = 0; childNodes.length > 0;) 
   {
     form.removeChild(childNodes[i]);
   }
var select=document.createElement("select");
selection.append(select);
select.style.visibility="visible";
var o=document.createElement("option");
var ot=document.createTextNode("Double click to Select");
o.append(ot);
select.append(o);

var o1=document.createElement("option");
var ot1=document.createTextNode("Mcq");
o1.append(ot1);
select.append(o1);
var o2=document.createElement("option");
var ot2=document.createTextNode("Coding");
o2.append(ot2);
select.append(o2);





select.addEventListener('click',function()
		{
var childNodes = form.childNodes;
   for (var i = 0; childNodes.length > 0;) 
   {
     form.removeChild(childNodes[i]);
   }

		TYpe=select.options[select.selectedIndex].value;
			if(select.options[select.selectedIndex].value=="Mcq")
			{
				createpanel(null);
			}
			else if(select.options[select.selectedIndex].value=="Coding")
			{
				createpanelcode(null);
			}

		}
	);

}
);

function createpanelcode(ob)
{


var d=2;
s=document.createElement("button");
submit=document.createTextNode("Submit >>");
s.append(submit);
form.append(s);


a.style.visibility="hidden";
//event.preventDefault();
var f=document.createElement("form");
f.setAttribute("method","post");
form.append(f);

var p=document.createTextNode("Title: ");
form.append(p);
var t1=document.createElement("input");
t1.setAttribute("type","text");
t1.setAttribute("id","t1");
form.append(t1);
br();br();
var l1=document.createTextNode("C");
form.append(l1);
var l1c=document.createElement("input");
l1c.setAttribute("type","checkbox");
l1c.setAttribute("id","l1c");
form.append(l1c);
br();br();

var l2=document.createTextNode("C++");
form.append(l2);
var l2c=document.createElement("input");
l2c.setAttribute("type","checkbox");
l2c.setAttribute("id","l2c");
form.append(l2c);
br();br();


var l3=document.createTextNode("Java");
form.append(l3);
var l3c=document.createElement("input");
l3c.setAttribute("type","checkbox");
l3c.setAttribute("id","l3c");
form.append(l3c);
br();br();


var l4=document.createTextNode("Python");
form.append(l4);
var l4c=document.createElement("input");
l4c.setAttribute("type","checkbox");
l4c.setAttribute("id","l3c");
form.append(l4c);
br();br();




br();br();
var k=document.createTextNode("Keywords ");
form.append(k);
var t4=document.createElement("textarea");
t4.setAttribute("id","t4");
form.append(t4);


br();br();
var q=document.createTextNode("Description ");
form.append(q);
var t4=document.createElement("textarea");
t4.setAttribute("id","t4");
form.append(t4);

br();br();br();
var ao=document.createElement("button");
var at=document.createTextNode("Add Tescases +");
ao.append(at);
form.append(ao);br();
var o1t=document.createTextNode("Testcase 1:");
form.append(o1t);
br();
inp=document.createTextNode("INPUT");
form.append(inp);
var t5=document.createElement("input");
t5.setAttribute("id","t5");
form.append(t5);

op=document.createTextNode("  Expected Output:");
form.append(op);
var t6=document.createElement("input");
t6.setAttribute("id","t6");
form.append(t6);

sc=document.createTextNode("  Score");
form.append(sc);
var t7=document.createElement("input");
t7.setAttribute("id","t7");
form.append(t7);
br();br();


mcqr=document.createTextNode("Mcq");
form.append(mcqr);
var r1=document.createElement("input");
r1.setAttribute("type","radio");
form.append(r1);
r1.setAttribute("id","r1");

sortby=document.createTextNode("Sort By  ");
form.append(sortby);
codr=document.createTextNode("Coding");
form.append(codr);
var r2=document.createElement("input");
r2.setAttribute("type","radio");
form.append(r2);
r2.setAttribute("id","r2");

ao.addEventListener("click", function(event)
{
if(xx==21)
{
alert("Cannot Add More TestCases")
}
else {
console.log(d);
var ott=document.createTextNode("Tescase"+" "+xx+":");
div1=document.createElement("div");
div1.setAttribute("id","div1");
form.append(div1);
div1.append(ott);
d=document.createElement("button");
dele=document.createTextNode("DELETE");
d.append(dele);
div1.append(d);
br=document.createElement("br");
div1.append(br);
inp=document.createTextNode("INPUT");
div1.append(inp);
var t5=document.createElement("input");
t5.setAttribute("id","t5");
div1.append(t5);

op=document.createTextNode("  Expected Output:");
div1.append(op);
var t6=document.createElement("input");
t6.setAttribute("id","t6");
div1.append(t6);

sc=document.createTextNode("  Score");
div1.append(sc);
var t7=document.createElement("input");
t7.setAttribute("id","t7");
div1.append(t7);


xx++;


}
d.addEventListener("click", function(event)
{
var paa=event.target.parentNode;
var grandpaa=event.target.parentNode.parentNode;
grandpaa.removeChild(paa);

});
});
s.addEventListener("click", function(event)
{
if(t1.value==""  || t5.value==""||t4.value==""||t6.value=="")
{ 
window.alert("Fill The details");
return false;
}
else
{

var childNodes = form.childNodes;
   for (var i = 0; childNodes.length > 0;) 
   {
     form.removeChild(childNodes[i]);
   }
flag=0;

//a.style.visibility="visible";
var s=t1.value ;
createlist(s);
var objproduct=new Object();
objproduct.id=pid;
objproduct.type="Coding";
objproduct.title=t1.value;
objproduct.score=t7.value;
objproduct.nmark="no";
objproduct.qexp=t4.value;

products.push(objproduct);
storeProducts(products);
pid++;

}


}
);

}

function br()
{

br1=document.createElement("br");
form.append(br1);
}


function storeProducts(products){localStorage.products = JSON.stringify(products);}

function pindex(selectedid)
{
for (var i = 0; i < products.length; i++) 
	{
        if (products[i].id ==selectedid) 
		{	return i;

    		}
}
}

function getStoredProducts(){if (!localStorage.products){localStorage.products = JSON.stringify([]); 
}return JSON.parse(localStorage.products); 
}

function sessiongetstoreinfo(){if (!sessionStorage.s){sessionStorage.s = JSON.stringify([]); 
}return JSON.parse(sessionStorage.s); 
}

