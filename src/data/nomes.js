// async => {
//   const res = await fetch('http://127.0.0.1:8000/fiscal/?format=json');
//   const json = await res.json();
//   console.log(json);
//   return json;
// }

// // export default fetchNames;

let namesList = [];

async function fetchNames() {
  const res = await fetch('http://127.0.0.1:8000/fiscal/?format=json');
  const json = await res.json();
  // console.log(json);
  // return json;

  namesList = json.map((person) => {
    // console.log(person);
    // const { id, nome, sobrenome } = person;
    return {
      id: person.id,
      nome: person.nome,
      sobrenome: person.sobrenome,
    };
  });

  // json.map((person) => {
  //   return namesList.push(person);
  //   // return {
  //   //   id: person.id,
  //   //   nome: person.nome,
  //   //   sobrenome: person.sobrenome,
  //   // };
  // });
}

fetchNames();

// console.log(fetchNames());
// console.log(namesList);

export default namesList;
