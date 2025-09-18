import React, { useState } from "react";
import { useNavigate } from "react-router-dom";


const Login = () => {
  const navegar = useNavigate();
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [erro, setErro] = useState('');

  const acessar = async (e) => {
  e.preventDefault();
  try {
    const resposta = await fetch('http://localhost:3000/api/users/login', {
      method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({ email, senha})
    })

    if (resposta.status === 200) {
      // Login OK
      navegar("/"); // redireciona para a página inicial
    } else if (resposta.status === 401) {
      setErro("Email ou senha inválido");
    } else {
      setErro("Erro inesperado");
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
<form onSubmit={acessar} className="container mt-5 d-flex flex-column align-items-center">
    <button type="submit" className="btn btn-primary">Acessar</button>
  </form>

      
      </div>
              <p>Caso não tenha a conta,<a href="" onClick={cadastrar}> clique aqui</a></p>

     
    
    </div>
  );
};

export default Login;

