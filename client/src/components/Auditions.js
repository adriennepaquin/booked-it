import { useState, useEffect } from 'react'
import SideBar from './SideBar'
import DisplayAudition from './DisplayAudition'
import AddAuditionForm from './AddAuditionForm'

function Auditions({ auditions }) {

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