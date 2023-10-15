import React, { useState, useEffect } from 'react';
import Modal from 'react-modal';
import './index.scss';
import DeletarModal from '../../components/DeletarModal/index';
import InserirAparelhoModal from '../../components/InserirAparelhoModal/index';
import ModalEditarAparelho from '../../components/ModalEditarAparelho/index';
import DetalhesModal from '../../components/DetalhesAparelhoModal/index';

// Inicialize o react-modal
Modal.setAppElement('#root');

function Aparelhos() {
  const [aparelhos, setAparelhos] = useState([]);
  const [aparelhoToDelete, setAparelhoToDelete] = useState(null);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false); // Estado para controlar a abertura do modal de exclusão
  const [isInsertModalOpen, setIsInsertModalOpen] = useState(false); // Estado para controlar a abertura do modal de inserção
  const [isEditModalOpen, setIsEditModalOpen] = useState(false); // Estado para controlar a abertura do modal de edição
  const [isDetailsModalOpen, setIsDetailsModalOpen] = useState(false); // Estado para controlar a abertura do modal de detalhes
  const [editAparelho, setEditAparelho] = useState(null); // Estado para controlar o aparelho a ser editado
  const [detailsAparelho, setDetailsAparelho] = useState(null); // Estado para controlar o aparelho a ser detalhado

  // Função para buscar e atualizar a lista de aparelhos
  const fetchAndUpdateAparelhos = () => {
    fetch('http://localhost:5000/aparelhos')
      .then((response) => response.json())
      .then((data) => {
        setAparelhos(data);
        console.clear();
        console.table(data); // Imprime os dados no console em formato de tabela
      })
      .catch((error) => console.error('Erro ao obter aparelhos:', error));
  };

  useEffect(() => {
    fetchAndUpdateAparelhos(); // Atualiza a lista de aparelhos quando o componente for montado
  }, []);

  // Função para abrir o modal de exclusão
  const openDeleteModal = (aparelho) => {
    setAparelhoToDelete(aparelho);
    setIsDeleteModalOpen(true);
  };

  // Função para fechar o modal de exclusão
  const closeDeleteModal = () => {
    setAparelhoToDelete(null);
    setIsDeleteModalOpen(false);
  };

  // Função para abrir o modal de inserção
  const openInsertModal = () => {
    setIsInsertModalOpen(true);
  };

  // Função para fechar o modal de inserção
  const closeInsertModal = () => {
    setIsInsertModalOpen(false);
  };

  // Função para abrir o modal de edição
  const openEditModal = (aparelho) => {
    setEditAparelho(aparelho);
    setIsEditModalOpen(true);
  };

  // Função para fechar o modal de edição
  const closeEditModal = () => {
    setIsEditModalOpen(false);
    setEditAparelho(null);
  };

  // Função para abrir o modal de detalhes
  const openDetailsModal = (aparelho) => {
    setDetailsAparelho(aparelho);
    setIsDetailsModalOpen(true);
  };

  // Função para fechar o modal de detalhes
  const closeDetailsModal = () => {
    setDetailsAparelho(null);
    setIsDetailsModalOpen(false);
  };

  // Função para lidar com a exclusão do aparelho
  const handleDelete = (id) => {
    fetch(`http://localhost:5000/aparelhos/${id}`, {
      method: 'DELETE',
    })
      .then(() => {
        closeDeleteModal();
        fetch('http://localhost:5000/aparelhos')
          .then((response) => response.json())
          .then((data) => setAparelhos(data))
          .catch((error) => console.error('Erro ao obter aparelhos:', error));
      })
      .catch((error) => {
        console.error('Erro ao excluir aparelho:', error);
      });
  };

  

  return (
    <div className="container">
      <h2>Smartphones Disponíveis</h2>
      <button onClick={openInsertModal} className="insertButton greenButton">
        Inserir Novo Aparelho
      </button>
      {aparelhos.map((aparelho) => (
        <div key={aparelho.id} className="product">
          <img
            src={aparelho.imagem}
            alt={aparelho.nome}
            className="productImage"
          />
          <div className="productInfo">
            <h3>{aparelho.nome}</h3>
            <p>{aparelho.descricaoCurta}</p>
            <p className="productPrice">{aparelho.preco}</p>
            <div className="buttonContainer">
              <button onClick={() => openDetailsModal(aparelho)} className="detailsButton">
                Ver Detalhes
              </button>
              <button onClick={() => openEditModal(aparelho)} className="editButton">
                Editar
              </button>
              <button onClick={() => openDeleteModal(aparelho)} className="deleteButton">
                Deletar
              </button>
            </div>
          </div>
        </div>
      ))}

      {/* Modal de Exclusão */}
      <Modal
        isOpen={isDeleteModalOpen}
        onRequestClose={closeDeleteModal}
        contentLabel="Modal de Exclusão"
        overlayClassName="overlay"
      >
        {aparelhoToDelete && (
          <DeletarModal
            aparelho={aparelhoToDelete}
            confirmDelete={() => handleDelete(aparelhoToDelete.id)}
            closeModal={closeDeleteModal}
          />
        )}
      </Modal>

      {/* Modal de Inserção */}
      <Modal
        isOpen={isInsertModalOpen}
        onRequestClose={closeInsertModal}
        contentLabel="Modal de Inserção"
        overlayClassName="overlay"
      >
        <InserirAparelhoModal
          closeInsertModal={closeInsertModal}
          refreshAparelhos={() => {
            fetch('http://localhost:5000/aparelhos')
              .then((response) => response.json())
              .then((data) => setAparelhos(data))
              .catch((error) => console.error('Erro ao obter aparelhos:', error));
          }}
        />
      </Modal>

      {/* Renderiza o modal de edição se estiver aberto */}
      {isEditModalOpen && (
        <ModalEditarAparelho
          aparelho={editAparelho}
          overlayClassName="overlay"
          closeEditModal={closeEditModal}
          refreshAparelhos={() => {
            fetch('http://localhost:5000/aparelhos')
              .then((response) => response.json())
              .then((data) => setAparelhos(data))
              .catch((error) => console.error('Erro ao obter aparelhos:', error));
          }}
        />
      )}

      {/* Modal de Detalhes */}
      <Modal
        isOpen={isDetailsModalOpen}
        onRequestClose={closeDetailsModal}
        contentLabel="Modal de Detalhes"
        overlayClassName="overlay"
      >
        {detailsAparelho && (
          <DetalhesModal
            aparelho={detailsAparelho}
            closeModal={closeDetailsModal}
          />
        )}
      </Modal>
    </div>
  );
}

export default Aparelhos;