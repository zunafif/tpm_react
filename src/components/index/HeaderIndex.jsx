import Foto from '../../image/foto.jpg'

function HeaderIndex(props) {
    return (
        <>
            <header>
                <div class="container-fluid">
                    <div class="row">
                        <div class="col-md-12">
                            <div class="p-3 mb-2 bg-primary text-white">
                                <h2>MUHAMAD ZUN AFIF AMRULOH</h2>
                                <h3><em>Web Programmer</em></h3>
                                <img class="center" id="pp" src={Foto} alt="foto" className="foto" width="150px" height="210px"/>
                                <br />
                                <div id="txt"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        </>
    )
}

export default HeaderIndex
