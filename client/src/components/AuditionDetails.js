import { useState } from 'react'
import { useHistory } from 'react-router-dom'
import DisplayPerson from './DisplayPerson'
import ModifyAudition from './ModifyAudition'
import styled from 'styled-components'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

const DetailStyle = styled.div`
    
`

function AuditionDetails({ audition, handleDeleteAud }) {
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

    // MAYBE A COUPLE LEVELS HIGHER?
    // function handleDeleteAud(e){
    //     console.log(e.target.value)
    //     const token = localStorage.getItem("token")
    //     console.log(form)
    //     fetch (`http://localhost:3000/auditions/${e.target.value}`, {
    //         method: 'DELETE',
    //         headers: {
    //             'Content-Type': 'application/json',
    //             Authorization: `Bearer ${token}`,
    //         }
    //     })
    //     .then(res => res.json())
    //     .then(data => {
    //         console.log(data)
    //         history.push("/auditions")
    //     })
    // }

    const displayPeople = audition.people.map(person => {
        return <DisplayPerson key={person.name} person={person}/>
    })

    return (
        <div>
            <p><label for="appointment">Appointment?</label>
            {/* {audition.appointment ? <input type="checkbox" name="appointment" value={audition.appointment} defaultChecked/> : <input type="checkbox" name="appointment" value={audition.appointment} />} */}
            {audition.appointment ? " yes" : " no"}
            <br></br></p>
            <p>Casting: {audition.casting.agency === "none" ? "no agency" : audition.casting.agency}</p>
            <p>In the Room: {displayPeople}</p>
            <p>Shows: {audition.shows}</p>
            <p>Monologue: {audition.monologue.role}</p>
            <p>Outfit: {audition.outfit}</p>
            <Form onSubmit={handleSubmit}>
                <Form.Group>
                    <Form.Label for="response">Response:</Form.Label><br></br>
                    <Form.Control as="textarea" name="response" placeholder="Response" value={form.response} onChange={handleChange}/><br></br>
                </Form.Group>
                <Form.Group>
                    <Form.Label for="callback">Callback?</Form.Label>
                    {form.callback ? <Form.Check type="checkbox" name="callback" value={form.callback} checked onChange={handleCheck} /> : <Form.Check type="checkbox" name="callback" value={form.callback} onChange={handleCheck} />}<br></br>
                </Form.Group>
                <Form.Group>
                    <Form.Label for="booked">Booked?</Form.Label>
                    {form.booked ? <Form.Check type="checkbox" name="booked" value={form.booked} checked onChange={handleCheck} /> : <Form.Check type="checkbox" name="booked" value={form.booked} onChange={handleCheck} />}<br></br>
                </Form.Group>
                <Button className="button" id="update_submit" variant="light" type="submit" value="Update">Update Response</Button>
                <Button className="button" id="delete" variant="light" value={audition.id} onClick={handleDeleteAud}>Delete Audition</Button>

            </Form>
        </div>
    )
}

export default AuditionDetails