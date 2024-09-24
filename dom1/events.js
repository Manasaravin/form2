function popup(){
    alert("You Have Clicked Me!!")
}
btn = document.getElementById("myBtn")
btn.addEventListener("click",function(){
    btn.textContent="changed"
})
var idl = document.getElementById("idl")
function changeColor(){
    idl.style.backgroundColor="yellow"

}
function hide(){
    idl.style.backgroundColor="white"
}
