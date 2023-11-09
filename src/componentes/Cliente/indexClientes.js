// Cliente.js
import React, { useState, useEffect } from 'react';
import './clientes.css';
import { getClientes, createCliente, updateCliente, deleteCliente } from '../../servicos/clientes';

function Cliente() {
  const [clientes, setClientes] = useState([]);
  const [filteredClientes, setFilteredClientes] = useState([]);
  const [newCliente, setNewCliente] = useState({ nome: '', logradouro: '', telefone: '', pet: '' });

  useEffect(() => {
    fetchClientes();
  }, []);

  async function fetchClientes() {
    try {
      const clientesApi = await getClientes();
      setClientes(clientesApi);
      // Initially, set filtered clients to all clients
      setFilteredClientes(clientesApi);
    } catch (error) {
      console.error('Error fetching clients:', error);
    }
  }

  const handleSearch = (event) => {
    const term = event.target.value.toLowerCase();
    // Filter clients based on the client name
    const filtered = clientes.filter(
      (client) => client.nome.toLowerCase().includes(term)
    );
    setFilteredClientes(filtered);
  };

  const handleCreate = async () => {
    try {
      const createdCliente = await createCliente(newCliente);
      setClientes([...clientes, createdCliente]);
      setFilteredClientes([...clientes, createdCliente]); // Update filtered clients
      setNewCliente({ nome: '', logradouro: '', telefone: '', pet: '' });
    } catch (error) {
      console.error('Error creating client:', error);
    }
  };

  const handleDelete = async (id) => {
    try {
      await deleteCliente(id);
      const updatedClientes = clientes.filter((client) => client.id !== id);
      setClientes(updatedClientes);
      setFilteredClientes(updatedClientes); // Update filtered clients
    } catch (error) {
      console.error('Error deleting client:', error);
    }
  };

  return (
    <div>
      <h2>Clientes</h2>
      <div className='perquisar'>
         <input
         
         id="search"
         placeholder="Pesquisar clientes"
         onChange={handleSearch}
        />  
      </div>
      

      <form>
        <div className="informacao">
          <label htmlFor="nome">Nome do Cliente</label>
          <input
            type="text"
            id="nome"
            value={newCliente.nome}
            onChange={(e) => setNewCliente({ ...newCliente, nome: e.target.value })}
          />
        </div>
        <div className="informacao">
          <label htmlFor="logradouro">Logradouro</label>
          <input
            type="text"
            id="logradouro"
            value={newCliente.logradouro}
            onChange={(e) => setNewCliente({ ...newCliente, logradouro: e.target.value })}
          />
        </div>
        <div className="informacao">
          <label htmlFor="telefone">Telefone</label>
          <input
            type="text"
            id="telefone"
            value={newCliente.telefone}
            onChange={(e) => setNewCliente({ ...newCliente, telefone: e.target.value })}
          />
        </div>
        <div className="informacao">
          <label htmlFor="pet">Pet</label>
          <input
            type="text"
            id="pet"
            value={newCliente.pet}
            onChange={(e) => setNewCliente({ ...newCliente, pet: e.target.value })}
          />
        </div>

        <div className="acoes">
          <button type="button" onClick={handleCreate}>Adicionar Cliente</button>
        </div>
      </form>

      {/* Display clients with delete button */}
      {filteredClientes.map((client) => (
        <div key={client.id} className="informacao">
          <p><strong>Nome:</strong> {client.nome}</p>
          <p><strong>Logradouro:</strong> {client.logradouro}</p>
          <p><strong>Telefone:</strong> {client.telefone}</p>
          <p><strong>Pet:</strong> {client.pet}</p>
          <button onClick={() => handleDelete(client.id)}>Delete</button>
        </div>
      ))}
    </div>
  );
}

export default Cliente;
