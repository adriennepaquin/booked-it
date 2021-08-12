import SideBar from "./SideBar"
import DisplayMonologue from './DisplayMonologue'
import AddMonologueform from './AddMonologueform'


function AllMonologues({ monos }) {
    console.log(monos)

    const displayMonos = monos.map(mono => {
        console.log(mono)
        return <DisplayMonologue mono={mono}/>
    })

    return (
        <div>
            <SideBar />
            All Monologues
            {displayMonos}
            <AddMonologueform />
        </div>
    )
}

export default AllMonologues