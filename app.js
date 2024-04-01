let inputs = document.getElementById("inp");
let deletes = document.querySelector(".delete");

function Add (){
    if(inputs.value === ""){
        alert("Please Enter Task")
    } else{
        let newEle = document.createElement("ul");
        newEle.innerHTML = `${inputs.value}<i class="fa-solid fa-trash"></i>`;
        deletes.appendChild(newEle);
        
        inputs.value="";
        
        newEle.querySelector("i").addEventListener("click", remove);
        function remove(){
            newEle.remove()
        }
    }
}