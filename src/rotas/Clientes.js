import React, { useEffect, useState } from 'react';
import { getAllClients } from '../serviços/clientes';

function ClientesM() {
  const [clients, setClients] = useState([]);

  useEffect(() => {
    async function fetchClients() {
      try {
        const data = await getAllClients();
        setClients(data);
      } catch (error) {
        console.error('Erro ao buscar clientes:', error);
      }
    }

    fetchClients();
  }, []);

  return (
    <div>
      <h2>Lista de Clientes</h2>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Nome</th>
            <th>Endereço</th>
            <th>Telefone</th>
          </tr>
        </thead>
        <tbody>
          {clients.map((client) => (
            <tr key={client.id}>
              <td>{client.id}</td>
              <td>{client.name}</td>
              <td>{client.address}</td>
              <td>{client.phone}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ClientesM;
