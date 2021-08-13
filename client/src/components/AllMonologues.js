import SideBar from "./SideBar"
import DisplayMonologue from './DisplayMonologue'
import AddMonologueForm from './AddMonologueForm'


function AllMonologues({ monos }) {
    // console.log(monos)

    const displayMonos = monos.map(mono => {
        // console.log(mono)
        return <DisplayMonologue mono={mono}/>
    })

    return (
        <div>
            All Monologues
            {displayMonos}
            <AddMonologueForm />
        </div>
    )
}

export default AllMonologues