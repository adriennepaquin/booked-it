import Accordion from 'react-bootstrap/Accordion'
import styled from 'styled-components'

const MonoStyle = styled.div`
    .mono-header {
        font-family: 'Noto Sans KR', sans-serif;
    }
    .mono-body {
        text-align: left;
    }
`

function DisplayMonologue({ mono }) {
    // console.log(mono)
    return (
        <MonoStyle>
            <Accordion.Item eventKey={mono.id}>
                <Accordion.Header className="mono-header">
                    {mono.role} from "{mono.play}"
                </Accordion.Header>
                <Accordion.Body className="mono-body">
                    <p>Playwright -- {mono.playwright}</p>
                    <p>Genre -- {mono.genre}</p>
                    <p>Length -- {mono.length}</p>
                    <p>"{mono.first_line}..."</p>
                </Accordion.Body>
            </Accordion.Item>
        </MonoStyle>
    )
}

export default DisplayMonologue