import { useEffect } from 'react'
import SideBar from './SideBar'
import DisplayAudition from './DisplayAudition'
import DisplayMonologue from './DisplayMonologue'

function Welcome({ user, monos, setMonos, setMyMonos, auditions, setAuditions, locations, setLocations, setCastings }) {

    // fetch this user's auditions
    useEffect(() => {
        fetch(`http://localhost:3000/auditions/${user.id}`)
        .then(res => res.json())
        .then(data => {
            console.log(data)
            setAuditions(data)
        })
    }, [])

    // fetch all the public monologues
    useEffect(() => {
        fetch(`http://localhost:3000/monologues`)
        .then(res => res.json())
        .then(data => {
            console.log(data)
            setMonos(data)
        })
    }, [])

    // fetch this user's monologues
    useEffect(() => {
        fetch(`http://localhost:3000/monologues/${user.id}`)
        .then(res => res.json())
        .then(data => {
            console.log(data)
            setMyMonos(data)
        })
    }, [])

    // fetch all available locations
    useEffect(() => {
        fetch(`http://localhost:3000/locations`)
        .then(res => res.json())
        .then(data => {
            console.log(data)
            setLocations(data)
        })
    }, [])

    // fetch all available casting
    useEffect(() => {
        fetch(`http://localhost:3000/castings`)
        .then(res => res.json())
        .then(data => {
            console.log(data)
            setCastings(data)
        })
    }, [])

    const displayAudition1 = auditions[auditions.length - 1]
    console.log(displayAudition1)
    const displayAudition2 = auditions[auditions.length - 2]
    console.log(displayAudition1)

    const displayMono1 = monos[monos.length - 1]
    console.log(displayMono1)
    const displayMono2 = monos[monos.length - 2]
    console.log(displayMono1)
        
    return (
        <div>
            <SideBar />
            Welcome
            <p>Welcome to Your Stage, {user.name}!</p>
            Recent Auditions:
            {displayAudition1 ? <DisplayAudition audition={displayAudition1}/> : null}
            {displayAudition2 ? <DisplayAudition audition={displayAudition2}/> : null}
            New Monologues:
            {displayMono1 ? <DisplayMonologue mono={displayMono1}/> : null}
            {displayMono2 ? <DisplayMonologue mono={displayMono2}/> : null}
        </div>
    )
}

export default Welcome