function DisplayMonologue({ mono }) {
    console.log(mono)
    return (
        <div>
            <p>play: {mono.play}</p>
            <p>playwright: {mono.playwright}</p>
            <p>role: {mono.role}</p>
            <p>first line: {mono.first_line}</p>
            <p>genre: {mono.genre}</p>
            <p>length: {mono.length}</p>
        </div>
    )
}

export default DisplayMonologue