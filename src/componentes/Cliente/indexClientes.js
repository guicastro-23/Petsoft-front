// Cliente.js
import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import { getClientes, deleteCliente } from '../../servicos/clientes';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start; /* Align items to the start (left) */
  padding: 20px; /* Add padding for better spacing */
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

function Cliente() {
  const [clientes, setClientes] = useState([]);
  const [filteredClientes, setFilteredClientes] = useState([]);

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

  async function deletarCliente(id) {
    try {
      await deleteCliente(id);
      setClientes((prevClients) => prevClients.filter((client) => client.id !== id));
      setFilteredClientes((prevFiltered) => prevFiltered.filter((client) => client.id !== id));
      alert(`Cliente de ID: ${id} deletado!`);
    } catch (error) {
      console.error('Error deleting client:', error);
      alert('Erro ao deletar o cliente. Por favor, tente novamente.');
    }
  }

  return (
    <Container>
      {/* Use Link for navigation to the new client page */}
      <Link to="/novo-cliente">
        <Botao>Novo Cliente</Botao>
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
            <Cabecalho>Email</Cabecalho>
            <Cabecalho></Cabecalho>
          </tr>
        </thead>
        <tbody>
          {filteredClientes.map((client) => (
            <Linha key={client.id}>
              <Coluna>{client.nome}</Coluna>
              <Coluna>{client.email}</Coluna>
              <Coluna>
                <Botao onClick={() => deletarCliente(client.id)}>Excluir</Botao>
              </Coluna>
            </Linha>
          ))}
        </tbody>
      </Tabela>

      {/* Modal component can be added here */}
    </Container>
  );
}

export default Cliente;
