export default async function fetchNames() {
  const res = await fetch('http://127.0.0.1:8000/fiscal/?format=json');
  const json = await res.json();
  console.log(json);
  return json;
}
