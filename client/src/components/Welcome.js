import { useEffect } from 'react'
import SideBar from './SideBar'
import DisplayAudition from './DisplayAudition'
import DisplayMonologue from './DisplayMonologue'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Accordion from 'react-bootstrap/Accordion'
import styled from 'styled-components'

const WelStyle = styled.div`

    height: auto;
    color: white;
    margin: 20px;
    padding-bottom: 25px;

    h2 {
        text-shadow: 3px 3px 3px #03989e;
        font-size: 45px;
    }
    #welcome {
        
    }

    .welcome-title{
        margin: 15px;
    }

    .welcome-headers {
        margin: 5px;
    }

    .accordions {
        color: black;
        border-radius: 5px;
    }
    
`

function Welcome({ user, monos, setMonos, setMyMonos, auditions, setAuditions, locations, setLocations, setCastings, firstName, handleDeleteAud, search, setSearch, searchMono, setSearchMono, ownMono, setOwnMono }) {
    
    setSearch("")
    setSearchMono("")
    // fetch this user's auditions
    useEffect(() => {
        const token = localStorage.getItem("token")
        fetch(`http://localhost:3000/auditions/${user.id}`, {
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${token}`,
            }
        })
        .then(res => res.json())
        .then(data => {
            // console.log(data)
            setAuditions(data)
        })
    }, [])

    // // fetch all the public monologues
    // useEffect(() => {
    //     fetch(`http://localhost:3000/monologues`)
    //     .then(res => res.json())
    //     .then(data => {
    //         console.log(data)
    //         setMonos(data)
    //     })
    // }, [])

    // fetch this user's monologues
    useEffect(() => {
        const token = localStorage.getItem("token")
        fetch(`http://localhost:3000/monologues/${user.id}`, {
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${token}`,
            }
        })
        .then(res => res.json())
        .then(data => {
            // console.log(data)
            setMyMonos(data)
        })
    }, [])

    // fetch all available locations
    useEffect(() => {
        const token = localStorage.getItem("token")
        fetch(`http://localhost:3000/locations`, {
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${token}`,
            }
        })
        .then(res => res.json())
        .then(data => {
            // console.log(data)
            setLocations(data)
        })
    }, [])

    // fetch all available casting
    useEffect(() => {
        const token = localStorage.getItem("token")
        fetch(`http://localhost:3000/castings`, {
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${token}`,
            }
        })
        .then(res => res.json())
        .then(data => {
            // console.log(data)
            setCastings(data)
        })
    }, [])

    
    // console.log(firstName[0])
    console.log(auditions)
    const displayAudition1 = auditions[0]
    const displayAudition2 = auditions[1]

    const displayMono1 = monos[monos.length - 1]
    const displayMono2 = monos[monos.length - 2]
    const displayMono3 = monos[monos.length - 3]
    const displayMono4 = monos[monos.length - 4]

    // random Welcome Page monologues
    // const displayMono1 = monos[Math.floor(Math.random() * monos.length)]
    // const displayMono2 = monos[Math.floor(Math.random() * monos.length)]
    // const displayMono3 = monos[Math.floor(Math.random() * monos.length)]
    // const displayMono4 = monos[Math.floor(Math.random() * monos.length)]
        
    return (
        <WelStyle>
            <Container>
                <Row id="welcome">
                    <div className="welcome-title">
                        <h2>Welcome to Your Stage,</h2>
                        <h2>{firstName[0]}!</h2>
                    </div>
                    <Col lg={6}>
                        <h3 className="welcome-headers">Recent Auditions:</h3>
                        <Accordion className="accordions" defaultActiveKey="0" flush>
                            {displayAudition1 ? <DisplayAudition audition={displayAudition1} handleDeleteAud={handleDeleteAud}/> : null}
                            {displayAudition2 ? <DisplayAudition audition={displayAudition2} handleDeleteAud={handleDeleteAud}/> : null}
                        </Accordion>
                    </Col>
                    <Col lg={6}>
                        <h3 className="welcome-headers">New Monologues:</h3>
                        <Accordion className="accordions" defaultActiveKey="0" flush>
                                {displayMono1 ? <DisplayMonologue user={user} mono={displayMono1}/> : null}
                                {displayMono2 ? <DisplayMonologue user={user} mono={displayMono2}/> : null}
                                {displayMono3 ? <DisplayMonologue user={user} mono={displayMono3}/> : null}
                                {displayMono4 ? <DisplayMonologue user={user} mono={displayMono4}/> : null}                        
                        </Accordion>
                    </Col>
                </Row>
            </Container>
        </WelStyle>
    )
}

export default Welcome