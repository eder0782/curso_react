let chat = document.getElementById("chat");
let atend = document.getElementById("atendimento");
let enviar = document.getElementById("send");
let memo = document.getElementById("memo");
let msg = document.getElementById("msg");

chat.addEventListener("click",()=>{
   
    if(atend.style.visibility=="visible")
        atend.style.visibility="hidden";
    else
        atend.style.visibility="visible";
})

enviar.addEventListener("click",()=>{
    if(msg.value!=""){
        let m = memo.value;
        memo.textContent = m+"\n"+msg.value;
        msg.value="";
        msg.focus();
        
    }
})



function envia(event) {
   
        let m = memo.value;
        memo.textContent = m+"\n"+msg.value;
        msg.value="";
        msg.focus();
    
    
    
}

msg.addEventListener("keydown",e=>{
   if(e.key=="Enter" && msg.value!=""){
     envia();
   }
})
