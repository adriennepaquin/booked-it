import { useState, useEffect } from 'react'
import MonoDetails from './MonoDetails'
import Accordion from 'react-bootstrap/Accordion'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
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

function DisplayMonologue({ user, mono, handleDeleteMono }) {
    const [pdf, setPdf] = useState("")
    const [details, setDetails] = useState(false)
    // const [ownMono, setOwnMono] = useState(false)
    // console.log(mono.public)
    // console.log(user)
    // console.log(mono.user_id)
    // if (mono.user_id === user.id){
    //     setOwnMono(true)
    // }
    // setOwnMono(mono.public)

    // fetch this monologue's PDF
    function getPdf() {
        console.log("get pDF!")
        const token = localStorage.getItem("token")
        fetch(`http://localhost:3000/pdfs?mono_id=${mono.id}`, {
            Authorization: `Bearer ${token}`,
        })
        .then(res => res.json())
        .then(data => {
            console.log(data)
            setPdf(data)
            setDetails(true)
            // setMyMonos(data)
        })
        // setDetails(!details)
    }

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
                            {details ? <MonoDetails mono={mono} pdf={pdf}/> : <Button variant="light" onClick={getPdf}>I want PDF</Button>}
                            {/* <Button variant="light" onClick={getPdf}>I want PDF</Button> */}
                            {/* {ownMono ? <Button className="button" id="delete" variant="light" value={mono.id} onClick={handleDeleteMono}>Delete Monologue</Button> : null} */}
                        </Accordion.Body>
                    </Accordion.Item>
                </Card.Text>
            </Card>
        </MonoStyle>
    )
}

export default DisplayMonologue