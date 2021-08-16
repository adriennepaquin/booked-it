import { useHistory } from 'react-router-dom'
import DisplayMonologue from './DisplayMonologue'

function AllMonologues({ monos }) {
    const history = useHistory()
    // console.log(monos)

    const displayMonos = monos.map(mono => {
        // console.log(mono)
        return <DisplayMonologue mono={mono}/>
    })

    function handleClick(){
        history.push('/addmonologue')
    }

    return (
        <div>
            All Monologues
            {displayMonos}
            <button onClick={handleClick}>Add a Monologue</button>
        </div>
    )
}

export default AllMonologues