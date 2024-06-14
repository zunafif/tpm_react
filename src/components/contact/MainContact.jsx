import FormContact from "./FormContact.jsx"
import TableContact from "./TableContact.jsx"

function MainContact(props) {
    return(
        <>
            <main>
                <FormContact></FormContact>
                <br />
                <TableContact></TableContact>
            </main>
        </>
    )
}

export default MainContact