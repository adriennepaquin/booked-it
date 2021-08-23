import { useState } from 'react'
import { useHistory } from 'react-router-dom'
import styled from 'styled-components'
import Form from 'react-bootstrap/Form'
import Container from 'react-bootstrap/Container'
import Card from 'react-bootstrap/Card'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'
import Alert from 'react-bootstrap/Alert'

const AddAudStyle = styled.div`
    padding-bottom: 50px;

    .add-aud {
        max-width: 700px;
    }

    h3 {
        font-size: 35px;
        color: white;
    }

    #add-aud-header { 
        color: white;
        margin: 15px;
    }

    #audition-form {
        padding: 15px;
    }

    .aud-button {
        font-family: 'Lobster', cursive;
        color: #03989e;
        padding: 5px;
        text-align: center;
        text-decoration: none;
        font-size: 18px;
        transition-duration: 0.4s;
        cursor: pointer;
        border-radius: 5px;
        border: 1px solid #03989e;

        &:hover {
        background-color: #03989e;
        color: white;
        }
    }
`

function AddAuditionForm({ auditions, setAuditions, user, locations, castings, myMonos, search, setSearch, searchMono, setSearchMono }) {
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
        booked: false,
        location: {},
        casting: {},
        monologue: {},
        people: []
    })
    const [location, setLocation] = useState({
        name: "",
        address: ""
    })
    const [newLoc, setNewLoc] = useState(false)
    const [locForm, setLocForm] = useState(false)
    const [casting, setCasting] = useState({
        agency: ""
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
    const [fields, setFields] = useState([{ value: null}])

    const [errors, setErrors] = useState([])
    const [locErrors, setLocErrors] = useState([])
    const [castErrors, setCastErrors] = useState([])
    const [monoErrors, setMonoErrors] = useState([])

    const history = useHistory()

    setSearch("")
    setSearchMono("")

    function handleChange(e){
        const key = e.target.name
        const value = e.target.value
        let newData
        if (key === 'appointment' || key === 'callback' || key === 'booked') {
            newData = {
                ...form, [key]: !form.value
            }
            
            setForm(newData)
        } else if (key === 'location_id' || key === 'casting_id' || key === 'monologue_id') {
            if (typeof Number(value) === 'number'){
                newData = {...form, [key]: value}
                setForm(newData)
            }
        } else if (key === 'people'){
            const index = parseInt(e.target.id)         
            newData = {...form}
            newData.people[index] = value                       
            setForm(newData)
        } else {
            newData = {
                ...form, [key]: value
            }
            setForm(newData)
        }
    }

    function handleLocation(e){
        const key = e.target.name
        const value = e.target.value
        const addLoc = {
            ...location, [key]: value
        }
        setLocation(addLoc)
    }

    function addLocation(e){
        e.preventDefault()
        if (location.name === "" || location.address === "") {
            setLocErrors(["New Location must exist"])
        } else {
            setLocErrors([])
            setNewLoc(!newLoc)
            setLocForm(false)
        }
    }

    function handleCasting(e){
        const key = e.target.name
        const value = e.target.value
        const addCast = {
            ...casting, [key]: value
        }
        setCasting(addCast)
    }

    function addCasting(e){
        e.preventDefault()
        if (casting.agency === "") {
            setCastErrors(["New Agency must exist"])
        } else {
            setCastErrors([])
            setNewCast(!newCast)
            setCastForm(false)
        }
    }

    function handleMonologue(e){
        const key = e.target.name
        const value = e.target.value
        let newData
        if (key === 'public') {
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
        if (monologue.play === "" || monologue.role === "" || monologue.playwright === ""|| monologue.first_line === "") {
            setMonoErrors(["New monologue must have play, playwright, role & first line."])
        } else {
            setNewMono(!newMono)
            setMonoForm(false)
        }
    }

    function handleAdd(e){
        e.preventDefault()
        const values = [...fields]
        values.push({ value: null })
        setFields(values)
    }

    function handleSubmit(e){
        e.preventDefault()
        const token = localStorage.getItem("token")
        const postData = {
            ...form,
            location: location,
            casting: casting,
            monologue: monologue
        }
        fetch (`http://localhost:3000/auditions`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${token}`,
            },
            body: JSON.stringify(postData)
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
            setAuditions([...auditions, data])
            history.push('/auditions')
        })
        .catch((errors) => {
            setErrors(errors.errors)
          })
    
    }

    return (
        <AddAudStyle>
            <Container md="auto" className="add-aud">
                <div id="add-aud-header">
                    <h3>Add an Audition</h3>
                </div>
                <Card>
                    <Form id="audition-form" onSubmit={handleSubmit}>
                        <Row className="mb-3">
                            <Form.Group as={Col}>
                            {/* date */}
                                <Form.Control type="date" name="date" placeholder="YYYY/MM/DD" value={form.date} onChange={handleChange}/>
                            </Form.Group>

                            <Form.Group as={Col}>
                            {/* time */}
                                <Form.Control type="text" name="time" placeholder="time" value={form.time} onChange={handleChange}/>
                            </Form.Group>
                        </Row>
                        <Row>                            
                            <Form.Group>
                            {/* appointment */}
                                <Form.Check type="checkbox" name="appointment" value={form.appointment} onChange={handleChange}/>
                                <Form.Label for="appointment">Appointment?</Form.Label><br></br>
                            </Form.Group>
                        </Row>
                        <Row>
                            <Form.Group as={Col}>
                            {/* producer */}
                                <Form.Control type="text" name="producer" placeholder="Theatre/Producer" value={form.producer} onChange={handleChange}/><br></br>
                            </Form.Group>

                            <Form.Group as={Col}>
                            {/* location */}
                                
                                <Form.Select aria-label="Default select example" id="locations" name="location_id" value={form.location_id} onChange={handleChange}>
                                <option>Location</option>
                                {locations.map(location => <option value={location.id} key={location.name}>{location.name}</option>)}
                                {newLoc ? <option value={location.name} key={location.name}>{location.name}</option> : null}                   
                                </Form.Select>
                                <button className="aud-button" onClick={(e) => {
                                    e.preventDefault()
                                    setLocForm(!locForm)}}>Add New Location</button>

                            {/* add new location */}
                                {locForm ? <div><Form.Control type="text" name="name" value={location.name} placeholder="Location Name" onChange={handleLocation}/>
                                <Form.Control type="text" name="address" value={location.address} placeholder="Location Address" onChange={handleLocation}/>
                                <button className="aud-button" onClick={addLocation}>Add</button><br></br></div> : null}
                                {locErrors ? locErrors.map(error => <Alert variant="dark" key={error}>{error}</Alert>) : null}
                            </Form.Group>
                        </Row> 
                        <br></br>                      
                        <Row>                            
                            <Form.Group as={Col}>
                            {/* casting */}                            
                                <Form.Select name="casting_id" value={form.casting_id} onChange={handleChange}>
                                    <option>Casting</option>
                                    {castings.map(casting => <option value={casting.id} key={casting.agency}>{casting.agency}</option>)}
                                    {newCast ? <option value={casting.agency} key={casting.agency}>{casting.agency}</option> : null}
                                </Form.Select>
                                <button className="aud-button" onClick={(e) => {
                                        e.preventDefault()
                                        setCastForm(!castForm)}}>Add New Casting Agency</button>
                                

                            {/* add new casting */}
                                {castForm ? <div><Form.Control type="text" name="agency" value={casting.agency} placeholder="Agency Name" onChange={handleCasting}/>
                                <button className="aud-button" onClick={addCasting}>Add</button><br></br></div> : null}
                                {castErrors ? castErrors.map(error => <Alert variant="dark" key={error}>{error}</Alert>) : null}
                            </Form.Group>
                            <br></br>
                            <Form.Group as={Col}>
                            {/* in the room */}
                                {fields.map((field, idx) => {
                                    return (
                                            <Form.Control 
                                            key={`${field}-${idx}`}
                                            type="text"
                                            placeholder="Name (Position)"
                                            name="people"
                                            id={idx + 1}
                                            onChange={handleChange}/>
                                    )
                                })}
                                <button className="aud-button" onClick={handleAdd}>Add In The Room</button><br></br>
                            </Form.Group>
                        </Row><br></br>
                        <Row>
                            <Form.Group as={Col}>
                            {/* shows */}
                                <Form.Control type="text" name="shows" placeholder="Shows" value={form.shows} onChange={handleChange}/><br></br>
                            </Form.Group>

                            <Form.Group as={Col}>
                            {/* monologue */}
                                <Form.Select name="monologue_id" value={form.monologue_id} onChange={handleChange}>
                                    <option>Monologue</option>
                                    {myMonos.map(mono => <option value={mono.id} key={mono.role}>{mono.role}</option>)}
                                    {newMono ? <option value={monologue.role} key={monologue.role}>{monologue.role}</option> : null}
                                </Form.Select>
                                <button className="aud-button" onClick={(e) => {
                                    e.preventDefault()
                                    setMonoForm(!monoForm)}}>Add New Monologue</button><br></br>

                            {/* add new monologue */}
                                {monoForm ? <div><Form.Control type="text" name="play" value={monologue.play} placeholder="Play" onChange={handleMonologue}/>
                                <Form.Control type="text" name="playwright" value={monologue.playwright} placeholder="Playwright" onChange={handleMonologue}/>
                                <Form.Control type="text" name="role" value={monologue.role} placeholder="Role" onChange={handleMonologue}/>
                                <Form.Control type="text" name="first_line" value={monologue.first_line} placeholder="First Line" onChange={handleMonologue}/>
                                <Form.Control type="text" name="length" value={monologue.length} placeholder="Length" onChange={handleMonologue}/>
                                <Form.Control type="text" name="genre" value={monologue.genre} placeholder="Genre" onChange={handleMonologue}/>
                                <Form.Check type="checkbox" name="public" value={monologue.public} onChange={handleMonologue}/>
                                <Form.Label for="public">Make Public?</Form.Label><br></br>
                                <button className="aud-button" onClick={addMonologue}>Add</button><br></br></div> : null}
                                {monoErrors ? monoErrors.map(error => <Alert variant="dark" key={error}>{error}</Alert>) : null}
                            </Form.Group>
                        </Row><br></br>
                        <Row>
                            <Form.Group as={Col}>
                            {/* outfit */}
                                <Form.Control type="text" name="outfit" placeholder="Outfit" value={form.outfit} onChange={handleChange}/>
                            </Form.Group>

                            <Form.Group as={Col}>
                            {/* response */}
                                <Form.Control type="text" name="response" placeholder="Response" value={form.response} onChange={handleChange}/>
                            </Form.Group>
                        </Row><br></br>
                        <Row>
                            <Form.Group as={Col}>
                            {/* callback */}
                                <Form.Check type="checkbox" name="callback" value={form.callback} onChange={handleChange}/>
                                <Form.Label for="callback">Callback?</Form.Label><br></br>
                            </Form.Group>

                            <Form.Group as={Col}>
                            {/* booked */}
                                <Form.Check type="checkbox" name="booked" value={form.booked} onChange={handleChange}/>
                                <Form.Label for="booked">Booked?</Form.Label><br></br>
                            </Form.Group>
                        </Row>
                        {/* <Row> */}
                            <Button id="submit" className="button" variant="light" type="submit" value="Submit">Add New Audition</Button>
                            {errors ? errors.map(error => <Alert variant="dark" key={error}>{error}</Alert>) : null}
                        {/* </Row> */}
                    </Form>
                </Card>
            </Container>
        </AddAudStyle>
    )
}

export default AddAuditionForm