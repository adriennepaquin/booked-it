import { useState } from 'react'
import AuditionDetails from "./AuditionDetails"
import ModifyAudition from "./ModifyAudition"

function DisplayAudition({ audition }) {
    const [display, setDisplay] = useState(false)
    const [modify, setModify] = useState(false)

    function handleClick() {
        setDisplay(!display)
    }
    
    function handleUpdate() {
        setModify(!modify)
    }

    console.log(audition)
    return (
        <div>
            <p>date: {audition.audition.date}</p>
            <p>producer: {audition.audition.producer}</p>
            <button onClick={handleClick}>{display ? "Hide Details" : "Show Details"}</button>
            <p>location: {audition.audition.location.name}</p>
            {display ? <AuditionDetails audition={audition}/> : null}
            <button onClick={handleUpdate}>Edit Audition</button>
            {modify ? <ModifyAudition audition={audition}/> : null}
        </div>
    )
}

export default DisplayAudition