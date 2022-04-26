// import { useEffect } from "react";
import React,{useEffect,useState} from "react";

function App(){
    const[addNum,setAddNum]= useState(0);
    useEffect(()=>{
        document.title=addNum;

    },[addNum])

    return(
        <div>
            <h3>React  Hooks (useEffect,useState)</h3>
            <h3 > Valor Atual: {addNum}</h3>
            <br></br>
            <br></br>
            <button onClick={()=>setAddNum(addNum+1)}>Adicionar</button>
            <button onClick={()=>setAddNum(addNum*0)}>Zerar</button>


        </div>
    )
}


export default App;