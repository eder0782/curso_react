import { useState } from 'react';
import api from '../../services/api';
// import axios from "axios";
import { ToastContainer } from 'react-toastify';

import Message from '../../components/Message/Message';
import SigninValidation from '../../utils/validation/SigninValidation';
import {Container,Form,Input,Button} from './styleSignIn'

function SignIn(){
    const [email,setEmail]=useState('');
    const [password,setPassword]=useState('');
    //FUNÇÃO ASSINCRONA UTILIZANDO AXIOS
    async function HandleClick(e){
        e.preventDefault();
       const data = {email,password}

        //VERIFICA SE O EMAIL E A SENHA PREENCHIDOS SÃO VÁLIDOS
        //PARA ISSO UTILIZA A BIBLIOTECA YUP
       let validation = await SigninValidation(data);

       if(validation){
            await api.post('http://localhost:3000/user',data)
            .then((response)=>{
                Message(response)
            })
            .catch((error)=>{
                Message('Falha na autenticação','error');
            })

       }
       else{
           Message('Preencha um email e uma senha válidos!','warn');

       }

       

    }
    return(
        <Container>
            <ToastContainer theme='colored'/>
            <Form>
                <Input type='email' required placeholder='Email' onChange={(e)=>setEmail(e.target.value)}></Input>
                <Input type='password'  placeholder='Senha' onChange={(e)=>setPassword(e.target.value)}></Input>
                <Button onClick={(e)=>HandleClick(e)}>Entrar</Button>

            </Form>
            
        </Container>
    )
}

export default SignIn;