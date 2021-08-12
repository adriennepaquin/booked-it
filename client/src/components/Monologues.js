import SideBar from "./SideBar"
import DisplayMonologue from './DisplayMonologue'
import AddMonologueform from './AddMonologueform'

function Monologues({ myMonos }) {
    console.log(myMonos)

    const displayMonos = myMonos.map(mono => {
        console.log(mono)
        return <DisplayMonologue mono={mono}/>
    })

    return (
        <div>
            <SideBar />
            Monologues
            {displayMonos}
            <AddMonologueform />
        </div>
    )
}

export default Monologues