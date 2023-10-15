import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './index.scss';

function Home() {
  const [destaques, setDestaques] = useState([]);

  useEffect(() => {
    // Solicitação GET para obter os smartphones em destaque
    fetch('http://localhost:5000/aparelhos')
      .then((response) => response.json())
      .catch((error) => console.log('Erro ao obter aparelhos:', error));
  }, []);

  return (
    <div className="container">
      <div className="promotionCardContainer">
        <div className="promotionCard">
          <h3>Oferta Especial</h3>
          <p>Economize $100 em qualquer smartphone com o código "GARATOLU100".</p>
        </div>
        <div className="promotionCard">
          <h3>Smartphones em Destaque</h3>
          <p>Explore nossa seleção de smartphones de última geração.</p>
        </div>
      </div>

      <div className="featuredProducts">
        <h2>Smartphones em Destaque</h2>
        <Link to="/aparelhos" className="viewAllLink">
          Ver Todos os Smartphones
        </Link>
        {destaques.map((aparelho) => (
          <div key={aparelho.id} className="product">
            <img
              src={aparelho.imagem}
              alt={aparelho.nome}
              className="productImage"
            />
            <div className="productInfo">
              <h3>{aparelho.nome}</h3>
              <p>{aparelho.descricaoCurta}</p>
              <p className="productPrice">{aparelho.preco}</p>
              <Link to={`/aparelhos/${aparelho.id}`} className="detailsButton">
                Ver Detalhes
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;
