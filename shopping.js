const enterBox=document.getElementById("EnterBox");
const manu=document.getElementById("listmanu");

function addItem(){
    if(enterBox.value===''){
        alert("No Item to Be Added");
    }else{
        let li=document.createElement("li");
        li.innerHTML=enterBox.value;
        manu.appendChild(li);
        let span=document.createElement("span");
        span.innerHTML="\u00d7";
        li.appendChild(span);
    }
    enterBox.value="";
    keepData();
}

manu.addEventListener("click",function(e){
    if(e.target.tagName==="LI"){
        e.target.classList.toggle("checked");
        keepData();
    }
    else if(e.target.tagName==="SPAN"){
        e.target.parentElement.remove();
        keepData();
    }

}, false);

function keepData(){
    localStorage.setItem("data",manu.innerHTML);
}
function showData(){
    manu.innerHTML=localStorage.getItem("data");
}
showData();