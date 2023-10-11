import React from 'react';
import { useParams } from 'react-router-dom';
import aparelhosData from '../../../aparelhosData';

function VisualizarAparelho() {
  const { id } = useParams();
  const aparelho = aparelhosData[id];

  if (!aparelho) {
    return <p>Aparelho não encontrado.</p>;
  }

  return (
    <div>
      <h2>Detalhes do Aparelho</h2>
      <img src={aparelho.imagem} alt={aparelho.nome} />
      <p>Nome: {aparelho.nome}</p>
      <p>Descrição: {aparelho.descricao}</p>
      <p>Preço: R$ {aparelho.preco.toFixed(2)}</p>
    </div>
  );
}

export default VisualizarAparelho;