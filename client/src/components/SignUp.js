import { useState } from 'react'
import { useHistory } from 'react-router-dom'
import Form from 'react-bootstrap/Form'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'
import Alert from 'react-bootstrap/Alert'
import styled from 'styled-components'

const SignStyle = styled.div`
  .sign-container {
    padding: 30px;
    max-width: 350px;
  }

  h3 {
    color: white;
  }
`

function SignUp({ setUser }) {
    const [name, setName] = useState("")
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [errors, setErrors] = useState([])

    const history = useHistory()

    // create new user
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
        // console.log(data)
        // console.log(user)
        history.push('/welcome')
      })
      .catch((error) => {
        // console.log(error.errors)
        setErrors(error.errors)
      })
    }

    return (
      <SignStyle>
        <Container className="sign-container">
          <Row>
            <Col>
              <h3>Sign Up</h3>

              <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3">
                  <Form.Control
                      type="text"
                      placeholder="Enter your name..."
                      id="name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                  />
                </Form.Group>
                <Form.Group className="mb-3">
                <Form.Control
                    type="text"
                    placeholder="Choose a Username..."
                    id="username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                />
                </Form.Group>
                <Form.Group className="mb-3">
                <Form.Control
                    type="password"
                    placeholder="Choose a password..."
                    id="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                </Form.Group>
                <Button className="button" variant="light" type="submit">Create Account</Button>                
              </Form>
              {errors ? errors.map(error => <Alert variant="dark" key={error}>{error}</Alert>) : null}
            </Col>
          </Row>
        </Container>
      </SignStyle>
    )
}

export default SignUp