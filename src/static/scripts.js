async function getConfig(url = 'http://localhost:5000/api/system/cpu') {
  let response = await fetch(url);
  //let config = await response.json();
  let foo = await JSON.parse(response.text());
  document.getElementById('cpu').innerHTML = foo;
  console.log(foo);
}
