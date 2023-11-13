import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { getClientes, deleteCliente, createCliente } from '../../servicos/clientes';
import ClienteModal from '../NovoCliente/ClienteModal'
import { ModalOverlay, ModalContent } from '../NovoCliente/ClienteModal'; // Adjust the path accordingly


// Styled components for the modals
// ... (previous imports)

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 20px;
`;

const Tabela = styled.table`
  width: 80%;
  border-collapse: collapse;
  margin-top: 20px;
`;

const Cabecalho = styled.th`
  padding: 10px;
  text-align: left;
`;

const Linha = styled.tr`
  border-bottom: 1px solid #ddd;
`;

const Coluna = styled.td`
  padding: 10px;
`;

const Botao = styled.button`
  padding: 10px;
  margin-top: 10px;
  background-color: #3498db;
  color: white;
  border: none;
  cursor: pointer;
  border-radius: 5px;
  text-decoration: none;
`;

const ModalBotao = styled.button`
  padding: 10px;
  background-color: #e74c3c;
  color: white;
  border: none;
  cursor: pointer;
  border-radius: 5px;
  margin-right: 10px;
`;

function Cliente() {
  const [clientes, setClientes] = useState([]);
  const [filteredClientes, setFilteredClientes] = useState([]);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [selectedClientId, setSelectedClientId] = useState(null);

  useEffect(() => {
    fetchClientes();
  }, []);

  async function fetchClientes() {
    try {
      const clientesApi = await getClientes();
      setClientes(clientesApi);
      setFilteredClientes(clientesApi);
    } catch (error) {
      console.error('Error fetching clients:', error);
    }
  }

  const handleSearch = (event) => {
    const term = event.target.value.toLowerCase();
    const filtered = clientes.filter(
      (client) => client.nome.toLowerCase().includes(term)
    );
    setFilteredClientes(filtered);
  };

  const handleDelete = async (id) => {
    try {
      await deleteCliente(id);
      setClientes((prevClients) => prevClients.filter((client) => client.id !== id));
      setFilteredClientes((prevFiltered) => prevFiltered.filter((client) => client.id !== id));
      closeModal();
      alert(`Cliente de ID: ${id} deletado!`);
    } catch (error) {
      console.error('Error deleting client:', error);
      alert('Erro ao deletar o cliente. Por favor, tente novamente.');
    }
  };

  const openDeleteModal = (id) => {
    setSelectedClientId(id);
    setIsDeleteModalOpen(true);
  };

  const openAddModal = () => {
    setIsAddModalOpen(true);
  };

  const closeModal = () => {
    setSelectedClientId(null);
    setIsDeleteModalOpen(false);
    setIsAddModalOpen(false);
  };

  // Handle the "Adicionar" button click
  const handleAddClient = async (newClientData) => {
    try {
      // Replace with your actual API call or database interaction logic
      await createCliente(newClientData);

      // Refresh the client list after adding a new client
      fetchClientes();

      // Close the modal
      closeModal();
    } catch (error) {
      console.error('Error adding client:', error);
      alert('Erro ao adicionar o cliente. Por favor, tente novamente.');
    }
  };

  return (
    <Container>
      <Link>
        <Botao onClick={openAddModal}>Novo Cliente</Botao>
      </Link>
      <h2>Clientes</h2>
      <input
        id="search"
        placeholder="Pesquisar clientes"
        onChange={handleSearch}
      />

      <Tabela>
        <thead>
          <tr>
            <Cabecalho>Nome</Cabecalho>
            <Cabecalho>Telefone</Cabecalho>
            <Cabecalho>Ações</Cabecalho>
          </tr>
        </thead>
        <tbody>
          {filteredClientes.map((client) => (
            <Linha key={client.id}>
              <Coluna>{client.nome}</Coluna>
              <Coluna>{client.telefone}</Coluna>
              <Coluna>
                <Botao onClick={() => openDeleteModal(client.id)}>Excluir</Botao>
              </Coluna>
            </Linha>
          ))}
        </tbody>
      </Tabela>

      {/* Delete Modal component */}
      <ModalOverlay isOpen={isDeleteModalOpen} onClick={closeModal} />
      <ModalContent isOpen={isDeleteModalOpen}>
        <h3>Confirmação de Exclusão</h3>
        <p>Deseja realmente excluir este cliente?</p>
        <ModalBotao onClick={() => handleDelete(selectedClientId)}>Excluir</ModalBotao>
        <ModalBotao onClick={closeModal}>Cancelar</ModalBotao>
      </ModalContent>

      {/* Add Modal component */}
      <ClienteModal isOpen={isAddModalOpen} closeModal={closeModal} handleAddClient={handleAddClient} />
    </Container>
  );
}

export default Cliente;
