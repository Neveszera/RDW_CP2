import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './index.scss';

function Home() {
  const [destaques, setDestaques] = useState([]);
  
  useEffect(() => {
    // Solicitação GET para obter todos os smartphones
    fetch('http://localhost:5000/aparelhos')
      .then((response) => response.json())
      .then((data) => {
        // Obtenha todos os IDs dos smartphones disponíveis
        const todosIds = data.map((aparelho) => aparelho.id);
        
        // Gere dois IDs aleatórios a partir dos IDs disponíveis
        const aleatorio1 = todosIds[Math.floor(Math.random() * todosIds.length)];
        let aleatorio2;
        do {
          aleatorio2 = todosIds[Math.floor(Math.random() * todosIds.length)];
        } while (aleatorio1 === aleatorio2);

        // Filtrar os smartphones destaque pelos IDs aleatórios gerados
        const smartphonesDestaques = data.filter((aparelho) => (
          aparelho.id === aleatorio1 || aparelho.id === aleatorio2
        ));

        setDestaques(smartphonesDestaques);
      })
      .catch((error) => console.log('Erro ao obter destaques:', error));
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
