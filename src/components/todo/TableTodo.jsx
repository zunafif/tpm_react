import { useState } from "react";
import FormTodo from "./FormTodo.jsx";
import jsonData from "./data.json";

function TableTodo(props) {

    const [todoItem, setTodoItem] = useState(jsonData)

    const tableRow = todoItem.map((info) => {
        return (
            <tr>
                <td>{info.date}</td>
                <td>{info.time}</td>
                <td>{info.task}</td>
            </tr>
        )
    })

    const addRows = (data) => {
        const totalStudents = todoItem.length;
        data.id = totalStudents + 1;
        const updatedTodoItem = [...todoItem];
        updatedTodoItem.push(data);
        setTodoItem(updatedTodoItem);
    };

    return(
        <>
            <FormTodo func={addRows}></FormTodo>
            <div class="container-fluid">
                <div class="row">
                    <div class="col-md-12">
                        <div class="p-3 mb-2 bg-primary text-white">
                            <fieldset>
                                <legend>Tugas Tersimpan</legend>
                                
                                <table class="table table-striped table-hover">
                                    <thead>
                                        <th>Date</th>
                                        <th>Time</th>
                                        <th>Todo</th>
                                    </thead>
                                    <tbody>
                                        {tableRow}
                                    </tbody>
                                </table>
                            </fieldset>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default TableTodo