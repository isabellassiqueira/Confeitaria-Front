import { Link } from 'react-router-dom';
import logo from './assets/logo.png'; // ajuste o caminho conforme seu projeto
import './nav.css';

function Navbar({ sair }) {
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
              <div className="logo">
                <div className="logo-img">
                  <img src={logo} alt="Confeitaria Delícias" />
                </div>
              </div>
            </div>

            <i className="fa-regular fa-user" onClick={() => setShowLogin(true)}></i>
            <i className="fa-solid fa-bag-shopping"></i>
          </div>
        </header>

        <div className="nav-docabecalho">
          <nav>
            <Link to="/" className="active">Início</Link>

            <div className="modern-dropdown">
              <Link to="#cardapio">
                Nosso Cardápio
                <span className="dropdown-indicator">▼</span>
              </Link>
              <div className="modern-dropdown-content">
                <Link to="#">Pratos Chef</Link>
                <Link to="#">Especiais da Casa</Link>
                <Link to="#">Menu Degustação</Link>
                <Link to="#">Vinhos Selecionados</Link>
                <Link to="#">Opções Veganas</Link>
              </div>
            </div>

            <div className="modern-dropdown">
              <Link to="#cardapio">
                Categorias
                <span className="dropdown-indicator"></span>
              </Link>
              <div className="modern-dropdown-content">
                <Link to="">Bolos</Link>
                <Link to="#">Doces</Link>
                <Link to="#">Salgados</Link>
                <Link to="#">Bebidas</Link>
                <Link to="#">Especiais</Link>
              </div>
            </div>

            <div className="modern-dropdown">
              <Link to="">
                Sobre Nós
                <span className="dropdown-indicator">▼</span>
              </Link>
              <div className="modern-dropdown-content">
                <Link to="#">Nossa História</Link>
                <Link to="#">Missão e Valores</Link>
                <Link to="#">Equipe</Link>
                <Link to="#">Prêmios</Link>
              </div>
            </div>

            <div className="modern-dropdown">
              <Link to="#eventos">
                Eventos
                <span className="dropdown-indicator">▼</span>
              </Link>
              <div className="modern-dropdown-content">
                <Link to="#">Festas</Link>
                <Link to="#">Workshops</Link>
                <Link to="#">Degustações</Link>
                <Link to="#">Promoções</Link>
              </div>
            </div>

            <div className="modern-dropdown">
              <Link to="#contato">
                Contato
                <span className="dropdown-indicator">▼</span>
              </Link>
              <div className="modern-dropdown-content">
                <Link to="#">Localização</Link>
                <Link to="#">Telefone</Link>
                <Link to="#">Email</Link>
                <Link to="#">Redes Sociais</Link>
              </div>
            </div>

            <button onClick={sair} type="button" className="btn btn-outline-danger">Sair</button>
          </nav>
        </div>
      </div>
    </>
  );
}

export default Navbar;
