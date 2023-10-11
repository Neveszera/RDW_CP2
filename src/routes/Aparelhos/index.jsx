import React from 'react';
import styles from './index.module.css';
import aparelhosData from '../../../aparelhosData';
import { Link } from 'react-router-dom';

function Aparelhos() {
  return (
    <div className={styles.container}>
      <h1 className={styles.heading}>Smartphones Disponíveis</h1>
      <div className={styles.smartphonesContainer}>
        {aparelhosData.map((smartphone) => (
          <div key={smartphone.id} className={styles.smartphone}>
            <img
              src={smartphone.imagem}
              alt={smartphone.nome}
              className={styles.smartphoneImage}
            />
            <div className={styles.smartphoneInfo}>
              <h3>{smartphone.nome}</h3>
              <p>{smartphone.descricaoCurta}</p>
              <p className={styles.smartphonePrice}>{smartphone.preco}</p>
              <Link to={`/aparelhos/${smartphone.id}`} className={styles.viewButton}>
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