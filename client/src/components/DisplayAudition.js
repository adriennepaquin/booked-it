import { useState } from 'react'
import AuditionDetails from "./AuditionDetails"

function DisplayAudition({ audition }) {
    const [display, setDisplay] = useState(false)

    function handleClick() {
        setDisplay(!display)
    }

    console.log(audition)
    return (
        <div>
            <p>date: {audition.audition.date}</p>
            <p>producer: {audition.audition.producer}</p>
            <p>location: {audition.audition.location.name}</p>
            <button onClick={handleClick}>{display ? "Hide Details" : "Show Details"}</button>
            {display ? <AuditionDetails audition={audition}/> : null}
        </div>
    )
}

export default DisplayAudition