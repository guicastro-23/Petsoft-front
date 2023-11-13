import React, { useState } from 'react';
import styled from 'styled-components';

// Styled components for the modals
const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: ${({ isOpen }) => (isOpen ? 'block' : 'none')};
`;

const ModalContent = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: white;
  padding: 20px;
  border-radius: 5px;
  display: ${({ isOpen }) => (isOpen ? 'block' : 'none')};
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

function ClienteModal({ isOpen, closeModal, handleAddClient }) {
  // State variables for the form data
  const [newClientData, setNewClientData] = useState({
    nome: '',
    telefone: '',
    // Add other fields as needed
  });

  // Handle changes in the form fields
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setNewClientData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Handle the "Adicionar" button click
  const handleAddButtonClick = async () => {
    // Validate the form data (add your validation logic)

    // Assuming addCliente is an API function to add a new client
    try {
      // Replace with your actual API call or database interaction logic
      // await addCliente(newClientData);

      // For now, just log the data and close the modal
      console.log('Adding new client:', newClientData);

      // Close the modal
      closeModal();
      // Notify the parent component about the new client
      handleAddClient(newClientData);
    } catch (error) {
      console.error('Error adding client:', error);
      // Handle the error (e.g., show an error message)
    }
  };

  return (
    <>
      <ModalOverlay isOpen={isOpen} onClick={closeModal} />
      <ModalContent isOpen={isOpen}>
        <h3>Adicionar Novo Cliente</h3>
        {/* Form for adding a new client */}
        <label htmlFor="nome">Nome:</label>
        <input
          type="text"
          id="nome"
          name="nome"
          value={newClientData.nome}
          onChange={handleInputChange}
        />

        <label htmlFor="telefone">Telefone:</label>
        <input
          type="text"
          id="telefone"
          name="telefone"
          value={newClientData.telefone}
          onChange={handleInputChange}
        />
        <label htmlFor="logradouro">Logradouro:</label>
        <input
          type="text"
          id="logradouro"
          name="logradouro"
          value={newClientData.logradouro}
          onChange={handleInputChange}
        />

        {/* Your form elements go here */}
        <ModalBotao onClick={closeModal}>Cancelar</ModalBotao>
        <ModalBotao onClick={handleAddButtonClick}>Adicionar</ModalBotao>
      </ModalContent>
    </>
  );
}

export { ModalOverlay, ModalContent };  // Add these named exports

export default ClienteModal;
