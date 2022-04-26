import React from 'react';
import {Link} from 'react-router-dom';

function Sobre(){
    return(
        <div>
            
            <h1>Essa é a Página Sobre</h1>
            <Link to='/'>Voltar para Página Home</Link>
        </div>
    )
}

export default Sobre;