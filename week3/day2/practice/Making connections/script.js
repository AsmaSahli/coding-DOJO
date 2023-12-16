function edit() {
    var name=document.querySelector("#username");
    name.innerHTML="Todd E";
    
}
function ignore(id) {
    var element=document.getElementById(id);
    if (element){
        element.remove();
    }
}
    
    
function accept(id) {
    var element=document.getElementById(id);
    if (element){
        element.remove();
        var badge=document.getElementById("connectionNumber");
        badge.innerText=parseInt(badge.innerText)+1;
    }
    
}
