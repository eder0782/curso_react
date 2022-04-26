import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from '../views/Home'
import Sobre from '../views/Sobre'
// import Error404 from '../views/Error404'

function Router(){
    return(
        <div>
            
            <BrowserRouter>
                <Routes>
                    
                <Route path="/" element={<Home />}></Route>
                    
                <Route path="/sobre" element={<Sobre />}></Route>
                                      
                </Routes>
            
            </BrowserRouter>

        </div>
    )
}

export default Router;