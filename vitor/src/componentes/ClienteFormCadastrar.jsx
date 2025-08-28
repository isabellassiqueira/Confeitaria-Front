import React, { use, useState } from "react";
import { useNavigate } from "react-router-dom";

const API_URL = "http://localhost:3000/clientes";


const ClienteFormCadastrar = () => {
    const navegar = useNavigate();
    const [nome, setNome] = useState('')
    const [email, setEmail] = useState('')
    const [telefone, setTelefone] = useState('')

    const enviar = async (evento)=>{
        evento.preventDefault();
        console.log("✔ Enviando cliente:",{nome, email, telefone})
        await fetch(API_URL,{
            method: 'POST',
            headers:{'Content-Type':'application/json'},
            body: JSON.stringify({nome, email, telefone})
        })
        navegar("/clientes")
    }

    return (
        <div className="container mt-4 d-flex flex-column align-items-center">
            <form onSubmit={enviar} action="">
                <input class="form-control" style={{maxWidth:"1000px"}} type="text"
                    value={nome}
                    placeholder="Escreva o nome:"
                    required
                    onChange={(evento) => setNome(evento.target.value)} />
                    <br />
                <input class="form-control" style={{maxWidth:"1000px"}}  type="text"
                    value={email}
                    placeholder="Escreva o email:"
                    required
                    onChange={(evento) => setEmail(evento.target.value)} />
                    <br />
                <input class="form-control" style={{maxWidth:"1000px"}}  type="text"
                    value={telefone}
                    placeholder="Escreva o telefone:"
                    required
                    onChange={(evento) => setTelefone(evento.target.value)} />
                    <br />
                <div className="d-flex flex-column align-items-center">
                    <button className="btn btn-primary " type="submit">Cadastrar</button>
                </div>
                
            </form>
        </div>
    )
}
export default ClienteFormCadastrar;