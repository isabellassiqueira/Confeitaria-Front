import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navegar = useNavigate();

  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [erro, setErro] = useState('');

  const acessar = async () => {
    try {
      const resposta = await fetch("http://localhost:3000/usuarios/login", {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, senha })
      });

      if (resposta.status === 200) {
        navegar("/");
      } else {
        setErro("Email ou senha inválido");
      }
    } catch (err) {
      console.error(err);
      setErro("ERRO: " + err.message);
    }
  };
  
  const cadastrar = () => {
    navegar("/cadastro");
  }

  return (
    <div className="container mt-5 d-flex flex-column align-items-center">
      <h2 className="mb-4">Login</h2>
      <div className="mb-3 w-100" style={{ maxWidth: "240px" }}>
        <input
          className="form-control mb-3"
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          style={{ padding: "0.5rem", width: "250px", marginBottom: "0.5rem" }}
        />
        <input
          className="form-control mb-3"
          type="password"
          placeholder="Senha"
          value={senha}
          onChange={(e) => setSenha(e.target.value)}
          style={{ padding: "0.5rem", width: "250px" }}
        />
      </div>

      {erro && (
        <div
          style={{ maxWidth: "320px" }}
          className="alert alert-danger w-100 text-center"
          role="alert"
        >
          {erro}
        </div>
      )}
      <div style={{ display: 'flex', gap: '10px' }}>
        {/* <button onClick={cadastrar} className="btn btn-success" style={{background:"blue" }}>Cadastrar</button> */}
   <button onClick={acessar} type="button" className="btn btn-primary">
        Acessar
      </button>

      
      </div>
              <p>Caso não tenha a conta, crie <a href="" onClick={cadastrar}>Clique aqui</a></p>

     
    
    </div>
  );
};

export default Login;

