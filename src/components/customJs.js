const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))

function farenheitCelciusConverter(temp) {
    temp = parseFloat(temp);
    document.getElementById("outputCelcius").innerHTML=(temp-32)/1.8;
}