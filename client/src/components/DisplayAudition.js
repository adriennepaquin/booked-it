import { useState } from 'react'
import AuditionDetails from "./AuditionDetails"
import ModifyAudition from "./ModifyAudition"
import Card from 'react-bootstrap/Card'
import Accordion from 'react-bootstrap/Accordion'

function DisplayAudition({ audition }) {
    const [display, setDisplay] = useState(false)
    // const [modify, setModify] = useState(false)

    function handleClick() {
        setDisplay(!display)
    }
    
    // function handleUpdate() {
    //     setModify(!modify)
    // }

    // console.log(audition)
    return (
        <Card>
            <Card.Body>
                <Card.Text>
                    <p>{audition.date}</p>
                    <p>{audition.producer}</p>
                    <p>at {audition.location.name}</p>
                    <Accordion>
                        <Accordion.Header>
                            Show Details
                            {/* <button onClick={handleClick}>{display ? "Hide Details" : "Show Details"}</button> */}
                        </Accordion.Header>
                        <Accordion.Body>
                            <AuditionDetails audition={audition}/>
                        {/* {display ? <AuditionDetails audition={audition}/> : null} */}
                        </Accordion.Body>
                    </Accordion>
                    {/* <button onClick={handleUpdate}>Edit Outcome</button>
                    {modify ? <ModifyAudition audition={audition} setModify={setModify}/> : null} */}
                </Card.Text>
            </Card.Body>
        </Card>
    )
}

export default DisplayAudition