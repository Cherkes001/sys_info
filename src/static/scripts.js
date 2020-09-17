async function getInfo() {
  setInterval(async () => {
    const response = await (
      await fetch('http://localhost:5000/api/system/cpu')
    ).json();
    document.getElementById('cpu').innerText = response.data.brand;
    document.getElementById('current').innerText = response.data.currentspeed;
    document.getElementById('max').innerText = response.data.speedmax;
    document.getElementById('min').innerText = response.data.speedmin;
    document.getElementById('cores').innerText = response.data.cores;
    document.getElementById('physical').innerText = response.data.physicalCores;
    getRam();
    getOsInfo();
    getIp();
  }, 500);
}

async function getRam() {
  const response = await (
    await fetch('http://localhost:5000/api/system/ram')
  ).json();

  document.getElementById('total').innerText = response.data.total;
  document.getElementById('free').innerText = response.data.free;
  document.getElementById('used').innerText = response.data.used;
}
async function getOsInfo() {
  const response = await (
    await fetch('http://localhost:5000/api/system/os')
  ).json();
  document.getElementById('hostname').innerText = response.data.hostname;
  document.getElementById('platform').innerText = response.data.platform;
  document.getElementById('arch').innerText = response.data.arch;
  document.getElementById('distro').innerText = response.data.distro;
  document.getElementById('codename').innerText = response.data.codename;
  document.getElementById('release').innerText = response.data.release;
  document.getElementById('kernel').innerText = response.data.kernel;
  document.getElementById('uefi').innerText = response.data.uefi;
}

async function getIp() {
  const response = await (
    await fetch('http://localhost:5000/api/network')
  ).json();
  document.getElementById('kek').innerText = response.data.iface;
  // document.getElementById('platform').innerText = response.data.platform;
  // document.getElementById('arch').innerText = response.data.arch;
  // document.getElementById('distro').innerText = response.data.distro;
  // document.getElementById('codename').innerText = response.data.codename;
  // document.getElementById('release').innerText = response.data.release;
  // document.getElementById('kernel').innerText = response.data.kernel;
  // document.getElementById('uefi').innerText = response.data.uefi;
}
