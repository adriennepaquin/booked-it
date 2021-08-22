import { useState } from 'react'
import { useEffect } from 'react-router-dom'
import { useHistory } from 'react-router-dom'
import { DirectUpload } from 'activestorage'
import Form from 'react-bootstrap/Form'
import Container from 'react-bootstrap/Container'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import Alert from 'react-bootstrap/Alert'
import styled from 'styled-components'

const AddMonoStyle = styled.div`

    padding-bottom: 50px;
    
    .add-mono {
        max-width: 450px;
        
    }

    h3 {
        font-size: 35px;
        color: white;
    }

    #add-mono-header { 
        color: white;
        margin: 15px;
    }

    #mono-form {
        padding: 15px;
    }

    .mono-button {
        font-family: 'Lobster', cursive;
        color: #03989e;
        padding: 5px;
        /* margin: 5px; */
        text-align: center;
        text-decoration: none;
        font-size: 18px;
        transition-duration: 0.4s;
        cursor: pointer;
        /* float: center; */
        /* display: block; */
        border-radius: 5px;
        border: 1px solid #03989e;

        &:hover {
        background-color: #03989e;
        color: white;
        }
    }
`

function AddMonologueForm({ user, setMyMonos, myMonos, search, setSearch, searchMono, setSearchMono }) {
    const [form, setForm] = useState({
        play: "",
        public: false,
        genre: "",
        role: "",
        length: "",
        first_line: "",
        playwright: "",
        mono_pdf: {}
    })
    // const [file, setFile] = useState()
    // const [filePicked, setFilePicked] = useState(false)
    const [errors, setErrors] = useState([])

    const history = useHistory()

    setSearch("")
    setSearchMono("")

    // function handleChange(e){
    //     const key = e.target.name
    //     const value = e.target.value
    //     let newData
    //     if (key === 'public') {
    //         // console.log(value)
    //         newData = {
    //             ...form, public: !form.public
    //         }
    //         setForm(newData)
    //     } else if (key === 'mono_pdf') {
    //         console.log("here")
    //         newData = {
    //             ...form, mono_pdf: e.target.files[0]
    //         }
    //     } else {
    //         newData = {
    //             ...form, [key]: value
    //         }
    //         setForm(newData)
    //     }
    // }

    function handleChange(e){
            const key = e.target.name
            const value = e.target.value
            console.log(key)
            console.log(value)
            console.log(e.target.files)
            if (key === 'public') {
                // console.log(value)
                setForm({
                    ...form,
                    [key]: !form.public
                })
            } else if (key === 'mono_pdf') {
                console.log("here")
                console.log(form)
                console.log(e.target.files[0])
                console.log(key)
                setForm({
                    ...form,
                    [key]: e.target.files[0]
                })
                console.log(form)
            } else {
                setForm({
                    ...form,
                    [key]: value
                })
            }
        }

    // const changeHandler = (e) => {
    //     console.log(e.target.files[0])
    //     setFile(e.target.files[0])
    //     setFilePicked(true)
    // }

    function addMonologue(e){
        e.preventDefault()
        // console.log(e.target)
        console.log('click')
        console.log(form)
        const token = localStorage.getItem("token")
        const postData = {
            ...form,
            user_id: user.id
        }
        console.log(postData)
        fetch(`http://localhost:3000/monologues`, {
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
            console.log(data)
            console.log('success')
            setMyMonos([...myMonos, data])
            uploadFile(form.mono_pdf, data)
            history.push('/monologues')
        })
        .catch((errors) => {
            console.log(errors.errors)
            setErrors(errors.errors)
          })
    }

    function uploadFile(file, monologue) {
        const upload = new DirectUpload(file, 'http://localhost:3000/rails/active_storage/direct_uploads')
        upload.create((error, blob) => {
            if (error) {
                console.log(error)
            } else {
                const token = localStorage.getItem("token")
                fetch(`http://localhost:3000/monologues/${monologue.id}`, {
                    method: 'PUT',
                    headers: {
                        'Content-Type': 'application/json',
                        'Accept': 'application/json',
                        Authorization: `Bearer ${token}`,
                    },
                    body: JSON.stringify({mono_pdf: blob.signed_id})
                })
                .then(res => res.json())
                .then(data => console.log(data))
            }
        })
    }

    return (
        <AddMonoStyle>
            <Container xs="auto" className="add-mono">
                <div id="add-mono-header">
                    <h3>Add a Monologue</h3>
                </div>
                <Card>
                    <Form id="mono-form" onSubmit={addMonologue}>
                        <Form.Group>
                            <Form.Control type="text" name="play" value={form.play} placeholder="Play" onChange={handleChange}/>
                        </Form.Group><br></br>
                        <Form.Group>
                            <Form.Control type="text" name="playwright" value={form.playwright} placeholder="Playwright" onChange={handleChange}/>
                        </Form.Group><br></br>
                        <Form.Group>
                            <Form.Control type="text" name="role" value={form.role} placeholder="Role" onChange={handleChange}/>
                        </Form.Group><br></br>
                        <Form.Group>
                            <Form.Control type="text" name="first_line" value={form.first_line} placeholder="First Line" onChange={handleChange}/>
                        </Form.Group><br></br>
                        <Form.Group>
                            <Form.Control type="text" name="length" value={form.length} placeholder="Length" onChange={handleChange}/>
                        </Form.Group><br></br>
                        <Form.Group>
                            <Form.Control type="text" name="genre" value={form.genre} placeholder="Genre" onChange={handleChange}/>
                        </Form.Group><br></br>
                        <Form.Control type="file" name="mono_pdf" accept=".pdf" onChange={handleChange}/><br></br>
                        {/* {filePicked ? (
                        <div>
                            <p>Filename: {file.name}</p>
                        </div>
                        ) :(
                            <p>Select PDF to Upload</p>
                        )
                        } */}
                        <Form.Check type="checkbox" name="public" value={form.public} onChange={handleChange}/>
                        <Form.Label for="public">Make Public?</Form.Label><br></br>
                        <Button className="button" variant="light" id="submit" type="submit" value="Add New Monologue">Add New Monologue</Button>
                    </Form>
                    {errors ? errors.map(error => <Alert variant="dark" key={error}>{error}</Alert>) : null}
                </Card>
            </Container>
        </AddMonoStyle>
    )
}

export default AddMonologueForm