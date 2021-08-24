import { useState } from 'react'
import AuditionDetails from "./AuditionDetails"
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'
import Accordion from 'react-bootstrap/Accordion'

function DisplayAudition({ audition, handleDeleteAud }) {
    const [display, setDisplay] = useState(false)
    
    return (
        <Col>
        <Card>
            <Card.Body>
                <Card.Text>
                    <p>{audition.date} - <b>{audition.producer}</b></p>
                    <p></p>
                    <p>{audition.time} @ {audition.location.name}</p>
                    <Accordion>
                        <Accordion.Header>
                            <h5>Show Details</h5>
                        </Accordion.Header>
                        <Accordion.Body>
                            <AuditionDetails audition={audition} handleDeleteAud={handleDeleteAud}/>
                        </Accordion.Body>
                    </Accordion>
                </Card.Text>
            </Card.Body>
        </Card>
        </Col>
    )
}

export default DisplayAudition