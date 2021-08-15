import { useState } from 'react'
import { useHistory } from 'react-router-dom'

function SignUp({ setUser }) {
    const [name, setName] = useState("")
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    // const [passwordConfirmation, setPasswordConfirmation] = useState("");
    const [errors, setErrors] = useState([])

    const history = useHistory()

    function handleSubmit(e){
      e.preventDefault()
      const user = {
        name,
        username,
        password
      }
      fetch(`http://localhost:3000/signup`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({user})
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
      .then((data) => {
        const { user, token } = data
        localStorage.setItem("token", token)
        setUser({
          id: data.user.id,
          name: data.user.name,
          username: data.user.username
        })
        console.log(data)
        console.log(user)
        history.push('/welcome')
      })
      .catch((error) => {
        console.log(error.errors)
        setErrors(error.errors)
      })
    }

    // this was working!
    // async function handleSubmit(e) {
    //     e.preventDefault()
    //     const res = await fetch(`http://localhost:3000/signup`, {
    //       method: 'POST',
    //       headers: {
    //         'Content-Type': 'application/json'
    //       },
    //       body: JSON.stringify({
    //         name,
    //         username,
    //         password
    //         // password_confirmation: passwordConfirmation
    //       })
    //     })
    //     const userData = await res.json()
    //     if (res.ok){
    //     //   localStorage.setItem("user_id", userData.id)
    //       setUser({
    //         id: userData.id,
    //         name: userData.name,
    //         username: userData.username
    //       })
    //       history.push('/')
    //       alert("Welcome to Booked It!")
    //     } else {
    //       setErrors(userData.errors)
    //     }
    //   }

    return (
        <div>
            SignUp
            <form onSubmit={handleSubmit}>
            <label htmlFor="name">Name:</label>
            <input
                type="text"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
            />
            <label htmlFor="username">Username:</label>
            <input
                type="text"
                id="username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
            />
            <label htmlFor="password">Password:</label>
            <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />
            {/* <label htmlFor="password_confirmation">Confirm Password:</label>
            <input
                type="password"
                id="password_confirmation"
                value={passwordConfirmation}
                onChange={(e) => setPasswordConfirmation(e.target.value)}
            /> */}
            <button type="submit">Submit</button>
            {errors ? errors.map(error => <div style={{ color: "red" }} key={error}>{error}</div>) : null}
            </form>
        </div>
    )
}

export default SignUp