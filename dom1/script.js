var head=document.getElementById("head1");
console.log(head);
head.style.color="blue";
head.textContent="Text Content Changed";
head.innerHTML="<h6>Changed into h6</h6>"
var c = document.getElementsByClassName("list");
for(let i=0;i<c.length;i++)
{
    c[i].style.backgroundColor="yellow";
}
var t = document.getElementsByTagName('li');
t[1].style.color="red"
//using qyery selector
let val = document.querySelector("input");
val.value="Name";
//query selector using id
var savBtn=document.querySelector("#saveBtn");
saveBtn.style.backgroundColor="green"


