const { json } = require('express');

async function getInfo() {
  let response = await fetch('http://localhost:5000/api/system/cpu');
  let config = await response.text();
  let result = JSON.parse(config);
  document.getElementById('cpu').innerHTML = result.data.brand;
  document.getElementById('current').innerHTML = result.data.currentspeed;
  document.getElementById('max').innerHTML = result.data.speedmax;
  document.getElementById('min').innerHTML = result.data.speedmin;
  document.getElementById('cores').innerHTML = result.data.cores;
  document.getElementById('physical').innerHTML = result.data.physicalCores;
}
//getInfo();
