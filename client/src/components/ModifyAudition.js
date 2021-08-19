// import { useState } from 'react'
// import { useHistory } from 'react-router-dom'

// function ModifyAudition({ audition, setModify }) {
//     const [form, setForm] = useState({
//         id: audition.id,
//         // date: audition.audition.date,
//         // time: audition.audition.time,
//         // location_id: "",
//         // appointment: audition.audition.appointment,
//         // producer: audition.audition.producer,
//         // monologue_id: "",
//         // casting_id: "",
//         // shows: audition.audition.shows,
//         // outfit: audition.audition.outfit,
//         response: audition.response,
//         callback: audition.callback,
//         booked: audition.booked
//         // location: audition.audition.location.name,
//         // casting: audition.audition.casting.agency,
//         // monologue: audition.audition.monologue.role
//     })
//     // const [location, setLocation] = useState({
//     //     name: "",
//     //     address: ""
//     //     // // notes: ""
//     // })
//     // const [newLoc, setNewLoc] = useState(false)
//     // const [locForm, setLocForm] = useState(false)
//     // const [casting, setCasting] = useState({
//     //     agency: ""
//     //     // notes: ""
//     // })
//     // const [newCast, setNewCast] = useState(false)
//     // const [castForm, setCastForm] = useState(false)
//     // const [monologue, setMonologue] = useState({
//     //     role: "",
//     //     play: "",
//     //     playwright: "",
//     //     public: false,
//     //     genre: "",
//     //     length: "",
//     //     first_line: "",
//     //     user_id: ""
//     // })
//     // const [newMono, setNewMono] = useState(false)
//     // const [monoForm, setMonoForm] = useState(false)
//     // // const [monoId, setMonoId] = useState("")
//     // // const [castId, setCastId] = useState("")
//     // // const [locId, setLocId] = useState("")

//     const [errors, setErrors] = useState([])

//     const history = useHistory()
//     function handleChange(e){
//         console.log(e.target.name)
//         console.log(e.target.value)
//         const key = e.target.name
//         const value = e.target.value
//         console.log(key)
//         // console.log(value)
//         let newData
//         newData = {
//             ...form, [key]: value
//         }
//         setForm(newData)
//         // console.log(newData)
//     }

//     function handleCheck(e){
//         const key = e.target.name
//         const value = e.target.value
//         console.log(key)
//         console.log(value)
//         console.log(form.callback)
//         let newData
//         if (key === 'callback'){
//             newData = {
//                 ...form, [key]: !form.callback
//             }            
//             console.log(form)
//             setForm(newData)
//         } else if (key === 'booked'){
//             newData = {
//                 ...form, [key]: !form.booked
//             }            
//             setForm(newData)
//         }
//     }

//     // function handleLocation(e){
//     //     const key = e.target.name
//     //     const value = e.target.value
//     //     const addLoc = {
//     //         ...location, [key]: value
//     //     }
//     //     // console.log(addLoc)
//     //     setLocation(addLoc)
//     // }

//     // function addLocation(e){
//     //     e.preventDefault()
//     //     setNewLoc(!newLoc)
//     //     setLocForm(false)
//     // }

//     // function handleCasting(e){
//     //     const key = e.target.name
//     //     const value = e.target.value
//     //     const addCast = {
//     //         ...casting, [key]: value
//     //     }
//     //     // console.log(addCast)
//     //     setCasting(addCast)
//     // }

//     // function addCasting(e){
//     //     e.preventDefault()
//     //     setNewCast(!newCast)
//     //     setCastForm(false)
//     // }

//     // function handleMonologue(e){
//     //     const key = e.target.name
//     //     const value = e.target.value
//     //     let newData
//     //     if (key === 'public') {
//     //         // console.log(value)
//     //         newData = {
//     //             ...monologue, public: !monologue.public, user_id: user.id
//     //         }
//     //         setMonologue(newData)
//     //     } else {
//     //         newData = {
//     //             ...monologue, [key]: value, user_id: user.id
//     //         }
//     //         setMonologue(newData)
//     //     }
//     // }

//     // function addMonologue(e){
//     //     e.preventDefault()
//     //     setNewMono(!newMono)
//     //     setMonoForm(false)
//     // }

