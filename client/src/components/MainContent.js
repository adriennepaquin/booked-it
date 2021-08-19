import { Route, Switch, Redirect } from 'react-router-dom'
import { useEffect, useState } from 'react'
import NavBar from './NavBar'
import Footer from './Footer'
import Home from './Home'
import SignUp from './SignUp'
import LogIn from './LogIn'
import Auditions from './Auditions'
import Monologues from './Monologues'
import AllMonologues from './AllMonologues'
import Welcome from './Welcome'
import SideBar from './SideBar'
import NotFound from './NotFound'
import AddAuditionForm from './AddAuditionForm'
import AddMonologueForm from './AddMonologueForm'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

function MainContent({ user, setUser, monos, setMonos, myMonos, setMyMonos, auditions, setAuditions, locations, setLocations, castings, setCastings, search, setSearch, filteredAuditions }) {

    console.log("MainContent")

    // // fetch autologin
    // useEffect(() => {
    //     const token = localStorage.getItem("token")
    //     fetch(`http://localhost:3000/me`, {
    //         headers: {
    //             Authorization: `Bearer ${token}`,
    //         }
    //     })
    //     .then((res) => {
    //         return res.json().then((data) => {
    //           if (res.ok) {
    //             return data
    //           } else {
    //             throw data
    //           }
    //         })
    //       })
    //     .then(data => {
    //         console.log(data)
    //         setUser({id: data.id,
    //             name: data.name,
    //             username: data.username
    //         })
    //     })
    // }, [])

    return (
        <Container>
            <Row>
                <Col>
                    <SideBar />
                </Col>
                <Col>
                    <Switch>
                        <Route path="/welcome">
                            <Welcome user={user} auditions={auditions} monos={monos}setMonos={setMonos} setMyMonos={setMyMonos} setAuditions={setAuditions} locations={locations} setLocations={setLocations} setCastings={setCastings}/>
                            {/* {!user ? <Redirect to="/"/> : <><Welcome user={user} auditions={auditions} monos={monos}setMonos={setMonos} setMyMonos={setMyMonos} setAuditions={setAuditions} locations={locations} setLocations={setLocations} setCastings={setCastings}/></> } */}
                        </Route>
                        <Route path="/auditions">
                            <Auditions auditions={filteredAuditions} setAuditions={setAuditions} user={user} search={search} setSearch={setSearch}/>
                            {/* {!user ? <Redirect to="/"/> : <><Auditions auditions={filteredAuditions} setAuditions={setAuditions} user={user} search={search} setSearch={setSearch}/></>} */}
                        </Route>
                        <Route path="/addaudition">
                            {!user ? <Redirect to="/"/> : <><AddAuditionForm user={user} auditions={auditions} setAuditions={setAuditions} locations={locations} castings={castings} myMonos={myMonos}/></>}
                        </Route>
                        <Route path="/monologues">
                            {!user ? <Redirect to="/"/> : <><Monologues myMonos={myMonos}/></>}
                        </Route>
                        <Route path="/allmonologues">
                            {!user ? <Redirect to="/"/> : <><AllMonologues monos={monos}/></>}
                        </Route>
                        <Route path="/addmonologue">
                            {!user ? <Redirect to="/"/> : <><AddMonologueForm user={user} myMonos={myMonos} setMyMonos={setMyMonos}/></>}
                        </Route>
                    </Switch>
                </Col>
            </Row>
        </Container>
    )
}

export default MainContent