
import React from 'react';
import {Link} from 'react-router-dom';

function Home(){
    return(
        <div>
            <h1>Esta é a Página Home</h1>
            <Link to='/sobre'>
                Ir para a Página Sobre
            </Link>
        </div>
    )
}

export default Home;
