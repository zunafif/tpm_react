import {useState} from "react"

function Converter(props) {
    const [tempC, setTempC] = useState('')
    const [tempF, setTempF] = useState('')
    const [suhuF, setSuhuF] = useState('')
    const [suhuC, setSuhuC] = useState('')

    const handleChangeF = (e) => {
        setTempF(e.target.value)
        setSuhuF((e.target.value - 32) / 1.8)
    }

    const handleChangeC = (e) => {
        setTempC(e.target.value)
        setSuhuC((e.target.value - 32) / 1.8)
    }

    return(
        <>
            <div class="container-fluid">
                <div class="row">
                    <div class="col-md-12">
                        <div class="p-3 mb-2 bg-primary-subtle text-primary-emphasis">
                            <p><b><em>Skala Fahrenheit</em></b> adalah salah satu skala suhu selain Celsius dan Kelvin. Nama Fahrenheit diambil dari ilmuwan Jerman yang bernama Gabriel Fahrenheit (1686-1736). Skala ini dikemukakan pada tahun 1724.</p>
                            <br />
                            <p><b><em>Skala Celsius</em></b> adalah suatu skala suhu yang didesain supaya titik beku air berada pada 0 derajat dan titik didih pada 100 derajat di tekanan atmosferik standar. Skala ini mendapat namanya dari ahli astronomi Anders Celsius (1701–1744), yang pertama kali mengusulkannya pada tahun 1742.</p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="container-fluid">
                <div class="row">
                    <div class="col-md-6">
                        <div class="p-3 mb-2 bg-primary text-white">
                            <form action="">
                                <p>
                                    <p>Fahrenheit </p>
                                    <input value={tempF} onChange={handleChangeF} type="number" placeholder="Fahrenheit"/> 
                                </p>
                                <h2>{suhuF}°C</h2>
                            </form>
                        </div>
                    </div>
                    <div class="col-md-6">
                        <div class="p-3 mb-2 bg-primary text-white">
                            <form action="">
                                <p>
                                    <p>Celcius </p>
                                    <input value={tempC} onChange={handleChangeC} type="number" placeholder="Fahrenheit"/> 
                                </p>
                                <h2>{suhuC}°F</h2>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            
        </>
    )
}

export default Converter