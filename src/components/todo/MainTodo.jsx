import FormTodo from "./FormTodo.jsx"
import TableTodo from "./TableTodo.jsx"

function MainTodo(props) {
    return(
        <>
            <main>
                <FormTodo></FormTodo>
                <br />
                <TableTodo></TableTodo>
            </main>
        </>
    )
}

export default MainTodo