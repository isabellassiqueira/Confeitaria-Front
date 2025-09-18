import React, { useState } from "react";
import { Routes, Route, Link, useNavigate, useLocation } from 'react-router-dom';
import { FiShoppingBag, FiUser  } from 'react-icons/fi';

import ConfeitariaDoGatinho from "./paginas/ConfeitariaDoGatinho";
import Login from "./componentes/Usuarios/Login";
import ListarUsuarios from "./componentes/Usuarios/ListarUsuarios";
import CadastrarUsuarios from "./componentes/Usuarios/CadastrarUsuarios";
import EditarUsuarios from "./componentes/Usuarios/EditarUsuarios";
import Sacola from "./componentes/Usuarios/sacola";
import logo from './assets/logo.png';
import CadastrarUsuario from "./componentes/Usuarios/CadastrarUsuarios";

const PaginaNaoEncontrada = () => (
  <div className="text-center py-5">
    <h2>Página não encontrada</h2>
    <p>A página que você está procurando não existe.</p>
    <Link to="/" className="btn btn-primary">Voltar a Home</Link>
  </div>
);

const Carrinho = ({ onFechar }) => (
  <div style={{
    position: 'fixed',
    top: '100px',
    right: '20px',
    width: '300px',
    height: '100%',
    backgroundColor: 'white',
    border: '1px solid #ccc',
    boxShadow: '0 2px 8px rgba(0,0,0,0.2)',
    zIndex: 1000,
    borderRadius: '8px',
    display: 'flex',
    flexDirection: 'column',
  }}>
    <div style={{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      backgroundColor: '#E7D0D0',
      color: '#9D6155',
      padding: '25px',
      fontSize: '30px',
      fontWeight: 'bold',
      borderTopLeftRadius: '8px',
      borderTopRightRadius: '8px',
    }}>
      <span>Minha Sacola</span>
      <button
        onClick={onFechar}
        aria-label="Fechar sacola"
        style={{
          background: 'transparent',
          border: 'none',
          fontSize: '24px',
          fontWeight: 'bold',
          cursor: 'pointer',
          color: '#9D6155',
          lineHeight: '1',
        }}
      >
        ×
      </button>
    </div>
    <p style={{ padding: '25px' }}>Aqui ficam os itens adicionados.</p>
  </div>
);

const App = () => {
  const location = useLocation();
  const navegar = useNavigate();

  const sair = () => {
    navegar("/");
  };

  // Estado e função declarados apenas aqui dentro
  const [carrinhoAberto, setCarrinhoAberto] = useState(false);

  const toggleCarrinho = () => {
    setCarrinhoAberto(!carrinhoAberto);
  };

  return (
    <>
      <div className="app">
        <header>
          <div className="search-container">
            <input type="text" className="search-input" placeholder="Buscar..." />
            <i className="fas fa-search search-icon"></i>
            <div className="search-bar"></div>
          </div>

          <div className="logo-container">
            <div className="logo">
              <svg viewBox="0 0 24 24"></svg>
              <div className="logo-img">
                <img src={logo} alt="Confeitaria Delícias" />
              </div>
            </div>

            <Link to="/login">
              <button
                className="btn-login"
                style={{
                  borderRadius: '100%',
                  border: '2px solid #9D6155',
                  padding: '8px 8px',
                  backgroundColor: '#fff',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px',
                  cursor: 'pointer',
                }}
                aria-label="Ir para Login"
              >
                <FiUser  size={24} />
              </button>
            </Link>

            <button
              className="btn-sacola"
              onClick={toggleCarrinho}
              aria-label={carrinhoAberto ? "Fechar carrinho" : "Abrir carrinho"}
              style={{
                borderRadius: '100%',
                border: '2px solid #9D6155',
                padding: '8px 8px',
                backgroundColor: '#fff',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                cursor: 'pointer',
                marginLeft: '10px',
              }}
            >
              <FiShoppingBag size={24} />
            </button>

            {carrinhoAberto && <Carrinho onFechar={toggleCarrinho} />}
          </div>
        </header>


        <div className="nav-docabecalho">
          <nav>
            <a href="/" className="active">Início</a>

            <div className="modern-dropdown">
              <a href="#cardapio">
                Nosso Cardápio
                <span className="dropdown-indicator">▼</span>
              </a>
              <div className="modern-dropdown-content">
                <a href="#">Pratos do Chef</a>
                <a href="#">Especiais da Casa</a>
                <a href="#">Menu Degustação</a>
                <a href="#">Vinhos Selecionados</a>
                <a href="#">Opções Veganas</a>
              </div>
            </div>

            <div className="modern-dropdown">
              <a href="#cardapio">
                Categorias
                <span className="dropdown-indicator"></span>
              </a>
              <div className="modern-dropdown-content">
                <a href="#">Bolos</a>
                <a href="#">Doces</a>
                <a href="#">Salgados</a>
                <a href="#">Bebidas</a>
                <a href="#">Especiais</a>
              </div>
            </div>

            <div className="modern-dropdown">
              <a href="#">
                Sobre Nós
                <span className="dropdown-indicator">▼</span>
              </a>
              <div className="modern-dropdown-content">
                <a href="#">Nossa História</a>
                <a href="#">Missão e Valores</a>
                <a href="#">Equipe</a>
                <a href="#">Prêmios</a>
              </div>
            </div>

            <div className="modern-dropdown">
              <a href="#eventos">
                Eventos
                <span className="dropdown-indicator">▼</span>
              </a>
              <div className="modern-dropdown-content">
                <a href="#">Festas</a>
                <a href="#">Workshops</a>
                <a href="#">Degustações</a>
                <a href="#">Promoções</a>
              </div>
            </div>

            <div className="modern-dropdown">
              <a href="#contato">
                Contato
                <span className="dropdown-indicator">▼</span>
              </a>
              <div className="modern-dropdown-content">
                <a href="#">Localização</a>
                <a href="#">Telefone</a>
                <a href="#">Email</a>
                <a href="#">Redes Sociais</a>
              </div>
            </div>
          </nav>
        </div>
      </div>

      <div className="container mt-4">
        <Routes>
          <Route path="/" element={<ConfeitariaDoGatinho />} />
          <Route path="/login" element={<Login />} />
          <Route path="/sacola" element={<Sacola />} />
          <Route path="/cadastro" element={<CadastrarUsuario />} />
          <Route path="/usuarios/listar" element={<ListarUsuarios />} />
          <Route path="/usuarios/cadastrar" element={<CadastrarUsuarios />} />
          <Route path="/usuarios/editar/:id" element={<EditarUsuarios />} />
          <Route path="*" element={<PaginaNaoEncontrada />} />
        </Routes>
      </div>

      <footer>
        <div className="container">
          <div className="footer-logo">
            <div className="logo">
              <div className="logo-text" style={{ color: 'white' }}>
                Horário de funcionamento: De 2ª a sábado das 7:30hs ás 18:30hs
                Em feriados e de domingo das 7h ás 14h
              </div>
              <div className="logo-text" style={{ color: 'white' }}>
                Endereço: R. Ari Barroso, 305 - Pres. Altino, Osasco - SP, 06216-901
              </div>
            </div>
          </div>

          <div className="footer-links">
            <a href="#inicio">Início</a>
            <a href="#cardapio">Cardápio</a>
            <a href="#contato">Contato</a>
            <a href="#termosdeuso">Termos de Uso</a>
            <a href="#politicadeprivacidade">Política de Privacidade</a>
          </div>

          <p className="copyright">© 2025 Três Estações. Todos os direitos reservados.</p>
        </div>
      </footer>
    </>
  );
};

export default App;

