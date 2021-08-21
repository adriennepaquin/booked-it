import { useState, useEffect } from 'react'
import MonoDetails from './MonoDetails'
import Accordion from 'react-bootstrap/Accordion'
import Card from 'react-bootstrap/Card'
import styled from 'styled-components'

const MonoStyle = styled.div`
    .mono-header {
        font-family: 'Noto Sans KR', sans-serif;
        /* background-color: grey; */
    }

    .mono-header:hover {
        background-color: grey;
    }
    .mono-body {
        text-align: left;
    }
`

function DisplayMonologue({ mono }) {
    const [pdf, setPdf] = useState("")

    // fetch this monologue's PDF
    useEffect(() => {
        const token = localStorage.getItem("token")
        fetch(`http://localhost:3000/pdfs?mono_id=${mono.id}`, {
            Authorization: `Bearer ${token}`,
        })
        .then(res => res.json())
        .then(data => {
            console.log(data)
            // setMyMonos(data)
        })
    }, [])

    // console.log(mono)
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
                            
                            <MonoDetails />
                        </Accordion.Body>
                    </Accordion.Item>
                </Card.Text>
            </Card>
        </MonoStyle>
    )
}

export default DisplayMonologue