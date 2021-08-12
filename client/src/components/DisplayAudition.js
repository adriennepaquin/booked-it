import AuditionDetails from "./AuditionDetails"

function DisplayAudition({ audition }) {
    console.log(audition)
    return (
        <div>
            <p>date: {audition.audition.date}</p>
            <p>producer: {audition.audition.producer}</p>
            <AuditionDetails />
        </div>
    )
}

export default DisplayAudition