
var relog;
var ini = false;
var cont=0;
function relogio(){
 
    if(ini ===false){
      ini = true;
      document.getElementById("ini").disabled = true;
      document.getElementById("ini").style.backgroundColor = "#fff";
      document.getElementById("ini").style.color = "#008000";
      document.getElementById("ini").style.cursor= "not-allowed";

      document.getElementById("stop").disabled = false;
      document.getElementById("stop").style.backgroundColor = "#008000";
      document.getElementById("stop").style.color = "#fff";
      document.getElementById("stop").style.cursor= "pointer";

      relog = setInterval(myTimer, 100);
      
    }

}


function myTimer() {
    
  var d = new Date();
  cont +=0.1;
  let arredond = cont.toFixed(2);
  
  
  document.getElementById("visor").innerHTML = arredond;
}

function parar(){

    clearInterval(relog);
    document.getElementById("visor").innerHTML = "0.0";
    document.getElementById("ini").disabled = false;
    document.getElementById("ini").style.backgroundColor = "#008000";
    document.getElementById("ini").style.color = "#fff";
    document.getElementById("ini").style.cursor= "pointer";
    document.getElementById("stop").disabled = true;
    document.getElementById("stop").style.backgroundColor = "#fff";
    document.getElementById("stop").style.color = "#008000";
    document.getElementById("stop").style.cursor= "not-allowed";
    ini = false;
    cont=0;

}