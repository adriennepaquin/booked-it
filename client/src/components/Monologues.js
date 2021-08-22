import { useHistory } from 'react-router-dom'
import { useState } from 'react'
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

function Monologues({ user, myMonos, firstName, search, setSearch, searchMono, setSearchMono, ownMono, setOwnMono, handleDeleteMono }) {
    const history = useHistory()
    setSearch("")
    setSearchMono("")
    setOwnMono(true)
    
    console.log(myMonos)

    const displayMonos = myMonos.map(mono => {
        console.log(mono)
        console.log(user)
        return <DisplayMonologue handleDeleteMono={handleDeleteMono} key={mono.first_line} user={user} mono={mono} ownMono={ownMono}/>
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