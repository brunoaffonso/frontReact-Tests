import React from 'react';

export default () => (
  <>
    <h1>Primeiro</h1>
    <h2>Meu primeiro componente React</h2>
  </>
);

/*
Alternativas para que o elemento não seja renderizado dentro de uma DIV
<div>
  <h1>Primeiro</h1>
  <h2>Meu primeiro componente React</h2>
</div>

ou

<>
  <h1>Primeiro</h1>
  <h2>Meu primeiro componente React</h2>
</>

ou

<React.Fragment>
  <h1>Primeiro</h1>
  <h2>Meu primeiro componente React</h2>
</React.Fragment>
*/
