import { useState } from 'react'
import { useHistory } from 'react-router-dom'

function LogIn({ setUser }) {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [errors, setErrors] = useState([])

    const history = useHistory()

    async function handleSubmit(e){
        e.preventDefault()
        const user = {
          username,
          password
        }
        const res = await fetch(`http://localhost:3000/login`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({user})
        })
        const userData = await res.json()
        if(res.ok){
        //   localStorage.setItem('user_id', userData.id)
          // console.log(userData)
          setUser({
            id: userData.id,
            name: userData.name,
            username: userData.username
          })
          history.push('/welcome')
        } else {
          setErrors(userData.message)
        }
      }
    
    return (
        <div>
            LogIn

            <form onSubmit={handleSubmit}>
                <input
                type="text" 
                placeholder="User Name" 
                value={username} 
                name="username"
                onChange={(e) => setUsername(e.target.value)}
                />
                <input
                type="password" 
                placeholder="Password" 
                value={password}
                name="password" 
                onChange={(e) => setPassword(e.target.value)}
                />
                <input submit id="submit" type="submit" value="Log in" />
                {errors ? errors.map(error => <div>{error}</div>) : null}
            </form>
        </div>
    )
}

export default LogIn