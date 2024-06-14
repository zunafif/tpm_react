function TableTodo(props) {
    return(
        <>
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
                                        <tr>
                                            <td>2024/06/14</td>
                                            <td>20:00</td>
                                            <td>Finish Project 1</td>
                                        </tr>
                                        <tr>
                                            <td>2024/06/15</td>
                                            <td>20:00</td>
                                            <td>Finish Project 2</td>
                                        </tr>
                                        <tr>
                                            <td>2024/06/16</td>
                                            <td>20:00</td>
                                            <td>Finish Project 3</td>
                                        </tr>
                                        <tr>
                                            <td>2024/06/17</td>
                                            <td>20:00</td>
                                            <td>Finish Project 4</td>
                                        </tr>
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