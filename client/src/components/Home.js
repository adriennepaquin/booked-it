import DisplayMonologue from "./DisplayMonologue"
import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import Accordion from "react-bootstrap/Accordion"
import styled from "styled-components"

const HomeStyle = styled.div`
    ul {
        text-align: left;
        list-style-type: circle;
    }

    #home-border {
        height: 200px;
    }

    #home-text {
        background-color: white;
        column-rule: 4px solid black;
        padding-bottom: 50px;
    }

    #home-welcome {
        margin: 20px;
    }

    #home-monos {
        margin: 20px;
        padding: 30px;
    }
    .h-divider{
        margin-left:5px;
        margin-right:5px;
        width:1px;
        height:100%;
        border-left:1px solid gray;
    }
`

function Home({ monos }) {
    const displayMono1 = monos[monos.length - 1]
    const displayMono2 = monos[monos.length - 2]
    const displayMono3 = monos[monos.length - 3]
    const displayMono4 = monos[monos.length - 4]
    const displayMono5 = monos[monos.length - 5]

    return (
        <HomeStyle>
            <Container>
                <Row>
                    <Col>
                        <div id="home-border"></div>
                    </Col>
                </Row>
                <Row id="home-text">
                    <Col lg={6}>
                        <div id="home-welcome">
                            <h2>Welcome to Booked It!</h2>
                            <h4>An audition and monologue tracker</h4>
                            <hr></hr>
                            <p>Ever find yourself wondering:</p>
                            <p>"Did I already do that monologue for Pat McCorkle?"</p>
                            <p>Or</p>
                            <p>"Did I wear this dress for James Calleri last time?"</p>
                            <p>Worry no more! </p>
                            <ul><b>With Booked It! you can:</b>
                                <li>Log audition details</li>
                                <li>Search auditions by people/theatre</li>
                                <li>Update audition outcomes</li>
                                <li>View public monologues</li>
                                <li>Add your own monologues (either private or made public)</li>
                            </ul>
                        </div>
                    </Col>
                    <Col>
                        <div className="h-divider">
                        </div>
                    </Col>
                    
                    <Col lg={5}>
                        <div id="home-monos">
                            <h3>A sample of public monologues:</h3>
                            <hr></hr>
                            <Accordion defaultActiveKey="0" flush>
                                {displayMono1 ? <DisplayMonologue mono={displayMono1}/> : null}
                                {displayMono2 ? <DisplayMonologue mono={displayMono2}/> : null}
                                {displayMono3 ? <DisplayMonologue mono={displayMono3}/> : null}
                                {displayMono4 ? <DisplayMonologue mono={displayMono4}/> : null}
                                {displayMono5 ? <DisplayMonologue mono={displayMono5}/> : null}
                            </Accordion>
                        </div>
                    </Col>
                </Row>
                
            </Container>
        </HomeStyle>
    )
}

export default Home