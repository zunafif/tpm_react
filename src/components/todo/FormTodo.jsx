import { useState } from "react";

function FormTodo(props) {

    const [date, setDate] = useState('')
    const [time, setTime] = useState('')
    const [task, setTask] = useState('')
    const [btnText, setBtnText] = useState('')

    const changeDate = (e) => {
        setDate(e.target.value)
    }
    const changeTime = (e) => {
        setTime(e.target.value)
    }
    const changeTask = (e) => {
        setTask(e.target.value)
    }

    const handleChangeBtn = () => {
        setBtnText('Berhasil Dikirim !')
        setTimeout(() => {
            setBtnText('Submit')
        }, 1000);
    }

    const handleClikButton = () => {

        event.preventDefault()
        const val = { date, time, task}
        props.func(val)
        clear()

        setBtnText('Berhasil Dikirim !')
        setTimeout(() => {
            setBtnText('')
        }, 1000);
    }
    
    const clear = () => {
        setDate('')
        setTime('')
        setTask('')
    }

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
                                    <input type="date" class="form-control" id="exampleFormControlInput1" placeholder="0000/00/00"
                                    value={date} onChange={changeDate}/>
                                </div>
                                <div class="mb-3">
                                    <label for="exampleFormControlInput2" class="form-label">Time</label>
                                    <input type="time" class="form-control" id="exampleFormControlInput2" placeholder="00:00"
                                    value={time} onChange={changeTime}/>
                                </div>
                                <div class="mb-3">
                                    <label for="exampleFormControlTextarea1" class="form-label">To Do</label>
                                    <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"
                                     value={task} onChange={changeTask}></textarea>
                                </div>
                                <button id="myBtn" type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal" 
                                onClick={
                                    handleClikButton
                                    }>
                                    Submit
                                </button>
                                <p><span>{btnText}</span></p>
                            </fieldset>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default FormTodo