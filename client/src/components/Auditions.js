import { useState, useEffect } from 'react'
import SideBar from './SideBar'
import DisplayAudition from './DisplayAudition'
import AddAuditionForm from './AddAuditionForm'

function Auditions({ setAuditions, auditions, user }) {

    // fetch this user's auditions
    useEffect(() => {
        fetch(`http://localhost:3000/auditions/${user.id}`)
        .then(res => res.json())
        .then(data => {
            console.log(data)
            setAuditions(data)
        })
    }, [])

    console.log(auditions)

    const displayAuditions = auditions.map(audition => {
        console.log(audition)
        return <DisplayAudition audition={audition}/>
    })
    return (
        <div>
            Auditions
            {displayAuditions}
            {/* <AddAuditionForm auditions={auditions}/> */}
        </div>
    )
}

export default Auditions