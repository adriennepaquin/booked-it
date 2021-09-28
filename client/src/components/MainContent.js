import { Route, Switch, Redirect, useHistory } from 'react-router-dom'
import { useState } from 'react'
import Auditions from './Auditions'
import Monologues from './Monologues'
import AllMonologues from './AllMonologues'
import Welcome from './Welcome'
import SideBar from './SideBar'
import AddAuditionForm from './AddAuditionForm'
import AddMonologueForm from './AddMonologueForm'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import styled from 'styled-components'

function MainContent({ user, setUser, monos, setMonos, myMonos, setMyMonos, auditions, setAuditions, locations, setLocations, castings, setCastings, search, setSearch, searchMono, setSearchMono, filterMono, setFilterMono, filteredAuditions, filteredMonos }) {
    const [ownMono, setOwnMono] = useState(false)
    const firstName = user.name.split(" ")

    // delete audition
    function handleDeleteAud(e){
        // console.log(e.target.value)
        const token = localStorage.getItem("token")
        fetch (`http://localhost:3000/auditions/${e.target.value}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${token}`,
            }
        })
        .then(res => res.json())
        .then(data => {
            // console.log(data.id)
            const newAuditions = auditions.filter(audition => audition.id !== data.id)
            // console.log(newAuditions)
            setAuditions(newAuditions)
        })
    }

    // delete monologue
    function handleDeleteMono(e){
        // console.log("click!")
        // console.log(e.target.value)
        const token = localStorage.getItem("token")
        fetch (`http://localhost:3000/monologues/${e.target.value}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${token}`,
            }
        })
        .then(res => res.json())
        .then(data => {
            // console.log(data.id)
            const newMyMonos = myMonos.filter(mono => mono.id !== data.id)
            const newMonos = monos.filter(mono => mono.id !== data.id)
            // console.log(newMyMonos)
            setMonos(newMonos)
            setMyMonos(newMyMonos)
        })
    }

    return (
        <Container fluid={true} >
            <Row>
                <Col xs="auto">
                    <SideBar />
                </Col>
                <Col sm={8}>
                    <Switch>
                        <Route path="/welcome">
                            <Welcome user={user} firstName={firstName} auditions={filteredAuditions} monos={monos} setMonos={setMonos} setMyMonos={setMyMonos} setAuditions={setAuditions} locations={locations} setLocations={setLocations} setCastings={setCastings} handleDeleteAud={handleDeleteAud} search={search} setSearch={setSearch} searchMono={searchMono} setSearchMono={setSearchMono} ownMono={ownMono} setOwnMono={setOwnMono}/>
                        </Route>
                        <Route path="/auditions">
                            <Auditions auditions={filteredAuditions} setAuditions={setAuditions} user={user} search={search} setSearch={setSearch} handleDeleteAud={handleDeleteAud} searchMono={searchMono} setSearchMono={setSearchMono}/>
                        </Route>
                        <Route path="/addaudition">
                            {!user ? <Redirect to="/"/> : <><AddAuditionForm user={user} auditions={auditions} setAuditions={setAuditions} locations={locations} castings={castings} myMonos={myMonos} search={search} setSearch={setSearch} searchMono={searchMono} setSearchMono={setSearchMono}/></>}
                        </Route>
                        <Route path="/monologues">
                            {!user ? <Redirect to="/"/> : <><Monologues myMonos={myMonos} firstName={firstName} user={user}handleDeleteMono={handleDeleteMono} search={search} setSearch={setSearch} searchMono={searchMono} setSearchMono={setSearchMono}  ownMono={ownMono} setOwnMono={setOwnMono}/></>}
                        </Route>
                        <Route path="/allmonologues">
                            {!user ? <Redirect to="/"/> : <><AllMonologues monos={filteredMonos} searchMono={searchMono} setSearchMono={setSearchMono} filterMono={filterMono} setFilterMono={setFilterMono} user={user} search={search} setSearch={setSearch}  ownMono={ownMono} setOwnMono={setOwnMono}/> </>}
                        </Route>
                        <Route path="/addmonologue">
                            {!user ? <Redirect to="/"/> : <><AddMonologueForm user={user} monos={monos} setMonos={setMonos} myMonos={myMonos} setMyMonos={setMyMonos} search={search} setSearch={setSearch} searchMono={searchMono} setSearchMono={setSearchMono}/></>}
                        </Route>
                    </Switch>
                </Col>
            </Row>
        </Container>
    )
}

export default MainContent