import { useState } from 'react'

function AddAuditionForm({ auditions, user }) {
    const [form, setForm] = useState({
        date: "",
        time: "",
        location_id: "",
        appointment: false,
        producer: "",
        monologue_id: "",
        casting_id: "",
        shows: "",
        outfit: "",
        response: "",
        callback: false,
        booked: false
    })
    const [location, setLocation] = useState({
        name: "",
        address: ""
        // // notes: ""
    })
    const [newLoc, setNewLoc] = useState(false)
    const [locForm, setLocForm] = useState(false)
    const [casting, setCasting] = useState({
        agency: ""
        // notes: ""
    })
    const [newCast, setNewCast] = useState(false)
    const [castForm, setCastForm] = useState(false)
    const [monologue, setMonologue] = useState({
        role: "",
        play: "",
        playwright: "",
        public: false,
        genre: "",
        length: "",
        first_line: "",
        user_id: ""
    })
    const [newMono, setNewMono] = useState(false)
    const [monoForm, setMonoForm] = useState(false)
    const [monoId, setMonoId] = useState("")
    const [castId, setCastId] = useState("")
    const [locId, setLocId] = useState("")

    function handleChange(e){
        // console.log(e.target)
        const key = e.target.name
        const value = e.target.value
        // console.log(key)
        // console.log(value)
        let newData
        if (key === 'appointment' || key === 'callback' || key === 'booked') {
            // console.log(value)
            newData = {
                ...form, [key]: !form.value
            }
            setForm(newData)
        } else if (key === 'location_id' || key === 'casting_id' || key === 'monologue_id') {
            if (typeof value !== 'string') {
                newData = {...form, [key]: value}
                setForm(newData)
            }
        } else {
            newData = {
                ...form, [key]: value
            }
            setForm(newData)
        }
        // console.log(newData)
    }

    function handleLocation(e){
        const key = e.target.name
        const value = e.target.value
        const addLoc = {
            ...location, [key]: value
        }
        // console.log(addLoc)
        setLocation(addLoc)
    }

    function addLocation(e){
        e.preventDefault()
        setNewLoc(!newLoc)
        setLocForm(false)
    }

    function handleCasting(e){
        const key = e.target.name
        const value = e.target.value
        const addCast = {
            ...casting, [key]: value
        }
        // console.log(addCast)
        setCasting(addCast)
    }

    function addCasting(e){
        e.preventDefault()
        setNewCast(!newCast)
        setCastForm(false)
    }

    function handleMonologue(e){
        const key = e.target.name
        const value = e.target.value
        let newData
        if (key === 'public') {
            // console.log(value)
            newData = {
                ...monologue, public: !monologue.public, user_id: user.id
            }
            setMonologue(newData)
        } else {
            newData = {
                ...monologue, [key]: value, user_id: user.id
            }
            setMonologue(newData)
        }
    }

    function addMonologue(e){
        e.preventDefault()
        setNewMono(!newMono)
        setMonoForm(false)
    }

    function handleSubmit(e){
        e.preventDefault()
        console.log(form)
        console.log(location)
        console.log(casting)
        console.log(monologue)
        // const results = function postAdds() {
            if (monologue.role !== ""){
            fetch(`http://localhost:3000/monologues`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(monologue)
            })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                setMonoId(data.id)
            })
            } else if (casting.agency !== ""){
                fetch(`http://localhost:3000/castings`, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(casting)
                })
                .then(res => res.json())
                .then(data => {
                    console.log(data)
                    setCastId(data.id)
                })
            } else if (location.name !== ""){
                fetch(`http://localhost:3000/locations`, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(location)
                })
                .then(res => res.json())
                .then(data => {
                    console.log(data)
                    setLocId(data.id)
                })
            }
        // }
    }

    return (
        <div>
            Add Audition here!
            <form onSubmit={handleSubmit}>
                {/* date */}
                <input type="date" name="date" placeholder="YYYY/MM/DD" value={form.date} onChange={handleChange}/><br></br>
                {/* time */}
                <input type="text" name="time" placeholder="time" value={form.time} onChange={handleChange}/><br></br>
                {/* appointment */}
                <input type="checkbox" name="appointment" value={form.appointment} onChange={handleChange}/>
                <label for="appointment">Appointment?</label><br></br>
                {/* location */}
                <select id="locations" name="location_id" value={form.location_id} onChange={handleChange}>
                    <option value="default" disabled>Location</option>
                    {auditions.map(audition => <option value={audition.audition.location.id} key={audition.audition.location.id}>{audition.audition.location.name}</option>)}
                    {newLoc ? <option value={location.name} key={location.name}>{location.name}</option> : null}
                </select><br></br>
                <button onClick={(e) => {
                    e.preventDefault()
                    setLocForm(!locForm)}}>Add New Location</button><br></br>
                {/* add new location */}
                {locForm ? <div><input type="text" name="name" value={location.name} placeholder="Location Name" onChange={handleLocation}/><br></br>
                <input type="text" name="address" value={location.address} placeholder="Location Address" onChange={handleLocation}/><br></br>
                {/* <input type="text" name="notes" value={location.notes} placeholder="Location Notes" onChange={handleLocation}/><br></br> */}
                <button onClick={addLocation}>Add</button><br></br></div> : null}
                {/* producer */}
                <input type="text" name="producer" placeholder="Theatre/Producer" value={form.producer} onChange={handleChange}/><br></br>
                {/* monologue */}
                <select name="monologue_id" defaultValue="default" value={form.monologue_id} onChange={handleChange}>
                    <option value="default" disabled>Monologue</option>
                    {auditions.map(audition => <option value={audition.audition.monologue.id} key={audition.audition.monologue.id}>{audition.audition.monologue.role}</option>)}
                    {newMono ? <option value={monologue.role} key={monologue.role}>{monologue.role}</option> : null}
                </select><br></br>
                <button onClick={(e) => {
                    e.preventDefault()
                    setMonoForm(!monoForm)}}>Add New Monologue</button><br></br>
                {/* add new monologue */}
                {monoForm ? <div><input type="text" name="play" value={monologue.play} placeholder="Play" onChange={handleMonologue}/><br></br>
                <input type="text" name="playwright" value={monologue.playwright} placeholder="Playwright" onChange={handleMonologue}/><br></br>
                <input type="text" name="role" value={monologue.role} placeholder="Role" onChange={handleMonologue}/><br></br>
                <input type="text" name="first_line" value={monologue.first_line} placeholder="First Line" onChange={handleMonologue}/><br></br>
                <input type="text" name="length" value={monologue.length} placeholder="Length" onChange={handleMonologue}/><br></br>
                <input type="text" name="genre" value={monologue.genre} placeholder="Genre" onChange={handleMonologue}/><br></br>
                <input type="checkbox" name="public" value={monologue.public} onChange={handleMonologue}/>
                <label for="public">Make Public?</label><br></br>
                <button onClick={addMonologue}>Add</button><br></br></div> : null}
                {/* casting */}
                <select name="casting_id" defaultValue="default" value={form.casting_id} onChange={handleChange}>
                    <option value="default" disabled>Casting</option>
                    {auditions.map(audition => <option value={audition.audition.casting.id} key={audition.audition.casting.id}>{audition.audition.casting.agency}</option>)}
                    {newCast ? <option value={casting.agency} key={casting.agency}>{casting.agency}</option> : null}
                </select><br></br>
                <button onClick={(e) => {
                    e.preventDefault()
                    setCastForm(!castForm)}}>Add New Casting Agency</button><br></br>
                {/* add new casting */}
                {castForm ? <div><input type="text" name="agency" value={casting.agency} placeholder="Agency Name" onChange={handleCasting}/><br></br>
                {/* <input type="text" name="notes" value={casting.notes} placeholder="Notes" onChange={handleCasting}/><br></br> */}
                <button onClick={addCasting}>Add</button><br></br></div> : null}
                {/* shows */}
                <input type="text" name="shows" placeholder="Shows" value={form.shows} onChange={handleChange}/><br></br>
                {/* outfit */}
                <input type="text" name="outfit" placeholder="Outfit" value={form.outfit} onChange={handleChange}/><br></br>
                {/* response */}
                <input type="text" name="response" placeholder="Response" value={form.response} onChange={handleChange}/><br></br>
                {/* callback */}
                <input type="checkbox" name="callback" value={form.callback} onChange={handleChange}/>
                <label for="callback">Callback?</label><br></br>
                {/* booked */}
                <input type="checkbox" name="booked" value={form.booked} onChange={handleChange}/>
                <label for="booked">Booked?</label><br></br>
                <input id="submit" type="submit" value="Submit" />
            </form>
        </div>
    )
}

export default AddAuditionForm