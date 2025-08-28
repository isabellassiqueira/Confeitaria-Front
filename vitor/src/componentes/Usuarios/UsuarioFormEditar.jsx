import { useEffect, useState } from "react";

const UsuarioFormEditar = ({ aoEnviar, dadosIniciais }) => {
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const [carregando, setCarregando] = useState(true);

    useEffect(() => {
        if (dadosIniciais) {
            setEmail(dadosIniciais.email || '');
            setSenha(dadosIniciais.senha || '');
            setCarregando(false);
        }
    }, [dadosIniciais]);

    const enviar = (e) => {
        e.preventDefault();
        aoEnviar({ email, senha });
    };

    // if (carregando) return <p>Carregando dados do usuário...</p>;

    return (
        <div className="container mt-4 d-flex flex-column align-items-center">
            <form onSubmit={enviar} className="w-100" style={{ maxWidth: 500 }}>
                <div className="mb-3">
                    <label className="form-label">Email</label>
                    <input
                        type="email"
                        className="form-control"
                        value={email}
                        placeholder="Digite o e-mail"
                        required
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>

                <div className="mb-3">
                    <label className="form-label">Senha</label>
                    <input
                        type="password"
                        className="form-control"
                        value={senha}
                        placeholder="Digite a senha"
                        required
                        onChange={(e) => setSenha(e.target.value)}
                    />
                </div>

                <div className="text-center">
                    <button className="btn btn-primary" type="submit">
                        Salvar Alterações
                    </button>
                </div>
            </form>
        </div>
    );
};

export default UsuarioFormEditar;
