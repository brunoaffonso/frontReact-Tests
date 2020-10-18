import './App.css';
import React from 'react';

import Primeiro from './components/primeiro';
import ComParametros from './components/comParametros';
import ComFilhos from './components/comFilhos';
import Card from './components/layout/card';
import Repeticao from './components/repeticao';
import Condicional from './components/condicional';
import CondicionalIf from './components/condicionalComIf';
// import Person from './components/person';

export default (props) => (
  <div className="App">
    <Card titulo="Primeiro Exercício">
      <Primeiro />
    </Card>
    <Card titulo="Componente com Parâmetro">
      <ComParametros titulo="Esse é o Título" subtitulo="Esse é o Subtítulo" />
    </Card>
    <Card titulo="Componente com Parâmetro">
      <ComParametros
        titulo="Esse é outro Título"
        subtitulo="Esse é outro Subtítulo"
      />
    </Card>
    <Card titulo="Com Filhos">
      <ComFilhos>
        <ul>
          <li>Bruno</li>
          <li>Arianne</li>
          <li>Pablo</li>
          <li>Rafaella</li>
          <li>Caíque</li>
        </ul>
      </ComFilhos>
    </Card>
    <Card titulo="Repetição">
      <Repeticao></Repeticao>
    </Card>
    <Card titulo="Par ou Ímpar">
      <Condicional numero={10}></Condicional>
    </Card>
    <Card titulo="Par ou Ímpar com IF">
      <CondicionalIf numero={9}></CondicionalIf>
    </Card>
    {/* <Card titulo="Dados API Django">
      <Person></Person>
    </Card> */}
  </div>
);
