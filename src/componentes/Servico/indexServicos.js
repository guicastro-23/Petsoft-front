import React, { useState } from 'react';
import './servicos.css';

function Servico() {
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredServices, setFilteredServices] = useState([]);

  // Dummy services data for demonstration
  const services = [
    { id: 1, nome: 'Serviço A', valor: '100.00' },
    { id: 2, nome: 'Serviço B', valor: '75.00' },
    // Add more services as needed
  ];

  const handleSearch = (event) => {
    const term = event.target.value.toLowerCase();
    setSearchTerm(term);

    // Filter services based on the service name
    const filtered = services.filter(
      (service) =>
        service.nome.toLowerCase().includes(term)
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
            // Display the default form if no search results
            <div className="informacao">
              <label htmlFor="id">ID</label>
              <input type="text" id="id" placeholder="ID do serviço" />
              <label htmlFor="nome-servico">Nome do serviço</label>
              <input type="text" id="nome-servico" placeholder="Nome do serviço" />
              <label htmlFor="valor-servico">Valor do serviço</label>
              <input type="text" id="valor-servico" placeholder="Valor do serviço" />
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