//     function handleSubmit(e){
//         e.preventDefault()
//         const token = localStorage.getItem("token")
//         console.log(form)
//         // console.log(location)
//         // console.log(casting)
//         // console.log(monologue)
//         // const postData = {
//         //     ...form,
//         //     location: location,
//         //     casting: casting,
//         //     monologue: monologue
//         // }
//         fetch (`http://localhost:3000/auditions/${form.id}`, {
//             method: 'PATCH',
//             headers: {
//                 'Content-Type': 'application/json',
//                 Authorization: `Bearer ${token}`,
//             },
//             body: JSON.stringify(form)
//         })
//         .then((res) => {
//             return res.json().then((data) => {
//               if (res.ok) {
//                 return data
//               } else {
//                 throw data
//               }
//             })
//           })
//         .then(data => {
//             console.log(data)
//             setModify((pModify) => !pModify)
//         })
//         .catch((data) => {
//             console.log(data)
//             if (data.status === 500) {
//                 setErrors("Make sure you've filled out all fields.")
//             }
//           })
//         // below methods replaced by above method
//         // // if (monologue.role !== ""){
//         // fetch(`http://localhost:3000/monologues`, {
//         //     method: 'POST',
//         //     headers: {
//         //         'Content-Type': 'application/json'
//         //     },
//         //     body: JSON.stringify(monologue)
//         // })
//         // .then(res => res.json())
//         // .then(data => {
//         //     console.log(data)
//         //     setMonoId(data.id)
//         // })
//         // // } else if (casting.agency !== ""){
//         //     fetch(`http://localhost:3000/castings`, {
//         //         method: 'POST',
//         //         headers: {
//         //             'Content-Type': 'application/json'
//         //         },
//         //         body: JSON.stringify(casting)
//         //     })
//         //     .then(res => res.json())
//         //     .then(data => {
//         //         console.log(data)
//         //         setCastId(data.id)
//         //     })
//         // // } else if (location.name !== ""){
//         //     fetch(`http://localhost:3000/locations`, {
//         //         method: 'POST',
//         //         headers: {
//         //             'Content-Type': 'application/json'
//         //         },
//         //         body: JSON.stringify(location)
//         //     })
//         //     .then(res => res.json())
//         //     .then(data => {
//         //         console.log(data)
//         //         setLocId(data.id)
//         //     })
//         // // } else {
//         //     const wholeForm = {
//         //         ...form,
//         //         location_id: locId,
//         //         casting_id: castId,
//         //         monologue_id: monoId,
//         //     }
//         //     console.log(wholeForm)
//         //     setForm(wholeForm)
//         //     console.log(form)
//         //     // fetch(`http://localhost:3000/auditions`, {
//         //     //     method: 'POST',
//         //     //     headers: {
//         //     //         'Content-Type': 'application/json'
//         //     //     },
//         //     //     body: JSON.stringify()
//         //     // })
//         // }
    
//     }

//     return (
//         <div>
//             {/* Add Audition here! */}
//             <form onSubmit={handleSubmit}>
//                 {/* date
//                 <input type="date" name="date" disabled placeholder="YYYY/MM/DD" value={form.date} onChange={handleChange}/><br></br>

//                 {/* time */}
//                 {/* <input type="text" name="time" disabled placeholder={"time"} value={form.time} onChange={handleChange}/><br></br> */}

//                 {/* appointment */}
//                 {/* <>
//                 {form.appointment ? <input type="checkbox" disabled name="appointment" value={form.appointment} checked onChange={handleCheck} /> : <input type="checkbox" name="appointment" value={form.appointment} disabled onChange={handleCheck} />}
//                 <label for="appointment">Appointment?</label><br></br>
//                 </> */}

//                 {/* location */}
//                 {/* <input type="text" name="location" placeholder="Location" disabled value={form.location} onChange={handleChange}/><br></br> */}
//                 {/* <select id="locations" name="location_id" defaultValue="default" value={form.location_id} onChange={handleChange}>
//                     <option value="default">Location</option>
//                     {locations.map(location => <option value={location.id} key={location.name}>{location.name}</option>)}
//                     {newLoc ? <option value={location.name} key={location.name}>{location.name}</option> : null}                   
//                 </select><br></br>
//                 <button onClick={(e) => {
//                     e.preventDefault()
//                     setLocForm(!locForm)}}>Add New Location</button><br></br> */}

//                 {/* add new location */}
//                 {/* {locForm ? <div><input type="text" name="name" value={location.name} placeholder="Location Name" onChange={handleLocation}/><br></br>
//                 <input type="text" name="address" value={location.address} placeholder="Location Address" onChange={handleLocation}/><br></br>
//                 {/* <input type="text" name="notes" value={location.notes} placeholder="Location Notes" onChange={handleLocation}/><br></br> */}
//                 {/* <button onClick={addLocation}>Add</button><br></br></div> : null} */}

