import React, { useState, useEffect } from 'react';
import './servicos.css';
import { getServicos } from '../../servicos/servicos';

function Servico() {
  const [searchTerm, setSearchTerm] = useState('');
  const [servicos, setServicos] = useState([]);
  const [filteredServices, setFilteredServices] = useState([]);

  useEffect(() => {
    fetchServicos();
  }, []);

  async function fetchServicos() {
    const servicosApi = await getServicos();
    setServicos(servicosApi);
    // Initially, set filtered services to all services
    setFilteredServices(servicosApi);
  }
  

  const handleSearch = (event) => {
    const term = event.target.value.toLowerCase();
    setSearchTerm(term);

    // Filter services based on the service name
    const filtered = servicos.filter(
      (service) => service.nome.toLowerCase().includes(term)
    );

    setFilteredServices(filtered);
  };

  return (
    <div>
      <main>
        <h2>Serviço</h2>
        <input
          type="text"
          id="search"
          placeholder="Pesquisar serviços"
          value={searchTerm}
          onChange={handleSearch}
        />
        <form action="#">
          {filteredServices.length > 0 ? (
            // Display filtered services
            filteredServices.map((service) => (
              <div key={service.id} className="informacao">
                <label htmlFor={`id-${service.id}`}>ID</label>
                <input
                  type="text"
                  id={`id-${service.id}`}
                  value={service.id}
                  readOnly
                />
                <label htmlFor={`nome-${service.id}`}>Nome do serviço</label>
                <input
                  type="text"
                  id={`nome-${service.id}`}
                  value={service.nome}
                  readOnly
                />
                <label htmlFor={`valor-${service.id}`}>Valor do serviço</label>
                <input
                  type="text"
                  id={`valor-${service.id}`}
                  value={service.valor}
                  readOnly
                />
              </div>
            ))
          ) : (
            // Display a message when no matching services
            <div className="informacao">
              <p>No matching services found.</p>
            </div>
          )}
          <div className="acoes">
            <button type="submit">Confirmar</button>
            <button type="reset">Limpar</button>
          </div>
        </form>
      </main>
    </div>
  );
}

export default Servico;
