import React from 'react';

import nomes from '../data/nomes';

// console.log(nomes);

export default () => {
  function getPersons() {
    return nomes.map((person) => {
      // console.log(person);
      return (
        <li key={person.id}>
          {person.id} - {person.nome} {person.sobrenome}
        </li>
      );
    });
  }

  return (
    <div>
      <h2>Nomes</h2>
      <ul>{getPersons()}</ul>
    </div>
  );
};
