import { Link } from 'react-router-dom'
import styled from 'styled-components'
import ListGroup from 'react-bootstrap/ListGroup'
// import Nav from 'react-bootstrap/Nav'

const SideStyle = styled.div`
    /* background-color: grey; */
    margin: 20px;
    width: 300px;
    height: 100%;

    .sidebar-links:hover { 
        background-color: #03989e;
        
    }
    
    a:link {
        text-decoration: none;
        color: black;
    }
    
    a:visited {
        color: black;
    }

    a:hover {
        color: white;
    }
`

function SideBar({ search, setSearch }) {

    // function clearSearch(){
    //     if (search !== "") {
    //         setSearch("")
    //     }
    // }
    // console.log(setSearch)
    return (
        <SideStyle>
            <ListGroup variant="flush">
                <ListGroup.Item action variant="dark" className="sidebar-links"><Link to="welcome">Home</Link></ListGroup.Item>
                <ListGroup.Item action variant="dark" className="sidebar-links"><Link to="auditions">My Auditions</Link></ListGroup.Item>
                <ListGroup.Item action variant="dark" className="sidebar-links"><Link to="/addaudition">Add An Audition</Link></ListGroup.Item>            
                <ListGroup.Item action variant="dark" className="sidebar-links"><Link to="/monologues">My Monologues</Link></ListGroup.Item>           
                <ListGroup.Item action variant="dark" className="sidebar-links"><Link to="/addmonologue">Add A Monologue</Link></ListGroup.Item>           
                <ListGroup.Item action variant="dark" className="sidebar-links"><Link to="/allmonologues">Monologues</Link></ListGroup.Item>
            </ListGroup>
        </SideStyle>
    )
}

export default SideBar

{/* <Nav className="col-md-12 d-none d-md-block bg-light sidebar">
            <div className="sidebar-sticky"></div>
            <Nav.Item>
                <Nav.Link to="/auditions">My Auditions</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link to="/addaudition">Add An Audition</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link to="/monologues">My Monologues</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link to="/addmonologue">Add A Monologue</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link to="/allmonologues">Monologues</Nav.Link>
            </Nav.Item>
        </Nav> */}