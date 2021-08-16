import { useState } from 'react'
import { useEffect } from 'react-router-dom'
import { useHistory } from 'react-router-dom'

function AddMonologueForm({ user, setMyMonos, myMonos }) {
    const [form, setForm] = useState({
        play: "",
        public: false,
        genre: "",
        role: "",
        length: "",
        first_line: "",
        playwright: ""
    })
    const [errors, setErrors] = useState([])

    const history = useHistory()

    function handleChange(e){
        const key = e.target.name
        const value = e.target.value
        let newData
        if (key === 'public') {
            // console.log(value)
            newData = {
                ...form, public: !form.public, user_id: user.id
            }
            setForm(newData)
        } else {
            newData = {
                ...form, [key]: value, user_id: user.id
            }
            setForm(newData)
        }
    }

    function addMonologue(e){
        e.preventDefault()
        console.log('click')
        console.log(form)
        const token = localStorage.getItem("token")
        const postData = {
            ...form, user_id: user.id
        }
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
            history.push('/monologues')
        })
        .catch((errors) => {
            console.log(errors.errors)
            setErrors(errors.errors)
          })
    
    }

    return (
        <div>
            Add Monologue here!
            <form onSubmit={addMonologue}>
            <input type="text" name="play" value={form.play} placeholder="Play" onChange={handleChange}/><br></br>
            <input type="text" name="playwright" value={form.playwright} placeholder="Playwright" onChange={handleChange}/><br></br>
            <input type="text" name="role" value={form.role} placeholder="Role" onChange={handleChange}/><br></br>
            <input type="text" name="first_line" value={form.first_line} placeholder="First Line" onChange={handleChange}/><br></br>
            <input type="text" name="length" value={form.length} placeholder="Length" onChange={handleChange}/><br></br>
            <input type="text" name="genre" value={form.genre} placeholder="Genre" onChange={handleChange}/><br></br>
            <input type="checkbox" name="public" value={form.public} onChange={handleChange}/>
            <label for="public">Make Public?</label><br></br>
            <input id="submit" type="submit" value="Add New Monologue" />
            </form>
            {errors ? errors.map(error => <div style={{ color: "red" }} key={error}>{error}</div>) : null}
        </div>
    )
}

export default AddMonologueForm