//                 {/* producer */}
//                 {/* <input type="text" name="producer" disabled placeholder="Theatre/Producer" value={form.producer} onChange={handleChange}/><br></br> */}

//                 {/* monologue */}
//                 {/* <input type="text" name="monologue" disabled placeholder="monologue" value={form.monologue} onChange={handleChange}/><br></br> */}
//                 {/* <select name="monologue_id" defaultValue="default" value={form.monologue_id} onChange={handleChange}>
//                     <option value="default">Monologue</option>
//                     {myMonos.map(mono => <option value={mono.id} key={mono.role}>{mono.role}</option>)}
//                     {newMono ? <option value={monologue.role} key={monologue.role}>{monologue.role}</option> : null}
//                 </select><br></br>
//                 <button onClick={(e) => {
//                     e.preventDefault()
//                     setMonoForm(!monoForm)}}>Add New Monologue</button><br></br> */}

//                 {/* add new monologue */}
//                 {/* {monoForm ? <div><input type="text" name="play" value={monologue.play} placeholder="Play" onChange={handleMonologue}/><br></br>
//                 <input type="text" name="playwright" value={monologue.playwright} placeholder="Playwright" onChange={handleMonologue}/><br></br>
//                 <input type="text" name="role" value={monologue.role} placeholder="Role" onChange={handleMonologue}/><br></br>
//                 <input type="text" name="first_line" value={monologue.first_line} placeholder="First Line" onChange={handleMonologue}/><br></br>
//                 <input type="text" name="length" value={monologue.length} placeholder="Length" onChange={handleMonologue}/><br></br>
//                 <input type="text" name="genre" value={monologue.genre} placeholder="Genre" onChange={handleMonologue}/><br></br>
//                 <input type="checkbox" name="public" value={monologue.public} onChange={handleMonologue}/>
//                 <label for="public">Make Public?</label><br></br>
//                 <button onClick={addMonologue}>Add</button><br></br></div> : null} */}

//                 {/* casting */}
//                 {/* <input type="text" name="casting" disabled placeholder="casting" value={form.casting} onChange={handleChange}/><br></br> */}
//                 {/* <select name="casting_id" defaultValue="default" value={form.casting_id} onChange={handleChange}>
//                     <option value="default">Casting</option>
//                     {castings.map(casting => <option value={casting.id} key={casting.agency}>{casting.agency}</option>)}
//                     {newCast ? <option value={casting.agency} key={casting.agency}>{casting.agency}</option> : null}
//                 </select><br></br>
//                 <button onClick={(e) => {
//                     e.preventDefault()
//                     setCastForm(!castForm)}}>Add New Casting Agency</button><br></br> */}

//                 {/* add new casting */}
//                 {/* {castForm ? <div><input type="text" name="agency" value={casting.agency} placeholder="Agency Name" onChange={handleCasting}/><br></br>
//                 {/* <input type="text" name="notes" value={casting.notes} placeholder="Notes" onChange={handleCasting}/><br></br> */}
//                 {/* <button onClick={addCasting}>Add</button><br></br></div> : null} */}

//                 {/* shows */}
//                 {/* <input type="text" name="shows" disabled placeholder="Shows" value={form.shows} onChange={handleChange}/><br></br> */}

//                 {/* outfit */}
//                 {/* <input type="text" name="outfit" disabled placeholder="Outfit" value={form.outfit} onChange={handleChange}/><br></br> */}

//                 {/* response */}
//                 <label for="response">Response:</label><br></br>
//                 <input type="text" name="response" placeholder="Response" value={form.response} onChange={handleChange}/><br></br>

//                 {/* callback */}
//                 {form.callback ? <input type="checkbox" name="callback" value={form.callback} checked onChange={handleCheck} /> : <input type="checkbox" name="callback" value={form.callback} onChange={handleCheck} />}
//                 <label for="callback">Callback?</label><br></br>

//                 {/* booked */}
//                 {form.booked ? <input type="checkbox" name="booked" value={form.booked} checked onChange={handleCheck} /> : <input type="checkbox" name="booked" value={form.booked} onChange={handleCheck} />}
//                 <label for="booked">Booked?</label><br></br>
//                 <input id="update_submit" type="submit" value="Update" />
//                 {errors ? <div style={{ color: "red" }} key={errors}>{errors}</div> : null}
//             </form>
//         </div>
//     )
// }

// export default ModifyAudition