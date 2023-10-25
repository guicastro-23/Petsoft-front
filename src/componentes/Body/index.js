// src/OrderManagement.js

import React, { useState } from 'react';
import Calendar from 'react-calendar';
import './styles.css';

function Corpo() {
  const [date, setDate] = useState(new Date());

  return (
    <div className="dashboard">
      <header>
        <h1>PETSOFT</h1>
        <h2>Painel de Controle</h2>
      </header>

      <main>
        <section className="painel">
          <h3>Tarefas Ativas</h3>
          <ul>
            {/* Tarefas Ativas content */}
          </ul>
        </section>

        <section className="dados">
          <h3>Dados</h3>
          <ul>
            {/* Dados content */}
          </ul>
        </section>

        <section className="agenda">
          <h3>Agenda</h3>
          <Calendar onChange={setDate} value={date} />
        </section>

        <section className="ordens">
          <h3>Ordens de Serviço Recentes</h3>
          <table>
            <thead>
              <tr>
                <th>Número</th>
                <th>Animal</th>
                <th>Serviço</th>
                <th>Data</th>
                <th>Horário</th>
                <th>Cliente</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>0000032</td>
                <td>Pássaro</td>
                <td>Vacinação</td>
                <td>22/07/2023</td>
                <td>15h</td>
                <td>Ana Souza</td>
              </tr>
              <tr>
                <td>0000030</td>
                <td>Coelho</td>
                <td>Cirurgia</td>
                <td>23/07/2023</td>
                <td>12h</td>
                <td>Carlos Oliveira</td>
              </tr>
              {/* Add more rows as needed */}
            </tbody>
          </table>
        </section>
      </main>

      <footer>
        <p>Copyright © 2023 PETSOFT. Todos os direitos reservados.</p>
      </footer>
    </div>
  );
}

export default Corpo;
