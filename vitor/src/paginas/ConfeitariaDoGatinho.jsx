import React, { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './home.css';

const ConfeitariaDoGatinho = () => {
  
const navegar = useNavigate();
  const [currentSlide, setCurrentSlide] = useState(0);
  const [showLogin, setShowLogin] = useState(false);
  
  // Efeito para o carrossel
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev === 2 ? 0 : prev + 1));
    }, 5000);
    
    return () => clearInterval(timer);
  }, []);
  
  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === 2 ? 0 : prev + 1));
  };
  
  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? 2 : prev - 1));
  };
  
  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  return (
    <div className="app">
      <main className="container">
        <section className="carousel" id="inicio">
          <div className="carousel-slides" style={{ transform: `translateX(-${currentSlide * 100}%)` }}>
            <div className="carousel-slide">
              <img src="https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/53242a69-5b31-4903-9d28-2cf7cd40a985.png" alt="Confeitaria decorada com bolos, doces e cupcakes em tons de rosa e marrom sobre mesa de madeira" />
              <div className="slide-content">
                <h2>Doces Artesanais</h2>
                <p>Feitos com amor e ingredientes de primeira qualidade</p>
              </div>
            </div>
            <div className="carousel-slide">
              <img src="https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/5943add5-368f-48b8-8cf2-9e3aa9497692.png" alt="Variedade de salgados artesanais e pães frescos em cesta de vime" />
              <div className="slide-content">
                <h2>Salgados Especiais</h2>
                <p>Perfeitos para seu café da manhã ou lanche da tarde</p>
              </div>
            </div>
            <div className="carousel-slide">
              <img src="https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/c3c885f0-5c9d-439b-bc14-49ffa8d38be1.png" alt="Bolo de aniversário decorado com tema de gatinho e detalhes em rosa e marrom" />
              <div className="slide-content">
                <h2>Bolos Personalizados</h2>
                <p>Faça seu evento mais especial com nossas criações</p>
              </div>
            </div>
          </div>

<button className="carousel-btn" onClick={prevSlide}>❮</button>
<button className="carousel-btn" onClick={nextSlide}>❯</button>
          
          <div className="carousel-indicators">
            {[0, 1, 2].map((index) => (
              <div 
                key={index}
                className={`indicator ${currentSlide === index ? 'active' : ''}`}
                onClick={() => goToSlide(index)}
              ></div>
            ))}
          </div>
        </section>
        
        <section className="welcome-section">
          <h1></h1>
          <p></p>
          <img src="https://cdn-icons-png.flaticon.com/512/102/102649.png" alt="segurança" />
        </section>
    
        <h2>Carrossel de Produtos</h2>
        <div className="carousel-wrapper">
          <button className="carousel-btn" aria-label="Anterior" disabled>◀</button>
          <div className="carousel-container">
            <div className="product-card">
              <img src="https://via.placeholder.com/200x150" alt="Produto 1" />
              <h3>Produto 1</h3>
              <p>Descrição do produto 1</p>
            </div>
            <div className="product-card">
              <img src="https://via.placeholder.com/200x150" alt="Produto 2" />
              <h3>Produto 2</h3>
              <p>Descrição do produto 2</p>
            </div>
            <div className="product-card">
              <img src="https://via.placeholder.com/200x150" alt="Produto 3" />
              <h3>Produto 3</h3>
              <p>Descrição do produto 3</p>
            </div>
            <div className="product-card">
              <img src="https://via.placeholder.com/200x150" alt="Produto 4" />
              <h3>Produto 4</h3>
              <p>Descrição do produto 4</p>
            </div>
            <div className="product-card">
              <img src="https://via.placeholder.com/200x150" alt="Produto 5" />
              <h3>Produto 5</h3>
              <p>Descrição do produto 5</p>
            </div>
          </div>
          <button className="carousel-btn" aria-label="Próximo">▶</button>
        </div>
        
        <section className="menu-section">
          <h2 className="section-title">Mais Vendidos</h2>
          <div className="menu-items">
            <div className="menu-card">
              <img src="https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/8a1b76a5-4f20-4ef9-920a-d45af2d0bf9f.png" alt="Cupcake decorado com chantilly rosa e decoração de patinha de gatinho" className="menu-img" />
              <div className="menu-content">
                <h3 className="menu-title">Cupcake de Gatinho</h3>
                <p className="menu-desc">Delicioso cupcake de baunilha com cobertura de chantilly e decoração temática.</p>
                <p className="menu-price">R$ 8,90</p>
              </div>
            </div>
            
            <div className="menu-card">
              <img src="https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/768fbe21-a2de-4025-ac71-46aa97eb4755.png" alt="Brownie de chocolate com nozes e calda de caramelo" className="menu-img" />
              <div className="menu-content">
                <h3 className="menu-title">Brownie Especial</h3>
                <p className="menu-desc">Brownie de chocolate meio amargo com nozes e um toque de canela.</p>
                <p className="menu-price">R$ 12,50</p>
              </div>
            </div>
            
            <div className="menu-card">
              <img src="https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/6068fd83-d99a-4673-9524-f4b5d2c90e9d.png" alt="Brigadeiro gourmet em copinho decorado com granulados coloridos" className="menu-img" />
              <div className="menu-content">
                <h3 className="menu-title">Brigadeiro do Gato</h3>
                <p className="menu-desc">Nosso clássico brigadeiro gourmet com chocolate 70% e opções de cobertura.</p>
                <p className="menu-price">R$ 6,90</p>
              </div>
            </div>
          </div>
        </section>
        
        <section className="menu-section">
          <h2 className="section-title" id="cardapio">Conheça um pouco do nosso cardápio</h2>
          <p>Todos os nossos produtos são feitos artesanalmente com ingredientes frescos e de alta qualidade.</p>
          <div className="menu-items">
            <div className="menu-card" style={{background: '#E7D0D0'}}>
              <img src="https://www.kideliciasalgados.com.br/wp-content/uploads/2019/11/empada_frango_kidelicia.png" className="menu-img" alt="Empada de Frango" />
              <div className="menu-content">
                <h3 className="menu-title">Empada de Frango</h3>
                <p className="menu-desc">Empadinha de frango desfiado com catupiry em massa amanteigada.</p>
                <p className="menu-price">R$ 7,50</p>
              </div>
            </div>
            
            <div className="menu-card">
              <img src="https://panutti.com.br/resize/imagecache//efd0603074b14c83047afaf72619a7e5.jpg" className="menu-img" alt="Pão de Queijo" />
              <div className="menu-content">
                <h3 className="menu-title">Pão de Queijo</h3>
                <p className="menu-desc">Feito com queijo minas frescal e polvilho azedo, crocante por fora e macio por dentro.</p>
                <p className="menu-price">R$ 15,90 (6 un.)</p>
              </div>
            </div>
            
            <div className="menu-card" style={{background: '#E7D0D0'}}>
              <img src="https://panutti.com.br/resize/imagecache//d5c9a491e8b203c6daccc0e68bbd1830.JPG" alt="Coxinha de frango com catupiry" className="menu-img" />
              <div className="menu-content">
                <h3 className="menu-title">Coxinha</h3>
                <p className="menu-desc">Tradicional coxinha de frango com catupiry.</p>
                <p className="menu-price">R$ 6,90</p>
              </div>
            </div>
            
            <div className="menu-card">
              <img src="https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/5b54f88a-00c4-4956-bd2c-9b131014fbf9.png" alt="Mini quiches de queijo e espinafre em forma de flor" className="menu-img" />
              <div className="menu-content">
                <h3 className="menu-title">Mini Quiches</h3>
                <p className="menu-desc">Massa folhada recheada com queijo brie e espinafre frescos.</p>
                <p className="menu-price">R$ 22,90 (4 un.)</p>
              </div>
            </div>

            <div className="menu-card" style={{background: '#E7D0D0'}}>
              <img src="https://centralmaxsupermercados.com.br/imagens_site/70698.jpg" alt="Bauru de calabresa com queijo" className="menu-img" />
              <div className="menu-content">
                <h3 className="menu-title">Bauru</h3>
                <p className="menu-desc">Salgado recheado com presunto, queijo em fatias e tomates frescos cozidos.</p>
                <p className="menu-price">R$ 22,90 (4 un.)</p>
              </div>
            </div>

            <div className="menu-card">
              <img src="https://panutti.com.br/resize/imagecache//38767a4edda9e27ff173ffc25ec1e052.JPG" alt="Esfirra de carne" className="menu-img" />
              <div className="menu-content">
                <h3 className="menu-title">Esfirra</h3>
                <p className="menu-desc">Salgado recheado com carne temperada e massa leve e saborosa.</p>
                <p className="menu-price">R$ 22,90 (4 un.)</p>
              </div>
            </div>
          </div>
          <a className="btn">Conheça nosso cardápio</a>
        </section>
      </main>
      
      <section className="contact-section" id="contato">
        <div className="container">
          <h2 className="section-title" style={{color: 'white'}}>Entre em Contato</h2>
          <div className="contact-container">
            <div className="contact-info">
              <h3>Informações</h3>
              <div className="contact-details">
                <p><span role="img" aria-label="localização">📌</span> Rua dos Doces, 123 - Centro</p>
                <p><span role="img" aria-label="telefone">📞</span> (11) 98765-4321</p>
                <p><span role="img" aria-label="email">✉️</span> contato@confeitariadogatinho.com</p>
                <p><span role="img" aria-label="horário">⏰</span> Seg-Sex: 8h-20h | Sáb: 9h-18h</p>
              </div>
              
              <div className="social-icons">
                <a href="#" className="social-icon">f</a>
                <a href="#" className="social-icon">i</a>
                <a href="#" className="social-icon">w</a>
              </div>
            </div>
            
            <div className="contact-info contact-form">
              <h3>Mensagem</h3>
              <form>
                <div className="form-group">
                  <label htmlFor="name">Nome</label>
                  <input type="text" id="name" required />
                </div>
                <div className="form-group">
                  <label htmlFor="email">E-mail</label>
                  <input type="email" id="email" required />
                </div>
                <div className="form-group">
                  <label htmlFor="message">Mensagem</label>
                  <textarea id="message" required></textarea>
                </div>
                <button type="submit" className="btn">Enviar Mensagem</button>
              </form>
            </div>
          </div>
        </div>
      </section>
      
      {showLogin && (
        <div className="login-section">
          <div className="login-container">
            <div className="close-login" onClick={() => setShowLogin(false)}>×</div>
            <h2>Login/Cadastro</h2>
            <form>
              <div className="form-group">
                <label htmlFor="loginEmail">E-mail</label>
                <input type="email" id="loginEmail" required />
              </div>
              <div className="form-group">
                <label htmlFor="loginPassword">Senha</label>
                <input type="password" id="loginPassword" required />
              </div>
              <div className="login-options">
                <button type="button" className="btn">Cadastre-se</button>
                <button type="submit" className="btn">Entrar</button>
              </div>
            </form>
          </div>
        </div>
      )}
      
      <footer>
        <div className="container">
          <div className="footer-logo">
            <div className="logo">
              <div className="logo-img" role="img" aria-label="gatinho">🐱</div>
              <div className="logo-text" style={{color: 'white'}}>Confeitaria do Gatinho</div>
            </div>
          </div>
          
          <div className="footer-links">
            <a href="#inicio">Início</a>
            <a href="#cardapio">Cardápio</a>
            <a href="#contato">Contato</a>
            <a href="#termosdeuso">Termos de Uso</a>
            <a href="#politicadeprivacidade">Política de Privacidade</a>
          </div>
          
          <p className="copyright">© 2023 Confeitaria do Gatinho. Todos os direitos reservados.</p>
        </div>
      </footer>
    </div>
  );
};

export default ConfeitariaDoGatinho;