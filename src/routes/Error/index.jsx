import React from 'react';
import { Link } from 'react-router-dom';
import './index.scss';

function Error() {
  return (
    <div className="container">
      <h2 className="heading">Erro 404 - Página não encontrada</h2>
      <p className="message">
        Parece que você se perdeu no universo digital. Que tal voltar para a
        segurança da <Link to="/" className="link">página inicial</Link>?
      </p>
      <div className="gifContainer">
        <img
          src="https://media.giphy.com/media/QAxqYgH6b0vvD0Jm6e/giphy.gif" // Substitua com o link do seu GIF animado
          alt="Erro 404"
          className="gif"
        />
      </div>
    </div>
  );
}

export default Error;
