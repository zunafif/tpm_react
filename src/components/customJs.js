function startTime() {
  const today = new Date();
  let h = today.getHours();
  let m = today.getMinutes();
  let s = today.getSeconds();
  m = checkTime(m);
  s = checkTime(s);
  document.getElementById('txt').innerHTML = h + ":" + m + ":" + s;
  setTimeout(startTime, 1000);
}

function checkTime(i) {
  if (i < 10) {i = "0" + i};
  return i;
}

const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))

function myFunction() {
    document.getElementById("pesanSukses").innerHTML = "Berhasil Dikirim !";
}

function farenheitCelciusConverter(temp) {
    temp = parseFloat(temp);
    document.getElementById("outputCelcius").innerHTML=(temp-32)/1.8;
}
