import { useState } from 'react'
import { useHistory } from 'react-router-dom'
import DisplayPerson from './DisplayPerson'
import ModifyAudition from './ModifyAudition'

function AuditionDetails({ audition }) {
    // const [modify, setModify] = useState(false)
    const [form, setForm] = useState({
        id: audition.id,
        response: audition.response,
        callback: audition.callback,
        booked: audition.booked
    })
    const [errors, setErrors] = useState([])
    console.log(audition.people)

    const history = useHistory()
    function handleChange(e){
        console.log(e.target.name)
        console.log(e.target.value)
        const key = e.target.name
        const value = e.target.value
        console.log(key)
        // console.log(value)
        let newData
        newData = {
            ...form, [key]: value
        }
        setForm(newData)
        // console.log(newData)
    }

    // function handleUpdate() {
    //     console.log('click')
    //     setModify(!modify)
    // }

    function handleCheck(e) {
        const key = e.target.name
        const value = e.target.value
        console.log(key)
        console.log(value)
        console.log(form.callback)
        let newData
        if (key === 'callback'){
            newData = {
                ...form, [key]: !form.callback
            }            
            console.log(form)
            setForm(newData)
        } else if (key === 'booked'){
            newData = {
                ...form, [key]: !form.booked
            }            
            setForm(newData)
        }
    }

    function handleSubmit(e){
        e.preventDefault()
        const token = localStorage.getItem("token")
        console.log(form)
        fetch (`http://localhost:3000/auditions/${form.id}`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${token}`,
            },
            body: JSON.stringify(form)
        })
        .then((res) => {
            return res.json().then((data) => {
              if (res.ok) {
                return data
              } else {
                throw data
              }
            })
          })
        .then(data => {
            console.log(data)
            history.push('/welcome')
        })
        .catch((data) => {
            console.log(data)
            if (data.status === 500) {
                setErrors("Make sure you've filled out all fields.")
            }
        })
    }

    const displayPeople = audition.people.map(person => {
        return <DisplayPerson key={person.name} person={person}/>
    })

    return (
        <div>
            <p>{audition.time}</p>
            <p><label for="appointment">Appointment?</label>
            {audition.appointment ? <input type="checkbox" name="appointment" value={audition.appointment} defaultChecked/> : <input type="checkbox" name="appointment" value={audition.appointment} />}<br></br></p>
            <p>casting: {audition.casting.agency}</p>
            <p>In the Room: {displayPeople}</p>
            <p>shows: {audition.shows}</p>
            <p>monologue: {audition.monologue.role}</p>
            <p>outfit: {audition.outfit}</p>
            <form onSubmit={handleSubmit}>
                <label for="response">Response:</label><br></br>
                <input type="text" name="response" placeholder="Response" value={form.response} onChange={handleChange}/><br></br>
                <label for="callback">Callback?</label>
                {form.callback ? <input type="checkbox" name="callback" value={form.callback} checked onChange={handleCheck} /> : <input type="checkbox" name="callback" value={form.callback} onChange={handleCheck} />}<br></br>
                <label for="booked">Booked?</label>
                {form.booked ? <input type="checkbox" name="booked" value={form.booked} checked onChange={handleCheck} /> : <input type="checkbox" name="booked" value={form.booked} onChange={handleCheck} />}<br></br>
                <input id="update_submit" type="submit" value="Update" />
            </form>
        </div>
    )
}

export default AuditionDetails