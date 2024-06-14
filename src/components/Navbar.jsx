function Navbar(props) {
    return (
        <>
            <nav class="navbar navbar-expand-lg bg-body-tertiary">
                <div class="container-fluid">
                <a class="navbar-brand" href="#">Navbar</a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                    <li class="nav-item">
                        <a class="nav-link active" aria-current="page" href="#">Home</a>
                    </li>
                    <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        Menu
                        </a>
                        <ul class="dropdown-menu">
                        <li><a class="dropdown-item" href="http://localhost/tpm_html/farenheit_conv.html">Farenheit Coverter</a></li>
                        <li><a class="dropdown-item" href="http://localhost/tpm_html/contact.html" target="_blank">Hubungi Saya</a></li>
                        </ul>
                    </li>
                    </ul>
                    <ul class="navbar-nav">
                        <li class="nav-item">
                            <div class="d-flex nav-item" id="txt"></div>
                        </li>
                    </ul>
                </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar