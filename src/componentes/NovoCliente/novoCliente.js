// NovoCliente.js
import React, { useState } from 'react';

const NovoCliente = () => {
  const [nome, setNome] = useState('');
  const [logradouro, setLogradouro] = useState('');
  const [telefone, setTelefone] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle the form submission (e.g., send data to the server)
    console.log('Form submitted:', { nome, logradouro, telefone });
  };

  return (
    <div>
      <h2>Novo Cliente</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="nome">Nome do Cliente:</label>
          <input
            type="text"
            id="nome"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="logradouro">Logradouro:</label>
          <input
            type="text"
            id="logradouro"
            value={logradouro}
            onChange={(e) => setLogradouro(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="telefone">Telefone:</label>
          <input
            type="text"
            id="telefone"
            value={telefone}
            onChange={(e) => setTelefone(e.target.value)}
          />
        </div>
        <button type="submit">Adicionar Cliente</button>
      </form>
    </div>
  );
};

export default NovoCliente;
