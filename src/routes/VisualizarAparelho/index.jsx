import React from 'react';
import { useParams } from 'react-router-dom';
import aparelhosData from '../../../aparelhosData';
import styles from './index.module.css';

function VisualizarAparelho() {
  const { id } = useParams();
  const aparelho = aparelhosData.find((item) => item.id === parseInt(id));
  if (!aparelho) {
    return <p>Aparelho não encontrado.</p>;
  }
  return (
    <div className={styles.container}>
      <h2>{aparelho.nome}</h2>
      <img
        src={aparelho.imagem}
        alt={aparelho.nome}
        className={styles.smartphoneImage}
      />
      <p className={styles.descricaoExtensa}>{aparelho.descricaoExtensa}</p>
      <p className={styles.preco}>Preço: ${aparelho.preco}</p>
      <a href="/aparelhos" className={styles.goBackLink}>Voltar</a>
    </div>
  );
}
export default VisualizarAparelho;