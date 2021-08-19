import { useState } from 'react'
import { useEffect } from 'react-router-dom'
import { useHistory } from 'react-router-dom'
import { DirectUpload } from 'activestorage'

function AddMonologueForm({ user, setMyMonos, myMonos }) {
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
            if (key === 'public') {
                // console.log(value)
                setForm({
                    ...form,
                    [key]: !form.public
                })
            } else if (key === 'mono_pdf') {
                console.log("here")
                setForm({
                    ...form,
                    [key]: e.target.files[0]
                })
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

    function uploadFile(file, user) {
        const upload = new DirectUpload(file, 'http://localhost:3000/rails/active_storage/direct_uploads')
        upload.create((error, blob) => {
            if (error) {
                console.log(error)
            } else {
                console.log('there is no error...')
            }
        })
    }

    return (
        <div>
            <form onSubmit={addMonologue}>
                <input type="text" name="play" value={form.play} placeholder="Play" onChange={handleChange}/><br></br>
                <input type="text" name="playwright" value={form.playwright} placeholder="Playwright" onChange={handleChange}/><br></br>
                <input type="text" name="role" value={form.role} placeholder="Role" onChange={handleChange}/><br></br>
                <input type="text" name="first_line" value={form.first_line} placeholder="First Line" onChange={handleChange}/><br></br>
                <input type="text" name="length" value={form.length} placeholder="Length" onChange={handleChange}/><br></br>
                <input type="text" name="genre" value={form.genre} placeholder="Genre" onChange={handleChange}/><br></br>
                <input type="file" name="mono_pdf" accept=".pdf" onChange={handleChange}/><br></br>
                {/* {filePicked ? (
                <div>
                    <p>Filename: {file.name}</p>
                </div>
                ) :(
                    <p>Select PDF to Upload</p>
                )
                } */}
                <input type="checkbox" name="public" value={form.public} onChange={handleChange}/>
                <label for="public">Make Public?</label><br></br>
                <input id="submit" type="submit" value="Add New Monologue" />
            </form>
            {errors ? errors.map(error => <div style={{ color: "red" }} key={error}>{error}</div>) : null}
        </div>
    )
}

export default AddMonologueForm