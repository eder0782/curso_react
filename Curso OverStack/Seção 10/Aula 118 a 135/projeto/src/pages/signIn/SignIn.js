import { useState } from 'react';
import api from '../../services/api';
import axios from "axios";

import {Container,Form,Input,Button} from './styleSignIn'

function SignIn(){
    const [email,setEmail]=useState('');
    const [password,setPassword]=useState('');
    //FUNÇÃO ASSINCRONA UTILIZANDO AXIOS
    async function HandleClick(){
       const data = {email,password}

       await axios.post('http://localhost:3000/user',data)
       .then((response)=>{
           console.log(response)
       })
       .catch((error)=>{
           console.error(error);
       })

    }
    return(
        <Container>
            <Form>
                <Input type='email' required placeholder='Email' onChange={(e)=>setEmail(e.target.value)}></Input>
                <Input type='password' required placeholder='Senha' onChange={(e)=>setPassword(e.target.value)}></Input>
                <Button onClick={HandleClick}>Entrar</Button>

            </Form>
            
        </Container>
    )
}

export default SignIn;