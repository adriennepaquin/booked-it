import { useState, useEffect } from 'react'
import DisplayAudition from './DisplayAudition'
import Search from './Search'

function Auditions({ setAuditions, auditions, user, search, setSearch }) {
    

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
        <div>
            Auditions
            <Search search={search} onSearchChange={setSearch}/>
            {auditions.length === 0
            ?
            <>
            <p>No auditions found!</p>
            </>
            :
            <>
            {displayAuditions}
            </>
            }
        </div>
    )
}

export default Auditions