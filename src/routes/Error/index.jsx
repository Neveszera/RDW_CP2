import React from 'react';
import { Link } from 'react-router-dom';
import styles from './index.module.css';

function Error() {
  return (
    <div className={styles.container}>
      <h2 className={styles.heading}>Erro 404 - Página não encontrada</h2>
      <p className={styles.message}>
        Parece que você se perdeu no universo digital. Que tal voltar para a
        segurança da <Link to="/" className={styles.link}>página inicial</Link>?
      </p>
      <div className={styles.gifContainer}>
        <img
          src="https://media.giphy.com/media/QAxqYgH6b0vvD0Jm6e/giphy.gif" // Substitua com o link do seu GIF animado
          alt="Erro 404"
          className={styles.gif}
        />
      </div>
    </div>
  );
}

export default Error;