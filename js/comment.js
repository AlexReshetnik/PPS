var comment = document.querySelector('.comments');
function addComent() {
    console.log(document.comment.userName.value);
  
    var com = document.createElement("div");
    var text = document.createElement("p");
    if (document.comment.messageBox.value !== "" && document.comment.messageBox.value !=="Добавте коментар...") {
        
    
        text.innerHTML = document.comment.userName.value + ": " + document.comment.messageBox.value +'<input type="button" name="delete" onclick="deleteComent(event);" value="Видалити коментар" />';
   
    com.classList.add("Comment");
    com.appendChild(text);
comment.querySelector('fieldset').appendChild(com);
    }
    
}
function textArea(){
    document.comment.messageBox.value = "";
    
}
function deleteComent(event){
    console.log(event.target);
    var father = event.target.parentNode.parentNode;
    father.parentNode.removeChild(father);
    this.innerHTML = "fghj";
}


