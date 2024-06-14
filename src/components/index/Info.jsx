function Info(props) {
    return(
        <>
            <div class="container-fluid">
                <div class="row">
                    <div class="col-md-6">
                        <div class="p-3 mb-2 bg-primary-subtle text-primary-emphasis">
                            <fieldset class="" id="about" disabled="disabled">
                                <legend><h3><b>About Me</b></h3></legend>
                                <p>Nama &emsp;&emsp;&emsp; : Muhamad Zun Afif Amruloh</p>
                                <p>Tempat Lahir &nbsp;: Blitar</p>
                                <p>Tanggal Lahir : 23 September 1998</p>
                            </fieldset>
                        </div>
                    </div>
                    <div class="col-md-6">
                        <div class="p-3 mb-2 bg-primary text-white">
                            <fieldset id="education" disabled="disabled">
                                <legend><h3><b>Education Level</b></h3></legend>
                                <p><b>Institut Adhi Tama Surabaya</b> - Surabaya, Jawa Timur</p>
                                <p>Aug 2017 - Sep 2021</p>
                                <p><em>Bachelor Degree in Informatics Engineering, 3.84/4.00</em></p>
                            </fieldset>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Info