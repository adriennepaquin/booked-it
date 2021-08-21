import { useState } from 'react'
import AuditionDetails from "./AuditionDetails"
import ModifyAudition from "./ModifyAudition"
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'
import Accordion from 'react-bootstrap/Accordion'

function DisplayAudition({ audition, handleDeleteAud }) {
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
        <Col>
        <Card>
            <Card.Body>
                <Card.Text>
                    <p>{audition.date} - {audition.producer}</p>
                    <p></p>
                    <p>{audition.time} @ {audition.location.name}</p>
                    <Accordion>
                        <Accordion.Header>
                            <h5>Show Details</h5>
                            {/* <button onClick={handleClick}>{display ? "Hide Details" : "Show Details"}</button> */}
                        </Accordion.Header>
                        <Accordion.Body>
                            <AuditionDetails audition={audition} handleDeleteAud={handleDeleteAud}/>
                        {/* {display ? <AuditionDetails audition={audition}/> : null} */}
                        </Accordion.Body>
                    </Accordion>
                    {/* <button onClick={handleUpdate}>Edit Outcome</button>
                    {modify ? <ModifyAudition audition={audition} setModify={setModify}/> : null} */}
                </Card.Text>
            </Card.Body>
        </Card>
        </Col>
    )
}

export default DisplayAudition