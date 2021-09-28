import { useEffect } from 'react'
import DisplayAudition from './DisplayAudition'
import Search from './Search'
import Row from 'react-bootstrap/Row'
import styled from 'styled-components'

const AudStyle = styled.div`
    padding-bottom: 35px;

    h3 {
        font-size: 35px;
        color: white;
    }
    
    #auditions-header { 
        color: white;
        margin: 15px;
    }
`

function Auditions({ setAuditions, auditions, user, search, setSearch, handleDeleteAud, searchMono, setSearchMono }) {
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
            setAuditions(data)
            console.log(data)
        })
    }, [])

    const displayAuditions = auditions.map(audition => {
        return <DisplayAudition key={audition.id} audition={audition} handleDeleteAud={handleDeleteAud}/>
    })

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
            </Row>
        </AudStyle>
    )
}

export default Auditions