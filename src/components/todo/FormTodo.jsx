function FormTodo(props) {
    return(
        <>
            <div class="container-fluid">
                <div class="row">
                    <div class="col-md-12">
                        <div class="p-3 mb-2 bg-primary-subtle text-primary-emphasis">
                            <fieldset>
                                <legend>Input To Do List</legend>
                                <div class="mb-3">
                                    <label for="exampleFormControlInput1" class="form-label">Date</label>
                                    <input type="date" class="form-control" id="exampleFormControlInput1" placeholder="0000/00/00"/>
                                </div>
                                <div class="mb-3">
                                    <label for="exampleFormControlInput2" class="form-label">Time</label>
                                    <input type="time" class="form-control" id="exampleFormControlInput2" placeholder="00:00"/>
                                </div>
                                <div class="mb-3">
                                    <label for="exampleFormControlTextarea1" class="form-label">To Do</label>
                                    <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                                </div>
                                <button id="myBtn" type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal" >
                                    Submit
                                </button>
                                <p><span id="pesanSukses"></span></p>
                            </fieldset>
                        </div>
                    </div>
                </div>
            </div> 
        </>
    )
}

export default FormTodo