import { useState, useEffect } from 'react'
import MonoDetails from './MonoDetails'
import Accordion from 'react-bootstrap/Accordion'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import styled from 'styled-components'

const MonoStyle = styled.div`
    .mono-header {
        font-family: 'Noto Sans KR', sans-serif;
    }

    .mono-header:hover {
        background-color: grey;
    }
    .mono-body {
        text-align: left;
    }
`

function DisplayMonologue({ user, mono, handleDeleteMono, ownMono }) {
    const [pdf, setPdf] = useState("")
    const [details, setDetails] = useState(false)

    // fetch this monologue's PDF
    function getPdf() {
        fetch(`http://localhost:3000/pdfs?mono_id=${mono.id}`)
        .then(res => res.json())
        .then(data => {
            console.log(data)
            console.log(data.mono_pdf)
            setPdf(data.mono_pdf)
            setDetails(true)
        })
    }

    return (
        <MonoStyle>
            <Card>
                <Card.Text>
                    <Accordion.Item eventKey={mono.id} >
                        <Accordion.Header className="mono-header">
                            <div>
                                {mono.role} from "{mono.play}"
                            </div>
                        </Accordion.Header>
                        <Accordion.Body className="mono-body">
                            <p>Playwright -- {mono.playwright}</p>
                            <p>Genre -- {mono.genre}</p>
                            <p>Length -- {mono.length}</p>
                            <p>"{mono.first_line}..."</p>
                            {!user ? null : <div>{details ? <MonoDetails mono={mono} pdf={pdf}/> : <Button variant="light" onClick={getPdf}>I want the PDF</Button>}</div>}
                            {ownMono ? <Button className="button" id="delete" variant="light" value={mono.id} onClick={handleDeleteMono}>Delete Monologue</Button> : null}
                        </Accordion.Body>
                    </Accordion.Item>
                </Card.Text>
            </Card>
        </MonoStyle>
    )
}

export default DisplayMonologue