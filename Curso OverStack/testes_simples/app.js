let botao = document.getElementById("btn");
let div = document.querySelector(".teste");

botao.addEventListener("click",()=>{
    if(div.style.display=="none"){
        div.style.display="block";
    }
    else{
        div.style.display="none";
    }
  //  console.log("aqui")
})