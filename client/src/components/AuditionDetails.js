import { useState } from 'react'
import { useHistory } from 'react-router-dom'
import DisplayPerson from './DisplayPerson'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

function AuditionDetails({ audition, handleDeleteAud }) {
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
        const key = e.target.name
        const value = e.target.value
        let newData
        newData = {
            ...form, [key]: value
        }
        setForm(newData)
    }

    function handleCheck(e) {
        const key = e.target.name
        const value = e.target.value
        let newData
        if (key === 'callback'){
            newData = {
                ...form, [key]: !form.callback
            }            
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
            history.push('/welcome')
        })
        .catch((data) => {
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
            <p><label for="appointment"><b>Appointment?</b></label>
            {audition.appointment ? " yes" : " no"}
            <br></br></p>
            <p><b>Casting:</b> {audition.casting.agency === "none" ? "no agency" : audition.casting.agency}</p>
            <p><b>In the Room:</b> {displayPeople}</p>
            <p><b>Shows:</b> {audition.shows}</p>
            <p><b>Monologue:</b> {audition.monologue.role}</p>
            <p><b>Outfit:</b> {audition.outfit}</p>
            <Form id="update" onSubmit={handleSubmit}>
                <Form.Group>
                    <Form.Label for="response"><b>Response:</b></Form.Label><br></br>
                    <Form.Control as="textarea" name="response" placeholder="Response" value={form.response} onChange={handleChange}/><br></br>
                </Form.Group>
                <Form.Group>
                    <Form.Label for="callback"><b>Callback?</b></Form.Label>
                    {form.callback ? <Form.Check type="checkbox" name="callback" value={form.callback} checked onChange={handleCheck} /> : <Form.Check type="checkbox" name="callback" value={form.callback} onChange={handleCheck} />}<br></br>
                </Form.Group>
                <Form.Group>
                    <Form.Label for="booked"><b>Booked?</b></Form.Label>
                    {form.booked ? <Form.Check type="checkbox" name="booked" value={form.booked} checked onChange={handleCheck} /> : <Form.Check type="checkbox" name="booked" value={form.booked} onChange={handleCheck} />}<br></br>
                </Form.Group>
                <Button className="button" id="update_submit" variant="light" type="submit" value="Update">Update Response</Button>
            </Form>
            <Button className="button" id="delete" variant="light" value={audition.id} onClick={handleDeleteAud}>Delete Audition</Button>
        </div>
    )
}

export default AuditionDetails