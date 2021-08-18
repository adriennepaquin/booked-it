import DisplayMonologue from "./DisplayMonologue"

function Home({ monos }) {

    // const displayMonos = monos.map(mono => {
    //     console.log(mono)
    //     return <div>
    //         <p>{mono.role}</p>
    //         <p>{mono.play}</p>
    //         <p>{mono.first_line}</p>
    //     </div>
    // })

    const displayMono1 = monos[monos.length - 1]
    const displayMono2 = monos[monos.length - 2]
    const displayMono3 = monos[monos.length - 3]
    const displayMono4 = monos[monos.length - 4]

    return (
        <div>
            <img src="images/full_logo.png" alt="Booked It! Logo" height="300"/><br></br>
            <p>Welcome to Booked It! An audition and monologue tracker!</p>
            <ul>On Booked It! you can:
                <li>Log audition details</li>
                <li>Search auditions by people/theatre</li>
                <li>Update audition outcomes</li>
                <li>View public monologues</li>
                <li>Add your own monologues (either private or made public)</li>
            </ul>
            <h5>A sample of public monologues:</h5>
            <DisplayMonologue mono={displayMono1}/>
            <DisplayMonologue mono={displayMono2}/>
            <DisplayMonologue mono={displayMono3}/>
            <DisplayMonologue mono={displayMono4}/>
        </div>
    )
}

export default Home