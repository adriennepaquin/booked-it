import { useHistory } from 'react-router-dom'
import { NavLink } from 'react-router-dom'
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'

function NavBar({ user, setUser, setAuditions, setMyMonos }) {

    const history = useHistory()

    function handleLogOut(){
        localStorage.removeItem("token")
        setUser(null)
        console.log('click')
        console.log(user)
        setAuditions([])
        setMyMonos([])
        history.push('/')
        // alert("See you soon!")
    }
    return (
        <Navbar sticky="top" id="styled-navbar" bg="light" expand="sm">
            <Container>
                <Nav className="justify-content-start">
                    <Navbar.Brand>
                        <img id="logo" src="images/header_logo.png" alt="Booked It! Logo" height="75"/>
                    </Navbar.Brand>
                    <Nav>
                        <Nav.Item>
                            <Nav.Link className="links-left" href="/">Home</Nav.Link>
                        </Nav.Item>
                    </Nav>
                </Nav>
                {/* <Navbar.Toggle aria-controls="basic-navbar-nav"/> */}
                {/* <Navbar.Collapse id="basic-navbar-nav"> */}
                <Nav>
                {/* <Nav variant="pills"> */}
                    {/* <Nav className="justify-content-start">
                        <Nav.Item>
                            <Nav.Link className="links_left" href="/">Home</Nav.Link>
                        </Nav.Item>
                    </Nav> */}
                    <Nav className="justify-content-end">
                        {!user ? (
                        <>
                            <Nav.Item>
                                <Nav.Link className="links-right" href="/signup">SignUp</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link className="links-right" href="/login">LogIn</Nav.Link>
                            </Nav.Item>
                        </>
                        ) : (
                        <>
                            <Nav.Item>
                                <Navbar.Text className="logged-in">Logged in as: {user.username}</Navbar.Text>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link className="links-right" href="/" onClick={handleLogOut}>Log Out</Nav.Link>
                            </Nav.Item>
                        </> 
                        )}   
                    </Nav>         
                </Nav>
            {/* </Navbar.Collapse> */}
                
           </Container> 
        </Navbar>
    )
}

export default NavBar