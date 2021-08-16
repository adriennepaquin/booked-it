import SideBar from "./SideBar"
import { useHistory } from 'react-router-dom'
import DisplayMonologue from './DisplayMonologue'

function Monologues({ myMonos }) {
    const history = useHistory()
    
    console.log(myMonos)

    const displayMonos = myMonos.map(mono => {
        console.log(mono)
        return <DisplayMonologue mono={mono}/>
    })

    function handleClick(){
        history.push('/addmonologue')
    }

    return (
        <div>
            Monologues
            {displayMonos}
            <button onClick={handleClick}>Add a Monologue</button>
        </div>
    )
}

export default Monologues