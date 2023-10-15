import React, { useState } from "react";
import "./index.scss";

function ModalInserirAparelho({ closeInsertModal, refreshAparelhos }) {
  const [novoAparelho, setNovoAparelho] = useState({
    nome: '',
    descricaoCurta: '',
    descricaoExtensa: '',
    preco: '',
    imagem: '',
  });

  const handleImageUpload = (files) => {
    if (files.length > 0) {
      const file = files[0];
      const reader = new FileReader();

      reader.onload = (e) => {
        setNovoAparelho({
          ...novoAparelho,
          imagem: e.target.result,
        });
      };

      reader.readAsDataURL(file);
    }
  };

  const handleFieldChange = (field, value) => {
    setNovoAparelho({
      ...novoAparelho,
      [field]: value,
    });
  };

  const handleInsert = () => {
    if (novoAparelho) {
      fetch('http://localhost:5000/aparelhos', {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(novoAparelho)
      })
        .then((response) => response.json())
        .then(() => {
          refreshAparelhos();
          closeInsertModal();
        })
        .catch((error) => {
          console.error('Erro ao inserir aparelho:', error);
        });
    }
  };

  return (
    <div className="container">
      <h2 className="heading">Inserir Novo Aparelho</h2>
      <label htmlFor="imagem" className="label">
        Upload de Imagem:
      </label>
      <input
        type="file"
        id="imagem"
        accept="image/*"
        onChange={(e) => handleImageUpload(e.target.files)}
        className="input"
      />
      {novoAparelho.imagem && (
        <img
          src={novoAparelho.imagem}
          alt={novoAparelho.nome}
          className="smartphoneImage"
        />
      )}
      <label htmlFor="nome" className="label">
        Nome:
      </label>
      <input
        type="text"
        id="nome"
        name="nome"
        value={novoAparelho.nome}
        onChange={(e) => handleFieldChange('nome', e.target.value)}
        className="input"
      />
      <label htmlFor="descricaoCurta" className="label">
        Descrição Curta:
      </label>
      <textarea
        id="descricaoCurta"
        name="descricaoCurta"
        value={novoAparelho.descricaoCurta}
        onChange={(e) => handleFieldChange('descricaoCurta', e.target.value)}
        className="textarea descricaoCurta"
      />
      <label htmlFor="descricaoExtensa" className="label">
        Descrição Extensa:
      </label>
      <textarea
        id="descricaoExtensa"
        name="descricaoExtensa"
        value={novoAparelho.descricaoExtensa}
        onChange={(e) => handleFieldChange('descricaoExtensa', e.target.value)}
        className="textarea descricaoExtensa"
      />
      <label htmlFor="preco" className="label">
        Preço:
      </label>
      <input
        type="text"
        id="preco"
        name="preco"
        value={novoAparelho.preco}
        onChange={(e) => handleFieldChange('preco', e.target.value)}
        className="input"
      />
      <div className="buttonContainer">
        <button onClick={handleInsert} className="button">
          Inserir
        </button>
        <button onClick={closeInsertModal} className="cancelButton">
          Cancelar
        </button>
      </div>
    </div>
  );
}

export default ModalInserirAparelho;
