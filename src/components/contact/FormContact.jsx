function FormContact(props) {
    return(
        <>
            <div class="container-fluid">
                <div class="row">
                    <div class="col-md-12">
                        <div class="p-3 mb-2 bg-primary-subtle text-primary-emphasis">
                            <fieldset>
                                <legend>Form Pesan</legend>
                                <div class="mb-3">
                                    <label for="exampleFormControlInput1" class="form-label">Nama</label>
                                    <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="name example"/>
                                </div>
                                <div class="mb-3">
                                    <label for="exampleFormControlInput2" class="form-label">Email</label>
                                    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                                    <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
                                </div>
                                <div class="mb-3">
                                    <label for="exampleFormControlTextarea1" class="form-label">Alamat</label>
                                    <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                                </div>
                                <div class="mb-3">
                                    <label for="exampleFormControlTextarea2" class="form-label">Pesan</label>
                                    <textarea class="form-control" id="exampleFormControlTextarea2" rows="3"></textarea>
                                </div>
                                <button id="myBtn" type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal" >
                                    Submit
                                </button>
                                <a href="http://localhost/tpm_html/index.html" class="btn btn-secondary" data-bs-toggle="tooltip" data-bs-placement="top" data-bs-title="kembali ke halaman sebelumnya">Back</a>
                                <p><span id="pesanSukses"></span></p>
                            </fieldset>
                        </div>
                    </div>
                </div>
            </div> 
        </>
    )
}

export default FormContact