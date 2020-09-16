async function getInfo() {
  setInterval(async () => {
    const response = await (
      await fetch('http://192.168.1.24:5000/api/system/cpu')
    ).json();
    document.getElementById('cpu').innerHTML = response.data.brand;
    document.getElementById('current').innerHTML = response.data.currentspeed;
    document.getElementById('max').innerHTML = response.data.speedmax;
    document.getElementById('min').innerHTML = response.data.speedmin;
    document.getElementById('cores').innerHTML = response.data.cores;
    document.getElementById('physical').innerHTML = response.data.physicalCores;
    getRam();
    getOsInfo();
  }, 500);
}

async function getRam() {
  const response = await (
    await fetch('http://192.168.1.24:5000/api/system/ram')
  ).json();

  document.getElementById('total').innerHTML = response.data.total;
  document.getElementById('free').innerHTML = response.data.free;
  document.getElementById('used').innerHTML = response.data.used;
}
async function getOsInfo() {
  const response = await (
    await fetch('http://192.168.1.24:5000/api/system/os')
  ).json();
  document.getElementById('hostname').innerHTML = response.data.hostname;
  document.getElementById('platform').innerHTML = response.data.platform;
  document.getElementById('arch').innerHTML = response.data.arch;
  document.getElementById('distro').innerHTML = response.data.distro;
  document.getElementById('codename').innerHTML = response.data.codename;
  document.getElementById('release').innerHTML = response.data.release;
  document.getElementById('kernel').innerHTML = response.data.kernel;
  document.getElementById('uefi').innerHTML = response.data.uefi;
}
