import React from "react";
import { Routes, Route, Link, useNavigate, useLocation } from 'react-router-dom';

import ConfeitariaDoGatinho from "./paginas/ConfeitariaDoGatinho";
import Login from "./componentes/Usuarios/Login";
import ListarUsuarios from "./paginas/Usuarios/ListarUsuarios";
import CadastrarUsuarios from "./paginas/Usuarios/CadastrarUsuarios";
import EditarUsuarios from "./paginas/Usuarios/EditarUsuarios";
import Sacola from "./paginas/Sacola";
import logo from './assets/logo.png'; // importe a logo corretamente
import CadastrarUsuario from "./paginas/Usuarios/CadastrarUsuarios";

const PaginaNaoEncontrada = () => (
  <div className="text-center py-5">
    <h2>Página não encontrada</h2>
    <p>A página que você está procurando não existe.</p>
    <Link to="/" className="btn btn-primary">Voltar a Home</Link>
  </div>
);

const App = () => {
  const location = useLocation();
  const navegar = useNavigate();

  const sair = () => {
    navegar("/");
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

            {/* Remova ou defina setShowLogin se quiser usar */}
            {/* <i className="fa-regular fa-user" onClick={() => setShowLogin(true)}></i> */}
                      <button className="btn-sacola" aria-label="Adicionar à sacola">
                        <FiShoppingBag size={24} />
                      </button>
                      <button className="btn-curtir" aria-label="Curtir">
                        <FaHeart size={24} color="red" />
                      </button>
                  <Link to="/login">
                  <button className="btn-pagina" aria-label="Adicionar à sacola">Ir para Login</button>
                        <FiShoppingBag size={24} />
                  </Link>

                  <Link to="/sacola">
                 <button>Ir para Sacola</button>
                  </Link> 

            <i className="fa-solid fa-bag-shopping"></i>
          </div>
        </header>

        <div className="nav-docabecalho">
          <nav>
            {/* Para âncoras internas, use <a href="#inicio"> */}
            <a href="#inicio" className="active">Início</a>

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

            {/* Continue usando <a> para âncoras internas */}
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
          <Route path="/cadastro" element={<CadastrarUsuario />} />         
          <Route path="/usuarios" element={<ListarUsuarios />} />
          <Route path="/usuarios/cadastrar" element={<CadastrarUsuarios />} />
          <Route path="/usuarios/editar/:id" element={<EditarUsuarios />} />
          <Route path="*" element={<PaginaNaoEncontrada />} />
        </Routes>
      </div>
    </>
  );
};

export default App;
