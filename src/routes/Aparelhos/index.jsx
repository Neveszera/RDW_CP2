import React from 'react';
import styles from './index.module.css';
import aparelhosData from '../../../aparelhosData';
import { Link } from 'react-router-dom';

function Aparelhos() {
  const destaques = aparelhosData.slice(0, 5);

  return (
    <div className={styles.container}>
      <div className={styles.listProducts}>
        <h2>Smartphones Disponíveis</h2>
        {destaques.map((destaque) => (
          <div key={destaque.id} className={styles.product}>
            <img
              src={destaque.imagem}
              alt={destaque.nome}
              className={styles.productImage}
            />
            <div className={styles.productInfo}>
              <h3>{destaque.nome}</h3>
              <p>{destaque.descricaoCurta}</p>
              <p className={styles.productPrice}>{destaque.preco}</p>
              <Link to={`/aparelhos/${destaque.id}`} className={styles.detailsButton}>
                Ver Detalhes
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
export default Aparelhos;