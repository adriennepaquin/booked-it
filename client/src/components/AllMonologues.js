import { useHistory } from 'react-router-dom'
import DisplayMonologue from './DisplayMonologue'
import styled from 'styled-components'
import Accordion from 'react-bootstrap/Accordion'

const AllMonoStyle = styled.div`

    h3 {
        font-size: 35px;
        color: white;
    }
    #mono-header { 
        color: white;
        margin: 15px;
    }
`

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
        <AllMonoStyle>
            <div id="mono-header">
                <h3>All Monologues</h3>
            </div>
            <Accordion defaultActiveKey="0" flush>
                {displayMonos}
            </Accordion>
            <button className="button" onClick={handleClick}>Add a Monologue</button>
        </AllMonoStyle>
    )
}

export default AllMonologues