// src/services/clientService.js

const clients = [
    { id: 1, name: 'Cliente 1', address: 'Endereço 1', phone: '123-456-7890' },
    { id: 2, name: 'Cliente 2', address: 'Endereço 2', phone: '987-654-3210' },
    // Adicione mais clientes conforme necessário
  ];
  
  export const getAllClients = async () => {
    // Simulando uma chamada assíncrona à API
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(clients);
      }, 1000);
    });
  };
  