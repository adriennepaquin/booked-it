import { useState } from 'react'

function AddAuditionForm({ auditions }) {
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
        address: "",
        notes: ""
    })
    const [newLoc, setNewLoc] = useState(false)
    const [casting, setCasting] = useState("")
    const [monologue, setMonologue] = useState({
        role: "",
        play: ""
    })

    function handleChange(e){
        console.log(e.target)
        const key = e.target.name
        const value = e.target.value
        console.log(key)
        console.log(value)
        let newData
        if (key === 'appointment' || key === 'callback' || key === 'booked') {
            console.log(value)
            newData = {
                ...form, [key]: !form.value
            }
            setForm(newData)
        } else {
            newData = {
                ...form, [key]: value
            }
            setForm(newData)
        }
        console.log(newData)
    }

    function handleLocation(e){
        const key = e.target.name
        const value = e.target.value
        const newLoc = {
            ...location, [key]: value
        }
        setLocation(newLoc)
    }

    function addLocation(e){
        e.preventDefault()
        setNewLoc(!newLoc)
    }

    console.log(form)
    console.log(location)
    return (
        <div>
            Add Audition here!
            <form>
                <input type="date" name="date" placeholder="YYYY/MM/DD" value={form.date} onChange={handleChange}/><br></br>
                <input type="text" name="time" placeholder="time" value={form.time} onChange={handleChange}/><br></br>
                <input type="checkbox" name="appointment" value={form.appointment} onChange={handleChange}/>
                <label for="appointment">Appointment?</label><br></br>
                <select id="locations" name="location_id" value={form.location_id} onChange={handleChange}>
                    <option value="default" disabled>Location</option>
                    {auditions.map(audition => <option value={audition.audition.location.id} key={audition.audition.location.id}>{audition.audition.location.name}</option>)}
                    {newLoc ? <option value={location.name} key={location.name}>{location.name}</option> : null}
                </select><br></br>
                {/* <input type="text" name="name" value={location.name} placeholder="Location Name" onChange={handleLocation}/><br></br>
                <input type="text" name="address" value={location.address} placeholder="Location Address" onChange={handleLocation}/><br></br>
                <input type="text" name="notes" value={location.notes} placeholder="Location Notes" onChange={handleLocation}/><br></br>
                <button onClick={addLocation}>Add New Location</button><br></br> */}
                
                <input type="text" name="producer" placeholder="Theatre/Producer" value={form.producer} onChange={handleChange}/><br></br>
                <select name="monologue_id" defaultValue="default" value={form.monologue_id} onChange={handleChange}>
                    <option value="default" disabled>Monologue</option>
                    {auditions.map(audition => <option value={audition.audition.monologue.id} key={audition.audition.monologue.id}>{audition.audition.monologue.role}</option>)}
                </select><br></br>
                <select name="casting_id" defaultValue="default" value={form.casting_id} onChange={handleChange}>
                    <option value="default" disabled>Casting</option>
                    {auditions.map(audition => <option value={audition.audition.casting.id} key={audition.audition.casting.id}>{audition.audition.casting.agency}</option>)}
                </select><br></br>
                <input type="text" name="shows" placeholder="Shows" value={form.shows} onChange={handleChange}/><br></br>
                <input type="text" name="outfit" placeholder="Outfit" value={form.outfit} onChange={handleChange}/><br></br>
                <input type="text" name="response" placeholder="Response" value={form.response} onChange={handleChange}/><br></br>
                <input type="checkbox" name="callback" value={form.callback} onChange={handleChange}/>
                <label for="callback">Callback?</label><br></br>
                <input type="checkbox" name="booked" value={form.booked} onChange={handleChange}/>
                <label for="booked">Booked?</label><br></br>
                <input id="submit" type="submit" value="Submit" />
            </form>
            <form>
                <input type="text" name="name" value={location.name} placeholder="Location Name" onChange={handleLocation}/><br></br>
                <input type="text" name="address" value={location.address} placeholder="Location Address" onChange={handleLocation}/><br></br>
                <input type="text" name="notes" value={location.notes} placeholder="Location Notes" onChange={handleLocation}/><br></br>
                <button onClick={addLocation}>Add New Location</button><br></br>
            </form>
        </div>
    )
}

export default AddAuditionForm