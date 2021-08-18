import { useState } from 'react'
import { useHistory } from 'react-router-dom'
import Form from 'react-bootstrap/Form'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Alert from 'react-bootstrap/Alert'
import Button from 'react-bootstrap/Button'
import styled from 'styled-components'

const LogStyle = styled.div`
  .log-container {
    padding: 30px;
    max-width: 350px;
  }

  h3 {
    color: white;
  }

  
`

function LogIn({ setUser }) {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [errors, setErrors] = useState([])

    const history = useHistory()

    function handleSubmit(e){
        e.preventDefault()
        console.log('click')
        const user = {
          username,
          password
        }
        fetch(`http://localhost:3000/login`, {
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
          // console.log(error.errors)
          setErrors(error.errors)
        })
      }

      // this was working!
      // async function handleSubmit(e){
      //   e.preventDefault()
      //   const user = {
      //     username,
      //     password
      //   }
      //   const res = await fetch(`http://localhost:3000/login`, {
      //     method: 'POST',
      //     headers: {
      //       'Content-Type': 'application/json'
      //     },
      //     body: JSON.stringify({user})
      //   })
      //   const userData = await res.json()
      //   if(res.ok){
      //   //   localStorage.setItem('user_id', userData.id)
      //     // console.log(userData)
      //     setUser({
      //       id: userData.id,
      //       name: userData.name,
      //       username: userData.username
      //     })
      //     console.log(userData)
      //     console.log(user)
      //     history.push('/welcome')
      //   } else {
      //     // console.log(userData.errors)
      //     setErrors(userData.errors)
      //   }
      // }
    
    return (
      <LogStyle>
        <Container className="log-container">
          <Row>
              <Col>
                <h3>Log In</h3>

                <Form onSubmit={handleSubmit}>
                    <Form.Group className="mb-3" controlId="formUsername">
                      <Form.Control type="text" 
                        placeholder="User Name" 
                        value={username} 
                        name="username"
                        onChange={(e) => setUsername(e.target.value)}/>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formUsername">
                      <Form.Control
                      type="password" 
                      placeholder="Password" 
                      value={password}
                      name="password" 
                      onChange={(e) => setPassword(e.target.value)}/>
                    </Form.Group>
                    <Button className="button" variant="light" submit id="submit" type="submit" value="Log in">Log In</Button>
                </Form>
                {/* {errors ? errors.map(error => <div style={{ color: "red" }} key={error}>{error}</div>) : null} */}
                {errors ? errors.map(error => <Alert variant="dark" key={error}>{error}</Alert>) : null}

              {/* <form onSubmit={handleSubmit}>
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
                  {errors ? errors.map(error => <div style={{ color: "red" }} key={error}>{error}</div>) : null}
              </form> */}
              </Col>
            </Row>
        </Container>
      </LogStyle>
    )
}

export default LogIn