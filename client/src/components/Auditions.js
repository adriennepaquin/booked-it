import { useState, useEffect } from 'react'
import DisplayAudition from './DisplayAudition'
import Search from './Search'

function Auditions({ setAuditions, auditions, user }) {
    const [search, setSearch] = useState("")

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
        return <DisplayAudition audition={audition}/>
    })

    const filteredAuditions = auditions.filter(audition => {
        return (audition.producer.toLowerCase().includes(search.toLowerCase()) || audition.casting.agency.toLowerCase().includes(search.toLowerCase()))
    })
    // | audition.people.toLowerCase().includes(search.toLowerCase()) 
    console.log(filteredAuditions)
    return (
        <div>
            Auditions
            <Search search={search} onSearchChange={setSearch}/>
            {displayAuditions}
            {/* <AddAuditionForm auditions={auditions}/> */}
        </div>
    )
}

export default Auditions