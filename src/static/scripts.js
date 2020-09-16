async function getInfo() {
  setInterval(async () => {
    const response = await (
      await fetch('http://10.1.1.20:5000/api/system/cpu')
    ).json();
    document.getElementById('cpu').innerHTML = response.data.brand;
    document.getElementById('current').innerHTML = response.data.currentspeed;
    document.getElementById('max').innerHTML = response.data.speedmax;
    document.getElementById('min').innerHTML = response.data.speedmin;
    document.getElementById('cores').innerHTML = response.data.cores;
    document.getElementById('physical').innerHTML = response.data.physicalCores;
    getRam();
  }, 500);
}

async function getRam() {
  const response = await (
    await fetch('http://10.1.1.20:5000/api/system/ram')
  ).json();
  document.getElementById('total').innerHTML = response.data.total;
  document.getElementById('free').innerHTML = response.data.free;
  document.getElementById('used').innerHTML = response.data.used;
}
//getInfo();
