import { useRef } from "react";

function App(){
    const titulo = useRef();

    const logTitle = ()=>{
        console.log(titulo.current)
    }

    return(
        <div>
            <h1 ref={titulo}>React Hooks useRef</h1>

            <button onClick={logTitle}>Log Titulo</button>

        </div>
    )
}


export default App;