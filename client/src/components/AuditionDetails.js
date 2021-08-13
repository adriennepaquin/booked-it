function AuditionDetails({ audition }) {
    return (
        <div>
            <p>time: {audition.audition.time}</p>
            <p>appointment? {audition.audition.appointment ? "yes" : "no"}</p>
            <p>producer: {audition.audition.producer}</p>
            <p>casting: {audition.audition.casting.agency}</p>
            <p>shows: {audition.audition.shows}</p>
            <p>monologue: {audition.audition.monologue.role}</p>
            <p>outfit: {audition.audition.outfit}</p>
            <p>response: {audition.audition.response}</p>
        </div>
    )
}

export default AuditionDetails