import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Home from '../pages/home';
import SignIn from '../pages/signIn'


function Rotas(){
    return(
        <div>
            
            <BrowserRouter>
                <Routes>
                    
                <Route path="/" element={<Home />}></Route>
                    
                <Route path="/signin" element={<SignIn />}></Route>
                                      
                </Routes>
            
            </BrowserRouter>

        </div>
    )

}

export default Rotas;