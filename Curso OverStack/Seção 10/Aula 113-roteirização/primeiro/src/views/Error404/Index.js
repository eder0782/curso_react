

import {Link} from 'react-router-dom';

function Error404(){
    return(
        <div>
            <h1>Erro 404</h1>
            <Link to='/'>
                Voltar para a Página Home
            </Link>
        </div>
    )
}

export default Error404;