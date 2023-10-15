import React, { useState, useEffect } from 'react';
import Modal from 'react-modal';
import './index.scss';

Modal.setAppElement('#root');

function ModalEditarAparelho({ aparelho, closeEditModal, refreshAparelhos }) {
  const [editedAparelho, setEditedAparelho] = useState({ ...aparelho });

  useEffect(() => {
    setEditedAparelho({ ...aparelho });
  }, [aparelho]);

  const handleImageUpload = (files) => {
    if (files.length > 0) {
      const file = files[0];
      const reader = new FileReader();

      reader.onload = (e) => {
        setEditedAparelho({
          ...editedAparelho,
          imagem: e.target.result,
        });
      };

      reader.readAsDataURL(file);
    }
  };

  const handleFieldChange = (field, value) => {
    setEditedAparelho({
      ...editedAparelho,
      [field]: value,
    });
  };

  const handleEdit = () => {
    if (editedAparelho) {
      fetch(`http://localhost:5000/aparelhos/${aparelho.id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(editedAparelho),
      })
        .then((response) => response.json())
        .then(() => {
          refreshAparelhos();
          closeEditModal();
        })
        .catch((error) => {
          console.error('Erro ao editar aparelho:', error);
        });
    }
  }

  return (
    <Modal
      isOpen={true}
      onRequestClose={closeEditModal}
      contentLabel="Modal de Edição"
    >
      <div className="modalEditarContainer">
        <h2 className="modalEditarHeading">Editar Aparelho: {aparelho.nome}</h2>
        <label htmlFor="imagem" className="modalEditarLabel">Upload de Imagem:</label>
        <input
          type="file"
          id="imagem"
          accept="image/*"
          onChange={(e) => handleImageUpload(e.target.files)}
          className="modalEditarInput"
        />
        {editedAparelho.imagem && (
          <img
            src={editedAparelho.imagem}
            alt={editedAparelho.nome}
            className="modalEditarSmartphoneImage"
          />
        )}
        <label htmlFor="nome" className="modalEditarLabel">Nome:</label>
        <input
          type="text"
          id="nome"
          value={editedAparelho.nome}
          onChange={(e) => handleFieldChange('nome', e.target.value)}
          className="modalEditarInput"
        />
        <label htmlFor="descricaoCurta" className="modalEditarLabel">Descrição Curta:</label>
        <textarea
          id="descricaoCurta"
          value={editedAparelho.descricaoCurta}
          onChange={(e) => handleFieldChange('descricaoCurta', e.target.value)}
          className="modalEditarTextarea"
        />
        <label htmlFor="descricaoExtensa" className="modalEditarLabel">Descrição Extensa:</label>
        <textarea
          id="descricaoExtensa"
          value={editedAparelho.descricaoExtensa}
          onChange={(e) => handleFieldChange('descricaoExtensa', e.target.value)}
          className="modalEditarTextarea"
        />
        <label htmlFor="preco" className="modalEditarLabel">Preço:</label>
        <input
          type="text"
          id="preco"
          value={editedAparelho.preco}
          onChange={(e) => handleFieldChange('preco', e.target.value)}
          className="modalEditarInput"
        />
        <div className="modalEditarButtonContainer">
          <button onClick={handleEdit} className="modalEditarButton modalEditarInsertButton">Salvar Edição</button>
          <button onClick={closeEditModal} className="modalEditarButton modalEditarCancelButton">Cancelar</button>
        </div>
      </div>
    </Modal>
  );
}

export default ModalEditarAparelho;
