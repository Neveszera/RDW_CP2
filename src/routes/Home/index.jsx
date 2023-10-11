import React from 'react';
import styles from './index.module.css';
import { Link } from 'react-router-dom';
import aparelhosData from '../../../aparelhosData';


function Home() {

  const destaques = aparelhosData.slice(0, 2);

  return (
    <div className={styles.container}>
      <h1 className={styles.heading}>NevesStore - Seu Destino para Smartphones e Tablets</h1>
      <div className={styles.highlightsContainer}>
        {destaques.map((destaqueId) => {
          const destaque = aparelhosData.find((item) => item.id === destaqueId);

          return (
            <div key={destaque.id} className={styles.highlight}>
              <img
                src={destaque.imagem}
                alt={destaque.nome}
                className={styles.highlightImage}
              />
              <h3>{destaque.nome}</h3>
              <p>{destaque.descricaoCurta}</p>
              <p className={styles.smartphonePrice}>{destaque.preco}</p>
              <Link to={`/aparelhos/${destaque.id}`} className={styles.viewButton}>
                Ver Detalhes
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
}
export default Home;