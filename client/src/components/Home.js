import DisplayMonologue from "./DisplayMonologue"
import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import styled from "styled-components"

const HomeStyle = styled.div`
    /* background-color: white; */
    
    ul {
        text-align: left;
        list-style-type: circle;
    }

    .home-border {
        height: 300px;
    }

    .home-text {
        background-color: white;
        padding: 20px;
    }
`

function Home({ monos }) {

    // const displayMonos = monos.map(mono => {
    //     console.log(mono)
    //     return <div>
    //         <p>{mono.role}</p>
    //         <p>{mono.play}</p>
    //         <p>{mono.first_line}</p>
    //     </div>
    // })

    const displayMono1 = monos[monos.length - 1]
    const displayMono2 = monos[monos.length - 2]
    const displayMono3 = monos[monos.length - 3]
    const displayMono4 = monos[monos.length - 4]

    return (
        <HomeStyle>
            <Container>
                <Row>
                    <Col>
                        <div className="home-border"></div>
                    {/* <Col><img src="images/full_logo.png" alt="Booked It! Logo" height="300"/></Col> */}
                    </Col>
                </Row>
                <Row className="home-text">
                    <Col lg={6}>
                        <h2>Welcome to Booked It!</h2>
                        <h4>An audition and monologue tracker</h4>
                        <hr></hr>
                        <p>Ever find yourself wondering, "Did I already do that monologue for Pat McCorkle?" Or "did I wear this dress for James Calleri last time?"</p>
                        <p>Worry no more </p>
                        <ul>On Booked It! you can:
                            <li>Log audition details</li>
                            <li>Search auditions by people/theatre</li>
                            <li>Update audition outcomes</li>
                            <li>View public monologues</li>
                            <li>Add your own monologues (either private or made public)</li>
                        </ul>
                    </Col>
                    <Col lg={6}>
                        <h3>A sample of public monologues:</h3>
                        {displayMono1 ? <DisplayMonologue mono={displayMono1}/> : null}
                        {displayMono2 ? <DisplayMonologue mono={displayMono2}/> : null}
                        {displayMono3 ? <DisplayMonologue mono={displayMono3}/> : null}
                        {displayMono4 ? <DisplayMonologue mono={displayMono4}/> : null}
                    </Col>
                </Row>
                
            </Container>
        </HomeStyle>
    )
}

export default Home