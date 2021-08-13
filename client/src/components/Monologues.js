import SideBar from "./SideBar"
import DisplayMonologue from './DisplayMonologue'
import AddMonologueform from './AddMonologueForm'

function Monologues({ myMonos }) {
    console.log(myMonos)

    const displayMonos = myMonos.map(mono => {
        console.log(mono)
        return <DisplayMonologue mono={mono}/>
    })

    return (
        <div>
            Monologues
            {displayMonos}
            <AddMonologueform />
        </div>
    )
}

export default Monologues