import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const API_URL = "http://localhost:3000/usuarios";

const Cadastro = () => {
    const navegar = useNavigate();

    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');

    const enviarUsuario = async (e) => {
        e.preventDefault();

        const novoUsuario = {
            email,
            senha
        };

        try {
            const resposta = await fetch(API_URL, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(novoUsuario)
            });

            if (!resposta.ok) {
                throw new Error("Erro ao cadastrar usuário.");
            }

            alert("Usuário cadastrado com sucesso!");
            navegar("/usuarios");
        } catch (erro) {
            console.error("Erro ao cadastrar usuário:", erro);
            alert("Erro ao cadastrar usuário.");
        }
    };

    return (
        <div className="container mt-4 d-flex flex-column align-items-center">
            <form onSubmit={enviarUsuario} className="w-100" style={{ maxWidth: 500 }}>
                <h2 className="text-center mb-4">Cadastrar Usuário</h2>

                <input
                    className="form-control mb-3"
                    type="email"
                    value={email}
                    placeholder="Digite o e-mail"
                    required
                    onChange={(e) => setEmail(e.target.value)}
                />

                <input
                    className="form-control mb-3"
                    type="password"
                    value={senha}
                    placeholder="Digite a senha"
                    required
                    onChange={(e) => setSenha(e.target.value)}
                />

                <div className="text-center">
                    <button className="btn btn-primary" type="submit">SALVAR</button>
                </div>
            </form>
        </div>
    );
};

export default Cadastro;
