import React from 'react';
import aparelhosData from '../../../aparelhosData';

function Aparelhos() {
  return (
    <div>
      <h2>Lista de Aparelhos</h2>
      <ul>
        {aparelhosData.map((aparelho, index) => (
          <li key={index}>{aparelho.nome}</li>
        ))}
      </ul>
    </div>
  );
}

export default Aparelhos;