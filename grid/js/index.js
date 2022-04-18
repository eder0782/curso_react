let chat = document.getElementById("chat");
let atend = document.getElementById("atendimento");
let enviar = document.getElementById("send");
let memo = document.getElementById("memo");
let msg = document.getElementById("msg");
let memoria=memo.textContent;

chat.addEventListener("click",()=>{
   
    if(atend.style.width=="200px"){
        memoria =memo.textContent;
        memo.textContent="";
        atend.style.width="0";
       
        atend.style.visibility="hidden";

    }
        
    else{
        
        atend.style.width="200px";
        
        atend.style.visibility="visible";
        memo.textContent = memoria;

    }
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
