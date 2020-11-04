import React from 'react';

import produtos from '../data/produtos';

// console.log(produtos);

export default (props) => {
  function getProdutosPorItem() {
    return produtos.map((prod) => {
      return (
        <li key={prod.id}>
          {prod.id} - {prod.produto} -> R$ {prod.preco}
        </li>
      );
    });
  }

  return (
    <div>
      <h2>Repetição</h2>
      <ul>{getProdutosPorItem()}</ul>
    </div>
  );
};
