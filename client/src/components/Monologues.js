import { useHistory } from 'react-router-dom'
import DisplayMonologue from './DisplayMonologue'

import styled from 'styled-components'
import Accordion from 'react-bootstrap/Accordion'

const MonoStyle = styled.div`
    padding-bottom: 40px;

    h3 {
        font-size: 35px;
        color: white;
    }
    #mono-header { 
        color: white;
        margin: 15px;
    }
`

function Monologues({ myMonos, firstName }) {
    console.log("Monologues")
    const history = useHistory()
    
    console.log(myMonos)

    const displayMonos = myMonos.map(mono => {
        console.log(mono)
        return <DisplayMonologue key={mono.first_line} mono={mono}/>
    })

    function handleClick(){
        history.push('/addmonologue')
    }

    return (
        <MonoStyle>
            <div id="mono-header">
                <h3>{firstName[0]}'s Monologues</h3>
            </div>
            <Accordion defaultActiveKey="0" flush>
                {displayMonos}
            </Accordion>
            <button className="button" onClick={handleClick}>Add a Monologue</button>
        </MonoStyle>
    )
}

export default Monologues