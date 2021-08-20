import { useState, useEffect } from 'react'
import DisplayAudition from './DisplayAudition'
import Search from './Search'
import Accordion from 'react-bootstrap/Accordion'
import CardColumns from 'react-bootstrap/CardColumns'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import styled from 'styled-components'

const AudStyle = styled.div`

    h3 {
        font-size: 35px;
        color: white;
    }
    
    #auditions-header { 
        color: white;
        margin: 15px;
    }
`

function Auditions({ setAuditions, auditions, user, search, setSearch }) {
    
    console.log(user)
    console.log("Auditions")
    // fetch this user's auditions
    useEffect(() => {
        fetch(`http://localhost:3000/auditions/${user.id}`)
        .then(res => res.json())
        .then(data => {
            console.log(data)
            setAuditions(data)
        })
    }, [])
    console.log(search)
    console.log(auditions)

    const displayAuditions = auditions.map(audition => {
        // console.log(audition)
        return <DisplayAudition key={audition.id} audition={audition}/>
    })

    
    // | audition.people.toLowerCase().includes(search.toLowerCase()) 
    console.log(auditions)
    return (
        <AudStyle>
            <div id="auditions-header">
                <h3>Auditions</h3>
                <Search search={search} onSearchChange={setSearch}/>
            </div>
            <Row xs={1} md={2} className="g-4">
                
                {auditions.length === 0
                ?
                <>
                <h3>No auditions found!</h3>
                </>
                :
                <>
                {displayAuditions}
                </>
                }
            {/* <CardColumns>
                {auditions.length === 0
                ?
                <>
                <h3>No auditions found!</h3>
                </>
                :
                <>
                {displayAuditions}
                </>
                }
            </CardColumns> */}
            </Row>
        </AudStyle>
    )
}

export default Auditions