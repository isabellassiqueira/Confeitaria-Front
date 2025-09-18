import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import UsuarioFormEditar from "./UsuarioFormEditar";

const API_URL = "http://localhost:3000/usuarios";

const EditarUsuario = () => {
    const { id } = useParams();
    const navegar = useNavigate();
    const [usuario, setUsuario] = useState(null);

    useEffect(() => {
        fetch(`${API_URL}/${id}`)
            .then(res => res.json())
            .then(dados => setUsuario(dados))
            .catch(err => console.error("Erro ao buscar usuário:", err));
    }, [id]);

    const atualizarUsuario = async (dadosAtualizados) => {
        await fetch(`${API_URL}/${id}`, {
            method: "PUT",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(dadosAtualizados),
        });

        alert("Usuário atualizado com sucesso!");
        navegar("/usuarios");
    };

    return (
        <div>
            <h2 className="text-center mt-4">Editar Usuário</h2>
            <UsuarioFormEditar aoEnviar={atualizarUsuario} dadosIniciais={usuario} />
        </div>
    );
};

export default EditarUsuario;
