import React from "react"

function Converter(props) {
    return(
        <>
            <div class="container-fluid">
                <div class="row">
                    <div class="col-md-4">
                        <div class="p-3 mb-2 bg-primary-subtle text-primary-emphasis">
                            <p><b><em>Skala Fahrenheit</em></b> adalah salah satu skala suhu selain Celsius dan Kelvin. Nama Fahrenheit diambil dari ilmuwan Jerman yang bernama Gabriel Fahrenheit (1686-1736). Skala ini dikemukakan pada tahun 1724.</p>
                            <br />
                            <p><b><em>Skala Celsius</em></b> adalah suatu skala suhu yang didesain supaya titik beku air berada pada 0 derajat dan titik didih pada 100 derajat di tekanan atmosferik standar. Skala ini mendapat namanya dari ahli astronomi Anders Celsius (1701–1744), yang pertama kali mengusulkannya pada tahun 1742.</p>
                        </div>
                    </div>
                    <div class="col-md-8">
                        <div class="p-3 mb-2 bg-primary text-white">
                            <form action="">
                                <p>
                                    <label>Fahrenheit</label>
                                    <input id="inputFahrenheit" type="number" placeholder="Fahrenheit" oninput="farenheitCelciusConverter(this.value)" onchange="farenheitCelciusConverter(this.value)"  data-bs-toggle="tooltip" data-bs-placement="top" data-bs-title="Masukkan nilai suhu Farenheit"/> 
                                </p>
                                <p>Celcius : <span id="outputCelcius"></span></p>
                                <a href="http://localhost/tpm_html/index.html" class="btn btn-secondary" data-bs-toggle="tooltip" data-bs-placement="top" data-bs-title="kembali ke halaman sebelumnya">Back</a>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Converter