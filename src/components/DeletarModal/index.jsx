import React from 'react';
import './index.scss';

function ModalDeletar({ aparelho, confirmDelete, closeModal }) {
  return (
    <div className="modalDeletarContainer">
      <h2 className="modalDeletarHeading">Confirmar Exclusão</h2>
      <p className="modalDeletarMessage">
        Você tem certeza que deseja excluir o aparelho{' '}
        <span className="modalDeletarProductName">{aparelho.nome}</span>?
      </p>
      <div className="modalDeletarButtonContainer">
        <button onClick={confirmDelete} className="modalDeletarButton confirmButton">
          Confirmar
        </button>
        <button onClick={closeModal} className="modalDeletarButton cancelButton">
          Cancelar
        </button>
      </div>
    </div>
  );
}

export default ModalDeletar;
