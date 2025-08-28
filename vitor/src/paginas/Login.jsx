import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from 'axios'


const Login = () =>{
    
    const navegar = useNavigate();

    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const [erro, setErro] = useState('');

    const acessar = async () => {
        try{
            
            const resposta = await fetch("http://localhost:3000/usuarios/login",{
                method: 'POST',
                headers:{'Content-Type':'application/json'},
                body: JSON.stringify({email, senha})
            }) 
            if(resposta.status === 200){
                navegar("/home");
            }else{
                setErro("Email ou senha inválido")
            }

            // const resposta = await axios.post( "http://localhost:3000/usuarios/login",{email, senha});
            // if(resposta.status === 200){
            //     navegar("/clientes");
            // }else{
            //     setErro("Email ou senha inválido")
            // }

           
        }catch(err){
            console.error(err)
            setErro("ERRO:",err)
        }      
    }
    
    return (
        // <div style={{padding : '2rem', textAlign:"center"}}>
        //     <h2>Seja bem vindo ao Sistema</h2>
        //     <button onClick={acessar}>Acessar Sistemas</button>
        // </div>
        <div className="container mt-5 d-flex flex-column align-items-center">
            <h2 className="mb-4">Login</h2>
            <div className="mb-3 w-100"  style={{maxWidth:"240px"}}>
            
                <input class="form-control mb-3" type="email" placeholder="Email"  value={email} 
                onChange={(e) => setEmail(e.target.value)} 
                style={{padding:"0.5rem", width:"250px", marginBottom:"0.5rem"}}/>
                <br />                
                <input class="form-control mb-3" type="password" placeholder="Senha"  value={senha} 
                onChange={(e) => setSenha(e.target.value)} 
                style={{padding:"0.5rem", width:"250px"}} />
            </div>
            
            {erro && <div style={{maxWidth:"320px"}}  class="alert alert-danger w-100 text-center"
             role="alert">
                {erro}
            </div>}
           

            <button onClick={acessar} type="button" class="btn btn-primary">Acessar</button>
        </div>
        

    )
}
export default Login;