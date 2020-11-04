import React from 'react';

class Fiscais extends React.Component {
  nomesFiscais = [];
  componentDidMount() {
    const apiUrl = 'http://127.0.0.1:8000/fiscal/?format=json';
    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => (this.nomesFiscais = data));
  }
  render() {
    return <h1>Nomes</h1>;
  }
}
export default Fiscais;
