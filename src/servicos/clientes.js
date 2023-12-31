// clientesCrud.js
import axios from "axios";

const clientesApi = axios.create({ baseURL: "http://localhost:8000/clientes" });

async function getClientes() {
  const response = await clientesApi.get('/');
  return response.data;
}

async function createCliente(newCliente) {
  const response = await clientesApi.post('/', newCliente);
  return response.data;
}

async function updateCliente(id, updatedCliente) {
  const response = await clientesApi.put(`/${id}`, updatedCliente);
  return response.data;
}

async function deleteCliente(id) {
  try {
    const response = await clientesApi.delete(`/${id}`);
    return response.data;
  } catch (error) {
    console.error('Error deleting client:', error.response);  
    throw error; 
  }
}


export { getClientes, createCliente, updateCliente, deleteCliente };
